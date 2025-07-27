import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Clock, Eye } from 'lucide-react';

const VideosPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    {
      title: isRTL ? "DP-Manager في 3 دقائق - عرض توضيحي" : "DP-Manager en 3 minutes - Démonstration",
      description: isRTL ? "اكتشفوا الميزات الأساسية لمنصة DP-Manager" : "Découvrez les fonctionnalités essentielles de la plateforme DP-Manager",
      duration: "3:24",
      views: "1,245",
      thumbnail: "https://img.youtube.com/vi/P9QeLGX6Vz0/maxresdefault.jpg",
      videoId: "P9QeLGX6Vz0",
      category: isRTL ? "عرض توضيحي" : "Démonstration"
    },
    {
      title: isRTL ? "فهم القانون 18-07: الأساسيات" : "Comprendre la loi 18-07 : Les fondamentaux",
      description: isRTL ? "شرح مبسط للقانون الجزائري لحماية البيانات الشخصية" : "Explication simplifiée de la loi algérienne sur la protection des données personnelles",
      duration: "12:45",
      views: "2,156",
      thumbnail: "/api/placeholder/640/360",
      videoId: "placeholder1",
      category: isRTL ? "تعليمي" : "Éducatif"
    },
    {
      title: isRTL ? "إنشاء سجل المعالجات خطوة بخطوة" : "Créer son registre des traitements étape par étape",
      description: isRTL ? "دليل عملي لإنشاء سجل معالجات متوافق مع القانون" : "Guide pratique pour créer un registre conforme à la réglementation",
      duration: "18:32",
      views: "1,876",
      thumbnail: "/api/placeholder/640/360",
      videoId: "placeholder2",
      category: isRTL ? "دليل عملي" : "Guide pratique"
    },
    {
      title: isRTL ? "إدارة طلبات الحقوق: أفضل الممارسات" : "Gestion des demandes de droits : Bonnes pratiques",
      description: isRTL ? "كيفية التعامل مع طلبات الأشخاص المعنيين بفعالية" : "Comment traiter efficacement les demandes des personnes concernées",
      duration: "15:20",
      views: "1,432",
      thumbnail: "/api/placeholder/640/360",
      videoId: "placeholder3",
      category: isRTL ? "امتثال" : "Conformité"
    },
    {
      title: isRTL ? "الأمان التقني وحماية البيانات" : "Sécurité technique et protection des données",
      description: isRTL ? "التدابير التقنية الأساسية لحماية البيانات الشخصية" : "Mesures techniques essentielles pour protéger les données personnelles",
      duration: "22:15",
      views: "987",
      thumbnail: "/api/placeholder/640/360",
      videoId: "placeholder4",
      category: isRTL ? "أمان" : "Sécurité"
    },
    {
      title: isRTL ? "شهادات العملاء: تجارب حقيقية" : "Témoignages clients : Expériences réelles",
      description: isRTL ? "عملاؤنا يشاركون تجاربهم مع DP-Manager" : "Nos clients partagent leur expérience avec DP-Manager",
      duration: "8:45",
      views: "2,345",
      thumbnail: "/api/placeholder/640/360",
      videoId: "placeholder5",
      category: isRTL ? "شهادات" : "Témoignages"
    }
  ];

  const categories = [
    { name: isRTL ? "الكل" : "Toutes", value: "all" },
    { name: isRTL ? "عرض توضيحي" : "Démonstration", value: "demo" },
    { name: isRTL ? "تعليمي" : "Éducatif", value: "educatif" },
    { name: isRTL ? "دليل عملي" : "Guide pratique", value: "guide" },
    { name: isRTL ? "امتثال" : "Conformité", value: "conformite" },
    { name: isRTL ? "أمان" : "Sécurité", value: "securite" }
  ];

  const handleVideoClick = (videoId: string) => {
    if (videoId !== 'placeholder1' && videoId !== 'placeholder2' && videoId !== 'placeholder3' && videoId !== 'placeholder4' && videoId !== 'placeholder5') {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    }
  };

  return (
    <div className="pt-16" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-violet-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isRTL ? 'مكتبة الفيديوهات' : 'Bibliothèque vidéo'}
          </h1>
          <p className="text-xl text-blue-100">
            {isRTL ? 'فيديوهات تعليمية وعروض توضيحية لإتقان القانون 18-07' : 'Vidéos éducatives et démonstrations pour maîtriser la loi 18-07'}
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0 
                    ? 'bg-violet-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-violet-50 hover:text-violet-600 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <Play className="h-8 w-8 text-violet-600" />
            <h2 className="text-3xl font-bold text-blue-900">
              {isRTL ? 'الفيديوهات المتاحة' : 'Vidéos disponibles'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Video Thumbnail */}
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => handleVideoClick(video.videoId)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDY0MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2NDAiIGhlaWdodD0iMzYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yODAgMTYwTDM2MCAyMDBMMjgwIDI0MFYxNjBaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjMyMCIgeT0iMjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3Mjg0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+Vmlkw6lvPC90ZXh0Pgo8L3N2Zz4K';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-4">
                      <Play className="h-8 w-8 text-violet-600" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-violet-100 text-violet-800 text-xs font-medium px-2 py-1 rounded">
                      {video.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>{video.views} {isRTL ? 'مشاهدة' : 'vues'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-violet-600 text-white px-8 py-3 rounded-lg hover:bg-violet-700 transition-colors font-medium">
              {isRTL ? 'تحميل المزيد من الفيديوهات' : 'Charger plus de vidéos'}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              {isRTL ? 'فيديو مميز' : 'Vidéo à la une'}
            </h3>
            <p className="text-gray-600">
              {isRTL ? 'اكتشفوا DP-Manager في 3 دقائق فقط' : 'Découvrez DP-Manager en seulement 3 minutes'}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/P9QeLGX6Vz0"
                title="DP-Manager - Vidéo de présentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideosPage;