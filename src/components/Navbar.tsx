import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Globe, 
  Menu, 
  X, 
  Bot, 
  GraduationCap, 
  Building2, 
  BookOpen, 
  Home as HomeIcon,
  ChevronDown,
  Calendar,
  Layers,
  Award,
  Activity,
  Compass
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../data/translations';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const mainNavLinks = [
    { name: t.nav.home, path: "/", icon: HomeIcon },
    { name: t.nav.university, path: "/university", icon: Building2 },
    { name: t.nav.courses, path: "/courses", icon: BookOpen },
    { name: t.nav.campus, path: "/campus", icon: GraduationCap },
  ];

  const secondaryNavLinks = [
    { name: t.nav.admission, path: "/admission", icon: Award },
    { name: t.nav.hostel, path: "/hostel", icon: HomeIcon },
    { name: t.nav.sports, path: "/sports", icon: Activity },
    { name: t.nav.services, path: "/services", icon: Layers },
    { name: t.nav.calendar, path: "/calendar", icon: Calendar },
  ];

  const allNavLinks = [
    { name: t.nav.home, path: "/", icon: HomeIcon },
    { name: t.nav.university, path: "/university", icon: Building2 },
    { name: t.nav.courses, path: "/courses", icon: BookOpen },
    { name: t.nav.campus, path: "/campus", icon: GraduationCap },
    { name: t.nav.admission, path: "/admission", icon: Award },
    { name: t.nav.hostel, path: "/hostel", icon: HomeIcon },
    { name: t.nav.sports, path: "/sports", icon: Activity },
    { name: t.nav.services, path: "/services", icon: Layers },
    { name: t.nav.calendar, path: "/calendar", icon: Calendar },
    { 
      name: t.nav.askSrtmun, 
      path: "/chatbot", 
      icon: Bot, 
      highlight: true 
    }
  ];

  const languages: { code: Language; label: string; sub: string }[] = [
    { code: 'EN', label: 'English', sub: 'EN' },
    { code: 'MR', label: 'मराठी', sub: 'Marathi' },
    { code: 'HI', label: 'हिंदी', sub: 'Hindi' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const isAnySecondaryActive = secondaryNavLinks.some(link => isActive(link.path));

  const getCurrentLangLabel = () => {
    if (language === 'MR') return 'मराठी';
    if (language === 'HI') return 'हिंदी';
    return 'English';
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link 
            to="/" 
            id="nav-logo-link"
            className="flex items-center gap-3.5 group focus:outline-hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Blue Rounded Square containing "S" */}
            <div className="w-11 h-11 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 rounded-xl flex items-center justify-center text-white font-extrabold text-2xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              S
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-lg text-slate-900 tracking-tight flex items-center gap-1.5 font-display">
                SRTMUN
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 tracking-normal">
                  CONNECT
                </span>
              </span>
              <span className="text-[11px] font-medium text-slate-500 hidden sm:inline-block">
                Swami Ramanand Teerth Marathwada University
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {mainNavLinks.map((link) => {
              const active = isActive(link.path);
              const Icon = link.icon;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-link-${link.path.replace('/', '') || 'home'}`}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
                    active
                      ? 'text-blue-700 bg-blue-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}

            {/* Explore / More Dropdown */}
            <div className="relative">
              <button
                type="button"
                id="nav-more-dropdown-btn"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                  isAnySecondaryActive || moreDropdownOpen
                    ? 'text-blue-700 bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <Compass className="w-4 h-4 text-slate-400" />
                <span>{t.common.explore}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setMoreDropdownOpen(false)}
                  />
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      University Sections
                    </div>
                    {secondaryNavLinks.map((link) => {
                      const active = isActive(link.path);
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setMoreDropdownOpen(false)}
                          className={`flex items-center gap-2.5 px-3.5 py-2 text-sm transition-colors ${
                            active
                              ? 'bg-blue-50 text-blue-700 font-semibold'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${active ? 'text-blue-600' : 'text-slate-400'}`} />
                          <span>{link.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Ask SRTMUN AI Button */}
            <Link
              to="/chatbot"
              id="nav-link-ask-srtmun"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Bot className="w-4 h-4 text-blue-200" />
              <span>{t.nav.askSrtmun}</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
            </Link>
          </nav>

          {/* Right Action: Language Selector & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                id="language-selector-button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors border border-slate-200 focus:outline-hidden"
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-4 h-4 text-blue-600" />
                <span>🌐 {getCurrentLangLabel()}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      🌐 Select Language
                    </div>
                    {languages.map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        id={`lang-btn-${item.code}`}
                        onClick={() => {
                          setLanguage(item.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full px-3.5 py-2.5 text-left text-sm flex items-center justify-between transition-colors ${
                          language === item.code 
                            ? 'bg-blue-50 text-blue-700 font-semibold' 
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>🌐</span>
                          <span>{item.label}</span>
                        </span>
                        <span className="text-xs text-slate-400 font-medium">{item.sub}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1.5 shadow-lg max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-150">
          {allNavLinks.map((link) => {
            const active = isActive(link.path);
            const Icon = link.icon;

            return (
              <Link
                key={link.path}
                to={link.path}
                id={`mobile-nav-${link.path.replace('/', '') || 'home'}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : link.highlight
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md shadow-blue-500/20'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-blue-600' : link.highlight ? 'text-white' : 'text-slate-400'}`} />
                <span>{link.name}</span>
                {link.highlight && (
                  <span className="ml-auto text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">AI Bot</span>
                )}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-slate-100">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
              Select Language
            </div>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLanguage(item.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 text-xs font-semibold rounded-lg text-center border transition-all ${
                    language === item.code 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs' 
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  🌐 {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
