import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";

const CookieBanner = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(
    localStorage.getItem("cookiesAccepted")
  );

  useEffect(() => {
    if (cookiesAccepted === "true") {
      console.log("✅ Cookies aceptadas");
    }
  }, [cookiesAccepted]);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setCookiesAccepted("true");
  };

  const rejectCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setCookiesAccepted("false");
  };

  if (cookiesAccepted !== null) return null; // No mostrar si ya aceptó o rechazó

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-lg border border-gray-200 w-[90%] max-w-md text-center flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <p className="text-sm text-gray-700">
        Usamos cookies para mejorar la experiencia. ¿Aceptas?
      </p>
      <div className="flex gap-2">
        <Button color="green" onClick={acceptCookies} className="text-white">
          Aceptar
        </Button>
        <Button color="red" onClick={rejectCookies} className="text-white">
          Rechazar
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
