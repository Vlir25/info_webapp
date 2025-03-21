import React, { useContext } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { LanguageContext } from './context/LanguageContext';
import CarouselImg from './CarouselImg';
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
    <div className="mt-10" >
      {/* Contenedor del carrusel */}
      <CarouselImg images={images} />
      
      {/* Sección principal del proyecto */}
      <section className="tech-intro">
        <h1 style={{ textTransform: 'uppercase' }}>
          {currentTranslations.mainTitle}
        </h1>

        <p>{currentTranslations.projectDescription}</p>
      </section>

      {/* Nueva Sección con Título, Imagen y Descripción */}
      <section className="new-theme-section">
        <h2 className="new-theme-title">{currentTranslations.newThemeTitle}</h2>
        <div className="new-theme-content">
          <img
            src="/images/qr_info1.png"  // QR modificale y redirreccion URL
            alt="qr-images"
            className="new-theme-image"
          />
          <div className="new-theme-description">
            <p>{currentTranslations.newThemeDescription}</p>
          </div>
        </div>
      </section>
      
      {/* Nueva Sección Líneas de Investigación */}
      <section className="new-theme-section">
        <h2 className="new-theme-title">{currentTranslations.newLines}</h2>
        <div className="new-theme-content">
          <div>
            <p>{currentTranslations.newLinesDescription1}</p>
            <p>{currentTranslations.newLinesDescription2}</p>
            <p>{currentTranslations.newLinesDescription3}</p>
            <p>{currentTranslations.newLinesDescription4}</p>
          </div>
        </div>
      </section>

      {/* Sponsor */}
      <section className="new-theme-section">
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
