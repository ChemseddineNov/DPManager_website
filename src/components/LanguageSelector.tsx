import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const getCurrentLanguageIndicator = () => {
    return i18n.language === 'ar' ? (
      <span className="text-sm font-bold">ع</span>
    ) : (
      <span className="text-xs font-medium">Fr</span>
    );
  };

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'عربي', flag: '🇩🇿' }
  ];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    // Update document direction for Arabic
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = langCode;
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors duration-200">
        <Globe className="h-4 w-4" />
        {getCurrentLanguageIndicator()}
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 ${
                i18n.language === language.code ? 'bg-violet-50 text-violet-600' : 'text-gray-700'
              }`}
            >
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;