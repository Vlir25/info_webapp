import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LanguageContext } from '../components/context/LanguageContext'; // Asegúrate de importar el LanguageContext
import { Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import './styles/Footer.css';


const Footer = () => {
  const { language, translations } = useContext(LanguageContext);
  const currentTranslations = translations[language];
  return (
    <footer className="relative w-full bg-gray-900 text-white py-8">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sección Izquierda */}
          <div>
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-4">
                <span className="text-primary text-4xl"><FontAwesomeIcon icon="fa-solid fa-seedling" /></span>
              </div>
              <p className="text-xl">VLIROUS SHORT INITIATIVE:<br />SMART FARMING</p>
            </div>
            <br />
            <p className="text-lg mt-2 text-gray-500">{currentTranslations.mainTitle}</p>
            <br />
            <div className="flex items-center justify-left space-x-4 text-white">
              {/* Teléfono */}
              <div className="relative flex flex-col items-center">
                <a href="tel:+593 99-664-5322" className="font-medium text-lg">
                  (+593) 99-664-5322
 
                </a>
                <span className="w-full h-0.5 bg-green-500 mt-1"></span>
              </div>

              {/* Separador "or" */}
              <span className="text-gray-400 text-lg">{currentTranslations.or}</span>

              {/* Correo */}
              <div className="relative flex flex-col items-center">
                <a href="mailto:ata.rg@epn.edu.ec" className="font-medium text-lg">
                ata.rg@epn.edu.ec
                </a>
                <span className="w-full h-0.5 bg-green-500 mt-1"></span>
              </div>
            </div>
          </div>

          {/* Sección Derecha - Enlaces Rápidos */}
          <div className="ml-auto ">
            <Typography variant="h6" className="mb-3">{currentTranslations.quickLinks}</Typography>
            <ul className="space-y-2 text-left">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">{currentTranslations.home}</Link>
              </li>
              <li>
                <Link to="/que-hacemos" className="text-gray-400 hover:text-white">{currentTranslations.whatWeDo}</Link>
              </li>
              <li>
                <Link to="/noticias" className="text-gray-400 hover:text-white">{currentTranslations.news}</Link>
              </li>
              <li>
                <Link to="/geoportal" className="text-gray-400 hover:text-white">{currentTranslations.geoportal}</Link>
              </li>
              <li>
                <Link to="/contactos" className="text-gray-400 hover:text-white">{currentTranslations.contactUs}</Link>
              </li>
            </ul>

            {/* Redes Sociales */}
            <div className="mt-6 flex justify-end space-x-4">
              <a href="https://www.facebook.com/ATAResearch" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/AtaResearch" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/ata_research_group/" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/ata-research-group1" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Línea Divisoria */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {currentTranslations.copyright}
        </div>
      </div>
    </footer>

  );
};

export default Footer;
