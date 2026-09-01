import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { VoiceButton } from './VoiceButton';

interface SearchBarProps {
  initialQuery?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  initialQuery = "", 
  onSearch, 
  className = "" 
}) => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState(initialQuery);

  const quickPills = language === 'MR' ? [
    { label: "BCA", search: "BCA", path: "/course-details?id=bca" },
    { label: "MCA", search: "MCA", path: "/course-details?id=mca" },
    { label: "प्रवेश", search: "admission", path: "/admission" },
    { label: "अभ्यासक्रम", search: "courses", path: "/courses" },
    { label: "वसतिगृह", search: "hostel", path: "/hostel" },
    { label: "क्रीडा", search: "sports", path: "/sports" },
    { label: "दिनदर्शिका", search: "calendar", path: "/calendar" }
  ] : language === 'HI' ? [
    { label: "BCA", search: "BCA", path: "/course-details?id=bca" },
    { label: "MCA", search: "MCA", path: "/course-details?id=mca" },
    { label: "प्रवेश", search: "admission", path: "/admission" },
    { label: "पाठ्यक्रम", search: "courses", path: "/courses" },
    { label: "छात्रावास", search: "hostel", path: "/hostel" },
    { label: "खेल", search: "sports", path: "/sports" },
    { label: "कैलेंडर", search: "calendar", path: "/calendar" }
  ] : [
    { label: "Courses", search: "courses", path: "/courses" },
    { label: "Admission", search: "admission", path: "/admission" },
    { label: "Hostel", search: "hostel", path: "/hostel" },
    { label: "Sports", search: "sports", path: "/sports" },
    { label: "BCA", search: "bca", path: "/course-details?id=bca" },
    { label: "MCA", search: "mca", path: "/course-details?id=mca" },
    { label: "MBA", search: "mba", path: "/course-details?id=mba" },
    { label: "Calendar", search: "calendar", path: "/calendar" }
  ];

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const clean = query.trim();
    if (!clean) return;

    if (onSearch) {
      onSearch(clean);
      return;
    }

    const lower = clean.toLowerCase();

    if (lower === "bca" || lower.includes("bca")) {
      navigate("/course-details?id=bca", { state: { courseName: "B.C.A.", schoolName: "School of Computational Sciences" } });
    } else if (lower === "mca" || lower.includes("mca")) {
      navigate("/course-details?id=mca", { state: { courseName: "M.C.A.", schoolName: "School of Computational Sciences" } });
    } else if (lower.includes("course") || lower.includes("school") || lower.includes("syllabus") || lower.includes("अभ्यासक्रम") || lower.includes("पाठ्यक्रम")) {
      navigate(`/courses?q=${encodeURIComponent(clean)}`);
    } else if (lower.includes("admission") || lower.includes("apply") || lower.includes("eligibility") || lower.includes("प्रवेश")) {
      navigate("/admission");
    } else if (lower.includes("hostel") || lower.includes("room") || lower.includes("mess") || lower.includes("वसतिगृह") || lower.includes("छात्रावास")) {
      navigate("/hostel");
    } else if (lower.includes("sport") || lower.includes("gym") || lower.includes("ground") || lower.includes("क्रीडा") || lower.includes("खेल")) {
      navigate("/sports");
    } else if (lower.includes("calendar") || lower.includes("exam") || lower.includes("holiday") || lower.includes("date") || lower.includes("दिनदर्शिका") || lower.includes("कैलेंडर")) {
      navigate("/calendar");
    } else if (lower.includes("service") || lower.includes("result") || lower.includes("portal") || lower.includes("hall ticket") || lower.includes("सेवा")) {
      navigate("/services");
    } else if (lower.includes("campus") || lower.includes("library") || lower.includes("cif") || lower.includes("परिसर")) {
      navigate("/campus");
    } else if (lower.includes("university") || lower.includes("about") || lower.includes("vc") || lower.includes("nanded") || lower.includes("विद्यापीठ") || lower.includes("विश्वविद्यालय")) {
      navigate("/university");
    } else {
      // Direct natural language question to the AI Chatbot
      navigate(`/chatbot?q=${encodeURIComponent(clean)}`);
    }
  };

  const handleVoiceTranscript = (text: string) => {
    setQuery(text);
    // Put text and navigate to chatbot
    setTimeout(() => {
      navigate(`/chatbot?q=${encodeURIComponent(text)}`);
    }, 300);
  };

  return (
    <div className={`w-full max-w-3xl mx-auto ${className}`}>
      {/* Search Input Box */}
      <form 
        onSubmit={handleSearch}
        className="relative bg-white rounded-2xl md:rounded-3xl p-2 sm:p-2.5 shadow-xl shadow-blue-900/10 border-2 border-blue-100/90 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-500/15 transition-all duration-300"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Search Icon */}
          <div className="pl-3 text-blue-600 shrink-0">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          {/* Text Input */}
          <input
            type="text"
            id="home-search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.hero.searchPlaceholder}
            className="w-full py-2.5 sm:py-3 text-slate-800 placeholder-slate-400 font-medium text-sm sm:text-base bg-transparent border-none focus:outline-hidden focus:ring-0"
          />

          {/* Voice Microphone Button */}
          <VoiceButton 
            onResult={handleVoiceTranscript} 
            className="shrink-0"
          />

          {/* Ask SRTMUN / Search Button */}
          <button
            type="submit"
            id="home-search-submit-btn"
            className="shrink-0 inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs sm:text-sm rounded-xl md:rounded-2xl shadow-md shadow-blue-500/25 hover:shadow-lg transition-all duration-200"
          >
            <Sparkles className="w-4 h-4 text-blue-200 hidden sm:inline-block" />
            <span>{t.hero.askBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>
      </form>

      {/* Quick Question Pills */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="text-slate-500 font-medium mr-1">
          {t.hero.quickQuestions}
        </span>
        {quickPills.map((pill) => (
          <button
            key={pill.label}
            type="button"
            id={`quick-pill-${pill.label.toLowerCase()}`}
            onClick={() => {
              setQuery(pill.search);
              if (pill.path) {
                navigate(pill.path);
              }
            }}
            className="px-3 py-1.5 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200/80 shadow-2xs font-medium transition-all duration-150 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            {pill.label}
          </button>
        ))}
      </div>
    </div>
  );
};
