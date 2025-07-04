import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import { LanguageProvider } from './components/context/LanguageContext'; // Importa el LanguageProvider
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Hacemos from './components/Testimonios';
import Noticias from './components/Noticias';
import Geoportal from './components/Geoportal';
import NoticiaDetalle from './components/NoticiasDetalle';
import Contactos from './components/Contactos'; // Importa el componente Contactos
import LoadingScreen from './components/LoadingScreen';
import { SpeedInsights } from '@vercel/speed-insights/react'; // Importa el componente SpeedInsights
import CookieBanner from './components/CookieBanner'; // Importa el componente CookieBanner
import './App.css';





const App = () => {
  console.log("✅ThemeProvider está envolviendo la app");

  const [loading, setLoading] = useState(true); // Estado para controlar la pantalla de carga

  // Simular una carga antes de mostrar la aplicación
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simula una pantalla de carga de 12 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider> {/* Envuelve tu aplicación con ThemeProvider */}
      <LanguageProvider> {/* Envuelve tu aplicación con LanguageProvider */}
        <Router>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              <Navbar />
              <main className="mt-20">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/noticias" element={<Noticias />} />
                  <Route path="/inicio" element={<Home />} />
                  <Route path="/que-hacemos" element={<Hacemos />} />
                  <Route path="/geoportal" element={<Geoportal />} />
                  <Route path="/noticia/:noticiaId" element={<NoticiaDetalle />} />
                  <Route path="/contactos" element={<Contactos />} />
                  <Route path="*" element={<Home />} />
                </Routes>
                <CookieBanner />
                {/* Agregar SpeedInsights en un lugar específico de la interfaz */}
              </main>
              <Footer />
            </>
          )}
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
