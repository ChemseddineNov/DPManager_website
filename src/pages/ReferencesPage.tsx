import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReferencesPage = () => {
  const { t, i18n } = useTranslation();
  const [logos, setLogos] = useState<string[]>([]);
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Liste des logos à tester - vous pouvez ajouter vos fichiers ici
    const logoFiles = [
      'client1.png',
      'client2.png',
      'client3.png',
      'client4.png',
      'client5.jpg',
      'client6.jpg',
      'client7.webp',
      'client8.png',
      'client9.jpg',
      'client10.png',
      'client11.png',
      'client12.jpg',
      'client13.png',
      'client14.png',
      'client15.png',
      'client16.png',
      'client17.jpg',
      'client18.jpg',
      'client19.png',
      'client20.png',
      'client21.png',
      // Ajoutez d'autres logos selon vos besoins
    ];

    // Filtrer les logos qui existent réellement
    const checkLogos = async () => {
      const existingLogos: string[] = [];
      
      for (const logoFile of logoFiles) {
        try {
          const response = await fetch(`/nosréférences/${logoFile}`, { method: 'HEAD' });
          if (response.ok) {
            existingLogos.push(logoFile);
          }
        } catch (error) {
          // Logo n'existe pas, on l'ignore
        }
      }
      
      setLogos(existingLogos);
    };

    checkLogos();
  }, []);

  const getClientName = (filename: string) => {
    // Extraire le nom du client depuis le nom de fichier
    return filename.replace(/\.(png|jpg|jpeg|svg|webp)$/i, '').replace(/[-_]/g, ' ');
  };

  return (
    <div className="pt-16" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section - Bilingual */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {isRTL ? (
              <>
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                  العديد من المؤسسات وضعت ثقتها في DP-Manager
                </h1>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  عدد متزايد من المؤسسات العامة والخاصة يعتمد على DP-Manager للامتثال للقانون 18-07.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                  Ils nous font confiance
                </h1>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  De plus en plus d'organisations publiques et privées choisissent DP-Manager pour se conformer à la loi 18-07.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Logos Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {logos.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {logos.map((logoFile, index) => (
                <div
                  key={`${logoFile}-${index}`}
                  className="flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                  style={{ minHeight: '120px' }}
                >
                  <img
                    src={`/nosréférences/${logoFile}`}
                    alt={`Client ${getClientName(logoFile)}`}
                    className="max-h-16 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      // Si l'image ne charge pas, la cacher
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            // Placeholder si aucun logo n'est trouvé
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {Array.from({ length: 15 }, (_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200"
                  style={{ minHeight: '120px' }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-gray-400 text-xs">Logo</span>
                    </div>
                    <span className="text-xs text-gray-400">Client {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-violet-50 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-violet-600 mb-2">50+</div>
              <p className="text-gray-700 font-medium">
                {isRTL ? 'مؤسسة مرافقة' : 'Organisations accompagnées'}
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-700 font-medium">
                {isRTL ? 'معدل الرضا' : 'Taux de satisfaction'}
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-700 font-medium">
                {isRTL ? 'امتثال مضمون' : 'Conformité garantie'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-violet-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {isRTL ? (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                هل ترغب في أن تصبح من عملائنا؟
              </h2>
              <Link
                to="/demo"
                className="inline-flex items-center space-x-3 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>اطلب عرضاً توضيحياً</span>
              </Link>
            </>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Vous souhaitez devenir client ?
              </h2>
              <Link
                to="/demo"
                className="inline-flex items-center space-x-3 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <span>Demander une démonstration</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {isRTL ? (
              <>
                <blockquote className="text-2xl md:text-3xl font-medium text-blue-900 mb-8 leading-relaxed">
                  "مكننا DP-Manager من جعل منظمتنا متوافقة في بضعة أسابيع. المرافقة القانونية وسهولة الاستخدام رائعة."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <img
      src="/Lyes_Matoug.png" // <-- mets ici le chemin réel vers l'image
      alt="Photo de M. Lyes MATOUG"
      className="w-full h-full object-cover"
    />
  </div>
                  <div className="text-right">
                    <p className="font-semibold text-blue-900">السيد إلياس معتوق</p>
                    <p className="text-gray-600">مسؤول حماية البيانات, شركة كوندور</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <blockquote className="text-2xl md:text-3xl font-medium text-blue-900 mb-8 leading-relaxed">
                  "DP-Manager nous a permis de mettre en conformité notre organisation en quelques semaines. L'accompagnement juridique et la simplicité d'utilisation sont remarquables."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
    <img
      src="/Lyes_Matoug.png" // <-- mets ici le chemin réel vers l'image
      alt="Photo de M. Lyes MATOUG"
      className="w-full h-full object-cover"
    />
  </div>
                  <div className="text-left">
                    <p className="font-semibold text-blue-900">M. Lyes MATOUG</p>
                    <p className="text-gray-600">DPO, SPA Condor</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferencesPage;