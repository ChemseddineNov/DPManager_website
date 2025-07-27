import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Download, File } from 'lucide-react';

interface Document {
  id: number;
  title: string;
  description: string;
  filename: string;
  path: string;
}

interface DocumentsData {
  fr: Document[];
  ar: Document[];
}

interface AutresDocumentsData {
  fr: Document[];
  ar: Document[];
}

const DocumentsPage = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [documents, setDocuments] = useState<DocumentsData>({ fr: [], ar: [] });
  const [autresDocuments, setAutresDocuments] = useState<AutresDocumentsData>({ fr: [], ar: [] });
  const [loading, setLoading] = useState(true);
  const [loadingAutres, setLoadingAutres] = useState(true);

  // Fonction pour obtenir l'icône selon le type de fichier
  const getFileIcon = (filename: string) => {
    const extension = filename.toLowerCase().split('.').pop();
    
    switch (extension) {
      case 'pdf':
        return (
          <img 
            src="/Icones types de fichiers/PDF.png" 
            alt="PDF" 
            className="w-8 h-8 object-contain"
          />
        );
      case 'doc':
      case 'docx':
        return (
          <img 
            src="/Icones types de fichiers/WORD.png" 
            alt="Word" 
            className="w-8 h-8 object-contain"
          />
        );
      case 'ppt':
      case 'pptx':
        return (
          <img 
            src="/Icones types de fichiers/PPT.png" 
            alt="PowerPoint" 
            className="w-8 h-8 object-contain"
            onError={(e) => {
              // Fallback vers une icône générique si PPT.png n'existe pas
              const target = e.target as HTMLImageElement;
              target.src = "/Icones types de fichiers/TXT.png";
            }}
          />
        );
      case 'xls':
      case 'xlsx':
        return (
          <img 
            src="/Icones types de fichiers/XLS.png" 
            alt="Excel" 
            className="w-8 h-8 object-contain"
          />
        );
      default:
        return (
          <img 
            src="/Icones types de fichiers/TXT.png" 
            alt="Fichier" 
            className="w-8 h-8 object-contain"
          />
        );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        const response = await fetch('/data/documents-officiels.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }
        
        const data: DocumentsData = await response.json();
        setDocuments(data);
      } catch (error) {
        console.error('Erreur lors du chargement des documents:', error);
      } finally {
        setLoading(false);
      }
    };

    const loadAutresDocuments = async () => {
      try {
        const response = await fetch('/data/autres_doc.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }
        
        const data: AutresDocumentsData = await response.json();
        setAutresDocuments(data);
      } catch (error) {
        console.error('Erreur lors du chargement des autres documents:', error);
      } finally {
        setLoadingAutres(false);
      }
    };

    loadDocuments();
    loadAutresDocuments();
  }, []);

  const currentDocuments = isRTL ? documents.ar : documents.fr;
  const currentAutresDocuments = isRTL ? autresDocuments.ar : autresDocuments.fr;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-50" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            {isRTL ? 'مكتبة الوثائق' : 'Bibliothèque de documents'}
          </h1>
          
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
              {/* Colonne Documents officiels */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="text-lg font-semibold">
                    {isRTL ? `الوثائق الرسمية (${currentDocuments.length} ملفات)` : `Documents officiels (${currentDocuments.length} fichiers)`}
                  </h3>
                </div>
                <div className="h-[calc(600px-60px)] overflow-y-auto p-4">
                  {loading ? (
                    <div className="flex items-center justify-center h-32">
                      <div className="text-gray-500">Chargement...</div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {currentDocuments.map((document) => (
                        <div
                          key={document.id}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center space-x-3">
                            {getFileIcon(document.filename)}
                            <div>
                              <h4 className="font-semibold text-gray-900">{document.title}</h4>
                              <p className="text-sm text-gray-600">{document.description}</p>
                            </div>
                          </div>
                          <a
                            href={document.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            <Download className="h-6 w-6" />
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Colonne Autres documents */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-violet-600 text-white p-4">
                  <h3 className="text-lg font-semibold">
                    {isRTL ? `وثائق أخرى (${currentAutresDocuments.length} ملفات)` : `Autres documents (${currentAutresDocuments.length} fichiers)`}
                  </h3>
                </div>
                <div className="h-[calc(600px-60px)] overflow-y-auto p-4">
                  {loadingAutres ? (
                    <div className="flex items-center justify-center h-32">
                      <div className="text-gray-500">
                        {isRTL ? 'جاري التحميل...' : 'Chargement...'}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {currentAutresDocuments.map((document) => (
                        <div
                          key={document.id}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center space-x-3">
                            {getFileIcon(document.filename)}
                            <div>
                              <h4 className="font-semibold text-gray-900">{document.title}</h4>
                              <p className="text-sm text-gray-600">{document.description}</p>
                            </div>
                          </div>
                          <a
                            href={document.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-violet-600 hover:text-violet-700 transition-colors"
                          >
                            <Download className="h-6 w-6" />
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentsPage;