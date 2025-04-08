import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './context/LanguageContext';
import { Carousel, IconButton, Typography, Button } from "@material-tailwind/react";

const CarouselImg = ({ images }) => {
    const { language, translations } = useContext(LanguageContext);
    const currentTranslations = translations[language];
  return (
    <div className="flex justify-center items-center w-full">
      <Carousel
        transition={{ duration: 2 }}
        loop={true}
        className="w-full h-auto overflow-hidden shadow-lg"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[650px] sm:h-[400px] md:h-[500px] lg:h-[650px]">
            {/* Imagen de fondo */}
            <img
              src={image.src}
              alt={image.alt || `Imagen ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Contenedor de texto alineado a la derecha */}
            <div className="absolute inset-0 flex flex-col items-end justify-center bg-black/30 p-4 md:p-8 lg:p-12 text-right pr-6 md:pr-12 lg:pr-20">
              <Typography
                variant="h1"
                color="white"
                className="mb-2 text-xl text-right md:text-3xl lg:text-5xl font-bold max-w-[80%] md:max-w-[50%]"
              >
                {image.title || "Título de la imagen"}
              </Typography>

              <Typography
                variant="lead"
                color="white"
                className="mb-4 opacity-90 text-sm text-right md:text-lg max-w-[80%] md:max-w-[50%]"
              >
                {image.description || "Descripción corta de la imagen."}
              </Typography>

              {index === 0 && (
                <Button size="md" className=" bg-primary hover:bg-green-700" >
                  <Link to="/que-hacemos"  className="text-white">
                  {currentTranslations.buttonText1}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImg;
