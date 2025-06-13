import React, { useContext } from 'react';
import { LanguageContext } from './context/LanguageContext';

import { Typography } from "@material-tailwind/react";
import { FaLocationArrow, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contactos = () => {
  const { language, translations } = useContext(LanguageContext);
  const currentTranslations = translations[language];

  return (
    <section id="sobre-el-proyecto" className="text-center p-[10vw] pt-8 pb-8">
      <h2 className="text-4xl font-bold m-auto mb-10">{currentTranslations.contactTitle}</h2>

      <div className="container mx-auto">
        {/* Grid principal con contacto y mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Columna izquierda - Contacto */}
          <div className="space-y-10">
            <div className="flex flex-col items-center space-y-2">
              <FaLocationArrow className="text-3xl text-gray-700" />
              <div>
                <Typography className="font-medium text-gray-900">{currentTranslations.location}</Typography>
                <Typography className="text-gray-600">
                  {currentTranslations.locationDescription1},<br />
                  {currentTranslations.locationDescription2},<br />
                  EPN <br /> (Quito, Ecuador)
                </Typography>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <FaEnvelope className="text-3xl text-gray-700" />
              <div>
                <Typography className="font-medium text-gray-900">{currentTranslations.email}</Typography>
                <Typography className="text-gray-600">
                  ata.rg@epn.edu.ec <br />
                  esteban.valencia@epn.edu.ec
                </Typography>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <FaPhone className="text-3xl text-gray-700" />
              <div>
                <Typography className="font-medium text-gray-900">{currentTranslations.phone}</Typography>
                <Typography className="text-gray-600">+593 996 645 322</Typography>
              </div>
            </div>
          </div>

          {/* Columna derecha - Mapa */}
          <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.7239407635828!2d-78.49039777311624!3d-0.2099819623676055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b577bc46049%3A0x42f5b4b580f52ed5!2sGrupo%20de%20investigaci%C3%B3n%20ATA-EPN%2C%20Laboratorio%20de%20UAVs!5e0!3m2!1ses!2sec!4v1743509042380!5m2!1ses!2sec"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              title="ATA Location"
            ></iframe>
          </div>
        </div>


      </div>
      {/* Sección debajo - QR / Formulario */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          {currentTranslations.contactQr}
        </h3>

        <div className="flex justify-center">
          <div className="w-64 sm:w-80 md:w-96">
            <img
              src="/images/qr_info1.png"
              alt="QR Formulario"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Sección - Síguenos en redes sociales */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          {currentTranslations.followUs}
        </h3>

        <div className="flex justify-center space-x-20 text-5xl text-gray-600">
          <a href="https://www.facebook.com/ATAResearch" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://x.com/AtaResearch" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/ata_research_group/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/ata-research-group1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>


    </section>
  );
};

export default Contactos;
