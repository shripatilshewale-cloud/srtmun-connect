import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  TRANSLATIONS, 
  Language, 
  Translations, 
  normalizeLang, 
  toStandardLangName 
} from '../data/translations';

interface LanguageContextType {
  language: 'EN' | 'MR' | 'HI';
  standardLanguage: 'english' | 'marathi' | 'hindi';
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<'EN' | 'MR' | 'HI'>(() => {
    // Check 'srtmun_language' first as specified in prompt, fallback to 'srtmun_lang'
    const saved = localStorage.getItem('srtmun_language') || localStorage.getItem('srtmun_lang');
    return normalizeLang(saved);
  });

  const setLanguage = (lang: Language) => {
    const normalized = normalizeLang(lang);
    setCurrentLang(normalized);
    const standardName = toStandardLangName(normalized);
    localStorage.setItem('srtmun_language', standardName);
    localStorage.setItem('srtmun_lang', normalized);
  };

  const standardLanguage = toStandardLangName(currentLang);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.EN;

  return (
    <LanguageContext.Provider value={{ 
      language: currentLang, 
      standardLanguage, 
      setLanguage, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
