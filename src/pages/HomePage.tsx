import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, FileText, Users, Shield, Play, Download, ArrowRight } from 'lucide-react';
import ClientLogos from '../components/ClientLogos';
import TestimonialsSlider from '../components/TestimonialsSlider';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-violet-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-center lg:text-left">
                {t('home.hero.title')}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/demo"
                  className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 text-center"
                >
                  {t('home.hero.ctaPrimary')}
                </Link>
            <a
    href={
    i18n.language === 'ar'
      ? '/Dp-manager_fiche_technique_ar.pdf'
      : '/Dp-manager_fiche_technique.pdf'
  }
  target="_blank"
  rel="noopener noreferrer"
  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
>
  <Download className="h-5 w-5" />
  <span>{i18n.language === 'ar' ? 'تحميل البطاقة التقنية' : 'Télécharger la fiche technique'}</span>
</a>

              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
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
                <div className="text-center mt-4">
                  <p className="text-white/80 font-medium">{t('home.hero.videoTitle')}</p>
                  <p className="text-white/60 text-sm">{t('home.hero.videoSubtitle')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">{t('home.clients.subtitle')}</h2>
          <ClientLogos />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-violet-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{t('home.features.registry.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('home.features.registry.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">{t('home.features.registry.feature1')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">{t('home.features.registry.feature2')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-violet-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{t('home.features.subcontractors.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('home.features.subcontractors.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">{t('home.features.subcontractors.feature1')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">{t('home.features.subcontractors.feature2')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-violet-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{t('home.features.consent.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('home.features.consent.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">{t('home.features.consent.feature1')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">{t('home.features.consent.feature2')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>




      {/* Why DP-Manager Section */}
      <section className="py-20 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              {t('home.why.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {i18n.language === 'ar' ? 'معتمدة ومجربة' : 'Déjà adoptée'}
              </h3>
              <p className="text-gray-600">
                {i18n.language === 'ar' ? 
                  'تستخدمها مؤسسات خاصة وجهات عمومية جزائرية لتحقيق الامتثال بفعالية' : 
                  'Utilisé par des entreprises privées et organismes publics algériens'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {i18n.language === 'ar' ? 'امتثال رسمي مضمون' : 'Conformité officielle garantie'}
              </h3>
              <p className="text-gray-600">
                {i18n.language === 'ar' ? 
                  'يعتمد على القانون والتوصيات الصادرة عن السلطة الوطنية لحماية المعطيات ذات الطابع الشخصي' : 
                  'Basée sur la loi et les recommandations publiées par l\'ANPDP.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {i18n.language === 'ar' ? 'أدلة قانونية مضمّنة' : 'Preuves légales incluses'}
              </h3>
              <p className="text-gray-600">
                {i18n.language === 'ar' ? 
                  'توليد تلقائي للسجلات، العقود، والوثائق القابلة للاستناد إليها في حال وجود رقابة' : 
                  'Génération automatique de registres, contrats et documents opposables en cas de contrôle'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {i18n.language === 'ar' ? 'توفير حقيقي للوقت' : 'Gain de temps réel'}
              </h3>
              <p className="text-gray-600">
                {i18n.language === 'ar' ? 
                  'أتمتة كاملة للمهام المتكررة لمسؤول حماية البيانات (DPO)' : 
                  'Automatisation complète des tâches répétitives du DPO'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <TestimonialsSlider />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-violet-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('home.cta.subtitle')}
          </p>
          <Link
            to="/demo"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;