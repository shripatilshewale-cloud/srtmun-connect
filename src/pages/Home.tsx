import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Building, 
  GraduationCap, 
  Users, 
  MapPin, 
  ChevronRight,
  BellRing
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SearchBar } from '../components/SearchBar';
import { FeatureCard } from '../components/FeatureCard';
import { UNIVERSITY_INFO } from '../data/universityData';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: "Established", value: "1994", sub: "30+ Years of Excellence" },
    { label: "NAAC Accreditation", value: "A Grade", sub: "3rd Cycle Accredited" },
    { label: "Lush Green Campus", value: "595+ Acres", sub: "Vishnupuri, Nanded" },
    { label: "Academic Schools", value: "13 Schools", sub: "60+ Specializations" },
    { label: "Affiliated Colleges", value: "590+", sub: "Across 4 Districts" }
  ];

  const cardsData = [
    {
      id: "schools-courses",
      iconName: "BookOpen",
      title: t.cards.schoolsCourses.title,
      description: t.cards.schoolsCourses.desc,
      to: "/courses",
      badge: "13 Schools",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: "admission",
      iconName: "GraduationCap",
      title: t.cards.admission.title,
      description: t.cards.admission.desc,
      to: "/admission",
      badge: "2025-26 Intake",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: "campus",
      iconName: "Building2",
      title: t.cards.campus.title,
      description: t.cards.campus.desc,
      to: "/campus",
      badge: "595 Acres",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      id: "hostel",
      iconName: "Home",
      title: t.cards.hostel.title,
      description: t.cards.hostel.desc,
      to: "/hostel",
      badge: "Boys & Girls",
      gradient: "from-amber-600 to-orange-600"
    },
    {
      id: "sports",
      iconName: "Activity",
      title: t.cards.sports.title,
      description: t.cards.sports.desc,
      to: "/sports",
      badge: "400m Track",
      gradient: "from-rose-600 to-red-600"
    },
    {
      id: "services",
      iconName: "Globe",
      title: t.cards.services.title,
      description: t.cards.services.desc,
      to: "/services",
      badge: "e-Suvidha",
      gradient: "from-sky-600 to-blue-600"
    },
    {
      id: "calendar",
      iconName: "Calendar",
      title: t.cards.calendar.title,
      description: t.cards.calendar.desc,
      to: "/calendar",
      badge: "Timetable",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      id: "university",
      iconName: "Info",
      title: t.cards.university.title,
      description: t.cards.university.desc,
      to: "/university",
      badge: "About SRTMUN",
      gradient: "from-slate-700 to-slate-900"
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Live Announcement Ticker */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white text-xs sm:text-sm py-2.5 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-medium overflow-hidden">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/30 text-blue-200 font-bold text-[11px] shrink-0 uppercase tracking-wider">
              <BellRing className="w-3.5 h-3.5 text-blue-300" />
              Notice
            </span>
            <span className="truncate text-slate-200">
              Admissions open for on-campus PG, UG and Diploma programmes for Academic Year 2025–26. Check eligibility and application guidelines.
            </span>
          </div>
          <Link 
            to="/admission" 
            className="hidden sm:inline-flex items-center gap-1 text-blue-300 hover:text-white shrink-0 font-semibold text-xs"
          >
            <span>View Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-12 sm:pb-20 overflow-hidden">
        {/* Background decorative mesh glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent blur-3xl -z-10 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-blue-800 tracking-wide uppercase">
              {t.hero.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] font-display">
            {t.hero.heading}
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            {t.hero.subheading}
          </p>

          {/* Large Search / AI Input */}
          <div className="pt-2">
            <SearchBar />
          </div>

          {/* AI Assistance Quick CTA banner */}
          <div className="pt-4 flex items-center justify-center">
            <Link
              to="/chatbot"
              id="hero-ask-ai-cta"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white border border-blue-200 shadow-sm hover:shadow-md text-slate-700 hover:text-blue-700 transition-all duration-200 group"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs">
                <Bot className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold">
                Looking for instant answers? Ask our AI Assistant in Marathi, Hindi or English
              </span>
              <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-blue-950/15">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((item, idx) => (
              <div key={item.label} className={`space-y-1 ${idx !== 0 ? 'pt-4 sm:pt-0' : ''}`}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-blue-200">
                  {item.label}
                </div>
                <div className="text-[11px] text-blue-300/80 font-medium">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIVERSITY SECTION & 8 INFORMATION CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.sectionTag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
            {t.sectionHeading}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.sectionDesc}
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((card) => (
            <FeatureCard
              key={card.id}
              id={card.id}
              iconName={card.iconName}
              title={card.title}
              description={card.description}
              to={card.to}
              badge={card.badge}
              gradient={card.gradient}
            />
          ))}
        </div>

      </section>

      {/* QUICK HIGHLIGHTS / WHY SRTMUN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/80 rounded-3xl p-8 sm:p-12 border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="space-y-4 lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Academic Excellence
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                Swami Ramanand Teerth Marathwada University
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Established on September 17, 1994, SRTMUN has been a beacon of higher learning, progressive research, and student upliftment across the Marathwada region.
              </p>
              <div className="pt-2">
                <Link
                  to="/university"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800"
                >
                  <span>Learn more about university history</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  1
                </div>
                <h4 className="font-bold text-slate-900 text-base">Research & Patents</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Active Central Instrumentation Facility (CIF), national & international patents, CSIR/UGC funded major research projects.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  2
                </div>
                <h4 className="font-bold text-slate-900 text-base">Affordable Education</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Subsidized fee structure, government scholarships (MahaDBT, EBC, Minority, SC/ST, OBC/NT) and earn-while-learn schemes.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  3
                </div>
                <h4 className="font-bold text-slate-900 text-base">Modern Infrastructure</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  595-acre campus with Knowledge Resource Centre, 1Gbps fiber LAN, digital studio, and Olympic-grade athletic track.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  4
                </div>
                <h4 className="font-bold text-slate-900 text-base">Regional Empowerment</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Serving Nanded, Latur, Parbhani, and Hingoli with over 590 affiliated colleges and specialized skill centers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
