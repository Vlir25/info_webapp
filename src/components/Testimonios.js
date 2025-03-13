/*VENTANA DE CONFIGURACION - QUE HACEMOS? */ 
import React, { useContext } from 'react';
import './styles/Testimonios.css'; 
import { LanguageContext } from './context/LanguageContext'; 

function Testimonios() {
  const { language, translations } = useContext(LanguageContext);
  
  const testimoniosData = [
    {
      id: 1,
      title: translations[language].testimonios.title1,
      content: translations[language].testimonios.content1,
      image: "/we_does/cultivo_1.png",
    },
    {
      id: 2,
      title: translations[language].testimonios.title2,
      content: translations[language].testimonios.content2,
      image: "/we_does/cultivo_2.png",
    },
    {
      id: 3,
      title: translations[language].testimonios.title3,
      content: translations[language].testimonios.content3,
      image: "/we_does/design_uas.png",
    },
    {
      id: 4,
      title: translations[language].testimonios.title4,
      content: translations[language].testimonios.content4,
      image: "/we_does/cultivo_5.png",
    },
    {
      id: 5,
      title: translations[language].testimonios.title5,
      content: translations[language].testimonios.content5,
      image: "/we_does/cultivo_4.png",
    },
  ];

  return (
    <div className="testimonios-container">
      {testimoniosData.map(testimonio => (
        <div key={testimonio.id} className="testimonio-card">
          <img src={testimonio.image} alt={testimonio.title} className="testimonio-image" />
          <h3 className="testimonio-title">{testimonio.title}</h3>
          <p className="testimonio-content">{testimonio.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonios;
