import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ClientLogos = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Liste des 21 logos dans l'ordre
  const logoFiles = [
    'client1.png',
    'client2.png', 
    'client3.png',
    'client4.png',
    'client5.jpg',
    'client6.jpg',
    'client7.webp',
    'client8.png',
    'client9.jpg',
    'client10.png',
    'client11.png',
    'client12.jpg',
    'client13.png',
    'client14.png',
    'client15.png',
    'client16.png',
    'client17.jpg',
    'client18.jpg',
    'client19.png',
    'client20.png',
    'client21.png'
  ];

  // Première ligne : ordre normal (1, 2, 3, ...)
  const firstRowLogos = [...logoFiles, ...logoFiles]; // Dupliquer pour défilement infini

  // Deuxième ligne : ordre inverse (21, 20, 19, ...)
  const secondRowLogos = [...logoFiles.reverse(), ...logoFiles]; // Dupliquer pour défilement infini

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      {/* Première ligne - défilement de gauche à droite */}
      <div className="relative mb-6">
        {/* Gradient de fondu sur les côtés */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* Bannière déroulante première ligne */}
        <div className="flex animate-scroll">
          {firstRowLogos.map((logoFile, index) => (
            <div
              key={`row1-${logoFile}-${index}`}
              className="flex-shrink-0 mx-6 flex items-center justify-center"
              style={{ minWidth: '160px', height: '60px' }}
            >
              <img
                src={`/nosréférences/${logoFile}`}
                alt={`Client ${index + 1}`}
                className="max-h-12 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  // Si l'image ne charge pas, la cacher
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Deuxième ligne - défilement de droite à gauche */}
      <div className="relative">
        {/* Gradient de fondu sur les côtés */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* Bannière déroulante deuxième ligne */}
        <div className="flex animate-scroll-reverse">
          {secondRowLogos.map((logoFile, index) => (
            <div
              key={`row2-${logoFile}-${index}`}
              className="flex-shrink-0 mx-6 flex items-center justify-center"
              style={{ minWidth: '160px', height: '60px' }}
            >
              <img
                src={`/nosréférences/${logoFile}`}
                alt={`Client ${index + 1}`}
                className="max-h-12 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  // Si l'image ne charge pas, la cacher
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bouton vers la page références */}
      <div className="text-center mt-8">
        <Link
          to="/references"
          className="inline-flex items-center space-x-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
        >
          <span>
            {isRTL ? 'اطلعوا على جميع عملائنا' : 'Voir tous nos clients'}
          </span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default ClientLogos;