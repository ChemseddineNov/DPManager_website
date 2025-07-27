import React from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, Phone, Scale, Shield, Globe, Users, AlertTriangle } from 'lucide-react';

const TermsPage = () => {
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
            <FileText className="h-12 w-12 text-white mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {isRTL ? 'الشروط العامة للاستخدام' : 'Conditions Générales d\'Utilisation'}
            </h1>
          </div>
          <p className="text-xl text-blue-100">
            {isRTL ? 'آخر تحديث: 29 يونيو 2025' : 'Dernière mise à jour : 29 juin 2025'}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1 - Objet */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">1</span>
              {isRTL ? 'الموضوع' : 'Objet'}
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700">
                {isRTL ? (
                  <>
                    تُحدد هذه الشروط كيفية استخدام موقع <strong>www.dp-manager.com</strong> ومنصة البرنامج <strong>DP-Manager</strong>، التي تديرها <strong>شركة LEADERSOFT ALGÉRIE ذات المسؤولية المحدودة</strong>.
                  </>
                ) : (
                  <>
                    Les présentes conditions régissent l'utilisation du site <strong>www.dp-manager.com</strong> et de la plateforme logicielle <strong>DP-Manager</strong>, éditée par <strong>SARL LEADERSOFT ALGÉRIE</strong>.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Section 2 - Accès au service */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">
                <Users className="h-4 w-4" />
              </span>
              {isRTL ? 'الوصول إلى الخدمة' : 'Accès au service'}
            </h2>
            <div className="space-y-4 text-gray-700">
              {isRTL ? (
                <>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-violet-600 rounded-full mt-2"></span>
                    <p>يُمنح الوصول إلى منصة DP-Manager فقط للعملاء المهنيين الذين أبرموا عقداً تجارياً.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-violet-600 rounded-full mt-2"></span>
                    <p>يتم إنشاء حسابات المستخدمين من قبل فريقنا التقني، وترسل بيانات الدخول عبر البريد الإلكتروني.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-violet-600 rounded-full mt-2"></span>
                    <p>يتحمل كل مستخدم مسؤولية الحفاظ على سرية معلومات الدخول الخاصة به.</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-violet-600 rounded-full mt-2"></span>
                    <p>L'accès à la plateforme DP-Manager est réservé aux clients professionnels ayant souscrit un contrat.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-violet-600 rounded-full mt-2"></span>
                    <p>Les comptes utilisateurs sont créés par notre service technique, qui transmet les accès par email.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-violet-600 rounded-full mt-2"></span>
                    <p>Chaque utilisateur est responsable de la confidentialité de ses identifiants.</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Section 3 - Propriété intellectuelle */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">©</span>
              {isRTL ? 'الملكية الفكرية' : 'Propriété intellectuelle'}
            </h2>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <div className="space-y-3 text-gray-700">
                <p>
                  {isRTL ? (
                    <>
                      الموقع، والعلامة التجارية <strong>DP-Manager</strong>، وجميع المحتويات المرتبطة به (نصوص، صور، شيفرات برمجية...) محمية بموجب قوانين الملكية الفكرية.
                    </>
                  ) : (
                    <>
                      Le site, la marque <strong>DP-Manager</strong>, et tous les contenus associés (textes, visuels, code) sont protégés par la législation sur la propriété intellectuelle.
                    </>
                  )}
                </p>
                <p className="font-semibold text-yellow-800">
                  {isRTL ? 'يُمنع منعاً باتاً أي نسخ أو استخدام غير مرخّص له لأي جزء من هذه المحتويات.' : 'Toute reproduction ou utilisation non autorisée est strictement interdite.'}
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 - Données personnelles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">
                <Shield className="h-4 w-4" />
              </span>
              {isRTL ? 'البيانات الشخصية' : 'Données personnelles'}
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                {isRTL ? 'قد يتم جمع بيانات شخصية عبر نماذج الموقع (الاتصال، طلب العرض التوضيحي).' : 'Des données personnelles peuvent être collectées via les formulaires du site (contact, démo).'}
              </p>
              <p>
                {isRTL ? (
                  <>
                    لمعرفة المزيد حول استخدام هذه البيانات ومدة الاحتفاظ بها وحقوقكم، يُرجى الرجوع إلى{' '}
                    <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-medium underline">
                      سياسة الخصوصية
                    </Link>{' '}
                    الخاصة بنا.
                  </>
                ) : (
                  <>
                    Pour en savoir plus sur l'usage, la conservation et vos droits, veuillez consulter notre{' '}
                    <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-medium underline">
                      Politique de confidentialité
                    </Link>.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Section 5 - Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">🍪</span>
              {isRTL ? 'ملفات تعريف الارتباط (الكوكيز)' : 'Cookies'}
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-3 text-gray-700">
                <p>
                  {isRTL ? 'قد يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة المستخدم وتنفيذ تحليلات إحصائية.' : 'Le site peut utiliser des cookies pour améliorer l\'expérience utilisateur et réaliser des statistiques.'}
                </p>
                <p>
                  {isRTL ? 'يمكنكم تعطيل ملفات الكوكيز من خلال إعدادات المتصفح الخاص بكم.' : 'Vous pouvez désactiver les cookies via les paramètres de votre navigateur.'}
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 - Responsabilité */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">
                <AlertTriangle className="h-4 w-4" />
              </span>
              {isRTL ? 'المسؤولية' : 'Responsabilité'}
            </h2>
            <div className="space-y-4 text-gray-700">
              {isRTL ? (
                <>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    <p>
                      تسعى DP-Manager لتوفير خدمة موثوقة وآمنة، لكنها لا تتحمل أي مسؤولية عن الأعطال الفنية الخارجة عن إرادتها.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    <p>
                      ويتعهد المستخدم باحترام القوانين المعمول بها، لا سيما <strong>القانون 18-07</strong> المتعلق بحماية البيانات الشخصية.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    <p>
                      DP-Manager s'efforce d'assurer un service fiable et sécurisé, mais ne saurait être tenu responsable en cas de dysfonctionnement technique indépendant de sa volonté.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    <p>
                      L'utilisateur s'engage à respecter la réglementation applicable, notamment la <strong>loi 18-07</strong>.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Section 7 - Droit applicable */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">
                <Scale className="h-4 w-4" />
              </span>
              {isRTL ? 'القانون المعمول به' : 'Droit applicable'}
            </h2>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="space-y-3 text-gray-700">
                <p>
                  {isRTL ? 'تخضع هذه الشروط العامة للاستخدام للقانون الجزائري.' : 'Les présentes conditions sont soumises au <strong>droit algérien</strong>.'}
                </p>
                <p>
                  {isRTL ? 'وفي حالة حدوث نزاع، تُحال القضية إلى الجهات القضائية المختصة في ولاية الجزائر.' : 'Tout litige sera porté devant les <strong>juridictions compétentes d\'Alger</strong>.'}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-900 to-violet-900 text-white p-8 rounded-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-4">Contact</h3>
              <p className="text-blue-100">
                {isRTL ? 'لأي سؤال يتعلق بهذه الشروط العامة للاستخدام' : 'Pour toute question concernant ces conditions générales d\'utilisation'}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5 text-blue-200" />
                <a href="mailto:contact@leadersoft.dz" className="text-white hover:text-blue-200 font-medium">
                  contact@leadersoft.dz
                </a>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Phone className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-200 font-medium">
                    {isRTL ? 'الخدمة التجارية:' : 'Service commercial :'}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <a href="tel:+213560952128" className="text-white hover:text-blue-200 phone-number">
                    <span className="phone-number">0560 95 21 28</span>
                  </a>
                  <a href="tel:+213560572696" className="text-white hover:text-blue-200 phone-number">
                    <span className="phone-number">0560 57 26 96</span>
                  </a>
                  <a href="tel:+213560012511" className="text-white hover:text-blue-200 phone-number">
                    <span className="phone-number">0560 01 25 11</span>
                  </a>
                  <a href="tel:+213561616535" className="text-white hover:text-blue-200 phone-number">
                    <span className="phone-number">0561 61 65 35</span>
                  </a>
                  <a href="tel:+213561613222" className="text-white hover:text-blue-200 phone-number">
                    <span className="phone-number">0561 61 32 22</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;