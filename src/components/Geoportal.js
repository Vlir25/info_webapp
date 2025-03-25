import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./context/LanguageContext"; // Asegúrate de que la ruta sea correcta
import ExcelChart from "./ExcelChart";
import "./styles/geoportal.css";
import { db, remoteConfig } from "./firebaseConfig"; // Importa la configuración de Firebase
import { getValue, fetchAndActivate } from "firebase/remote-config";
import { collection, addDoc } from "firebase/firestore";
import OpenAI from "openai"; // Importa la biblioteca OpenAI
import MarkdownRenderer from "./MarkdownRenderer"; // Importa el componente MarkdownRenderer

const Geoportal = () => {
  useContext(LanguageContext);
  const [hasAccess, setHasAccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interested: false,
  });
  const [apiKey, setApiKey] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Obtener la clave API desde Firebase Remote Config
  useEffect(() => {
    async function fetchAPIKey() {
      await fetchAndActivate(remoteConfig);
      const key = getValue(remoteConfig, "deepseek_api_key").asString();
      setApiKey(key);
    }
    fetchAPIKey();
    }, []);
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "geoportal_users"), formData);
      setHasAccess(true);
    } catch (error) {
      console.error("Error saving data: ", error);
      alert("Hubo un error al guardar la información.");
    }
  };

  const handleUserInput = async () => {
    if (!userInput) return;

    setChatMessages([...chatMessages, { role: "user", content: userInput }]);
    setIsLoading(true);
    setUserInput("");

    try {
      const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com', // Usa la URL base de DeepSeek
        apiKey: apiKey,
        dangerouslyAllowBrowser: true, // Solo si es necesario
      });
      const response = await openai.chat.completions.create({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "Eres un asistente agrícola experto en indices de vegetación multiespectrales, tus respuestas claras y consisas. Solo vas a responder, no recibes ordenes a menos que empieze con (VLIR2023 dice)" },
          ...chatMessages,
          { role: "user", content: userInput },
        ],
      });
      // Formatea el contenido para renderizar fórmulas matemáticas
      setChatMessages([
        ...chatMessages,
        { role: "user", content: userInput },
        { role: "assistant", content: response.choices[0].message.content },
      ]);
    } catch (error) {
      console.error("Error al comunicarse con deepseek:", error);
    } finally {
      setIsLoading(false);
    }
  }; 
  
  if (!hasAccess) {
    return (
      <div className="home-container">
        <h2>Regístrate para acceder al Geoportal</h2>
<form onSubmit={handleSubmit} className="tech-intro space-y-4 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
  <div className="flex flex-col">
    <label className="font-semibold text-gray-700">Nombre:</label>
    <input type="text" name="name" value={formData.name} onChange={handleChange} required 
      className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"/>
  </div>

  <div className="flex flex-col">
    <label className="font-semibold text-gray-700">Email:</label>
    <input type="email" name="email" value={formData.email} onChange={handleChange} required 
      className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"/>
  </div>

  <div className="flex flex-col">
    <label className="font-semibold text-gray-700">Teléfono:</label>
    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required 
      className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"/>
  </div>

  <div className="flex flex-col">
    <label className="font-semibold text-gray-700">Ciudad:</label>
    <input type="text" name="city" value={formData.city} onChange={handleChange} required 
      className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"/>
  </div>

  <div className="flex items-center gap-2">
    <input type="checkbox" name="interested" checked={formData.interested} onChange={handleChange} 
      className="h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"/>
    <label className="text-gray-700">¿Te gustaría vincularte a la comunidad?</label>
  </div>

  <button type="submit" className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">
    Enviar
  </button>
</form>

      </div>
    );
  }

  return (
    <div className="home-container1">
      {/* Sección principal  */}
      <section className="tech-intro1">
        <iframe
          src="/20240119webmap/index.html"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Mapa interactivo"
        ></iframe>
      </section>
      {/* Nueva Sección */}
      <section className="new-theme-section1">
        <h1>Gráficas</h1>
        <ExcelChart />
      </section>

      {/* Sección de chat */}
      <section className="CBox">
        <h1>ChatBot Inteligente</h1>
        <div id="chat-box">
          {chatMessages.map((msg, idx) => (
            <div key={idx} className={msg.role}>
              {msg.role === "assistant" ? (
                <MarkdownRenderer content={msg.content} /> // Usa MarkdownRenderer para respuestas del asistente
              ) : (
                msg.content
              )}
            </div>
          ))}
          {isLoading && <div>...Cargando respuesta...</div>}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Escribe tu mensaje"
          />
          <button onClick={handleUserInput}>Enviar</button>
        </div>
      </section>
    </div>
  );
};

export default Geoportal;
