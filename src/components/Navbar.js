import React, { useState, useContext, memo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';  // Agregado useNavigate
import PropTypes from 'prop-types';
import { LanguageContext } from './context/LanguageContext';
import { scroller } from 'react-scroll';
import { Menu, X, Globe } from 'lucide-react';


const LOADING_DELAY = 12000;

const NavLink = memo(({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        className={`nav-link relative px-4 py-2 transition-all duration-300 font-medium group ${isActive ? 'text-white'
          : 'text-white hover:text-primary'} relative`}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
        {isActive && (
          <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 bg-primary ${isActive ? 'w-full'
            : 'w-0'} group-hover:w-full`}></span>
        )}
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
      className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${currentLang === lang
        ? 'bg-green-500 text-white shadow-lg'
        : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
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

const Navbar = ({ logoSize = '2rem', loadingDelay = LOADING_DELAY, customLinks, }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Nuevo estado
  const { language, changeLanguage, translations } = useContext(LanguageContext); // Cambia setLanguage por changeLanguage
  const navigate = useNavigate();  // Usamos useNavigate para la redirección

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    setLoading(true);
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const handleScrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          smooth: true,
          duration: 500,
        });
      }, 100); // Espera un poco para que la navegación ocurra
    } else {
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
      });
    }
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang); // Cambia setLanguage por changeLanguage
  };


  const defaultLinks = [
    { to: "/", label: translations[language]?.navbar?.title || 'Inicio' },
    // { to: "/inicio", label: translations[language]?.navbar?.title || 'Inicio' },///
    // { to: "#sobre-el-proyecto", label: translations[language]?.navbar?.option1 || 'Sobre el proyecto' },
    { to: "/que-hacemos", label: translations[language]?.navbar?.option2 || '¿Qué hacemos?' },
    { to: "/noticias", label: translations[language]?.navbar?.news || 'Noticias' },
    { to: "/geoportal", label: translations[language]?.navbar?.geoportal || 'Geoportal' },
    { to: "/contactos", label: translations[language]?.navbar?.contacts || 'Contactos' },

  ];

  const navLinks = customLinks || defaultLinks;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled ? 'bg-gray-900/80 shadow-lg' : 'bg-gray-900'}
    `}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white" role="navigation" aria-label="main navigation">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            style={{ fontSize: logoSize }} /////
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleLogoClick()}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center  transition-colors duration-300">
                <img
                  src="/list_colab/ata_logo_blanco.png"
                  alt="Logo"
                  className="h-full w-auto object-contain"
                  style={{ maxHeight: '48px' }}
                />
              </div>
              <div className="md:block">

                <p className="text-white font-bold text-lg leading-tight group-hover:text-emerald-400 transition-colors duration-300">VLIR-UOS SHORT INITIATIVE:
                  <br />
                  SMART FARMING
                </p>
              </div>
            </div>
          </div>



          {/* Desktop Nav */}
          <div className=" items-center space-x-1">
            <ul className="flex items-center space-x-1">
              {navLinks.map(({ to, label }) => (
                to === "#sobre-el-proyecto" ? (
                  <li key={to}>
                    <button
                      onClick={() => handleScrollToSection('sobre-el-proyecto')}
                    >
                      {label}
                    </button>
                  </li>
                ) : (
                  <NavLink key={to} to={to}>
                    {label}
                  </NavLink>
                )
              ))}
            </ul>
          </div>


          {/* Language & Mobile Toggle */}

          <div className="flex items-center space-x-4">
            <div className=" sm:flex items-center space-x-2 backdrop-blur-sm rounded-lg p-1">
              <Globe className="text-white w-4 h-4" />
              {['es', 'en'].map((lang) => (
                <LanguageButton
                  key={lang}
                  lang={lang}
                  currentLang={language}
                  onClick={handleLanguageChange}
                >
                  {lang.toUpperCase()}
                </LanguageButton>
              ))}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
              aria-label="Toggle mobile menu"

            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}

            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
          <div className="border-t border-white/10 pt-6">
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  {to === "#sobre-el-proyecto" ? (
                    <button
                      onClick={() => handleScrollToSection('sobre-el-proyecto')}
                      className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                    >
                      {label}
                    </button>
                  ) : (
                    <Link
                      to={to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Language Switch */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-center space-x-2">
                <Globe className="text-white w-4 h-4" />
                <span className="text-white text-sm font-medium mr-4">Language:</span>
                {['es', 'en'].map((lang) => (
                  <LanguageButton
                    key={lang}
                    lang={lang}
                    currentLang={language}
                    onClick={handleLanguageChange}
                  >
                    {lang.toUpperCase()}
                  </LanguageButton>
                ))}
              </div>
            </div>
          </div>
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
