import React, { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

const FaqPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqData = [
    {
      category: isRTL ? "عام" : "Général",
      questions: [
        {
          question: isRTL ? "من يعنيه القانون 18-07؟" : "Qui est concerné par la loi 18-07 ?",
          answer: isRTL ? 
            "أي شركة أو هيئة تعالج البيانات الشخصية لمقيمين في الجزائر، سواء كانت مقرها في الجزائر أو في الخارج. يشمل ذلك الشركات الخاصة، المؤسسات العامة، الجمعيات، والمهنيين الأحرار." :
            "Toute entreprise ou organisme qui traite des données personnelles de résidents algériens, qu'elle soit établie en Algérie ou à l'étranger. Cela inclut les entreprises privées, organismes publics, associations et professionnels libéraux."
        },
        {
          question: isRTL ? "ما هو الموعد النهائي للامتثال؟" : "Quel est le délai pour se mettre en conformité ?",
          answer: isRTL ?
            " دخل القانون حيّز التنفيذ منذ شهر أوت 2023 .وفي بيان نُشر على موقعها الإلكتروني، أعلنت السلطة الوطنية لحماية المعطيات ذات الطابع الشخصي أنها قامت يوم الأربعاء 28 فيفري 2024 بمهمة تفتيش لدى عدد من المؤسسات الخاصة التابعة لإقليم ولاية الجزائر، في انتظار توسيع هذه العملية تدريجيًا لتشمل جميع ولايات الوطن" :
            "La loi est entrée en vigueur depuis août 2023. Dans un communiqué publié sur son site web, l’ANPDP a annoncé avoir mené, le mercredi 28 février 2024, une mission de contrôle auprès des entreprises privées relevant de la wilaya d’Alger, en attendant l’élargissement progressif de cette opération à l’ensemble des wilayas du pays.",
        },
        {
          question: isRTL ? "ما هي العقوبات في حالة عدم الامتثال؟" : "Quelles sont les sanctions en cas de non-conformité ?",
          answer: isRTL ?
            ". في حال عدم الامتثال لأحكام القانون 18-07، يتعرض المخالفون لعقوبات إدارية ومالية وجنائية، قد تصل إلى 5 سنوات سجن وغرامات مالية ثقيلة، خاصة في حالات المعالجة غير القانونية، أو النقل غير المرخص للمعطيات، أو انتهاك حقوق الأشخاص المعنيين. كما يمكن للسلطة الوطنية أن تأمر بـتعليق أو إيقاف المعالجة." :
            "En cas de non-respect de la loi 18-07, les contrevenants s’exposent à des sanctions administratives, financières et pénales, pouvant aller jusqu’à 5 ans de prison et de lourdes amendes, notamment en cas de traitement illégal, de transfert non autorisé ou de violation des droits des personnes. L’ANPDP peut également ordonner la suspension ou l’arrêt d’un traitement."
        }
      ]
    },
    {
      category: isRTL ? "DP-Manager" : "DP-Manager",
      questions: [
        {
          question: isRTL ? "هل يحل DP-Manager محل مسؤول حماية البيانات؟" : "DP-Manager remplace-t-il un DPO ?",
          answer: isRTL ?
            "لا، DP-Manager يسهل عمل مسؤول حماية البيانات لكنه لا يحل محله. المنصة تؤتمت المهام الإدارية والتقنية، بينما يبقى الخبير البشري ضرورياً للقرارات الاستراتيجية والاستشارة. نقدم أيضاً خدمات مرافقة من طرف خبراء .    ." :
            "Non, DP-Manager facilite le travail du DPO mais ne le remplace pas. La plateforme automatise les tâches administratives et techniques, mais l'expertise humaine reste nécessaire pour les décisions stratégiques et le conseil. Nous proposons également des services d'accompagnement avec des experts."
        },
        {
          question: isRTL ? "كم من الوقت يستغرق تطبيق DP-Manager؟" : "Combien de temps faut-il pour déployer DP-Manager ?",
          answer: isRTL ?
            "يتم نشر المنصة عادة في 2-6 أسابيع حسب حجم المؤسسة وتعقيد معالجاتها. نقدم مرافقة كاملة من التشخيص الأولي إلى التدريب النهائي للفرق." :
            "Le déploiement se fait généralement en 2 à 6 semaines selon la taille de l'organisation et la complexité de ses traitements. Nous fournissons un accompagnement complet du diagnostic initial à la formation finale des équipes."
        },
        {
          question: isRTL ? "هل يمكن تخصيص DP-Manager حسب قطاع نشاطنا؟" : "DP-Manager peut-il être personnalisé selon notre secteur d'activité ?",
          answer: isRTL ?
            "نعم، DP-Manager يتضمن نماذج مُعدة مسبقاً لقطاعات مختلفة (صحة، تعليم، مالي، صناعي...). كما يمكن تخصيص المنصة لتناسب احتياجاتكم الخاصة مع إمكانية إضافة وحدات محددة." :
            "Oui, DP-Manager inclut des modèles pré-configurés pour différents secteurs (santé, éducation, finance, industrie...). La plateforme peut également être personnalisée pour répondre à vos besoins spécifiques avec possibilité d'ajouter des modules dédiés."
        }
      ]
    },
    {
      category: isRTL ? "تقني" : "Technique",
      questions: [
        {
          question: isRTL ? "هل DP-Manager متوافق مع أنظمتنا الموجودة؟" : "DP-Manager est-il compatible avec nos systèmes existants ?",
          answer: isRTL ?
            "نعم، DP-Manager يوفر واجهات برمجة تطبيقات (API) للتكامل مع أنظمة المعلومات الموجودة. نحن نعمل مع شركاء تقنيين متخصصين لضمان تكامل سلس مع أنظمة ERP، CRM، وقواعد البيانات المختلفة." :
            "Oui, DP-Manager propose des API pour l'intégration avec les systèmes d'information existants. Nous travaillons avec des partenaires techniques spécialisés pour assurer une intégration fluide avec les ERP, CRM et différentes bases de données."
        },
        {
          question: isRTL ? "أين تُستضاف بياناتنا؟" : "Où sont hébergées nos données ?",
          answer: isRTL ?
            "جميع البيانات تُستضاف في الجزائر لدى مزودي خدمات معتمدين ومتوافقين مع القانون 18-07. نحن نضمن السيادة الرقمية الكاملة لبياناتكم مع أعلى معايير الأمان والتشفير." :
            "Toutes les données sont hébergées en Algérie chez des prestataires agréés et conformes à la loi 18-07. Nous garantissons une souveraineté numérique complète de vos données avec les plus hauts standards de sécurité et de chiffrement."
        },
        {
          question: isRTL ? "ما هي تدابير الأمان المطبقة؟" : "Quelles sont les mesures de sécurité mises en place ?",
          answer: isRTL ?
            "نطبق تشفير end-to-end،  نسخ احتياطية آلية، مراقبة 24/7، وتحديثات أمان منتظمة. جميع تدابيرنا متوافقة مع معايير ISO 27001 ومتطلبات القانون 18-07." :
            "Nous appliquons un chiffrement end-to-end, sauvegardes automatiques, surveillance 24/7, et mises à jour de sécurité régulières. Toutes nos mesures sont conformes aux standards ISO 27001 et aux exigences de la loi 18-07."
        }
      ]
    },
    {
      category: isRTL ? "قانوني" : "Juridique",
      questions: [
        {
          question: isRTL ? "ما هو سجل المعالجات وهل هو إجباري؟" : "Qu'est-ce que le registre des traitements et est-il obligatoire ?",
          answer: isRTL ?
            "سجل المعالجات هو وثيقة تحدد جميع أنشطة معالجة البيانات الشخصية في مؤسستكم. هو إجباري حسب التعديل الأخير للقانون 18-07 لجميع المسؤولين عن المعالجة والمتعاقدين من الباطن. DP-Manager ينشئ ويحدث هذا السجل تلقائياً." :
            "Le registre des traitements est un document qui recense toutes les activités de traitement de données personnelles de votre organisation. Il est obligatoire selon le dernier amendement de la loi 18-07 pour tous les responsables de traitement et sous-traitants. DP-Manager crée et met à jour ce registre automatiquement."
        },
        {
          question: isRTL ? "متى يجب الحصول على ترخيص من ANPDP؟" : "Quand faut-il obtenir une autorisation de l'ANPDP ?",
          answer: isRTL ?
            "وفقًا للقانون 18-07 المتعلق بحماية المعطيات ذات الطابع الشخصي، يشترط الحصول على ترخيص مسبق من السلطة الوطنية لحماية المعطيات الشخصية (ANPDP) في بعض الحالات الخاصة. ويُعد هذا الترخيص إلزاميًا بشكل خاص عند معالجة معطيات حساسة مثل المعطيات الصحية، الآراء السياسية، المعتقدات الدينية أو الانتماء النقابي. كما يُشترط الترخيص أيضًا في حالة نقل المعطيات الشخصية إلى الخارج، ما لم تنصّ التشريعات على استثناءات محددة. ويمكن للسلطة الوطنية كذلك أن تفرض الحصول على ترخيص مسبق لمعالجات أخرى تشكل خطرًا كبيرًا على حقوق وحريات الأشخاص المعنيين." :
            "Selon la loi 18-07 relative à la protection des données à caractère personnel, une autorisation préalable de l’ANPDP est requise dans certains cas spécifiques. Elle est notamment obligatoire lorsque le traitement porte sur des données sensibles, telles que les données de santé, les opinions politiques, les convictions religieuses ou encore l’appartenance syndicale. Une autorisation est également exigée en cas de transfert de données personnelles à l’étranger, sauf dérogations prévues par la loi. Enfin, l’ANPDP peut imposer l’autorisation pour d’autres traitements présentant un risque élevé pour les droits et libertés des personnes concernées."
        },
        {
          question: isRTL ? "كيف نتعامل مع طلبات حقوق الأشخاص؟" : "Comment gérer les demandes de droits des personnes ?",
          answer: isRTL ?
            "يتمتع الأشخاص المعنيون بمعالجة المعطيات بحقوق أساسية مكفولة بموجب القانون 18-07، من بينها: حق الإعلام، وحق الوصول، وحق التصحيح، وحق الاعتراض. ويجب على الجهة المسؤولة عن المعالجة أن تردّ على الطلبات ضمن أجل معقول، باستثناء طلبات التصحيح التي يُلزم فيها القانون بالرد خلال أجل أقصاه 10 أيام. توفّر منصة DP-Manager نماذج إلكترونية لتسهيل جمع الطلبات، متابعة الآجال القانونية، والاحتفاظ بالأدلة القانونية التي تثبت الامتثال لمتطلبات القانون." :
            "Les personnes concernées par un traitement de données disposent de droits fondamentaux garantis par la loi 18-07 : droit à l’information, d’accès, de rectification et d’opposition. L’organisme responsable doit répondre aux demandes dans un délai raisonnable, à l’exception des demandes de rectification, pour lesquelles la loi impose un délai maximal de 10 jours. La plateforme DP-Manager propose des formulaires en ligne permettant de collecter les demandes, suivre les délais de traitement, et conserver des preuves de réponse conformes aux exigences juridiques."
        }
      ]
    },
    {
      category: isRTL ? "تسعير" : "Tarification",
      questions: [
        {
          question: isRTL ? "كيف تُحسب تكلفة DP-Manager؟" : "Comment est calculé le coût de DP-Manager ?",
          answer: isRTL ?
            "التسعير يعتمد على حجم مؤسستكم (عدد الموظفين)، عدد المعالجات، والوحدات المطلوبة. نقدم عروض مخصصة لكل عميل. اتصلوا بنا للحصول على عرض سعر مجاني ومفصل." :
            "La tarification dépend de la taille de votre organisation (nombre d'employés), du nombre de traitements, et des modules requis. Nous proposons des devis personnalisés pour chaque client. Contactez-nous pour obtenir un devis gratuit et détaillé."
        },
        {
          question: isRTL ? "هل هناك تكاليف إضافية للتدريب والدعم؟" : "Y a-t-il des coûts supplémentaires pour la formation et le support ?",
          answer: isRTL ?
            "التدريب الأساسي والدعم التقني مشمولان في الاشتراك. نقدم تدريبات متقدمة ومرافقة شخصية كخدمات إضافية. الدعم متاح عبر الهاتف، البريد الإلكتروني، والدردشة المباشرة." :
            "La formation de base et le support technique sont inclus dans l'abonnement. Nous proposons des formations avancées et un accompagnement personnalisé en services additionnels. Le support est disponible par téléphone, email et chat en direct."
        },
        {
          question: isRTL ? "هل يمكن تجربة DP-Manager قبل الشراء؟" : "Peut-on tester DP-Manager avant l'achat ?",
          answer: isRTL ?
            "نعم، نقدم عروض توضيحية مخصصة ونسخة تجريبية لمدة 30 يوماً. يمكنكم أيضاً طلب تشخيص مجاني لاحتياجات الامتثال في مؤسستكم قبل اتخاذ القرار." :
            "Oui, nous proposons des démonstrations personnalisées et une version d'essai de 30 jours. Vous pouvez également demander un diagnostic gratuit des besoins de conformité de votre organisation avant de prendre une décision."
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const itemId = categoryIndex * 100 + questionIndex;
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isItemOpen = (categoryIndex: number, questionIndex: number) => {
    const itemId = categoryIndex * 100 + questionIndex;
    return openItems.includes(itemId);
  };

  const filteredFaqData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="pt-16" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-violet-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isRTL ? 'الأسئلة الشائعة' : 'Questions fréquemment posées'}
          </h1>
          <p className="text-xl text-blue-100">
            {isRTL ? 'إجابات على أسئلتكم حول القانون 18-07 و DP-Manager' : 'Réponses à vos questions sur la loi 18-07 et DP-Manager'}
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={isRTL ? 'ابحث في الأسئلة الشائعة...' : 'Rechercher dans la FAQ...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12 justify-center">
            <MessageCircle className="h-8 w-8 text-violet-600" />
            <h2 className="text-3xl font-bold text-blue-900">
              {isRTL ? 'الأسئلة والأجوبة' : 'Questions et réponses'}
            </h2>
          </div>

          {filteredFaqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-violet-200">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => (
                  <div key={questionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleItem(categoryIndex, questionIndex)}
                      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                    >
                      <h4 className="font-semibold text-blue-900 pr-4">{faq.question}</h4>
                      {isItemOpen(categoryIndex, questionIndex) ? (
                        <ChevronUp className="h-5 w-5 text-violet-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-violet-600 flex-shrink-0" />
                      )}
                    </button>
                    
                    {isItemOpen(categoryIndex, questionIndex) && (
                      <div className="px-6 py-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredFaqData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {isRTL ? 'لم يتم العثور على نتائج لبحثكم.' : 'Aucun résultat trouvé pour votre recherche.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            {isRTL ? 'لم تجدوا إجابة لسؤالكم؟' : 'Vous ne trouvez pas la réponse à votre question ?'}
          </h3>
          <p className="text-gray-700 mb-8">
            {isRTL ? 
              'فريق خبرائنا متاح للإجابة على جميع أسئلتكم حول القانون 18-07 و DP-Manager' :
              'Notre équipe d\'experts est disponible pour répondre à toutes vos questions sur la loi 18-07 et DP-Manager'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-violet-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-violet-700 transition-colors"
            >
              {isRTL ? 'اتصل بخبير' : 'Contacter un expert'}
            </a>
            <a
              href="/demo"
              className="border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isRTL ? 'طلب عرض توضيحي' : 'Demander une démo'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;