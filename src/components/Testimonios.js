import React, { useContext } from 'react';
import './styles/Testimonios.css'; 
import { LanguageContext } from './context/LanguageContext'; 

function Hacemos() {
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
    <section className="text-center  pt-8 pb-8">
      <h2 className="text-5xl font-bold mb-8">{translations[language].testimonios.sectionTitle}</h2>
      
      <div className="flex flex-col space-y-8">
        {testimoniosData.map((testimonio, index) => (
          <div 
            key={testimonio.id} 
            className={`flex p-[10vw] flex-col md:flex-row items-center mb-10 ${index % 2 === 0 ? 'bg-transparent' : 'bg-gray-300'}`}
          >
            {/* Alternar la posición del texto y la imagen */}
            {index % 2 === 0 ? (
              <>
                {/* Texto a la izquierda */}
                <div className="md:w-1/2 text-left p-4">
                  <h3 className="text-3xl font-semibold mb-4">{testimonio.title}</h3>
                  <p className="text-xl text-gray-700">{testimonio.content}</p>
                </div>

                {/* Imagen a la derecha */}
                <div className="md:w-1/2 p-4 flex justify-center"> 
                  <img 
                    src={testimonio.image} 
                    alt={testimonio.title} 
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Imagen a la izquierda */}
                <div className="md:w-1/2 p-4 flex justify-center"> 
                  <img 
                    src={testimonio.image} 
                    alt={testimonio.title} 
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                {/* Texto a la derecha */}
                <div className="md:w-1/2 text-left p-4">
                  <h3 className="text-3xl font-semibold mb-4">{testimonio.title}</h3>
                  <p className="text-xl text-gray-700">{testimonio.content}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hacemos;
