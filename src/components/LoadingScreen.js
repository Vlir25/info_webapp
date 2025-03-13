import React, { useState, useEffect } from 'react';
import './styles/LoadingScreen.css';

const LoadingScreen = ({ onLoaded }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 2 : 100));
    }, 180);

    const timer = setTimeout(() => {
      setLoading(false);
      if (typeof onLoaded === 'function') {
        onLoaded();
      }
    }, 11000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onLoaded]);

  return (
    <div className={`loading-container ${loading ? '' : 'fade-out'}`}>
      <video
        className={`background-video ${loading ? 'fade-in' : ''}`}
        autoPlay
        muted
        loop
        aria-label="Loading background video"
      >
        <source src="/video/screen_load.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`loading-content ${loading ? 'fade-in' : 'fade-out'}`}>
        <h1 className="display-4 typing-effect">Sean Bienvenidos</h1>
        <p className="lead sub-title">Estamos cargando algo especial para ti...</p>
        <div className="loading-circle" aria-label="Loading indicator"></div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
