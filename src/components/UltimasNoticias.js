import React from 'react';
import { useNavigate } from 'react-router-dom';

const UltimasNoticias = ({ noticiasData }) => {
  const navigate = useNavigate();

  // Obtener las tres noticias más recientes
  const ultimasNoticias = Object.entries(noticiasData)
    .sort((a, b) => new Date(b[1].date) - new Date(a[1].date)) // Ordenar por fecha
    .slice(0, 3); // Tomar las 3 más recientes

  const handleLeerMas = (noticiaId) => {
    navigate(`/noticia/${noticiaId}`);
  };

  return (
    <section className="text-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ultimasNoticias.map(([id, noticia]) => {
          const title = noticia.title.es; // Aquí accedemos directamente a las noticias en español
          const content = noticia.content.es;

          return (
            <div key={id} className="bg-white rounded-lg shadow-md p-6">
              <img src={noticia.image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{content.slice(0, 100)}...</p>
              <button
                onClick={() => handleLeerMas(id)}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Leer más
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UltimasNoticias;
