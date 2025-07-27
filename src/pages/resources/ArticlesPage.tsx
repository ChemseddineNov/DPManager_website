import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const ArticlesPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      title: isRTL ? 
        "كيفية إنشاء سجل معالجات متوافق؟" : 
        "Comment mettre en place un registre des traitements conforme ?",
      date: isRTL ? "15 يناير 2025" : "15 Janvier 2025",
      excerpt: isRTL ? 
        "دليل عملي لإنشاء وصيانة سجلكم وفقاً لمتطلبات القانون 18-07..." :
        "Guide pratique pour créer et maintenir votre registre selon les exigences de la loi 18-07...",
      category: isRTL ? "دليل عملي" : "Guide pratique",
      readTime: isRTL ? "5 دقائق قراءة" : "5 min de lecture"
    },
    {
      title: isRTL ? 
        "إدارة الموافقات: أفضل الممارسات" : 
        "Gestion des consentements : meilleures pratiques",
      date: isRTL ? "10 يناير 2025" : "10 Janvier 2025",
      excerpt: isRTL ? 
        "التقنيات المجربة لجمع وإدارة الموافقات بطريقة قانونية..." :
        "Les techniques éprouvées pour recueillir et gérer les consentements de manière légale...",
      category: isRTL ? "امتثال" : "Conformité",
      readTime: isRTL ? "7 دقائق قراءة" : "7 min de lecture"
    },
    {
      title: isRTL ? 
        "المناولة وحماية البيانات: ما يجب معرفته" : 
        "Sous-traitance et protection des données : ce qu'il faut savoir",
      date: isRTL ? "5 يناير 2025" : "5 Janvier 2025",
      excerpt: isRTL ? 
        "كيفية تأمين علاقاتكم مع المتعاقدين من الباطن قانونياً..." :
        "Comment sécuriser juridiquement vos relations avec les sous-traitants de données...",
      category: isRTL ? "قانوني" : "Juridique",
      readTime: isRTL ? "6 دقائق قراءة" : "6 min de lecture"
    },
    {
      title: isRTL ? 
        "عقوبات القانون 18-07: تحليل الحالات الأولى" : 
        "Sanctions de la loi 18-07 : analyse des premiers cas",
      date: isRTL ? "28 ديسمبر 2024" : "28 Décembre 2024",
      excerpt: isRTL ? 
        "تجربة مستفادة من العقوبات الأولى المطبقة والدروس المستخلصة..." :
        "Retour d'expérience sur les premières sanctions appliquées et les enseignements...",
      category: isRTL ? "تحليل" : "Analyse",
      readTime: isRTL ? "8 دقائق قراءة" : "8 min de lecture"
    },
    {
      title: isRTL ? 
        "حقوق الأشخاص المعنيين: دليل شامل" : 
        "Droits des personnes concernées : guide complet",
      date: isRTL ? "20 ديسمبر 2024" : "20 Décembre 2024",
      excerpt: isRTL ? 
        "كل ما تحتاجون لمعرفته حول حقوق الأشخاص وكيفية الاستجابة لطلباتهم..." :
        "Tout ce que vous devez savoir sur les droits des personnes et comment répondre à leurs demandes...",
      category: isRTL ? "حقوق" : "Droits",
      readTime: isRTL ? "10 دقائق قراءة" : "10 min de lecture"
    },
    {
      title: isRTL ? 
        "الأمان التقني: متطلبات القانون 18-07" : 
        "Sécurité technique : exigences de la loi 18-07",
      date: isRTL ? "15 ديسمبر 2024" : "15 Décembre 2024",
      excerpt: isRTL ? 
        "التدابير التقنية والتنظيمية الواجب تطبيقها لحماية البيانات الشخصية..." :
        "Les mesures techniques et organisationnelles à mettre en place pour protéger les données personnelles...",
      category: isRTL ? "أمان" : "Sécurité",
      readTime: isRTL ? "12 دقائق قراءة" : "12 min de lecture"
    }
  ];

  const categories = [
    { name: isRTL ? "الكل" : "Tous", value: "all" },
    { name: isRTL ? "دليل عملي" : "Guide pratique", value: "guide" },
    { name: isRTL ? "امتثال" : "Conformité", value: "conformite" },
    { name: isRTL ? "قانوني" : "Juridique", value: "juridique" },
    { name: isRTL ? "أمان" : "Sécurité", value: "securite" }
  ];

  return (
    <div className="pt-16" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-violet-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isRTL ? 'مقالات تنظيمية' : 'Articles réglementaires'}
          </h1>
          <p className="text-xl text-blue-100">
            {isRTL ? 'مقالات متخصصة لفهم وتطبيق القانون 18-07 بفعالية' : 'Articles spécialisés pour comprendre et appliquer efficacement la loi 18-07'}
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

      {/* Articles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <BookOpen className="h-8 w-8 text-violet-600" />
            <h2 className="text-3xl font-bold text-blue-900">
              {isRTL ? 'أحدث المقالات' : 'Derniers articles'}
            </h2>
          </div>

          <div className="space-y-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-violet-100 text-violet-800 text-xs font-medium px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3 hover:text-violet-600 transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center space-x-2 text-violet-600 hover:text-violet-700 font-medium transition-colors">
                    <span>{isRTL ? 'اقرأ المزيد' : 'Lire la suite'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{isRTL ? '👁️ 245 مشاهدة' : '👁️ 245 vues'}</span>
                    <span>{isRTL ? '💬 12 تعليق' : '💬 12 commentaires'}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-violet-600 text-white px-8 py-3 rounded-lg hover:bg-violet-700 transition-colors font-medium">
              {isRTL ? 'تحميل المزيد من المقالات' : 'Charger plus d\'articles'}
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            {isRTL ? 'ابقوا على اطلاع' : 'Restez informé'}
          </h3>
          <p className="text-gray-700 mb-6">
            {isRTL ? 
              'اشتركوا في نشرتنا الإخبارية لتلقي أحدث المقالات والتحديثات حول القانون 18-07' :
              'Abonnez-vous à notre newsletter pour recevoir les derniers articles et mises à jour sur la loi 18-07'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder={isRTL ? 'بريدكم الإلكتروني' : 'Votre email'}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors font-medium">
              {isRTL ? 'اشتراك' : 'S\'abonner'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;