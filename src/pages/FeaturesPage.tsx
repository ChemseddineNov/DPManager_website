import React from 'react';
import { FileText, Users, Shield, CheckCircle, Clock, Download, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FeaturesPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      icon: FileText,
      title: "Registre automatisé des traitements",
      description: "Créez et maintenez automatiquement votre registre des activités de traitement conformément aux articles 13 et 14 de la loi 18-07.",
      benefits: [
        "Modèles pré-configurés par secteur d'activité",
        "Mise à jour automatique des informations",
        "Export conforme aux exigences ANPDP",
        "Historique complet des modifications"
      ]
    },
    {
      icon: Users,
      title: "Gestion des sous-traitants",
      description: "Générez automatiquement des contrats de sous-traitance conformes et gérez vos partenaires en toute sécurité juridique.",
      benefits: [
        "Contrats automatisés conformes à la loi 18-07",
        "Suivi des obligations contractuelles",
        "Évaluation des risques des sous-traitants",
        "Notifications d'échéances automatiques"
      ]
    },
    {
      icon: Shield,
      title: "Consentement et information",
      description: "Créez des liens externes pour recueillir les consentements et informer vos utilisateurs selon les standards légaux.",
      benefits: [
        "Formulaires de consentement conformes",
        "Preuves horodatées et sécurisées",
        "Gestion des retraits de consentement",
        "Notices d'information personnalisables"
      ]
    }
  ];

  const additionalFeatures = [
    {
      title: "Tableau de bord de conformité",
      description: "Vue d'ensemble de votre niveau de conformité avec indicateurs en temps réel"
    },
    {
      title: "Gestion des incidents",
      description: "Processus guidé pour la déclaration et le suivi des violations de données"
    },
    {
      title: "Analyse d'impact (PIA)",
      description: "Outils pour réaliser vos analyses d'impact sur la protection des données"
    },
    {
      title: "Formation et sensibilisation",
      description: "Modules de formation pour vos équipes sur la loi 18-07"
    },
    {
      title: "Audit et contrôle",
      description: "Préparation automatisée aux contrôles de l'ANPDP"
    },
    {
      title: "Intégrations API",
      description: "Connectez DP-Manager à vos systèmes existants"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-violet-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isRTL ? 'وظائف متكاملة لضمان امتثالكم' : 'Fonctionnalités complètes pour votre conformité'}
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            {isRTL ? 
              'يُغطي DP-Manager جميع الالتزامات الواردة في القانون 18-07 من خلال أدوات عملية، مؤتمتة، وموثوقة قانونياً.' :
              'DP-Manager couvre l\'ensemble des obligations de la loi 18-07 avec des outils pratiques, automatisés et juridiquement robustes.'
            }
          </p>
        </div>
      </section>

      {/* Structured Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            {/* Registre & conformité documentée */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <span className="text-3xl">🗂️</span>
                <h3 className="text-xl font-bold text-blue-900">
                  {i18n.language === 'ar' ? 'السجلات والامتثال الموثق' : 'Registre & conformité documentée'}
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      'سجل المعالجات وطلبات الترخيص، مع نماذج جاهزة ومُعبّأة مسبقًا' : 
                      'Registre des traitements et demandes d\'autorisations, avec modèles préremplis'
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      'سجل طلبات الحقوق، منظم وقابل للتتبع' : 
                      'Registre des demandes de droits, traçable et organisé'
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      'سجل الانتهاكات، مع حفظ الأدلة لكل حادثة' : 
                      'Registre des violations, avec preuves conservées pour chaque incident'
                    }
                  </span>
                </li>
              </ul>
            </div>

            {/* Politiques & obligations légales */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <span className="text-3xl">📄</span>
                <h3 className="text-xl font-bold text-blue-900">
                  {i18n.language === 'ar' ? 'السياسات والالتزامات القانونية' : 'Politiques & obligations légales'}
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      <>توليد تلقائي لبيان المعلومات (<strong>المادة 32 – القانون 18-07</strong>)</> : 
                      <>Génération automatique de la notice d'information (<strong>Article 32 – loi 18-07</strong>)</>
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      'ميثاق أمان معلوماتي قابل للتخصيص، جاهز للاستخدام' : 
                      'Charte de sécurité informatique personnalisable, prête à usage'
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      'تعهدات سرية متوافقة مع القانون، جاهزة للتوقيع ومحفوظة بأثر رجعي' : 
                      'Engagements de confidentialité conformes, prêts à signer et historisés'
                    }
                  </span>
                </li>
              </ul>
            </div>

            {/* Liens d'information & consentement */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <span className="text-3xl">🔗</span>
                <h3 className="text-xl font-bold text-blue-900">
                  {i18n.language === 'ar' ? 'روابط المعلومات والموافقة' : 'Liens d\'information & consentement'}
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      <>روابط خارجية لبيانات المعلومات (<strong>المادة 32</strong>)</> : 
                      <>Liens externes vers notices d'information (<strong>Article 32</strong>)</>
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      <>جمع آمن للموافقة (<strong>المادة 7</strong>)</> : 
                      <>Recueil de consentement sécurisé (<strong>Article 7</strong>)</>
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      'جمع توقيعات لميثاق الأمان والتعهدات بالسرية' : 
                      'Collecte de signatures pour la charte de sécurité et les engagements de confidentialité'
                    }
                  </span>
                </li>
              </ul>
            </div>

            {/* Droits & gestion des risques */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <span className="text-3xl">🛡️</span>
                <h3 className="text-xl font-bold text-blue-900">
                  {i18n.language === 'ar' ? 'إدارة طلبات الحقوق' : 'Gestion des demandes de droits'}
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      'نموذج عام لطلب الحقوق يمكن دمجه في موقعكم الإلكتروني' : 
                      'Formulaire public de demande de droits à intégrer sur votre site'
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      'ختم زمني تلقائي للطلبات المستلمة' : 
                      'Horodatage automatique des demandes reçues'
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      'تتبع الردود وحفظ الأدلة القانونية' : 
                      'Suivi des réponses et conservation des preuves légales'
                    }
                  </span>
                </li>
              </ul>
            </div>

            {/* Pilotage & supervision DPO */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <span className="text-3xl">📊</span>
                <h3 className="text-xl font-bold text-blue-900">
                  {i18n.language === 'ar' ? 'قيادة وإشراف مسؤول حماية البيانات (DPO)' : 'Pilotage & supervision DPO'}
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      'لوحة تحكم للامتثال في الوقت الفعلي' : 
                      'Tableau de bord de conformité en temps réel'
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      'إدارة مهام مسؤول حماية البيانات: التخطيط، التذكير، المتابعة' : 
                      'Gestion des tâches du DPO : planification, rappels, suivis'
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      <>متابعة وتقييم المتعاقدين من الباطن (<strong>المادة 39</strong>)</> : 
                      <>Suivi & évaluation des sous-traitants (<strong>Article 39</strong>)</>
                    }
                  </span>
                </li>
              </ul>
            </div>

            {/* Audit & évaluation de conformité */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <span className="text-3xl">🔍</span>
                <h3 className="text-xl font-bold text-blue-900">
                  {i18n.language === 'ar' ? 'تدقيق وتقييم الامتثال' : 'Audit & évaluation de conformité'}
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      'تدقيق للمعالجات الداخلية لتحديد الفجوات' : 
                      'Audit des traitements internes pour identifier les écarts'
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      'تدقيق أمني مبني على متطلبات القانون 18-07' : 
                      'Audit de sécurité basé sur les exigences de la loi 18-07'
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i18n.language === 'ar' ? 
                      'درجة امتثال شاملة لقياس مستوى المخاطر القانونية لديكم' : 
                      'Score de conformité global pour visualiser votre niveau de risque juridique'
                    }
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <a
              href="/demo"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {isRTL ? 'طلب عرض توضيحي' : 'Demander une démonstration'}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              {i18n.language === 'ar' ? 'فوائد استخدام DP-Manager' : 'Les avantages de DP-Manager'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {isRTL ? 'توفير في الوقت' : 'Gain de temps'}
              </h3>
              <p className="text-gray-600">
                {i18n.language === 'ar' ? 
                  'قللوا بنسبة تصل إلى 80% من الوقت المخصص للمهام الإدارية المرتبطة بالامتثال' : 
                  'Réduisez de 80% le temps consacré aux tâches administratives de conformité'
                }
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {isRTL ? 'أمان قانوني' : 'Sécurité juridique'}
              </h3>
              <p className="text-gray-600">
                {i18n.language === 'ar' ? 
                  'وثائق متوافقة وقابلة للدفاع عنها قانونيًا، معتمدة من خبراء قانونيين' : 
                  'Documents conformes et opposables, validés par des experts juridiques'
                }
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {isRTL ? 'سهولة الاستخدام' : 'Simplicité'}
              </h3>
              <p className="text-gray-600">
                {i18n.language === 'ar' ? 
                  'واجهة بديهية لا تتطلب خبرة قانونية لاستخدامها' : 
                  'Interface intuitive, pas besoin d\'être expert en droit pour l\'utiliser'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-violet-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {i18n.language === 'ar' ? 'هل ترغبون في اكتشاف جميع ميزاتنا؟' : 'Prêt à découvrir toutes nos fonctionnalités ?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {i18n.language === 'ar' ? 
              'اطلبوا عرضًا توضيحيًا مخصصًا وشاهدوا كيف يمكن لـ DP-Manager أن يُحدث فرقًا في امتثالكم.' : 
              'Demandez une démonstration personnalisée et voyez comment DP-Manager peut transformer votre conformité.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              {isRTL ? 'طلب عرض توضيحي' : 'Demander une démo'}
            </a>
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
      </section>
    </div>
  );
};

export default FeaturesPage;