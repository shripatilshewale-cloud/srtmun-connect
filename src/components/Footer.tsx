import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  GraduationCap, 
  ShieldCheck, 
  ExternalLink,
  Bot
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UNIVERSITY_INFO } from '../data/universityData';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const footerNavLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.university, path: "/university" },
    { name: t.nav.courses, path: "/courses" },
    { name: t.nav.admission, path: "/admission" },
    { name: t.nav.campus, path: "/campus" },
    { name: t.nav.hostel, path: "/hostel" },
    { name: t.nav.sports, path: "/sports" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.calendar, path: "/calendar" },
    { name: t.nav.askSrtmun, path: "/chatbot", highlight: true }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: University Identity */}
          <div className="space-y-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-white tracking-tight">
                  SRTMUN <span className="text-blue-400 font-medium text-sm">CONNECT</span>
                </span>
                <span className="text-xs text-slate-400">
                  {t.assistantTitle}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Swami Ramanand Teerth Marathwada University, Vishnupuri, Nanded, Maharashtra - 431606.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-blue-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>NAAC 'A' Grade (3rd Cycle) Accredited</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 text-sm">
              {footerNavLinks.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    id={`footer-link-${link.path.replace('/', '') || 'home'}`}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-150"
                  >
                    <span>→</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Student & Campus Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Campus & Support
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 text-sm">
              {footerNavLinks.slice(5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    id={`footer-link-${link.path.replace('/', '') || 'chatbot'}`}
                    className={`inline-flex items-center gap-1.5 transition-all duration-150 ${
                      link.highlight
                        ? 'text-blue-400 font-semibold hover:text-blue-300'
                        : 'text-slate-400 hover:text-white hover:translate-x-1'
                    }`}
                  >
                    {link.highlight ? <Bot className="w-4 h-4" /> : <span>→</span>}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: University Contact Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.contactUs}
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Dnyanteerth, Vishnupuri, Nanded, Maharashtra 431606, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+91-2462-229242 / 229243</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>registrar@srtmun.ac.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <a 
                  href="https://srtmun.ac.in" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-blue-300 inline-flex items-center gap-1 text-slate-300"
                >
                  <span>srtmun.ac.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SRTMUN CONNECT. {t.footer.rights}</p>
          <p className="text-center md:text-right">
            {t.footer.affiliation}
          </p>
        </div>

      </div>
    </footer>
  );
};
