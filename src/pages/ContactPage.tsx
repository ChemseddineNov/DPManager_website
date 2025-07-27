import React, { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: 'demo',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-violet-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.hero.title')}
          </h1>
          <p className="text-xl text-blue-100">
            {t('contact.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Commercial */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 contact-content">
              <div className="bg-violet-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">{t('contact.commercial.title')}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">{t('contact.commercial.email')}</h4>
                  <a href="mailto:contact@leadersoft.dz" className="text-violet-600 hover:text-violet-700 font-medium">
                    contact@leadersoft.dz
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">{t('contact.commercial.phones')}</h4>
                  <div className="space-y-2">
                    <a href="tel:+213560952128" className="block text-violet-600 hover:text-violet-700">
                      <span className="phone-number">05 60 95 21 28</span>
                    </a>
                    <a href="tel:+213555627161" className="block text-violet-600 hover:text-violet-700">
                      <span className="phone-number">05 55 62 71 61</span>
                    </a>
                    <a href="tel:+213560039889" className="block text-violet-600 hover:text-violet-700">
                      <span className="phone-number">05 60 03 98 89</span>
                    </a>
                    <a href="tel:+213561613222" className="block text-violet-600 hover:text-violet-700">
                      <span className="phone-number">05 61 61 32 22</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Technique */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 contact-content">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">{t('contact.technical.title')}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">{t('contact.technical.email')}</h4>
                  <a href="mailto:support@leadersoft.dz" className="text-violet-600 hover:text-violet-700 font-medium">
                    support@leadersoft.dz
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">{t('contact.technical.phones')}</h4>
                  <div className="space-y-2">
                    <a href="tel:+213560348966" className="block text-violet-600 hover:text-violet-700">
                      <span className="phone-number">05 60 34 89 66</span>
                    </a>
                    <a href="tel:+213560039897" className="block text-violet-600 hover:text-violet-700">
                      <span className="phone-number">05 60 03 98 97</span>
                    </a>
                    <a href="tel:+213560322850" className="block text-violet-600 hover:text-violet-700">
                      <span className="phone-number">05 60 32 28 50</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lignes fixes et Fax */}
          <div className="mt-8 bg-blue-50 p-8 rounded-2xl contact-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">{t('contact.fixed.phones')}</h4>
                <div className="space-y-2">
                  <a href="tel:+213252380001" className="block text-violet-600 hover:text-violet-700">
                    <span className="phone-number">025.23.80.01</span>
                  </a>
                  <a href="tel:+213252380010" className="block text-violet-600 hover:text-violet-700">
                    <span className="phone-number">025.23.80.10</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">{t('contact.fixed.fax')}</h4>
                <span className="text-gray-700">
                  <span className="phone-number">025.23.81.36</span>
                </span>
              </div>
            </div>
          </div>

          {/* Adresse */}
          <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-200 contact-content">
            <div className="flex items-start space-x-4">
              <div className="bg-violet-100 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-8 w-8 text-violet-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('contact.address.title')}</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {t('contact.address.text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-50 border-t border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-red-800 mb-4">{t('contact.emergency.title')}</h3>
          <p className="text-red-700 mb-6">
            {t('contact.emergency.text')}
          </p>
          <a
            href="tel:+213560952128"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            <span className="phone-number">0560 403 405</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;