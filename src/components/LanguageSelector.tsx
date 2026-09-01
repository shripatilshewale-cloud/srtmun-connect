import React, { useState } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../data/translations';

interface LanguageSelectorProps {
  variant?: 'dropdown' | 'pills' | 'segmented';
  className?: string;
  onLanguageChange?: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'dropdown',
  className = '',
  onLanguageChange
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; label: string; nativeName: string; flag: string }[] = [
    { code: 'EN', label: 'English', nativeName: 'English', flag: '🌐' },
    { code: 'MR', label: 'मराठी', nativeName: 'मराठी (Marathi)', flag: '🌐' },
    { code: 'HI', label: 'हिंदी', nativeName: 'हिंदी (Hindi)', flag: '🌐' }
  ];

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
    if (onLanguageChange) {
      onLanguageChange(code);
    }
  };

  const currentLang = languages.find(l => l.code === language) || languages[0];

  if (variant === 'segmented') {
    return (
      <div className={`bg-slate-100 p-1 rounded-xl flex items-center gap-1 border border-slate-200 ${className}`}>
        {languages.map((item) => (
          <button
            key={item.code}
            type="button"
            id={`lang-seg-${item.code.toLowerCase()}`}
            onClick={() => handleSelect(item.code)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              language === item.code
                ? 'bg-white text-blue-700 shadow-xs ring-1 ring-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>{item.flag}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    );
  }

  if (variant === 'pills') {
    return (
      <div className={`flex items-center gap-2 flex-wrap ${className}`}>
        {languages.map((item) => (
          <button
            key={item.code}
            type="button"
            id={`lang-pill-${item.code.toLowerCase()}`}
            onClick={() => handleSelect(item.code)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border flex items-center gap-1.5 ${
              language === item.code
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span>{item.flag}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    );
  }

  // Default: Dropdown Variant
  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        id="language-selector-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors border border-slate-200 focus:outline-hidden"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4 text-blue-600" />
        <span>{currentLang.flag} {currentLang.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-3.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              🌐 Select Language
            </div>
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                id={`lang-opt-${item.code.toLowerCase()}`}
                onClick={() => handleSelect(item.code)}
                className={`w-full px-3.5 py-2.5 text-left text-sm flex items-center justify-between transition-colors ${
                  language === item.code
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{item.flag}</span>
                  <span>{item.label}</span>
                </span>
                {language === item.code && (
                  <Check className="w-4 h-4 text-blue-600" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
