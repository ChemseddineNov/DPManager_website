import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Scale, Users, Award, CheckCircle, Download, Send, Target, Trophy, BookOpen, Zap, Heart } from 'lucide-react';

const BecomePartnerPage = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: 'revendeur',
    experience: '',
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
    console.log('Partnership application submitted:', formData);
  };

  return (
    <div className="pt-16" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-violet-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isRTL ? 'انضم إلى شبكة شركائنا' : 'Devenir partenaire'}
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            {isRTL ? 
              'ساهم في تعزيز الامتثال الرقمي في الجزائر، ووسّع نشاطك التجاري من خلال DP-Manager، الحل الرائد للامتثال للقانون 18-07.' :
              'Rejoignez notre réseau de partenaires et contribuez à la conformité numérique en Algérie, tout en développant votre activité grâce à DP-Manager, la solution de référence pour la loi 18-07.'
            }
          </p>
        </div>
      </section>

      {/* Why Become Partner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              {isRTL ? 'لماذا تصبح شريكًا لـ DP-Manager ؟' : 'Pourquoi devenir partenaire DP-Manager ?'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {isRTL ? '🚀 نمِّ نشاطك التجاري' : '🚀 Développez votre activité'}
              </h3>
              <p className="text-gray-600">
                {isRTL ? 
                  'انضم إلى سوق يشهد نموًا متسارعًا، ووسّع خدماتك بحل موثوق ومعتمد يُلبّي متطلبات الامتثال لدى المؤسسات العامة والخاصة.' :
                  'Accédez à un marché en pleine croissance et enrichissez votre offre avec une solution reconnue, indispensable à la conformité des organismes publics et privés.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="bg-violet-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {isRTL ? '🎯 عملاء مؤهلون' : '🎯 Clients qualifiés'}
              </h3>
              <p className="text-gray-600">
                {isRTL ? 
                  'نرسل لك فرصًا حقيقية لعملاء بحاجة فعلية للامتثال للقانون 18-07. نربطك بعملاء واعين ومستعدين للالتزام.' :
                  'Recevez des leads ayant un réel besoin de mise en conformité à la loi 18-07. Nous vous connectons à des clients déjà sensibilisés et engagés dans la démarche.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="bg-violet-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {isRTL ? '🏅 الخبرة والاعتراف' : '🏅 Expertise et reconnaissance'}
              </h3>
              <p className="text-gray-600">
                {isRTL ? 
                  'استفد من سمعتنا القوية وكن جزءًا من شركائنا المعتمدين. نُبرز شركاءنا في شبكتنا وعلى مستوى الفعاليات المهنية.' :
                  'Profitez de notre notoriété et bénéficiez de notre label qualité. Nos partenaires sont mis en avant auprès de notre réseau et lors d\'événements sectoriels.'
                }
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="text-center max-w-md">
              <div className="bg-violet-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-10 w-10 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {isRTL ? '🤝 التعاون والابتكار' : '🤝 Collaboration et innovation'}
              </h3>
              <p className="text-gray-600">
                {isRTL ? 
                  'شارك في تطوير DP-Manager، أرسل اقتراحاتك واحتياجاتك، وساهم معنا في تطوير ميزات وخدمات تناسب السوق الجزائري.' :
                  'Participez à l\'évolution de DP-Manager, partagez vos besoins et idées, et co-construisez avec nous de nouvelles fonctionnalités ou services adaptés au marché algérien.'
                }
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Partnership Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {isRTL ? 'نوعا الشراكة المتاحة' : 'Nos deux catégories de partenariat'}
            </h2>
            <p className="text-xl text-gray-600">
              {isRTL ? 
                'نقترح عليك نموذجين من الشراكة حسب طبيعتك المهنية ومستوى التزامك:' :
                'Nous vous proposons deux statuts de partenariat, adaptés à votre profil et à votre degré d\'engagement :'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Revendeur */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-violet-200">
              <div className="text-center mb-6">
                <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-violet-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  {isRTL ? '1. موزع' : '1. Revendeur'}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                {isRTL ? (
                  <>
                    يرشح <strong>الموزع</strong> DP-Manager لعملائه أو معارفه، دون دور تقني أو متابعة للعميل.
                  </>
                ) : (
                  <>
                    Le <strong>Revendeur</strong> recommande DP-Manager à son réseau ou à ses clients potentiels. Il agit comme rapporteur d'affaires, sans implication technique ni suivi client.
                  </>
                )}
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-blue-900 mb-3">{isRTL ? 'مزاياك:' : 'Vos avantages :'}</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">
                      {isRTL ? (
                        <>
                          <strong>💸 عمولة دائمة 15٪</strong> من كل بيع واشتراك ناتج عن توصياتك
                        </>
                      ) : (
                        <>
                          <strong>Rémunération :</strong> 15 % à vie sur le montant de chaque vente et abonnement générés grâce à vos recommandations.
                        </>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">
                      {isRTL ? (
                        <>
                          <strong>🧘 بدون إدارة تقنية</strong> أو مرافقة للعملاء
                        </>
                      ) : (
                        <>
                          <strong>Simplicité :</strong> Aucune gestion technique ni accompagnement client requis.
                        </>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">
                      {isRTL ? (
                        <>
                          <strong>🧰 وصول إلى أدوات التسويق</strong> (عروض، كتيبات، مداخل...)
                        </>
                      ) : (
                        <>
                          <strong>Accès à nos outils marketing :</strong> Kits de communication, présentations, argumentaires, etc.
                        </>
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-violet-50 p-4 rounded-lg">
                <p className="text-violet-800 font-medium">{isRTL ? 'مثالي لـ:' : 'Idéal pour :'}</p>
                <p className="text-violet-700 text-sm">
                  {isRTL ? 
                    'الاستشاريين، الوكلاء التجاريين، المهنيين العاملين في الشبكات أو التحول الرقمي.' :
                    'consultants, agents commerciaux, apporteurs d\'affaires, professionnels du réseau.'
                  }
                </p>
              </div>
            </div>

            {/* Accompagnateur */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  {isRTL ? '2. مرافــق' : '2. Accompagnateur'}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                {isRTL ? (
                  <>
                    <strong>المرافــق</strong> خبير أو شركة ترافق العملاء بشكل فعّال في رحلتهم للامتثال عبر منصة DP-Manager.
                  </>
                ) : (
                  <>
                    L'<strong>Accompagnateur</strong> est un professionnel ou une société qui accompagne activement ses clients dans leur démarche de conformité à la loi 18-07 à travers la solution DP-Manager. Vous guidez vos clients à chaque étape : de l'audit initial à la mise en œuvre opérationnelle, tout en assurant un suivi personnalisé et un accompagnement continu.
                  </>
                )}
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-blue-900 mb-3">{isRTL ? 'مزاياك:' : 'Vos avantages :'}</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">
                      {isRTL ? (
                        <>
                          <strong>💸 عمولة دائمة 30٪</strong> من كل بيع واشتراك
                        </>
                      ) : (
                        <>
                          <strong>Rémunération :</strong> 30 % à vie sur chaque vente et abonnement générés auprès de vos clients.
                        </>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">
                      {isRTL ? (
                        <>
                          <strong>🧭 مرافقة كاملة</strong> من التشخيص إلى التطبيق
                        </>
                      ) : (
                        <>
                          <strong>Accompagnement complet :</strong> De la recommandation initiale jusqu'à l'assistance post-projet.
                        </>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">
                      {isRTL ? (
                        <>
                          <strong>🎓 تدريب متقدم</strong> على اللوائح والمنصة
                        </>
                      ) : (
                        <>
                          <strong>Formation avancée :</strong> Accès à des formations approfondies sur la réglementation et l'utilisation de la plateforme.
                        </>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">
                      {isRTL ? (
                        <>
                          <strong>🚀 دعم تقني من المستوى الثاني</strong> وتواصل مباشر مع فريقنا
                        </>
                      ) : (
                        <>
                          <strong>Support prioritaire :</strong> Assistance technique de niveau 2 et échanges privilégiés avec notre équipe.
                        </>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">
                      {isRTL ? (
                        <>
                          <strong>🛠️ إمكانية المساهمة</strong> في تطوير المنصة وإضافة وحدات جديدة
                        </>
                      ) : (
                        <>
                          <strong>Co-développement possible :</strong> Participation à l'évolution de DP-Manager et à l'ajout de modules spécifiques.
                        </>
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">{isRTL ? 'مثالي لـ:' : 'Idéal pour :'}</p>
                <p className="text-blue-700 text-sm">
                  {isRTL ? 
                    'مكاتب الاستشارات، شركات التكامل، مكاتب المحاماة، خبراء الامتثال أو التحول الرقمي.' :
                    'Cabinets de conseil, sociétés d\'intégration, cabinets d\'avocats spécialisés, consultants en conformité ou experts métiers accompagnant activement leurs clients dans leur transformation numérique et réglementaire.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {isRTL ? 'جدول مقارنة بين الشريكين' : 'Tableau comparatif des statuts'}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className={`px-6 py-4 font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>
                    {isRTL ? 'الميزة / الوضع' : 'Avantage/Statut'}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    {isRTL ? 'موزع' : 'Revendeur'}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    {isRTL ? 'مرافــق' : 'Accompagnateur'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isRTL ? 'الدور' : 'Rôle'}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {isRTL ? 'مرشح للمنتج' : 'Rapporteur d\'affaires'}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {isRTL ? 'مرافقة واستشارة' : 'Accompagnement et conseil client'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isRTL ? 'العمولة' : 'Rémunération'}
                  </td>
                  <td className="px-6 py-4 text-center text-violet-600 font-semibold">
                    {isRTL ? '15٪ مدى الحياة' : '15 % à vie'}
                  </td>
                  <td className="px-6 py-4 text-center text-blue-600 font-semibold">
                    {isRTL ? '30٪ مدى الحياة' : '30 % à vie'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isRTL ? 'متابعة العميل' : 'Suivi client'}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {isRTL ? '❌' : 'Non'}
                  </td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">
                    {isRTL ? '✅' : 'Oui'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isRTL ? 'دعم تقني' : 'Support technique'}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {isRTL ? '❌' : 'Non'}
                  </td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">
                    {isRTL ? '✅ (مستوى 2)' : 'Oui (Niveau 2)'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isRTL ? 'التدريب' : 'Formation'}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {isRTL ? 'أساسي' : 'Essentielle'}
                  </td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">
                    {isRTL ? 'متقدم' : 'Avancée'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isRTL ? 'الحصول على العملاء' : 'Accès leads/clients'}
                  </td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">
                    {isRTL ? '✅' : 'Oui'}
                  </td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">
                    {isRTL ? '✅ (أولوية)' : 'Oui (Prioritaire)'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isRTL ? 'تطوير مشترك' : 'Co-développement'}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {isRTL ? '❌' : 'Non'}
                  </td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">
                    {isRTL ? '✅' : 'Oui'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isRTL ? 'أدوات تسويقية' : 'Outils marketing'}
                  </td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">
                    {isRTL ? '✅' : 'Oui'}
                  </td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">
                    {isRTL ? '✅' : 'Oui'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {isRTL ? 'شروط الانضمام' : 'Prérequis'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-violet-600 mb-4">
                {isRTL ? 'الموزع:' : 'Revendeur :'}
              </h3>
              <p className="text-gray-600">
                {isRTL ? 
                  'أن يكون محترفًا في تكنولوجيا المعلومات والاتصالات، أو خبيرًا قانونيًا، أو مستشارًا، أو وكيلًا تجاريًا، أو شركة تنشط في مجالات الامتثال، أو الأمن، أو التحول الرقمي.' :
                  'Être un professionnel des TIC, juriste, consultant, agent commercial ou une société exerçant dans les domaines de la conformité, de la sécurité ou de la transformation digitale.'
                }
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {isRTL ? 'المرافــق:' : 'Accompagnateur :'}
              </h3>
              <p className="text-gray-600">
                {isRTL ? 
                  'أن تكون شركة استشارية، أو مُدمجًا تقنيًا، أو مكتب محاماة متخصص، أو خبيرًا في مجاله قادرًا على تقديم مرافقة كاملة للعميل في مسار امتثاله للقانون 18-07 باستخدام منصة DP-Manager.' :
                  'Être une société de conseil, un intégrateur, un cabinet d\'avocats spécialisé, ou tout expert métier capable d\'assurer l\'accompagnement complet du client dans sa démarche de conformité à la loi 18-07 avec DP-Manager.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Become Partner */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {isRTL ? 'كيف تصبح شريكًا؟' : 'Comment devenir partenaire ?'}
            </h2>
            <p className="text-xl text-gray-600">
              {isRTL ? 
                'املأ النموذج أدناه للانضمام إلى شبكتنا. سيتواصل معك فريقنا سريعًا لتأكيد انضمامك ومرافقتك في خطواتك الأولى معنا.' :
                'Remplissez le formulaire ci-dessous pour rejoindre notre réseau. Notre équipe vous contactera rapidement pour finaliser votre inscription, valider votre statut de partenariat, et vous accompagner dans vos premiers pas avec DP-Manager.'
              }
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <iframe 
                width="600" 
                height="500" 
                src="https://fenekio.com/forms/wtl/1b081c2aa8067975c5f301612fe4e28c" 
                frameBorder="0" 
                sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups" 
                allowFullScreen
                className="w-full rounded-lg border border-gray-200"
                title={isRTL ? 'نموذج طلب الشراكة' : 'Formulaire de candidature partenaire'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            {isRTL ? 
              'تريد معرفة المزيد أو مناقشة شراكة محددة؟' :
              'Vous souhaitez en savoir plus ou discuter d\'un partenariat spécifique ?'
            }
          </h3>
          <p className="text-gray-700 mb-6">
            {isRTL ? (
              <>
                اتصل بنا على{' '}
                <a href="mailto:contact@leadersoft.dz" className="text-violet-600 hover:text-violet-700 font-medium phone-number">
                  contact@leadersoft.dz
                </a>
                {' '}أو عبر نموذجنا الإلكتروني.
              </>
            ) : (
              <>
                Contactez-nous à{' '}
                <a href="mailto:contact@leadersoft.dz" className="text-violet-600 hover:text-violet-700 font-medium">
                  contact@leadersoft.dz
                </a>
                {' '}ou via notre formulaire en ligne.
              </>
            )}
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <p className="text-blue-900 font-semibold text-lg">
              {isRTL ? 
                'معًا، لنجعل الامتثال للقانون 18-07 رافعة ثقة وتطوير لعملائك!' :
                'Ensemble, faisons de la conformité à la loi 18-07 un levier de confiance et de développement pour vos clients !'
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomePartnerPage;