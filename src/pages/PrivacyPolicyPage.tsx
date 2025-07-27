import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Mail, MapPin, Phone } from 'lucide-react';

const PrivacyPolicyPage = () => {
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
            <Shield className="h-12 w-12 text-white mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {isRTL ? 'سياسة الخصوصية' : 'Politique de Confidentialité'}
            </h1>
          </div>
          <p className="text-xl text-blue-100">
            {isRTL ? 'حماية البيانات الشخصية – العملاء المحتملون' : 'Protection des données personnelles - Prospects'}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Info */}
          <div className="bg-blue-50 p-8 rounded-2xl mb-12 border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              {isRTL ? 'شركة ذات المسؤولية المحدودة LEADERSOFT ALGÉRIE' : 'SARL LEADERSOFT ALGÉRIE'}
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>{isRTL ? 'شارع G رقم 1، حي نايمي، مركز الزبانا، البليدة' : 'Rue G N° 1, Cité Naimi Centre Zabana, Blida'}</p>
              <p>{isRTL ? 'السجل التجاري: 09/00-0810777B20' : 'RC : 09/00-0810777B20'}</p>
            </div>
          </div>

          {/* Policy Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">1</span>
                {isRTL ? 'هوية المسؤول عن المعالجة' : 'Identité du responsable du traitement'}
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-violet-600">
                <p className="text-gray-700 leading-relaxed">
                  {isRTL ? (
                    <>
                      المسؤول عن معالجة البيانات ذات الطابع الشخصي هو:<br />
                      <strong>شركة LEADERSOFT ALGÉRIE</strong>، ويمثلها المدير القانوني <strong>السيدة إيمان ماروكي</strong>.
                    </>
                  ) : (
                    <>
                      Le responsable du traitement des données à caractère personnel est :<br />
                      <strong>SARL LEADERSOFT ALGÉRIE</strong>, représentée par son gérant légal <strong>Mme Imane MARROUQUI</strong>.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">2</span>
                {isRTL ? 'البيانات التي يتم جمعها' : 'Données collectées'}
              </h2>
              <p className="text-gray-700 mb-4">
                {isRTL ? 'في إطار أنشطتنا التجارية، نقوم بجمع ومعالجة البيانات التالية حول العملاء المحتملين:' : 'Dans le cadre de nos activités commerciales, nous collectons et traitons les données suivantes sur nos prospects :'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-violet-600 rounded-full"></span>
                  <span className="text-gray-700">{isRTL ? 'الاسم واللقب' : 'Nom et prénom'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-violet-600 rounded-full"></span>
                  <span className="text-gray-700">{isRTL ? 'البريد الإلكتروني' : 'Adresse e-mail'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-violet-600 rounded-full"></span>
                  <span className="text-gray-700">{isRTL ? 'رقم الهاتف' : 'Numéro de téléphone'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-violet-600 rounded-full"></span>
                  <span className="text-gray-700">{isRTL ? 'اسم المؤسسة' : 'Nom de l\'entreprise'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-violet-600 rounded-full"></span>
                  <span className="text-gray-700">{isRTL ? 'الوظيفة / المنصب' : 'Fonction / Poste'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-violet-600 rounded-full"></span>
                  <span className="text-gray-700">{isRTL ? 'الموقع الإلكتروني' : 'Site web'}</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">3</span>
                {isRTL ? 'الغرض من جمع البيانات' : 'Finalités de la collecte'}
              </h2>
              <p className="text-gray-700 mb-4">
                {isRTL ? 'تُجمع هذه البيانات حصرياً للأغراض التالية:' : 'Les données sont collectées exclusivement dans les buts suivants :'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">{isRTL ? 'الرد على طلبات الاتصال أو المعلومات' : 'Répondre à vos demandes de contact ou d\'information'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">{isRTL ? 'إرسال عروض تجارية تتناسب مع احتياجاتكم' : 'Vous faire parvenir des offres commerciales adaptées à vos besoins'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">{isRTL ? 'متابعة العلاقة التجارية ما قبل التعاقدية' : 'Assurer le suivi de la relation commerciale précontractuelle'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">{isRTL ? 'إعداد إحصائيات تجارية داخلية' : 'Réaliser des statistiques commerciales internes'}</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">4</span>
                {isRTL ? 'الجهات المستلمة للبيانات' : 'Destinataires des données'}
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>{isRTL ? 'تُعالج بياناتكم حصرياً من قبل موظفي شركة LEADERSOFT ALGÉRIE المخولين بذلك.' : 'Vos données sont traitées exclusivement par le personnel habilité de LEADERSOFT ALGÉRIE.'}</p>
                <p><strong>{isRTL ? 'ولا يتم بيع أو نقل أي بيانات إلى أطراف ثالثة.' : 'Aucune donnée n\'est cédée ni vendue à des tiers.'}</strong></p>
                <p>{isRTL ? 'قد تُنقل البيانات إلى مزودين تقنيين (مثل خدمات إرسال البريد الإلكتروني) في إطار عقد يحتوي على بنود السرية والامتثال للقانون 18-07.' : 'Elles peuvent être transmises à des sous-traitants techniques (ex. : prestataire d\'envoi d\'e-mails) dans le cadre d\'un contrat intégrant des clauses de confidentialité et de conformité à la loi 18-07.'}</p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">5</span>
                {isRTL ? 'مدة الاحتفاظ بالبيانات' : 'Durée de conservation'}
              </h2>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <p className="text-gray-700">
                  {isRTL ? 'تُحتفظ بالبيانات لمدة ثلاث (3) سنوات اعتباراً من آخر تواصل أو تفاعل من قبلكم، ما لم يتم سحب الموافقة أو الاعتراض على ذلك.' : 'Les données collectées sont conservées pendant trois (3) ans à compter du dernier contact ou de la dernière interaction de votre part, sauf opposition ou retrait de consentement.'}
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">6</span>
                {isRTL ? 'الأمان' : 'Sécurité'}
              </h2>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-700">
                  {isRTL ? 'نقوم بتطبيق تدابير تقنية وتنظيمية مناسبة لضمان سرية وسلامة وتوفر بياناتكم.' : 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour garantir la confidentialité, l\'intégrité et la disponibilité de vos données.'}
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">7</span>
                {isRTL ? 'حقوقكم' : 'Vos droits'}
              </h2>
              <p className="text-gray-700 mb-4">
                {isRTL ? 'طبقاً للمواد 7، و34 إلى 36 من القانون 18-07، لديكم الحقوق التالية:' : 'Conformément aux articles 7, 34 à 36 de la loi 18-07, vous disposez des droits suivants :'}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">{isRTL ? 'الحق في الوصول إلى بياناتكم' : 'Droit d\'accès à vos données'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">{isRTL ? 'الحق في تصحيح البيانات' : 'Droit de rectification'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">{isRTL ? 'الحق في الاعتراض على المعالجة' : 'Droit d\'opposition au traitement'}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">{isRTL ? 'الحق في سحب الموافقة في أي وقت' : 'Droit de retirer votre consentement à tout moment'}</span>
                </li>
              </ul>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-4">{isRTL ? 'لممارسة حقوقكم، يمكنكم الاتصال بنا عبر:' : 'Pour exercer vos droits, vous pouvez nous contacter par :'}</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{isRTL ? 'البريد الإلكتروني' : 'Email'} : <a href="mailto:contact@leadersoft.dz" className="text-blue-600 hover:text-blue-700 font-medium phone-number">contact@leadersoft.dz</a></span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-700">{isRTL ? 'العنوان: LEADERSOFT ALGÉRIE، شارع G رقم 1، حي نايمي، مركز الزبانا، البليدة' : 'Adresse postale : SARL LEADERSOFT ALGÉRIE, Rue G N°1, Cité Naimi Centre Zabana, Blida'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">8</span>
                {isRTL ? 'نقل البيانات إلى الخارج' : 'Transfert de données à l\'étranger'}
              </h2>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-700">
                  {isRTL ? 'لا نقوم بأي نقل لبياناتكم الشخصية خارج الجزائر بدون الحصول على التراخيص المنصوص عليها في القانون 18-07.' : 'Nous ne procédons à aucun transfert de vos données personnelles hors d\'Algérie sans obtenir les autorisations prévues par la loi 18-07.'}
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="bg-violet-100 text-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">9</span>
                {isRTL ? 'تحديث السياسة' : 'Mise à jour de la politique'}
              </h2>
              <p className="text-gray-700">
                {isRTL ? 'نحتفظ بحق تعديل هذه السياسة في أي وقت. النسخة المعتمدة متاحة عند الطلب أو عبر قنواتنا المعتادة.' : 'Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. La version en vigueur est disponible sur demande ou via nos canaux de communication habituels.'}
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-900 to-violet-900 text-white p-8 rounded-2xl mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">{isRTL ? 'أسئلة حول هذه السياسة؟' : 'Des questions sur cette politique ?'}</h3>
              <p className="text-blue-100 mb-6">
                {isRTL ? 'فريقنا في خدمتكم للإجابة على جميع أسئلتكم حول معالجة بياناتكم الشخصية.' : 'Notre équipe est à votre disposition pour répondre à toutes vos questions concernant le traitement de vos données personnelles.'}
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

export default PrivacyPolicyPage;