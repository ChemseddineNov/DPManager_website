import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Handshake, Scale, Users, Award, Phone, Mail } from 'lucide-react';

const PartnersPage = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const legalPartners = [
    { 
      name: "Tadjeddine & Partners", 
      specialty: isRTL ? "قانون البيانات الشخصية" : "Droit des données personnelles",
      logo: "TandP.png",
      phone: "+213 5 60 403 405 / +213 5 60 349 059",
      email: "info@tadjeddine-partners.com"
    },
    { 
      name: "HALKORB", 
      specialty: isRTL ? "استشارة قانونية" : "Conseil juridique",
      logo: "Halkorb.jpg",
      phone: "+213 561 85 85 85 / +213 661 68 70 92",
      email: "contact@halkorb.com"
    },
    { 
      name: "Global Management Services", 
      specialty: isRTL ? "خدمات الإدارة" : "Services de gestion",
      logo: "GMS.png",
      phone: "213(0) 23-76-86-36",
      email: "contact@gms-dz.com"
    },
    { 
      name: "AMAD Advisory", 
      specialty: isRTL ? "استشارة ومشورة" : "Conseil et advisory",
      logo: "amad.png",
      phone: "213 (0) 699 031 657",
      email: "contact@amadadvisory.com"
    },
       { 
      name: "ADVISOPHY", 
      specialty: isRTL ? "استشارة ومشورة" : "Conseil et advisory",
      logo: "Advishory.jpg",
      phone: "+213 23 60 21 93",
      email: "contact@advisorhy.com"
    }
  ];

  const techPartners = [
    { 
      name: "ICOSNET", 
      specialty: isRTL ? "استشارة تقنية" : "Conseil technique",
      logo: "Icosnet.png",
      phone: "+213 23 60 21 93",
      email: "contact@advisorhy.com"
    },
    { 
      name: "DJEZZY Cloud", 
      specialty: isRTL ? "الأمن المعلوماتي" : "Sécurité informatique",
      logo: "Djezzycloud.png",
      phone: "+213-770-857788",
      email: "contact@cloudsecure.dz"
    },
  ];

  return (
    <div className="pt-16" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-violet-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isRTL ? 'شركاؤنا' : 'Nos partenaires'}
          </h1>
          <p className="text-xl text-blue-100">
            {isRTL ? 
              'نظام بيئي من الخبراء لمرافقتك في امتثالك للقانون 18-07.' :
              'Un écosystème d\'experts pour vous accompagner dans votre conformité à la loi 18-07.'
            }
          </p>
        </div>
      </section>

      {/* Legal Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {isRTL ? 'الشركاء' : 'Partenaires'}
            </h2>
            <p className="text-xl text-gray-600">
              {isRTL ? 
                'مكاتب متخصصة في مرافقة الامتثال للقانون 18-07' :
                'Cabinets spécialisés dans l\'accompagnement à la conformité à la loi 18-07'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalPartners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
                <div className="mb-6">
                  <img
                    src={`/logos/partners/${partner.logo}`}
                    alt={partner.name}
                    className="max-w-full max-h-32 object-contain mx-auto rounded-lg border border-gray-200 p-3"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNCAzMkg1NlY0OEgyNFYzMloiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{partner.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <a href={`tel:${partner.phone.replace(/\s/g, '')}`} className="text-blue-600 hover:text-blue-700">
                      {partner.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <a href={`mailto:${partner.email}`} className="text-blue-600 hover:text-blue-700">
                      {partner.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {isRTL ? 'الشركاء التكنولوجيون' : 'Partenaires technologiques'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techPartners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
                <div className="mb-6">
                  <img
                    src={`/logos/partners/${partner.logo}`}
                    alt={partner.name}
                    className="max-w-full max-h-32 object-contain mx-auto rounded-lg border border-gray-200 p-3"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNCAzMkg1NlY0OEgyNFYzMloiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{partner.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-violet-600" />
                    <a href={`tel:${partner.phone.replace(/\s/g, '')}`} className="text-violet-600 hover:text-violet-700">
                      {partner.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-violet-600" />
                    <a href={`mailto:${partner.email}`} className="text-violet-600 hover:text-violet-700">
                      {partner.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-violet-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isRTL ? 'مهتم بالشراكة؟' : 'Intéressé par un partenariat ?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {isRTL ? 
              'اكتشف كيفية أن تصبح شريكًا وتطوير نشاطك في مجال الامتثال.' :
              'Découvrez comment devenir partenaire et développer votre activité dans la conformité.'
            }
          </p>
          <div className="flex justify-center">
            <Link
              to="/partners/become"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              {isRTL ? 'الانضمام كشريك' : 'Devenir partenaire'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;