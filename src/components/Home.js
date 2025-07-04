import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './context/LanguageContext';
import CarouselImg from './CarouselImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-tailwind/react';
import './styles/Home.css';
import OurTeamCard from './OurTeamCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Importa los módulos necesarios desde Swiper
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { noticiasData } from './Noticiasdata'; // Importar datos
import UltimasNoticias from './UltimasNoticias'; // Importar component


// Datos de los miembros del equipo -ventana incial
const teamMembers = [
  {
    name: "Patrick Vandewalle",
    role: "KU Leuven",
    img: "/list_colab/colab_1.png",
    img2: "/list_colab/colab_10.png",
    linkedIn: "https://www.linkedin.com/in/vandewallepatrick/"
  },
  {
    name: "Esteban Valencia",
    role: "EPN",
    img: "/list_colab/colab_2.png",
    img2: "/list_colab/colab_9.png",
    linkedIn: "https://www.linkedin.com/in/esteban-valencia-torres/"
  },
  {
    name: "Jackeline Abad",
    role: "EPN",
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
    role: "EPN",
    img: "/list_colab/colab_12.jpg",
    img2: "/list_colab/colab_9.png",
    linkedIn: "https://www.linkedin.com/in/jenny-%C3%A1vila-v%C3%A9lez-801a3443/"
  },
  {
    name: "Cristina Romero",
    role: "EPN",
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
    img: "/list_colab/EPN_logo_big.png"
  },
  {
    name: "ATA Research Group",
    img: "/list_colab/logo_h_ ATA.png"
  },
  {
    name: "Katholieke Universiteit Leuven",
    img: "/list_colab/colab_10.png"
  },
  {
    name: "Embedded and Artificially intelligent VISion Engineering",
    img: "/list_colab/eavise_logo.png"
  },
  {
    name: "Instituto Nacional de Investigación Agropecuarias",
    img: "/list_colab/colab_11.png"
  },
  {
    name: "Delgado Pitahaya",
    img: "/images/pitahaya_logo.jpg"
  },
];



const Home = () => {
  const { language, translations } = useContext(LanguageContext);
  const currentTranslations = translations[language];



  // Generar imágenes dinámicamente con traducciones
  const images = [
    {
      src: "/images/team_drone.jpg",
      alt: "Imagen principal 1",
      title: currentTranslations.mainTitle || "Sembrando tecnología, cosechando Futuro",
      description: currentTranslations.mainSubTitle || "Agricultura inteligente para comunidades resilientes",
    },
    {
      src: "/images/gallery_1.jpg",
      alt: "Imagen principal 2",
      title: currentTranslations.mainTitle2 || "Innovar para cultivar con conciencia",
      description: currentTranslations.mainSubTitle2 || "Sostenibilidad y tecnología al servicio del agricultor",
    },
    {
      src: "/images/monitoreo.jpeg",
      alt: "Monitoreo Inteligente",
      title: currentTranslations.mainTitle3 || "Más allá del Cultivo",
      description: currentTranslations.mainSubTitle3 || "Cómo la pitahaya impulsa inclusión, ingresos y esperanza",
    },
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.setAttribute('data-elfsight-app-lazy', '');
    document.body.appendChild(script);
  }, []);

  return (
    <div className="" >
      {/* Contenedor del carrusel */}
      <section className="relative w-full mx-auto text-center">
        <CarouselImg images={images} />
      </section>


      {/* Sección principal del proyecto */}
      <section className="text-center bg-gray-300  p-[10vw] pt-8 pb-8 shadow-lg">
        <h1 style={{ textTransform: 'uppercase' }}>
          {/*currentTranslations.mainTitle*/}
        </h1>
        <p className="mt-4 text-xl  ">{currentTranslations.projectDescription1}</p>
        <div className="flex flex-wrap justify-center gap-10 mt-14 m-14 text-light-green-800 text-6xl sm:text-4xl md:text-5xl">
          <div className="text-center flex-1 min-w-[120px]">
            <FontAwesomeIcon icon="fa-solid fa-desktop" />
            <p className="text-xl mt-2">{currentTranslations.projectsubDescription1}</p>

          </div>
          <div className="text-center flex-1 min-w-[120px]">
            <FontAwesomeIcon icon="fa-solid fa-robot" />
            <p className="text-xl mt-2">{currentTranslations.projectsubDescription2}</p>
          </div>
          <div className="text-center flex-1 min-w-[120px]">
            <FontAwesomeIcon icon="fa-solid fa-chart-line" />
            <p className="text-xl mt-2">{currentTranslations.projectsubDescription3}</p>
          </div>
        </div>
        <p className="mt-4 text-xl  ">{currentTranslations.projectDescription2}</p>
      </section>

      {/* Nueva Sección Sobre el proyecto */}
      <section id="sobre-el-proyecto" className="text-center  p-[10vw] pt-8 pb-8 ">
        <h2 className="text-5xl font-bold mb-8">{currentTranslations.aboutProject}</h2>

        {/* Sección de Objetivos */}
        <div className="flex flex-col md:flex-row items-center mb-10">
          {/* Texto a la izquierda */}
          <div className="md:w-1/2  text-left p-4">
            <h3 className="text-3xl font-semibold mb-4">{currentTranslations.newThemeTitle}</h3>
            <br />
            <br />
            <p className="text-xl text-justify">{currentTranslations.newThemeDescription}
              <br />
              <br />
              <br />
              <Link to="/que-hacemos" className="text-white">
                <Button size="lg" className="bg-primary hover:bg-green-700 text-center normal-case">
                  ¿{currentTranslations.buttonText2}?

                </Button></Link>
            </p>
          </div>
          {/* Imagen a la derecha */}
          <div className="md:w-1/2 p-4 flex justify-center">
            <img
              src="/images/postal.jpeg"
              alt="Objetivos del Proyecto"
              className="w-full h-full object-cover rounded-lg shadow-md" // Cambiado a w-full y h-full
            />
          </div>
        </div>
        <br />

        {/* Sección de Líneas de Investigación */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 text-left p-4">
            <h3 className="text-3xl font-semibold mb-4">{currentTranslations.newLines}</h3>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Línea 1 */}
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-4">
                  <span className="text-primary text-4xl"><FontAwesomeIcon icon="fa-solid fa-seedling" /></span>
                </div>
                <p className="text-xl text-justify">{currentTranslations.newLinesDescription1}</p>
              </div>
              {/* Línea 2 */}
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-4">
                  <span className="text-primary text-4xl"><FontAwesomeIcon icon="fa-solid fa-brain" /></span>
                </div>
                <p className="text-xl text-justify">{currentTranslations.newLinesDescription2}</p>
              </div>
              {/* Línea 3 */}
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-4">
                  <span className="text-primary text-4xl"><FontAwesomeIcon icon="fa-solid fa-droplet" /></span>
                </div>
                <p className="text-xl text-justify">{currentTranslations.newLinesDescription3}</p>
              </div>
              {/* Línea 4 */}
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-4">
                  <span className="text-primary text-4xl"><FontAwesomeIcon icon="fa-solid fa-building-wheat" /></span>
                </div>
                <p className="text-xl text-justify">{currentTranslations.newLinesDescription4}</p>
              </div>
            </div>
          </div>
          {/* Imagen a la izquierda */}
          <div className="md:w-1/2 p-4 flex justify-center">
            <img
              src="/images/drone_1.jpg"
              alt="Líneas de Investigación"
              className="w-full h-full object-cover rounded-lg shadow-md " // Cambiado a w-full y h-full
            />
          </div>
        </div>
      </section>


      {/* Sponsor principal*/}
      <section className="text-center bg-gray-300 p-[10vw] pt-8 pb-8 ">
        <div className=" flex flex-col md:flex-row items-center mb-10">
          {/* Texto a la izquierda */}
          <div className="md:w-1/2  text-left p-4">
            <h3 className="text-3xl font-semibold mb-4">{currentTranslations.newSponsorTitle}</h3>
            <br />
            <p className="text-xl text-justify">{currentTranslations.newSponsorDescription}</p>
          </div>
          {/* Imagen a la derecha */}
          <div className="md:w-1/2 p-4 flex justify-center">
            <img src="/images/vliruos.png" alt="vliruos logo" className="max-w-full h-auto rounded-lg shadow-md" />
          </div>
          <br />
        </div>
      </section>

      {/* Sección de sponsors participantes */}
      <section className="text-center px-[10vw] pt-8 pb-8">
        <h2 className="text-5xl font-bold mb-8">{currentTranslations.sponsorsTitle}</h2>

        {/* Logos principales (arriba en grid de 4 columnas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {sponsors.slice(0, 4).map((sponsor) => (
            <div key={sponsor.name} className="flex flex-col items-center text-center">
              <div className="h-[100px] flex items-center justify-center">
                <img
                  src={sponsor.img}
                  alt={sponsor.name}
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-base mt-2">{sponsor.name}</h3>
            </div>
          ))}
        </div>

        {/* Logos restantes (centrados abajo) */}
        <div className="flex flex-wrap justify-center gap-10">
          {sponsors.slice(4).map((sponsor) => (
            <div key={sponsor.name} className="flex flex-col items-center text-center">
              <div className="h-[100px] flex items-center justify-center">
                <img
                  src={sponsor.img}
                  alt={sponsor.name}
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-base mt-2">{sponsor.name}</h3>
            </div>
          ))}
        </div>
      </section>



      {/* Sección de patrocinadores */}
      {/*<section className="text-center p-[10vw] pt-8 pb-8 ">
        <h2 className="text-5xl font-bold mb-8">{currentTranslations.sponsorsTitle}</h2>
        <div className="overflow-hidden">
          <div className="flex items-center  space-x-8">
            <div className="flex text-center space-x-8">
              {sponsors.map((sponsor) => (
                <div className="text-center mx-4" key={sponsor.name}>
                  <img
                    src={sponsor.img}
                    alt={sponsor.name}
                    className="w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto object-contain mx-auto"
                  />
                  <h3>{sponsor.name}</h3>
                </div>
              ))}
            </div>
            Repetimos las imágenes para lograr el ciclo de movimiento 
              {sponsors.map((sponsor) => (
                <div className="text-center mx-4" key={sponsor.name}>
                  <img
                    src={sponsor.img}
                    alt={sponsor.name}
                    className="w-20  sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto object-contain mx-auto"
                  />
                  <h3>{sponsor.name}</h3>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section> */}




      {/* Contenedor de los miembros del equipo */}
      <section className="text-center p-[10vw] bg-gray-300 pt-8 pb-8 ">
        <h2 className="text-5xl font-bold mb-8">{currentTranslations.teamTitle}</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.name}>
              <OurTeamCard
                member={member}
                translation={currentTranslations.teamMembers[member.name]} // Pasamos la info traducida
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </section>

      <section className="text-center px-[10vw] pt-8 pb-8 bg-white">
        <div className="elfsight-app-29264217-0f61-4414-a027-48359c08ed39" data-elfsight-app-lazy></div>
      </section>


    </div>
  );
};

export default Home;
