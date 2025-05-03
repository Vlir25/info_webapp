import React, { useContext } from 'react';
import './styles/Testimonios.css';
import { LanguageContext } from './context/LanguageContext';

function Hacemos() {
  const { language, translations } = useContext(LanguageContext);
  const currentTranslations = translations[language];

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
      image: "/images/scan.jpg",
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
      image: "/images/principal2.png",
    },
  ];

  return (
    <section className="text-center p-[10vw] pt-8 pb-8 ">
      <div className="text-center ">
        <h2 className="text-4xl font-bold mb-8">{currentTranslations.whatWeDo}</h2>
        <p className="text-center m-10 text-xl  ">{currentTranslations.whatWeDoDescription}</p>
      </div>

      <div className="flex flex-col items-center justify-center f">
        {testimoniosData.map((testimonio, index) => (
          <div
            key={testimonio.id}
            className={`flex  flex-col  md:flex-row gap-10 justify-center items-center mb-10 ${index % 2 === 0 ? 'bg-transparent' : 'bg-transparent'}`}
          >
            {/* Alternar la posición del texto y la imagen */}
            {index % 2 === 0 ? (
              <>
                {/* Texto a la izquierda */}
                <div className="md:w-1/2 text-left p-4">
                  <h3 className="text-3xl font-semibold mb-4">{testimonio.title}</h3>
                  <p className="text-xl text-gray-700  text-justify">{testimonio.content}</p>
                </div>

                {/* Imagen a la derecha */}
                <div className="w-full max-w-[500px] aspect-[4/3]">
                  <img
                    src={testimonio.image}
                    alt={testimonio.title}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Imagen a la izquierda */}
                <div className="w-full max-w-[500px] aspect-[4/3]">
                  <img
                    src={testimonio.image}
                    alt={testimonio.title}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Texto a la derecha */}
                <div className="md:w-1/2 text-left p-4">
                  <h3 className="text-3xl font-semibold mb-4">{testimonio.title}</h3>
                  <p className="text-xl text-gray-700  text-justify">{testimonio.content}</p>
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
