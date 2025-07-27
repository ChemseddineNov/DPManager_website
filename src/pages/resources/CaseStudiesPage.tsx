import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Building, Users, CheckCircle, ArrowRight } from 'lucide-react';

const CaseStudiesPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      title: isRTL ? "مؤسسة عمومية - وزارة" : "Organisme public - Ministère",
      sector: isRTL ? "القطاع العام" : "Secteur public",
      employees: "500+",
      challenge: isRTL ? 
        "تحدي الامتثال للقانون 18-07 مع إدارة آلاف المعالجات وضمان الشفافية الكاملة" :
        "Défi de mise en conformité à la loi 18-07 avec gestion de milliers de traitements et transparence totale",
      solution: isRTL ?
        "تطبيق DP-Manager لأتمتة سجل المعالجات وإدارة طلبات الحقوق" :
        "Déploiement de DP-Manager pour automatiser le registre des traitements et gérer les demandes de droits",
      results: [
        isRTL ? "100% امتثال في 6 أسابيع" : "100% de conformité en 6 semaines",
        isRTL ? "تقليل 80% من الوقت الإداري" : "80% de réduction du temps administratif",
        isRTL ? "معالجة 200+ طلب حقوق" : "200+ demandes de droits traitées"
      ],
      testimonial: isRTL ?
        "DP-Manager مكننا من تحقيق الامتثال الكامل بسرعة وفعالية مذهلة" :
        "DP-Manager nous a permis d'atteindre une conformité totale avec une rapidité et une efficacité remarquables",
      author: isRTL ? "مدير الشؤون القانونية" : "Directeur des Affaires Juridiques"
    },
    {
      title: isRTL ? "شركة صناعية كبرى" : "Grande entreprise industrielle",
      sector: isRTL ? "الصناعة" : "Industrie",
      employees: "1200+",
      challenge: isRTL ?
        "إدارة معقدة للبيانات عبر مواقع متعددة مع متطلبات أمان عالية" :
        "Gestion complexe des données sur plusieurs sites avec exigences de sécurité élevées",
      solution: isRTL ?
        "نشر DP-Manager مع تكامل أنظمة المعلومات الموجودة" :
        "Déploiement de DP-Manager avec intégration aux SI existants",
      results: [
        isRTL ? "توحيد إدارة البيانات" : "Unification de la gestion des données",
        isRTL ? "تحسين 90% في أوقات الاستجابة" : "90% d'amélioration des temps de réponse",
        isRTL ? "امتثال كامل عبر جميع المواقع" : "Conformité totale sur tous les sites"
      ],
      testimonial: isRTL ?
        "حل شامل ومرن تكيف مع احتياجاتنا المعقدة بشكل مثالي" :
        "Solution complète et flexible qui s'est parfaitement adaptée à nos besoins complexes",
      author: isRTL ? "مسؤول حماية البيانات" : "Délégué à la Protection des Données"
    },
    {
      title: isRTL ? "مؤسسة مالية" : "Institution financière",
      sector: isRTL ? "الخدمات المالية" : "Services financiers",
      employees: "300+",
      challenge: isRTL ?
        "متطلبات امتثال صارمة مع حجم كبير من البيانات الحساسة" :
        "Exigences de conformité strictes avec un volume important de données sensibles",
      solution: isRTL ?
        "تطبيق DP-Manager مع وحدات أمان متقدمة" :
        "Implémentation de DP-Manager avec modules de sécurité avancés",
      results: [
        isRTL ? "أمان معزز للبيانات" : "Sécurité renforcée des données",
        isRTL ? "تتبع كامل للمعالجات" : "Traçabilité complète des traitements",
        isRTL ? "تقارير امتثال آلية" : "Rapports de conformité automatisés"
      ],
      testimonial: isRTL ?
        "الثقة والأمان اللذان نحتاجهما لحماية بيانات عملائنا" :
        "La confiance et la sécurité dont nous avons besoin pour protéger les données de nos clients",
      author: isRTL ? "مدير المخاطر والامتثال" : "Directeur Risques et Conformité"
    }
  ];

  const sectors = [
    { name: isRTL ? "الكل" : "Tous", value: "all" },
    { name: isRTL ? "القطاع العام" : "Secteur public", value: "public" },
    { name: isRTL ? "الصناعة" : "Industrie", value: "industrie" },
    { name: isRTL ? "الخدمات المالية" : "Services financiers", value: "finance" },
    { name: isRTL ? "الصحة" : "Santé", value: "sante" },
    { name: isRTL ? "التعليم" : "Éducation", value: "education" }
  ];

  return (
    <div className="pt-16" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-violet-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isRTL ? 'دراسات الحالة' : 'Études de cas'}
          </h1>
          <p className="text-xl text-blue-100">
            {isRTL ? 'تجارب حقيقية لمؤسسات حققت الامتثال مع DP-Manager' : 'Expériences réelles d\'organisations ayant réussi leur conformité avec DP-Manager'}
          </p>
        </div>
      </section>

      {/* Sectors Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {sectors.map((sector, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0 
                    ? 'bg-violet-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-violet-50 hover:text-violet-600 border border-gray-200'
                }`}
              >
                {sector.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <FileText className="h-8 w-8 text-violet-600" />
            <h2 className="text-3xl font-bold text-blue-900">
              {isRTL ? 'قصص نجاح عملائنا' : 'Histoires de succès de nos clients'}
            </h2>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-violet-50 to-blue-50 p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">{study.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full font-medium">
                          {study.sector}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{study.employees} {isRTL ? 'موظف' : 'employés'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Challenge & Solution */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-900 mb-3">
                          {isRTL ? '🎯 التحدي' : '🎯 Défi'}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-blue-900 mb-3">
                          {isRTL ? '💡 الحل' : '💡 Solution'}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-lg font-bold text-blue-900 mb-4">
                        {isRTL ? '📈 النتائج' : '📈 Résultats'}
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Testimonial */}
                      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                        <blockquote className="text-blue-900 font-medium italic mb-3">
                          "{study.testimonial}"
                        </blockquote>
                        <cite className="text-blue-700 text-sm font-medium">
                          — {study.author}
                        </cite>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-8 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {isRTL ? 'مشروع مكتمل بنجاح' : 'Projet réalisé avec succès'}
                    </span>
                    <button className="inline-flex items-center space-x-2 text-violet-600 hover:text-violet-700 font-medium text-sm transition-colors">
                      <span>{isRTL ? 'اقرأ التفاصيل الكاملة' : 'Lire l\'étude complète'}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              {isRTL ? 'نتائج مثبتة' : 'Résultats prouvés'}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-600 mb-2">50+</div>
              <p className="text-gray-700 font-medium">
                {isRTL ? 'مؤسسة مرافقة' : 'Organisations accompagnées'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-700 font-medium">
                {isRTL ? 'معدل الرضا' : 'Taux de satisfaction'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">6</div>
              <p className="text-gray-700 font-medium">
                {isRTL ? 'أسابيع متوسط التطبيق' : 'Semaines de déploiement moyen'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">80%</div>
              <p className="text-gray-700 font-medium">
                {isRTL ? 'توفير في الوقت' : 'Gain de temps moyen'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-violet-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            {isRTL ? 'هل تريدون أن تكونوا قصة النجاح التالية؟' : 'Prêt à devenir notre prochaine success story ?'}
          </h3>
          <p className="text-blue-100 mb-8">
            {isRTL ? 
              'انضموا إلى المؤسسات التي حققت الامتثال بنجاح مع DP-Manager' :
              'Rejoignez les organisations qui ont réussi leur conformité avec DP-Manager'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {isRTL ? 'طلب عرض توضيحي' : 'Demander une démonstration'}
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isRTL ? 'تحدث مع خبير' : 'Parler à un expert'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;