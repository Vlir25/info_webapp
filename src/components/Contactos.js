import React from 'react';
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { FaLocationArrow, FaEnvelope, FaPhone } from 'react-icons/fa';  // Usando react-icons para los íconos

const Contactos = () => {
  return (
    <section id="sobre-el-proyecto" className="text-center p-[10vw] pt-8 pb-8">
      <h2 className="text-4xl font-bold m-auto">Contáctanos</h2>
      <div className="container mx-auto">
        {/* Información de contacto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-60">
          {/* Columna izquierda con iconos y datos */}
          <div className="space-y-7">
            <div className="flex flex-col items-center space-y-2">
              <FaLocationArrow className="text-3xl text-gray-700" />
              <div>
                <Typography className="font-medium text-gray-900">Ubicación</Typography>
                <Typography className="text-gray-600">Grupo de investigación ATA-EPN,<br/> Laboratorio de UAVs,<br/> EPN <br/> (Quito, Ecuador)</Typography>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <FaEnvelope className="text-3xl text-gray-700" />
              <div>
                <Typography className="font-medium text-gray-900">Correo Electrónico</Typography>
                <Typography className="text-gray-600">ata.rg@epn.edu.ec <br/> esteban.valencia@epn.edu.ec</Typography>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <FaPhone className="text-3xl text-gray-700" />
              <div>
                <Typography className="font-medium text-gray-900">Teléfono</Typography>
                <Typography className="text-gray-600">+593 996 645 322
                </Typography>
              </div>
            </div>
          </div>

          {/* Columna derecha con imagen y mapa */}
          <div className="space-y-6">
            <img
              src="/images/qr_info1.png" // Imagen del mapa
              alt="map"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="w-full h-64 bg-gray-300 rounded-lg">
              {/* Aquí puedes agregar un iframe de Google Maps o usar Leaflet */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.7239407635828!2d-78.49039777311624!3d-0.2099819623676055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b577bc46049%3A0x42f5b4b580f52ed5!2sGrupo%20de%20investigaci%C3%B3n%20ATA-EPN%2C%20Laboratorio%20de%20UAVs!5e0!3m2!1ses!2sec!4v1743509042380!5m2!1ses!2sec"
                className="w-full h-full border-0 rounded-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactos;
