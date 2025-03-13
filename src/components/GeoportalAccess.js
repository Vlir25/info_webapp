// src/components/GeoportalAccess.js
import { useState } from "react";
import { db, collection, addDoc } from "../firebaseConfig";

const GeoportalAccess = ({ onAccessGranted }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    vincular: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Guardar en Firestore
      await addDoc(collection(db, "registrosGeoportal"), formData);

      // Guardar en localStorage para recordar acceso
      localStorage.setItem("geoportalAccess", JSON.stringify(formData));

      // Notificar al padre que se desbloquee el contenido
      onAccessGranted();
    } catch (error) {
      setError("Error al registrar. Inténtalo de nuevo.");
      console.error("Error en Firebase:", error);
    }

    setLoading(false);
  };

  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-lg font-bold mb-2">Acceso Restringido</h2>
      <p className="text-sm mb-4">Regístrate para acceder al Geoportal</p>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="ciudad"
          placeholder="Ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="vincular"
            checked={formData.vincular}
            onChange={handleChange}
          />
          ¿Te gustaría vincularte a la comunidad?
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Registrando..." : "Registrarse"}
        </button>
      </form>
    </div>
  );
};

export default GeoportalAccess;
