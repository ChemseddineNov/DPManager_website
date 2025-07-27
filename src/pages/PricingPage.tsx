import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, X, Star, Users, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      name: isRTL ? 'لوحة التحكم' : 'Tableau de bord',
      tpe: true,
      pme: true,
      enterprise: true
    },
    {
      name: isRTL ? 'إدارة المهام' : 'Gestion des tâches',
      tpe: true,
      pme: true,
      enterprise: true
    },
    {
      name: isRTL ? 'سجل المعالجات' : 'Registre des traitements',
      tpe: true,
      pme: true,
      enterprise: true
    },
    {
      name: isRTL ? 'سجل التراخيص' : 'Registre des autorisations',
      tpe: true,
      pme: true,
      enterprise: true
    },
    {
      name: isRTL ? 'طلبات الحقوق' : 'Demandes de droits',
      tpe: isRTL ? '✅ (10/شهر)' : '✅ (10/mois)',
      pme: isRTL ? '✅ (100/شهر)' : '✅ (100/mois)',
      enterprise: isRTL ? '✅ (غير محدود)' : '✅ (Illimité)'
    },
    {
      name: isRTL ? 'سجل الانتهاكات' : 'Registre de violations',
      tpe: true,
      pme: true,
      enterprise: true
    },
    {
      name: isRTL ? 'الإعلان التلقائي لـ ANPDP' : 'Déclaration automatique à l\'ANPDP',
      tpe: true,
      pme: true,
      enterprise: true
    },
    {
      name: isRTL ? 'إدارة المتعاقدين من الباطن' : 'Gestion sous-traitants',
      tpe: true,
      pme: true,
      enterprise: true
    },
    {
      name: isRTL ? 'إدارة الجهات الداخلية' : 'Gestion des acteurs internes',
      tpe: true,
      pme: true,
      enterprise: true
    },
    {
      name: isRTL ? 'البرمجيات والتطبيقات' : 'Logiciels & applications',
      tpe: true,
      pme: true,
      enterprise: true
    },
    {
      name: isRTL ? 'التوقيع الإلكتروني للميثاق/التعهد' : 'Signature en ligne de la charte / engagement',
      tpe: isRTL ? 'حتى 10 موظفين' : 'Jusqu\'à 10 employés',
      pme: isRTL ? 'حتى 100 موظف' : 'Jusqu\'à 100 employés',
      enterprise: isRTL ? 'غير محدود' : 'Illimité'
    },
    {
      name: isRTL ? 'التوقيع الإلكتروني لبيان المعلومات' : 'Signature en ligne Notice d\'information',
      tpe: isRTL ? 'حتى 1000 شخص معني' : 'Jusqu\'à 1 000 personnes concernées',
      pme: isRTL ? 'حتى 10000 شخص معني' : 'Jusqu\'à 10 000 personnes concernées',
      enterprise: isRTL ? 'غير محدود' : 'Illimité'
    },
    {
      name: isRTL ? 'تدقيق المعالجات' : 'Audits Traitement',
      tpe: false,
      pme: true,
      enterprise: true
    },
    {
      name: isRTL ? 'تدقيق الأمان' : 'Audits sécurité',
      tpe: false,
      pme: false,
      enterprise: true
    },
    {
      name: isRTL ? 'تقييم المتعاقدين من الباطن' : 'Évaluation des sous-traitant',
      tpe: false,
      pme: false,
      enterprise: true
    },
    {
      name: isRTL ? 'الإعدادات المتقدمة' : 'Paramétrage avancé',
      tpe: false,
      pme: true,
      enterprise: true
    },
    {
      name: isRTL ? 'متعدد المستخدمين/الأدوار' : 'Multi-utilisateurs / Rôles',
      tpe: isRTL ? 'مستخدم واحد' : '1 utilisateur',
      pme: isRTL ? '10 مستخدمين' : '10 utilisateurs',
      enterprise: isRTL ? 'غير محدود' : 'Illimité'
    },
    {
      name: isRTL ? 'إحصائيات متقدمة' : 'Statistiques avancées',
      tpe: false,
      pme: false,
      enterprise: true
    },
    {
      name: isRTL ? 'واجهات برمجة التطبيقات والتكاملات' : 'API & intégrations',
      tpe: false,
      pme: false,
      enterprise: true
    },
    {
      name: isRTL ? 'الدعم' : 'Support',
      tpe: isRTL ? 'بريد إلكتروني' : 'Email',
      pme: isRTL ? 'بريد إلكتروني + دردشة' : 'Email + Chat',
      enterprise: isRTL ? 'مخصص' : 'Dédié'
    },
    {
      name: isRTL ? 'المرافقة عبر الفيديو' : 'Accompagnement en visioconférence',
      tpe: isRTL ? '3 ساعات فردية + تدريبات جماعية' : '3h one to one + formations groupées',
      pme: isRTL ? '6 ساعات فردية + تدريبات جماعية' : '6h one to one + formations groupées',
      enterprise: isRTL ? '12 ساعة فردية + تدريبات جماعية' : '12h one to one + formations groupées'
    }
  ];

  const plans = [
    {
      name: 'TPE',
      nameAr: 'مؤسسة صغيرة جداً',
      price: isRTL ? '800 دج (السنة الأولى) ثم 15,900 دج/سنة' : '79 000 DA (1ère année) puis 15 900 DA/an',
      description: isRTL ? 'مثالي للشركات الصغيرة' : 'Idéal pour les petites entreprises',
      icon: Users,
      color: 'bg-blue-500',
      popular: false
    },
    {
      name: 'PME',
      nameAr: 'مؤسسة متوسطة',
      price: isRTL ? '189,000 دج (السنة الأولى) ثم 37,900 دج/سنة' : '189 000 DA (1ère année) puis 37 900 DA/an',
      description: isRTL ? 'الأنسب للشركات المتوسطة' : 'Parfait pour les entreprises moyennes',
      icon: Shield,
      color: 'bg-violet-500',
      popular: true
    },
    {
      name: isRTL ? 'مؤسسة كبيرة' : 'Grande entreprise',
      nameAr: 'مؤسسة كبيرة',
      price: isRTL ? '420,000 دج (السنة الأولى) ثم 80,000 دج/سنة' : '420 000 DA (1ère année) puis 80 000 DA/an',
      description: isRTL ? 'للمؤسسات الكبيرة والمعقدة' : 'Pour les grandes organisations complexes',
      icon: Zap,
      color: 'bg-green-500',
      popular: false
    }
  ];

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-gray-400 mx-auto" />
      );
    }
    return <span className="text-sm text-gray-700 text-center">{value}</span>;
  };

  return (
    <div className="pt-16" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-violet-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isRTL ? 'التسعير والخطط' : 'Tarifs et Plans'}
          </h1>
          <p className="text-xl text-blue-100">
            {isRTL ? 'اختاروا الخطة المناسبة لحجم مؤسستكم واحتياجاتكم' : 'Choisissez le plan adapté à la taille de votre organisation et à vos besoins'}
          </p>
        </div>
      </section>

      {/* Plans Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-violet-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-violet-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>{isRTL ? 'الأكثر شعبية' : 'Plus populaire'}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`${plan.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      {isRTL ? plan.nameAr : plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-3xl font-bold text-violet-600 mb-2">
                      {plan.price}
                    </div>
                  </div>
                  
                  <Link
                    to="/demo"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors ${
                      plan.popular 
                        ? 'bg-violet-600 text-white hover:bg-violet-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {isRTL ? 'طلب عرض توضيحي' : 'Demander une démo'}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {isRTL ? 'مقارنة مفصلة للميزات' : 'Comparaison détaillée des fonctionnalités'}
            </h2>
            <p className="text-xl text-gray-600">
              {isRTL ? 'جميع الميزات المتاحة حسب كل خطة' : 'Toutes les fonctionnalités disponibles par plan'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className={`py-4 px-6 font-semibold text-blue-900 border-b ${isRTL ? 'text-right' : 'text-left'}`}>
                    {isRTL ? 'الميزة' : 'Fonctionnalité'}
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-blue-900 border-b">
                    TPE
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-violet-600 border-b">
                    PME
                    <div className="text-xs text-violet-500 font-normal mt-1">
                      {isRTL ? 'الأكثر شعبية' : 'Plus populaire'}
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-blue-900 border-b">
                    {isRTL ? 'مؤسسة كبيرة' : 'Grande entreprise'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                    <td className={`py-4 px-6 font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {feature.name}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {renderFeatureValue(feature.tpe)}
                    </td>
                    <td className="py-4 px-6 text-center bg-violet-25">
                      {renderFeatureValue(feature.pme)}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {renderFeatureValue(feature.enterprise)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-violet-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-6">
            {isRTL ? 'هل تحتاجون مساعدة في اختيار الخطة المناسبة؟' : 'Besoin d\'aide pour choisir le bon plan ?'}
          </h3>
          <p className="text-blue-100 mb-8">
            {isRTL ? 
              'فريق خبرائنا متاح لمساعدتكم في تحديد الخطة الأنسب لاحتياجاتكم' :
              'Notre équipe d\'experts est disponible pour vous aider à déterminer le plan le mieux adapté à vos besoins'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {isRTL ? 'طلب عرض توضيحي مجاني' : 'Demander une démo gratuite'}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isRTL ? 'تحدث مع خبير' : 'Parler à un expert'}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
            {isRTL ? 'أسئلة شائعة حول التسعير' : 'Questions fréquentes sur la tarification'}
          </h3>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-900 mb-2">
                {isRTL ? 'هل يمكن تغيير الخطة لاحقاً؟' : 'Peut-on changer de plan ultérieurement ?'}
              </h4>
              <p className="text-gray-700">
                {isRTL ? 
                  'نعم، يمكنكم ترقية أو تخفيض خطتكم في أي وقت حسب تطور احتياجاتكم.' :
                  'Oui, vous pouvez upgrader ou downgrader votre plan à tout moment selon l\'évolution de vos besoins.'
                }
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-900 mb-2">
                {isRTL ? 'هل التدريب مشمول في السعر؟' : 'La formation est-elle incluse dans le prix ?'}
              </h4>
              <p className="text-gray-700">
                {isRTL ? 
                  'نعم، جميع الخطط تشمل التدريب الأساسي والمرافقة حسب الساعات المحددة لكل خطة.' :
                  'Oui, tous les plans incluent la formation de base et l\'accompagnement selon les heures définies pour chaque plan.'
                }
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-900 mb-2">
                {isRTL ? 'هل هناك رسوم إعداد إضافية؟' : 'Y a-t-il des frais de mise en place supplémentaires ?'}
              </h4>
              <p className="text-gray-700">
                {isRTL ? 
                  'لا، جميع رسوم الإعداد والتكوين مشمولة في سعر السنة الأولى.' :
                  'Non, tous les frais de mise en place et de configuration sont inclus dans le prix de la première année.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;