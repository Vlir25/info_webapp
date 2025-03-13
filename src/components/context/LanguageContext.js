// context/LanguageContext.js
import React, { createContext, useState } from 'react';
import translations from './translations'; // Asegúrate de que este archivo esté bien estructurado

// Crea el contexto
export const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es'); // Idioma por defecto (español)

    // Función para cambiar el idioma
    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    // Retorna el proveedor con el valor del contexto
    return (
        <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};
