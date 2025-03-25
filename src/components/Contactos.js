import React from 'react';
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { FaLocationArrow, FaEnvelope, FaPhone } from 'react-icons/fa';  // Usando react-icons para los íconos

const Contactos = () => {
  return (
    <section id="sobre-el-proyecto" className="text-center p-[10vw] pt-8 pb-8">
      <h3 className="text-left text-5xl font-bold mb-10">Contáctanos</h3>
      <div className="container mx-auto">
        {/* Información de contacto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-60">
          {/* Columna izquierda con iconos y datos */}
          <div className="space-y-7">
            <div className="flex flex-col items-center space-y-2">
              <FaLocationArrow className="text-3xl text-gray-700" />
              <div>
                <Typography className="font-medium text-gray-900">Ubicación</Typography>
                <Typography className="text-gray-600">1234 Calle Ficticia, Ciudad, País</Typography>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <FaEnvelope className="text-3xl text-gray-700" />
              <div>
                <Typography className="font-medium text-gray-900">Correo Electrónico</Typography>
                <Typography className="text-gray-600">contacto@empresa.com</Typography>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <FaPhone className="text-3xl text-gray-700" />
              <div>
                <Typography className="font-medium text-gray-900">Teléfono</Typography>
                <Typography className="text-gray-600">+123 456 7890</Typography>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7916475407933!2d-78.49246472503539!3d-0.20950559978843042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a10f313d0db%3A0xb062938f8ea3983c!2sFacultad%20de%20Ingenier%C3%ADa%20Mec%C3%A1nica%20EPN!5e0!3m2!1ses-419!2sec!4v1742864091473!5m2!1ses-419!2sec"
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
