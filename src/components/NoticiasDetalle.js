import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageContext } from './context/LanguageContext'; // Asegúrate de que la ruta sea correcta
import { Button } from "@material-tailwind/react";

const NoticiaDetalle = () => {
  const location = useLocation(); // Obtener la ubicación actual
  const navigate = useNavigate(); // Hook para navegar entre páginas
  const { language, translations } = useContext(LanguageContext); // Obtener el contexto de idioma
  const { noticia } = location.state || {}; // Obtener los datos de la noticia desde el estado

  // Validar si la noticia está presente
  if (!noticia) {
    return <p className="text-center text-gray-500 text-xl mt-10">Noticia no encontrada</p>;
  }

  // Obtener traducciones del idioma seleccionado
  const texts = translations[language].noticias;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Botón de salir */}
      <div className="flex justify-end">
        <Button 
          color="red" 
          onClick={() => navigate('/noticias')} 
          className="flex items-center gap-2 px-4 py-2"
        >
          <i className="fas fa-arrow-left"></i> {texts.backToNews}
        </Button>
      </div>
      
      {/* Imagen de la noticia */}
      <div className="mt-4 overflow-hidden rounded-lg">
        <img 
          src={noticia.image} 
          alt={noticia.title[language]} 
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      
      {/* Título de la noticia */}
      <h1 className="text-3xl font-bold text-gray-800 mt-6">{noticia.title[language]}</h1>
      
      {/* Fecha de la noticia */}
      <p className="text-gray-500 text-sm mt-2">{noticia.date}</p>
      
      {/* Autor de la noticia */}
      {noticia.author && (
        <p className="text-gray-500 text-sm mt-2">Por: {noticia.author}</p>
      )}
      
      {/* Categoría de la noticia */}
      {noticia.category && (
        <p className="text-gray-500 text-sm mt-2">Categoría: {noticia.category}</p>
      )}

      {/* Contenido de la noticia */}
      <p className="text-gray-700 text-lg mt-4 leading-relaxed">{noticia.content[language]}</p>
      
      {/* Botones de compartir en redes sociales */}
      <div className="flex gap-4 mt-6">
        <Button color="lightBlue" className="flex items-center gap-2">
          <i className="fab fa-facebook"></i> Facebook
        </Button>
        <Button color="lightBlue" className="flex items-center gap-2">
          <i className="fab fa-twitter"></i> Twitter
        </Button>
        <Button color="lightBlue" className="flex items-center gap-2">
          <i className="fab fa-linkedin"></i> LinkedIn
        </Button>
      </div>

      {/* Espacio para comentarios (opcional) */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comentarios</h3>
        {/* Aquí iría un componente para mostrar y agregar comentarios */}
        <textarea 
          className="w-full h-32 p-4 border rounded-lg"
          placeholder="Escribe tu comentario..."
        ></textarea>
        <Button color="blue" className="mt-4">Enviar Comentario</Button>
      </div>
    </div>
  );
};
export default NoticiaDetalle;
