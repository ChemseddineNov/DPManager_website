import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DemoPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-violet-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('demo.hero.title')}
          </h1>
          <p className="text-xl text-blue-100">
            {t('demo.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                {t('demo.form.title')}
              </h2>
              <p className="text-gray-600">
                {t('demo.form.subtitle')}
              </p>
            </div>

            {/* Iframe Container */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <iframe 
                  width="100%" 
                  height="650" 
                  src="https://fenekio.com/forms/wtl/fcd70d8ad0e5b087a4caeae3b6bded76" 
                  frameBorder="0" 
                  sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups" 
                  allowFullScreen
                  className="rounded-lg border border-gray-200"
                  title={t('demo.form.iframeTitle')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              {t('demo.benefits.title')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗂️</span>
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">{t('demo.benefits.registry.title')}</h4>
              <p className="text-gray-600 text-sm">
                {t('demo.benefits.registry.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">{t('demo.benefits.documents.title')}</h4>
              <p className="text-gray-600 text-sm">
                {t('demo.benefits.documents.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">{t('demo.benefits.dashboard.title')}</h4>
              <p className="text-gray-600 text-sm">
                {t('demo.benefits.dashboard.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            {t('demo.help.title')}
          </h3>
          <p className="text-gray-700 mb-6">
            {t('demo.help.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+213560952128"
             className="bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors phone-number"
            >
              📞 0560 95 21 28
            </a>
            <a
              href="mailto:contact@leadersoft.dz"
              className="border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              {t('demo.help.email')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;