import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
}

const TestimonialsSlider = () => {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Données des témoignages
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: i18n.language === 'ar' ? 
        "مكّننا DP-Manager من تحقيق الامتثال في مؤسستنا خلال بضعة أسابيع فقط. الدعم القانوني وسهولة الاستخدام كانا فعلاً مميّزين." :
        "DP-Manager nous a permis de mettre en conformité notre organisation en quelques semaines. L'accompagnement juridique et la simplicité d'utilisation sont remarquables.",
      author: i18n.language === 'ar' ? "السيد إلياس معتوق" : "M. Lyes MATOUG",
      position: i18n.language === 'ar' ? "مسؤول حماية البيانات" : "DPO",
      company: i18n.language === 'ar' ? "شركة كوندور" : "SPA Condor",
      avatar: "Lyes_Matoug.png"
    },
    // Témoignages temporairement désactivés en attente des consentements
    // {
    //   id: 2,
    //   quote: "Grâce à DP-Manager, nous avons automatisé notre registre des traitements et gagné un temps précieux. La plateforme est intuitive et parfaitement adaptée à la loi 18-07.",
    //   author: "M. Ahmed Khelifi",
    //   position: "Responsable Conformité",
    //   company: "Banque "
    // },
    // {
    //   id: 3,
    //   quote: "L'équipe DP-Manager nous a accompagnés avec professionnalisme. Aujourd'hui, nous sommes sereins face aux contrôles de l'ANPDP.",
    //   author: "Mme. Fatima Zerrouki",
    //   position: "Directrice Juridique",
    //   company: "Sonatech"
    // },
    // {
    //   id: 4,
    //   quote: "Une solution complète qui couvre tous nos besoins de conformité. Le support client est exceptionnel et toujours disponible.",
    //   author: "M. Karim Messaoud",
    //   position: "DSI",
    //   company: "SPA Greenp"
    // },
    // {
    //   id: 5,
    //   quote: "DP-Manager a transformé notre approche de la protection des données. Nous recommandons vivement cette solution à toutes les entreprises algériennes.",
    //   author: "Mme. Amina Boudiaf",
    //   position: "Responsable Qualité",
    //   company: "Ministère "
    // }
  ];

  // Navigation automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change toutes les 6 secondes

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {i18n.language === 'ar' ? 'استمعوا إلى تجارب عملائنا' : 'Ce que disent nos clients'}
          </h2>
          <p className="text-xl text-gray-600">
            {i18n.language === 'ar' ? 'واكتشفوا لماذا يثقون بنا' : 'Découvrez les témoignages de nos clients satisfaits'}
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Content */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6">
              <Quote className="h-8 w-8 text-violet-200" />
            </div>

            {/* Quote Text */}
            <blockquote className="text-xl md:text-2xl font-medium text-blue-900 mb-8 leading-relaxed text-center italic">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              {currentTestimonial.avatar ? (
                <img
                  src={`/${currentTestimonial.avatar}`}
                  alt={currentTestimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-violet-200"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              ) : null}
              <div 
                className={`w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center ${currentTestimonial.avatar ? 'hidden' : ''}`}
              >
                <span className="text-violet-600 font-bold text-lg">
                  {currentTestimonial.author.split(' ').map(name => name.charAt(0)).join('')}
                </span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-blue-900 text-lg">
                  {currentTestimonial.author}
                </p>
                <p className="text-gray-600">
                  {currentTestimonial.position}, {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="h-6 w-6 text-blue-900" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="h-6 w-6 text-blue-900" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-violet-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">
            {currentIndex + 1} / {testimonials.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;