import React, { useContext, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../components/context/LanguageContext'; // Asegúrate de importar el LanguageContext
import './styles/Footer.css';

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
    <footer>
      <div className="footer-content">
        <div className="text-column">
          <p>{texts[language].copyright}</p>
          <p>{texts[language].termsOfUse}</p>
          <p>{texts[language].privacyPolicy}</p>
          <p>{texts[language].cookiePolicy}</p>
        </div>
        <div className="links-column">
          <h2>{texts[language].quickLinks}</h2>
          <ul>
            <li><Link to="/" onClick={scrollToTop}>{texts[language].aboutUs}</Link></li>
            <li><Link to="/testimonio" onClick={scrollToTop}>{texts[language].whatWeDo}</Link></li>
            <li><Link to="/noticias" onClick={scrollToTop}>{texts[language].news}</Link></li>
            <li><Link to="/geoportal" onClick={scrollToTop}>{texts[language].geoportal}</Link></li>
          </ul>
        </div>
        <div className="icons-column">
          <h2>{texts[language].contactUs}</h2>
          <div className="icons">
            <a href="https://www.instagram.com/cavound_tech/" target="_blank" rel="noopener noreferrer" title={texts[language].instagramTitle}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=593983300503&text=¡Hola%21+Estoy+preguntando+por+los+servicios+de+CAVOUND.%0A&type=phone_number&app_absent=0" title={texts[language].callTitle}>
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="https://maps.app.goo.gl/cmYqCFZKbBaXd1d47" target="_blank" rel="noopener noreferrer" title={texts[language].locationTitle}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </a>
            <button onClick={copyEmailToClipboard} title={texts[language].emailTitle} className="email-button">
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </div>
          {copyMessage && <p className="copy-message">{copyMessage}</p>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
