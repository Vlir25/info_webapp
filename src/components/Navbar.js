// Navbar.js - cambios
import React, { useState, useContext, memo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiZigzagLeaf } from 'react-icons/gi';
import PropTypes from 'prop-types';
import LoadingScreen from './LoadingScreen';
import { LanguageContext } from './context/LanguageContext';
import './styles/Navbar.css';

const LOADING_DELAY = 12000;

const NavLink = memo(({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <li>
      <Link 
        to={to} 
        className={`nav-link ${isActive ? 'active' : ''}`}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </Link>
    </li>
  );
});

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

NavLink.displayName = 'NavLink';

const LanguageButton = memo(({ lang, currentLang, onClick, children }) => {
  const ariaLabel = `Change language to ${lang.toUpperCase()}`;
  
  return (
    <button
      onClick={() => onClick(lang)}
      className={`lang-btn px-3 py-0.5 rounded ${
        currentLang === lang 
          ? 'bg-green-500 text-white' 
          : 'bg-gray-200 text-black hover:bg-gray-300'
      }`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
});

LanguageButton.propTypes = {
  lang: PropTypes.string.isRequired,
  currentLang: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

LanguageButton.displayName = 'LanguageButton';

const Navbar = ({ 
  logoSize = '2rem',
  loadingDelay = LOADING_DELAY,
  customLinks,
}) => {
  const [loading, setLoading] = useState(false);
  const { language, changeLanguage, translations } = useContext(LanguageContext);

  // Limpiar el temporizador con useEffect
  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => {
        setLoading(false);
      }, loadingDelay);
    }
    return () => clearTimeout(timer); // Limpiar temporizador cuando el componente se desmonte o cambie el estado
  }, [loading, loadingDelay]);

  const handleLogoClick = () => {
    setLoading(true);
  };

  const defaultLinks = [
    { to: "/", label: translations[language]?.navbar?.option1 || '¿Qué somos?' },
    { to: "/testimonio", label: translations[language]?.navbar?.option2 || '¿Qué hacemos?' },
    { to: "/noticias", label: translations[language]?.navbar?.news || 'Noticias' },
    { to: "/geoportal", label: translations[language]?.navbar?.geoportal || 'Geoportal' }
  ];

  const navLinks = customLinks || defaultLinks;

  return (
    <div className="navbar-container">
      {loading && <LoadingScreen />}
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          style={{ fontSize: logoSize }}
          onClick={handleLogoClick}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && handleLogoClick()}
        >
          <GiZigzagLeaf aria-label="Logo" className="text-green-500" />
          <span className="text-xl font-bold text-white text-left">VLIROUS SHORT INITIATIVE: <br/> SMART FARMING</span>
        </div>

        <ul className="flex space-x-4">
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
        </ul>

        <div className="flex space-x-2">
          {['es', 'en'].map((lang) => (
            <LanguageButton
              key={lang}
              lang={lang}
              currentLang={language}
              onClick={changeLanguage}
            >
              {lang.toUpperCase()}
            </LanguageButton>
          ))}
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logoSize: PropTypes.string,
  loadingDelay: PropTypes.number,
  customLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default memo(Navbar);
