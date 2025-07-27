import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Scale, Building, Server, Shield, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const LegalNoticesPage = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-violet-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Scale className="h-12 w-12 text-white mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {isRTL ? 'الإشعارات القانونية' : 'Mentions légales'}
            </h1>
          </div>
          <p className="text-xl text-blue-100">
            {isRTL ? 'المعلومات القانونية والتنظيمية' : 'Informations légales et réglementaires'}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Éditeur du site */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">
                <Building className="h-4 w-4" />
              </span>
              {isRTL ? 'محرر الموقع' : 'Éditeur du site'}
            </h2>
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {isRTL ? 'شركة ذات المسؤولية المحدودة LEADERSOFT ALGÉRIE' : 'SARL LEADERSOFT ALGÉRIE'}
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>
                        {isRTL ? 'شارع G رقم 1، حي نايمي، مركز الزبانا، البليدة – الجزائر' : 'Rue G N° 1, Cité Naimi Centre Zabana, Blida – Algérie'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-blue-200">
                  <div>
                    <p className="text-gray-700">
                      <strong>{isRTL ? 'السجل التجاري:' : 'RC :'}</strong> 09/00-0810777B20
                    </p>
                    <p className="text-gray-700">
                      <strong>{isRTL ? 'الرقم التعريفي الجبائي:' : 'NIF :'}</strong> 002009081077713
                    </p>
                    <p className="text-gray-700">
                      <strong>{isRTL ? 'رقم التعريف الإحصائي:' : 'AI :'}</strong> 09059552186
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <a href="mailto:contact@leadersoft.dz" className="text-blue-600 hover:text-blue-700">
                        contact@leadersoft.dz
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span className="font-semibold text-gray-700">
                      {isRTL ? 'أرقام الهاتف:' : 'Téléphones :'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
                    <a href="tel:+213560952128" className="hover:text-blue-600 phone-number">
                      <span className="phone-number">0560 95 21 28</span>
                    </a>
                    <a href="tel:+213560572696" className="hover:text-blue-600 phone-number">
                      <span className="phone-number">0560 57 26 96</span>
                    </a>
                    <a href="tel:+213560403405" className="hover:text-blue-600 phone-number">
                      <span className="phone-number">0560 40 34 05</span>
                    </a>
                    <a href="tel:+213561616535" className="hover:text-blue-600 phone-number">
                      <span className="phone-number">0561 61 65 35</span>
                    </a>
                    <a href="tel:+213561613222" className="hover:text-blue-600 phone-number">
                      <span className="phone-number">0561 61 32 22</span>
                    </a>
                    <a href="tel:+213560012511" className="hover:text-blue-600 phone-number">
                      <span className="phone-number">0560 01 25 11</span>
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    {isRTL ? 'المديرة العامة' : 'Gérante'}
                  </h4>
                  <p className="text-gray-700">
                    {isRTL ? 'السيدة إيمان ماروكي (قرينة عمروش)' : 'Mme Imane Marrouqui Epse. Amrouche'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hébergement */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">
                <Server className="h-4 w-4" />
              </span>
              {isRTL ? 'الاستضافة' : 'Hébergement'}
            </h2>
            <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Djezzy Cloud</h3>
                  <div className="flex items-start space-x-3 mb-3">
                    <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">
                      {isRTL ? 'طريق الولاية، القطعة رقم 37/4، دار البيضاء، الجزائر' : 'Route de wilaya, Lot n°37/4, Dar El Beida, Alger, Algérie'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Mail className="h-4 w-4 text-green-600" />
                    <a href="mailto:contact@djezzy.dz" className="text-green-600 hover:text-green-700">
                      contact@djezzy.dz
                    </a>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <p className="text-green-800 font-semibold text-center">
                    🇩🇿 {isRTL ? 'يتم استضافة هذا الموقع بكل فخر في الجزائر' : 'Le site est hébergé fièrement en Algérie'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">©</span>
              {isRTL ? 'الملكية الفكرية' : 'Propriété intellectuelle'}
            </h2>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              {isRTL ? (
                <>
                  <p className="text-gray-700 mb-4">
                    جميع المحتويات الموجودة على هذا الموقع (نصوص، صور، فيديوهات، شعارات...) هي ملكية حصرية لشركة 
                    <strong> LEADERSOFT ALGÉRIE</strong>، ما لم يُذكر خلاف ذلك.
                  </p>
                  <p className="text-gray-700">
                    <strong>يُمنع منعاً باتاً نسخ أو توزيع أو إعادة استخدام أي جزء من هذه المحتويات، كلياً أو جزئياً، دون إذن كتابي مسبق.</strong>
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-700 mb-4">
                    L'ensemble des contenus présents sur le site (textes, images, vidéos, logos, etc.) sont la propriété exclusive de 
                    <strong> SARL LEADERSOFT ALGÉRIE</strong>, sauf mention contraire.
                  </p>
                  <p className="text-gray-700">
                    <strong>Toute reproduction, distribution ou réutilisation, totale ou partielle, est strictement interdite sans autorisation écrite préalable.</strong>
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Protection des données personnelles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">
                <Shield className="h-4 w-4" />
              </span>
              {isRTL ? 'حماية البيانات الشخصية' : 'Protection des données personnelles'}
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700">
                {isRTL ? (
                  <>
                    لمزيد من المعلومات حول جمع ومعالجة بياناتكم الشخصية، يُرجى الرجوع إلى{' '}
                    <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-medium underline">
                      سياسة الخصوصية
                    </Link>{' '}
                    الخاصة بنا.
                  </>
                ) : (
                  <>
                    Pour en savoir plus sur la collecte et le traitement de vos données, veuillez consulter notre{' '}
                    <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-medium underline">
                      Politique de confidentialité
                    </Link>.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Conditions d'utilisation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">📋</span>
              {isRTL ? 'شروط الاستخدام' : 'Conditions d\'utilisation'}
            </h2>
            <div className="space-y-4 text-gray-700">
              {isRTL ? (
                <>
                  <p>
                    استخدام هذا الموقع يعني القبول الكامل للشروط العامة للاستخدام (CGU) المتوفرة على الموقع.
                  </p>
                  <p>
                    تحتفظ إدارة الموقع بحق تعديل هذه الشروط في أي وقت.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation (CGU) accessibles sur le site.
                  </p>
                  <p>
                    L'éditeur se réserve le droit de modifier ces conditions à tout moment.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Liens hypertextes */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">
                <ExternalLink className="h-4 w-4" />
              </span>
              {isRTL ? 'الروابط الخارجية' : 'Liens hypertextes'}
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                {isRTL ? (
                  <>
                    قد يحتوي الموقع على روابط لمواقع أخرى. تُخلي شركة <strong>LEADERSOFT ALGÉRIE</strong> مسؤوليتها الكاملة عن محتوى هذه المواقع الخارجية.
                  </>
                ) : (
                  <>
                    Des liens vers d'autres sites peuvent être proposés. <strong>SARL LEADERSOFT ALGÉRIE</strong> décline toute responsabilité 
                    quant aux contenus externes accessibles depuis ces liens.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Droit applicable */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">⚖️</span>
              {isRTL ? 'القانون المعمول به' : 'Droit applicable'}
            </h2>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="space-y-3 text-gray-700">
                {isRTL ? (
                  <>
                    <p>
                      تخضع هذه الإشعارات القانونية للقانون <strong>الجزائري</strong>.
                    </p>
                    <p>
                      وفي حال حدوث أي نزاع، تكون <strong>محاكم دائرة البليدة</strong> هي المختصة حصرياً.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Les présentes mentions légales sont régies par le <strong>droit algérien</strong>.
                    </p>
                    <p>
                      En cas de litige, les <strong>tribunaux du ressort de Blida</strong> sont seuls compétents.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-900 to-violet-900 text-white p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                {isRTL ? 'أسئلة قانونية؟' : 'Questions juridiques ?'}
              </h3>
              <p className="text-blue-100 mb-6">
                {isRTL ? 'لأي سؤال يتعلق بهذه الإشعارات القانونية، لا تترددوا في الاتصال بنا.' : 'Pour toute question concernant ces mentions légales, n\'hésitez pas à nous contacter.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@leadersoft.dz"
                  className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>{isRTL ? 'اتصل بنا' : 'Nous contacter'}</span>
                </a>
                <a
                  href="tel:+213560952128"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 phone-number"
                >
                  <Phone className="h-5 w-5" />
                  <span className="phone-number">0560 95 21 28</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalNoticesPage;