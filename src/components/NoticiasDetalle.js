import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageContext } from './context/LanguageContext'; // Asegúrate de que la ruta sea correcta
import './styles/NoticiasDetalle.css';

const NoticiaDetalle = () => {
  const location = useLocation(); // Obtener la ubicación actual
  const navigate = useNavigate(); // Hook para navegar entre páginas
  const { language, translations } = useContext(LanguageContext); // Obtener el contexto de idioma
  const { noticia } = location.state || {}; // Obtener los datos de la noticia desde el estado

  // Validar si la noticia está presente
  if (!noticia) {
    return <p>Noticia no encontrada</p>;
  }

  // Obtener traducciones del idioma seleccionado
  const texts = translations[language].noticias;

  // Función para manejar el botón de salir
  const handleSalir = () => {
    navigate('/noticias'); // Redirige a la página de Noticias
  };

  return (
    <div className="noticia-detalle">
      {/* Botón de salir con ícono */}
      <button className="boton-salir" onClick={handleSalir}>
        <i className="fas fa-times"></i> {/* Icono de "X" */}
        {texts.backToNews} {/* Traducir el texto "Volver al inicio" */}
      </button>
      
      {/* Imagen de la noticia */}
      <div className="imagen-container">
        <img 
          src={noticia.image} 
          alt={noticia.title[language]} 
          className="noticia-imagen" 
        />
      </div>
      
      {/* Título de la noticia */}
      <h1 className="noticia-titulo">{noticia.title[language]}</h1>
      
      {/* Contenido de la noticia */}
      <p className="noticia-contenido">{noticia.content[language]}</p>
    </div>
  );
};

export default NoticiaDetalle;
