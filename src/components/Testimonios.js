import React, { useContext, useEffect, useRef, useState } from 'react';
import './styles/Testimonios.css';
import { LanguageContext } from './context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faMapMarkerAlt,
  faRobot,
  faChartBar,
  faUsers,
  faChevronRight,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

function Hacemos() {
  const { language, translations } = useContext(LanguageContext);
  const currentTranslations = translations[language];
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  
  const icons = [faSearch, faMapMarkerAlt, faRobot, faChartBar, faUsers];
  const colors = [
    'from-green-500 to-teal-600',
    'from-blue-500 to-cyan-600',
    'from-purple-500 to-indigo-600',
    'from-orange-500 to-red-600',
    'from-pink-500 to-rose-600',
  ];


  const testimoniosData = [
    {
      id: 1,
      title: translations[language].testimonios.title1,
      content: translations[language].testimonios.content1,
      image: "/we_does/cultivo_1.png",
    },
    {
      id: 2,
      title: translations[language].testimonios.title2,
      content: translations[language].testimonios.content2,
      image: "/we_does/cultivo_2.png",
    },
    {
      id: 3,
      title: translations[language].testimonios.title3,
      content: translations[language].testimonios.content3,
      image: "/images/scan.jpg",
    },
    {
      id: 4,
      title: translations[language].testimonios.title4,
      content: translations[language].testimonios.content4,
      image: "/we_does/cultivo_5.png",
    },
    {
      id: 5,
      title: translations[language].testimonios.title5,
      content: translations[language].testimonios.content5,
      image: "/images/principal2.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <section className="relative py-8 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-4xl font-black text-primary bg-clip-text mb-8 leading-tight">
            {currentTranslations.whatWeDo}
          </h2>

          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-gray-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-gray-600 rounded-full"></div>
          </div>

          <p className="text-xl max-w-5xl mx-auto leading-relaxed font-light">
            {currentTranslations.whatWeDoDescription}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-600 via-blue-600 via-purple-600 via-orange-600 to-pink-600 rounded-full"></div>

          <div className="space-y-24">
            {testimoniosData.map((testimonio, index) => {
              const icon = icons[index];
              const colorClass = colors[index];
              const isVisible = visibleItems.includes(index);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={testimonio.id}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`relative transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                  }`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-20">
                    <div className={`w-16 h-16 bg-gradient-to-r ${colorClass} rounded-full flex items-center justify-center shadow-2xl border-4 border-gray-900 hover:scale-125 transition-all duration-300`}>
                      <FontAwesomeIcon icon={icon} className="w-8 h-8 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${colorClass} rounded-full animate-ping opacity-20`}></div>
                  </div>

                  <div className={`flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full max-w-lg ${isLeft ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}>
                      <div className="bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group">
                        <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r ${colorClass} rounded-lg text-white font-bold text-sm mb-6`}>
                          {index + 1}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                          {testimonio.title}
                        </h3>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {testimonio.content}
                        </p>

                        <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500">
                          <img
                            src={testimonio.image}
                            alt={testimonio.title}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < testimoniosData.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-12 z-10">
                      <FontAwesomeIcon icon={faArrowDown} className="w-6 h-6 text-gray-500 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hacemos;
