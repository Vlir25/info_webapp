import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from './context/LanguageContext'; // Importa el contexto de idioma}
import { Button } from "@material-tailwind/react";


const UltimasNoticias = ({ noticiasData }) => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext); // Obtén el idioma actual desde el contexto

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
          // Acceder al título y contenido según el idioma actual
          const title = noticia.title[language]; // Usa el idioma actual (es o en)
          const content = noticia.content[language];

          return (
            <div key={id} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={noticia.image}
                alt={title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm mb-4">{content.slice(0, 100)}...</p>
                <Button className="bg-primary hover:bg-green-700 text-center normal-case" onClick={() => navigate(`/noticia/${id}`, { state: { noticia } })}>
                  {language === 'es' ? 'Leer más' : 'Read more'}
                </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UltimasNoticias;
