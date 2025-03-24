import React, { useContext, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LanguageContext } from '../components/context/LanguageContext'; // Asegúrate de importar el LanguageContext
import { Typography } from "@material-tailwind/react";

import './styles/Footer.css';

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();





const Footer = () => {
  const { language } = useContext(LanguageContext); // Accedemos al idioma actual desde el contexto
  const [copyMessage, setCopyMessage] = useState('');
  const email = 'info@cavound.com';

  const texts = {
    es: {
      copyright: '© 2024 Agricultura Sustentable',
      termsOfUse: 'Términos de uso del sitio web',
      privacyPolicy: 'Política de privacidad del sitio web',
      cookiePolicy: 'Política de cookies del sitio web',
      quickLinks: 'Enlaces rápidos:',
      aboutUs: 'Acerca del proyecto',
      whatWeDo: '¿Qué hacemos?',
      news: 'Noticias',
      geoportal: 'Geoportal',
      contactUs: 'Contáctenos:',
      instagramTitle: 'Instagram',
      callTitle: 'Llamar',
      locationTitle: 'Ubicación',
      emailTitle: 'Correo Electrónico',
      copyMessage: 'Correo electrónico copiado: '
    },
    en: {
      copyright: '© 2024 Sustainable Agriculture',
      termsOfUse: 'Web Terms of Use',
      privacyPolicy: 'Web Privacy Policy',
      cookiePolicy: 'Web Cookie Policy',
      quickLinks: 'Quick links:',
      aboutUs: 'About the project',
      whatWeDo: 'What do we do?',
      news: 'News',
      geoportal: 'Geoportal',
      contactUs: 'Contact us:',
      instagramTitle: 'Instagram',
      callTitle: 'Call',
      locationTitle: 'Location',
      emailTitle: 'Email',
      copyMessage: 'Email copied: '
    }
  };

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const copyEmailToClipboard = async (e) => {
    e.preventDefault();

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
        setCopyMessage(texts[language].copyMessage + email);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopyMessage(texts[language].copyMessage + email);
      }

      setTimeout(() => setCopyMessage(''), 2000);
      window.location.href = `mailto:${email}`;
    } catch (err) {
      console.error('Error al copiar el correo: ', err);
    }
  };

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
            <p className="text-lg mt-2 text-gray-500">Agricultura Inteligente para un Futuro Sostenible</p>
            <br />
            <div className="flex items-center justify-left space-x-4 text-white">
              {/* Teléfono */}
              <div className="relative flex flex-col items-center">
                <a href="tel:+593999999999" className="font-medium text-lg">
                  (+593) 99-999-9999
                </a>
                <span className="w-full h-0.5 bg-green-500 mt-1"></span>
              </div>

              {/* Separador "or" */}
              <span className="text-gray-400 text-lg">o</span>

              {/* Correo */}
              <div className="relative flex flex-col items-center">
                <a href="mailto:vlir2025@gmail.com" className="font-medium text-lg">
                  vlir2025@gmail.com
                </a>
                <span className="w-full h-0.5 bg-green-500 mt-1"></span>
              </div>
            </div>
          </div>

          {/* Sección Derecha - Enlaces Rápidos */}
          <div className="ml-auto ">
            <Typography variant="h6" className="mb-3">Enlaces Rápidos</Typography>
            <ul className="space-y-2 text-left">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Inicio</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Qué Hacemos</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Noticias</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Geoportal</a>
              </li>
            </ul>

            {/* Redes Sociales */}
            <div className="mt-6 flex justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Línea Divisoria */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Smart Farming. Todos los derechos reservados.
        </div>
      </div>
    </footer>

  );
};

export default Footer;
