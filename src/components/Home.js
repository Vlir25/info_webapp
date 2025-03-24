import React, { useContext } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { LanguageContext } from './context/LanguageContext';
import CarouselImg from './CarouselImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-tailwind/react';
import './styles/Home.css';

const images = [
  {
    src: "/images/principal.png",
    alt: "Imagen principal 1",
    title: "Agricultura Inteligente para un futuro sostenible",
    description: "Transformando la producción agrícola mediante tecnología avanzada.",
  },
  {
    src: "/images/principal2.png",
    alt: "Imagen principal 2",
    title: "Innovación y Tecnología",
    description: "Soluciones avanzadas para un mundo en constante cambio.",
  },
  {
    src: "/images/monitoreo.jpeg",
    alt: "Monitoreo Inteligente",
    title: "Monitoreo en tiempo real",
    description: "Controla tus procesos con nuestra plataforma digital.",
  },
];


// Datos de los miembros del equipo -ventana incial
const teamMembers = [
  {
    name: "Patrick Vandewalle",
    img: "/list_colab/colab_1.png",
    img2: "/list_colab/colab_10.png",
    linkedIn: "https://www.linkedin.com/in/vandewallepatrick/"
  },
  {
    name: "Esteban Valencia",
    img: "/list_colab/colab_2.png",
    img2: "/list_colab/colab_9.png",
    linkedIn: "https://www.linkedin.com/in/esteban-valencia-torres/"
  },
  {
    name: "Jackeline Abad",
    img: "/list_colab/colab_4.png",
    img2: "/list_colab/colab_9.png",
    linkedIn: "https://www.linkedin.com/in/jackeline-abad-torres-a5090b29/"
  },
  /*{
    name: "Carina Rosero",
    img: "/list_colab/colab_5.png",
    img2: "/list_colab/colab_11.png",
    linkedIn: "https://www.linkedin.com/in/carina-rosero-610928139/"
  },
  {
    name: "Yadira Vargas",
    img: "/list_colab/colab_6.png",
    img2: "/list_colab/colab_11.png",
    linkedIn: "https://www.linkedin.com/in/yadiravargas/"
  },
  {
    name: "Hernan Rivadeneira",
    img: "/list_colab/colab_7.png",
    img2: "/list_colab/colab_11.png",
    linkedIn: "https://www.linkedin.com/in/hernanrivadeneira/"
  },*/
  {
    name: "Jenny Ávila",
    img: "https://cdn.pixabay.com/photo/2020/11/29/01/25/woman-5786062_1280.png",
    img2: "/list_colab/colab_9.png",
    linkedIn: "https://www.linkedin.com/in/jenny-%C3%A1vila-v%C3%A9lez-801a3443/"
  },
  {
    name: "Cristina Romero",
    img: "/list_colab/colab_8.png",
    img2: "/list_colab/colab_9.png",
    linkedIn: "https://www.linkedin.com/in/cristina-romero-65450624/"
  },
  /*{
    name: "Diana Navarro",
    img: "https://cdn.pixabay.com/photo/2020/11/29/01/25/woman-5786062_1280.png",
    img2: "/list_colab/colab_11.png",
    linkedIn: "https://www.linkedin.com/in/diana-navarro-6031a2156/"
  },*/
];

// Datos de los patrocinadores
const sponsors = [
  {
    name: "Escuela Politécnica Nacional",
    img: "/list_colab/colab_9.png"
  },
  {
    name: "KU Leuven",
    img: "/list_colab/colab_10.png"
  },
  {
    name: "Instituto Nacional de Investigación Agropecuarias",
    img: "/list_colab/colab_11.png"
  },
];

const Home = () => {
  const { language, translations } = useContext(LanguageContext); // Asegúrate de que el contexto esté disponible
  const currentTranslations = translations[language];

  return (
    <div className="mt-5 mb-5" >
      {/* Contenedor del carrusel */}
      <section className="text-center  p-[5vw]">
        <CarouselImg images={images} />
      </section>

      {/* Sección principal del proyecto */}
      <section className="text-center bg-gray-300 mt-10 mb-10  p-[10vw] shadow-lg">
        <h1 style={{ textTransform: 'uppercase' }}>
          {/*currentTranslations.mainTitle*/}
        </h1>
        <p className="mt-4 text-xl  ">{currentTranslations.projectDescription}</p>
        <div className="flex flex-wrap justify-center gap-10 mt-6 text-light-green-800 text-6xl sm:text-4xl md:text-5xl">
          <div className="text-center flex-1 min-w-[120px]">
            <FontAwesomeIcon icon="fa-solid fa-desktop" />
            <p className="text-xl mt-2">Monitoreo remoto</p>
          </div>
          <div className="text-center flex-1 min-w-[120px]">
            <FontAwesomeIcon icon="fa-solid fa-robot" />
            <p className="text-xl mt-2"> Inteligencia Artificial</p>
          </div>
          <div className="text-center flex-1 min-w-[120px]">
            <FontAwesomeIcon icon="fa-solid fa-chart-line" />
            <p className="text-xl mt-2">Análisis de datos</p>
          </div>
        </div>

      </section>

      {/* Nueva Sección Sobre el proyecto */}
      <section className="text-center  p-[5vw]  ">
        <h2 className="text-5xl font-bold mb-8">Sobre el proyecto</h2>
        {/* Sección de Objetivos */}
        <div className="flex flex-col md:flex-row items-center mb-10">
          {/* Texto a la izquierda */}
          <div className="md:w-1/2  text-left p-4">
            <h3 className="text-3xl font-semibold mb-4">{currentTranslations.newThemeTitle}</h3>
            <p className="text-xl">{currentTranslations.newThemeDescription}
              <br />
              <br />
              <Button size="lg" className="bg-primary hover:bg-green-700 text-center normal-case">
                ¿Cómo lo hacemos?
              </Button>
            </p>
          </div>
          {/* Imagen a la derecha */}
          <div className="md:w-1/2 p-4 flex justify-center">
            <img src="/images/postal.jpeg" alt="Objetivos del Proyecto" className="max-w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
        <br />

        {/* Sección de Líneas de Investigación */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 text-left p-4">
            <h3 className="text-3xl font-semibold mb-4">{currentTranslations.newLines}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Línea 1 */}
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-4">
                  <span className="text-light-green-800 text-4xl"><FontAwesomeIcon icon="fa-solid fa-seedling" /></span>
                </div>
                <p className="text-xl">{currentTranslations.newLinesDescription1}</p>
              </div>

              {/* Línea 2 */}
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-4">
                  <span className="text-light-green-800 text-4xl"><FontAwesomeIcon icon="fa-solid fa-brain" /></span>
                </div>
                <p className="text-xl">{currentTranslations.newLinesDescription2}</p>
              </div>

              {/* Línea 3 */}
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-4">
                  <span className="text-light-green-800 text-4xl"><FontAwesomeIcon icon="fa-solid fa-droplet" /></span>
                </div>
                <p className="text-xl">{currentTranslations.newLinesDescription3}</p>
              </div>

              {/* Línea 4 */}
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-4">
                  <span className="text-light-green-800 text-4xl"><FontAwesomeIcon icon="fa-solid fa-building-wheat" /></span>
                </div>
                <p className="text-xl">{currentTranslations.newLinesDescription4}</p>
              </div>
            </div>
          </div>

          {/* Imagen a la izquierda */}
          <div className="md:w-1/2 p-4 flex justify-center">
            <img
              src="/images/drone_1.jpg"
              alt="Líneas de Investigación"
              className="max-w-full h-auto rounded-lg shadow-md [mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0))]"
            />
          </div>
        </div>

      </section>


      {/* Sponsor */}
      <section className="text-center bg-gray-300 mt-10 p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg">
        <h2 className="new-theme-title">{currentTranslations.newSponsorTitle}</h2>
        <div className="new-theme-content">
          <div className="new-theme-image-container">
            <a href="https://www.vliruos.be" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/vliruos.png"
                alt="QR Image"
                className="new-theme-image"
              />
            </a>
          </div>
          <div className="new-theme-description">
            <p>{currentTranslations.newSponsorDescription}</p>
          </div>
        </div>
      </section>



      {/* Sección de patrocinadores */}
      <section className="sponsors-wrapper">
        <h2>{currentTranslations.sponsorsTitle}</h2>
        <div className="sponsors-container" style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          margin: '20px 0'
        }}>
          {sponsors.map((sponsor) => (
            <div className="sponsor-item" key={sponsor.name} style={{
              textAlign: 'center',
              margin: '10px'
            }}>
              <img src={sponsor.img} alt={sponsor.name} style={{
                maxWidth: '100px',
                height: 'auto'
              }} />
              <h3>{sponsor.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contenedor de los miembros del equipo */}
      <section className="team-wrapper">
        <h2>{currentTranslations.teamTitle}</h2>
        <div className="team-container">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.name}>
              <img src={member.img} alt={member.name} className="team-image-main" />
              {member.img2 && <img src={member.img2} alt={`${member.name} - Extra`} className="team-image-second" />}
              <h3 className="team-name">{member.name}</h3>
              <p className="team-info">
                {currentTranslations.teamMembers[member.name]} {/* Información traducida */}
              </p>
              {member.linkedIn && (
                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  <FaLinkedin size={24} color="#0e76a8" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
