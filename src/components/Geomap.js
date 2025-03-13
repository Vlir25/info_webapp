import React, { useEffect, useState, useRef } from 'react'; // Importar React y hooks necesarios
import L from 'leaflet'; // Importar la biblioteca Leaflet para crear mapas
import 'leaflet/dist/leaflet.css'; // Importar los estilos de Leaflet
import './Geomap.css'; // Importar estilos personalizados para el componente Geomap

function Geomap() {
  const mapRef = useRef(null); // Referencia al mapa Leaflet
  const [searchValue, setSearchValue] = useState(''); // Estado para almacenar el valor de búsqueda
  const [markers, setMarkers] = useState([]); // Estado para almacenar los marcadores en el mapa

  // Configuración del icono personalizado para los marcadores
  const customIcon = L.icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
    iconSize: [25, 41], // Tamaño del icono
    iconAnchor: [12, 41], // Punto de anclaje del icono
    popupAnchor: [1, -34], // Punto de anclaje del popup
  });

  // useEffect para inicializar el mapa una vez que el componente se monta
  useEffect(() => {
    mapRef.current = L.map('map').setView([-1.8312, -78.1834], 6); // Inicializar el mapa en coordenadas específicas
    const layers = configureMapLayers(); // Configurar las capas del mapa

    L.control.layers(layers).addTo(mapRef.current); // Agregar control de capas al mapa
    layers.base.addTo(mapRef.current); // Añadir la capa base al mapa

    // Limpiar el mapa al desmontar el componente
    return () => {
      mapRef.current.remove();
    };
  }, []);

  // Función para configurar las capas del mapa
  const configureMapLayers = () => {
    const baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, // Nivel máximo de zoom
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const satelliteLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      attribution: 'Map data &copy; <a href="https://www.google.com/intl/en_us/help/terms_maps.html">Google</a>',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] // Subdominios de Google
    });

    const roadsLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
    });

    return { base: baseLayer, satellite: satelliteLayer, roads: roadsLayer }; // Retornar las capas configuradas
  };

  // Función para manejar la búsqueda de ubicaciones
  const handleSearch = () => {
    if (searchValue) {
      // Coordenadas para las ubicaciones
      const coordinates = {
        "quito": [-0.22985, -78.52495],
        "guayaquil": [-2.17098, -79.92224],
        "cuenca": [-2.90055, -78.98333],
        "machala": [-3.2588, -79.9569],
        "ambato": [-1.2488, -78.6073],
      };

      const coords = coordinates[searchValue.toLowerCase()]; // Obtener coordenadas según el valor de búsqueda
      if (coords) {
        mapRef.current.setView(coords, 13); // Mover el mapa a las coordenadas encontradas
        clearMarkers(); // Limpiar marcadores existentes

        // Crear un nuevo marcador y agregarlo al mapa
        const newMarker = L.marker(coords, { icon: customIcon })
          .addTo(mapRef.current)
          .bindPopup(`${capitalizeFirstLetter(searchValue)}`) // Añadir un popup con el nombre de la ubicación
          .openPopup();

        setMarkers((prevMarkers) => [...prevMarkers, newMarker]); // Actualizar el estado de marcadores
        setSearchValue(''); // Limpiar el campo de búsqueda
      } else {
        // Mensaje amigable para el usuario si la ubicación no es encontrada
        alert('Ubicación no encontrada. Intenta con: Quito, Guayaquil, Cuenca, Machala, Ambato.');
      }
    }
  };

  // Función para limpiar todos los marcadores del mapa
  const clearMarkers = () => {
    markers.forEach(marker => {
      mapRef.current.removeLayer(marker); // Remover cada marcador del mapa
    });
    setMarkers([]); // Limpiar el estado de marcadores
  };

  // Función para capitalizar la primera letra de una cadena
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="geomap-container">
      <h1>Ubicaciones:</h1> {/* Título del componente */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Buscar ubicación" 
          value={searchValue} 
          onChange={(e) => setSearchValue(e.target.value)} // Actualizar el valor de búsqueda
        />
        <button onClick={handleSearch}>Buscar</button> {/* Botón para buscar la ubicación */}
      </div>
      <div id="map"></div> {/* Contenedor del mapa */}
    </div>
  );
}

export default Geomap; // Exportar el componente para su uso en otras partes de la aplicación
