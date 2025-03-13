/*VENTANA PARA COLOCAR LAS NOTICIAS CORRESPONDIENTES
VARIABLES --2-> ´noticia1´
TITULO----> "venta de cultivo"
CONTENIDO------> "se vendio .........."
IMAGEN --> "/public/images/noticias" puede añadir para mas comodidad un enlace url

ajustes 2025- correccion de errores -bugs
*/



import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from './context/LanguageContext'; // Asegúrate de que la ruta sea correcta
import './styles/Noticias.css';

const Noticias = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext); // Obtener el idioma actual
  // El objeto de noticias ya incluye las traducciones de los títulos y contenidos directamente
  const noticiasData = {
    'visita-palora': { 
      title: {
        es: "Avances en el monitoreo de pitahayas ", // titulo de la noticia en español
        en: "Advances in pitahaya monitoring" // titulo de la noticia en Ingles 
      },
      content: {
        es: "El equipo del proyecto VLIR-UOS realizó su primera visita a Palora, donde se llevaron a cabo actividades de monitoreo en las plantaciones de pitahaya. Durante esta visita, se recopilaron datos cruciales sobre el crecimiento de los cultivos y se realizaron análisis de suelo en colaboración con INIAP. Esta visita marca un hito importante en la implementación de la metodología de agricultura de precisión, permitiendo la recolección de información valiosa para el desarrollo del proyecto.", //CONTENIDO EN ESPAÑOL
        en: "The VLIR-UOS project team made its first visit to Palora, where monitoring activities were carried out in the pitahaya plantations. During this visit, crucial data on crop growth was collected and soil analysis was conducted in collaboration with INIAP. This visit marks an important milestone in the implementation of the precision agriculture methodology, allowing the collection of valuable information for the development of the project." //CONTENIDO EN INGLES
      },
      date: "7/11/2024", // ajustar fecha
      image: '/images/pitahaya_monitoreo.jpeg',//'https://cdn.portalfruticola.com/2022/02/cultivopitahaya-1024x581.jpg', // configurar imagen JPEG O URL
    },
    'proyectos-futuros': {
      title: {
        es: "Exploración de oportunidades de financiamiento: Proyectos futuros",
        en: "Exploring financing opportunities: Future projects"
      },
      content: {
        es: "El equipo del proyecto ha participado en oportunidades de financiamiento como FSPI, que permitió la disponibilidad del UAV Mavic 3M para evitar retrasos en la adquisición de datos, o VLIR-TEAM, que apoya la escalabilidad de la metodología de monitorización remota en ecosistemas de difícil acceso, por lo tanto, estas iniciativas son clave para la sostenibilidad del proyecto en etapas futuras.",
        en: "The project team has participated in funding opportunities such as FSPI, which allowed the availability of the Mavic 3M UAV to avoid delays in data acquisition, or VLIR-TEAM, which supports the scalability of the remote monitoring methodology in difficult to access ecosystems, therefore, these initiatives are key to the sustainability of the project in future stages."
      },
      date: "5/11/2024",
      image: '/images/mavic3M.jpeg',//'https://heroku-cforemoto-blog-strapi.s3.us-west-2.amazonaws.com/tipos_de_financiamiento_1200x800_b9a1ade936.jpeg',
    },
    'colaboraciones': {
      title: {
        es: "Fortaleciendo colaboraciones",
        en: "Strengthening collaborations"
      },
      content: {
        es: "Durante la visita del director Patrick Vandewalle, se llevaron a cabo importantes reuniones con los colaboradores del proyecto, se discutieron los avances en la metodología de adquisición de datos y se realizó un recorrido por las plantaciones de estudio. Esta visita facilitó la colaboración con profesores de EPN, quienes contribuyeron a la refinación de las técnicas de recolección de datos y al intercambio de información sobre el procesamiento de imágenes de EAVISE y sus aplicaciones, fortaleciendo así la comunicación entre los diferentes actores del proyecto.",
        en: "During Director Patrick Vandewalle's visit, important meetings were held with project collaborators, progress on data acquisition methodology was discussed, and a tour of the study plantations was conducted. This visit facilitated collaboration with EPN professors, who contributed to the refinement of data collection techniques and the exchange of information on EAVISE image processing and its applications, thus strengthening communication between the different project stakeholders."
      },
      date: "3/11/2024",
      image: '/images/Patrick.JPG',//'https://guillermoygloria.com/wp-content/uploads/2020/05/2020-05-17_eventos_empresariales_herramienta.jpg',
    },
    'redes-apoyo': {
      title: {
        es: "Construyendo redes de apoyo con agricultores y colaboradores.",
        en: "Building support networks with farmers and collaborators."
      },
      content: {
        es: "En una serie de reuniones con agricultores locales y colaboradores, el equipo del proyecto VLIR-UOS ha estado trabajando para fortalecer las redes de apoyo en la implementación de prácticas de agricultura de precisión. Estos diálogos han permitido a los agricultores compartir sus experiencias y desafíos, mientras que el equipo ha presentado los beneficios de la metodología de monitoreo y recolección de datos, por ende, este enfoque colaborativo es fundamental para asegurar la sostenibilidad y el éxito del proyecto en la región.",
        en: "In a series of meetings with local farmers and collaborators, the VLIR-UOS project team has been working to strengthen support networks in the implementation of precision farming practices. These dialogues have allowed farmers to share their experiences and challenges, while the team has presented the benefits of the monitoring and data collection methodology, thus, this collaborative approach is critical to ensure the sustainability and success of the project in the region."
      },
      date: "2/11/2024",
      image: '/images/redesapoyo.jpeg',
      },
      'viajes': {
        title: {
          es: "Finalización de la primera etapa de monitoreo",
          en: "Completion of the first stage of monitoring"
        },
        content: {
          es: "El proyecto VLIR-UOS EC2023SIN381A101 ha concluido exitosamente la primera etapa de monitoreo del cultivo de pitahaya, completando 12 viajes a Palora, siendo esta fase crucial para recolectar datos que caracterizan el ciclo de crecimiento de la fruta y optimizan las prácticas agrícolas. Durante los viajes, se calibraron los parámetros de vuelo del UAV Mavic 3M y se realizaron registros de brotes, flores y frutos, así como análisis de suelo. Además, se utilizaron vehículos de EPN en seis de estos viajes, lo que facilitó la participación de más estudiantes en la validación de resultados. Con la finalización de esta etapa, el equipo se prepara para refinar, verificar y validar los resultados obtenidos, sentando las bases para la siguiente fase del proyecto. Este esfuerzo no solo busca mejorar la producción de pitahaya, sino también contribuir a la sostenibilidad y eficiencia en la agricultura de la región amazónica de Ecuador.",
          en: "The VLIR-UOS EC2023SIN381A101 project has successfully concluded the first stage of monitoring the pitahaya crop, completing 12 trips to Palora, this phase being crucial to collect data that characterize the growth cycle of the fruit and optimize agricultural practices. During the trips, the flight parameters of the Mavic 3M UAV were calibrated and records of buds, flowers and fruits were taken, as well as soil analysis. In addition, EPN vehicles were used in six of these trips, which facilitated the participation of more students in the validation of results. With the completion of this stage, the team is preparing to refine, verify and validate the results obtained, laying the groundwork for the next phase of the project. This effort not only seeks to improve pitahaya production, but also to contribute to sustainability and efficiency in agriculture in the Amazon region of Ecuador."
        },
        date: "1/11/2024",
        image: '/images/monitoreo.jpeg',
      },
     /*AQUI AÑADIR MAS NOTICIAS -GUIARSE DE LAS NOTICIAS
     ANTERIORES - LEA EL ARCHIVO README*/
      'conferencia_doc': {
        title: {
          es: "Participación en la Jornada Científica del Departamento de Ingeniería Mecánica de la EPN 0",
          en: "Participation in the Scientific Conference of the Department of Mechanical Engineering of EPN"
        },
        content: {
          es: "El Dr. Esteban Valencia participó en la conferencia Jornadas Científicas del Departamento de Ingeniería Mecánica de la EPN, donde expuso sobre proyectos de investigación que integran UAVs, materiales innovadores como el grafeno y tecnologías como inteligencia artificial y Velocimetría por Imágenes de Partículas (PIV). Destacó aplicaciones clave como el monitoreo volcánico con drones VTOL, herramientas de agricultura de precisión para la Amazonía ecuatoriana y sistemas de conservación de humedales andinos, alineados con los Objetivos de Desarrollo Sostenible (ODS)",
          en: "Dr. Esteban Valencia participated in the EPN Department of Mechanical Engineering's Scientific Conference, where he presented research projects that integrate UAVs, innovative materials such as graphene and technologies such as artificial intelligence and Particle Image Velocimetry (PIV). He highlighted key applications such as volcanic monitoring with VTOL drones, precision agriculture tools for the Ecuadorian Amazon and Andean wetland conservation systems, aligned with the Sustainable Development Goals (SDGs)."
        },
        date: "20/11/2024",
        image: '/images/Conferencia_Doc.jpg',
      },

  };

  const [visibleNoticia, setVisibleNoticia] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const noticiasPorPagina = 4;

  const handleLeerMas = (noticiaId) => {
    if (visibleNoticia === noticiaId) {
      setVisibleNoticia(null);
    } else {
      navigate(`/noticia/${noticiaId}`, { state: { noticia: noticiasData[noticiaId] } });
      setVisibleNoticia(noticiaId);
    }
  };

  // Calcular el índice de inicio y fin de las noticias a mostrar
  const totalNoticias = Object.keys(noticiasData).length;
  const indexInicio = (paginaActual - 1) * noticiasPorPagina;
  const indexFin = indexInicio + noticiasPorPagina;

  // Obtener las noticias a mostrar en la página actual
  const noticiasOrdenadas = Object.entries(noticiasData).reverse();
  const noticiasAPresentar = noticiasOrdenadas.slice(indexInicio, indexFin);

  const totalPaginas = Math.ceil(totalNoticias / noticiasPorPagina);

  return (
    <div className="novedades-container">
      <h2 className="novedades-header">{language === 'es' ? 'Noticias' : 'News'}</h2> {/* Título de la sección */}
      <div className="items-wrapper">
        {noticiasAPresentar.map(([id, noticia]) => {
          const title = noticia.title[language]; // Acceso directo a las traducciones del título
          const content = noticia.content[language]; // Acceso directo a las traducciones del contenido

          return (
            <div className="item" key={id}>
              <img src={noticia.image} alt={title} className="item-image" />
              <div className="item-content">
                <h2 className="item-title">{title}</h2>
                <p className="item-date">{noticia.date}</p>
                <p className="item-summary">{content.slice(0, 200)}...</p>
                <button className="leer-mas-btn" onClick={() => handleLeerMas(id)}>
                  {visibleNoticia === id ? (language === 'es' ? 'Leer menos' : 'Read less') : (language === 'es' ? 'Leer más' : 'Read more')}
                </button>
                {visibleNoticia === id && (
                  <div className="contenido">
                    <p className="item-description">{content}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Paginación */}
      <div className="pagination">
        <button 
          onClick={() => setPaginaActual(pagina => Math.max(pagina - 1, 1))} 
          disabled={paginaActual === 1}
        >
          {language === 'es' ? 'Anterior' : 'Previous'}
        </button>
        <span>{language === 'es' ? `Página ${paginaActual} de ${totalPaginas}` : `Page ${paginaActual} of ${totalPaginas}`}</span>
        <button 
          onClick={() => setPaginaActual(pagina => Math.min(pagina + 1, totalPaginas))} 
          disabled={paginaActual === totalPaginas}
        >
          {language === 'es' ? 'Siguiente' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Noticias;
