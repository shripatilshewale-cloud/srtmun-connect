import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Award, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Compass, 
  Phone, 
  Mail, 
  Globe, 
  ExternalLink,
  ChevronRight,
  Bot
} from 'lucide-react';
import { UNIVERSITY_INFO, SCHOOLS_DATA } from '../data/universityData';
import { useLanguage } from '../context/LanguageContext';

export const University: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const jurisdictions = [
    { district: "Nanded", role: "Headquarters & University Main Campus", colleges: "180+ Colleges" },
    { district: "Latur", role: "SRTMUN Sub-Center Campus & Colleges", colleges: "175+ Colleges" },
    { district: "Parbhani", role: "SRTMUN Sub-Center Campus & Colleges", colleges: "135+ Colleges" },
    { district: "Hingoli", role: "Affiliated Science & Arts Colleges", colleges: "100+ Colleges" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100">
          <Building2 className="w-4 h-4" />
          <span>About The University</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
          Swami Ramanand Teerth Marathwada University
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Dnyanteerth, Vishnupuri, Nanded, Maharashtra - 431606. Recognized under UGC Act 12(B) &amp; 2(f), NAAC 'A' Grade.
        </p>
      </div>

      {/* Hero Overview */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-blue-500/30 border border-blue-400/40 text-xs font-extrabold uppercase tracking-wider text-blue-200">
            Est. September 17, 1994
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/40 text-xs font-extrabold uppercase tracking-wider text-emerald-200">
            NAAC 'A' Grade
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-500/30 border border-purple-400/40 text-xs font-extrabold uppercase tracking-wider text-purple-200">
            595+ Acres Campus
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display leading-tight">
          A Premier Center of Higher Learning and Research in Marathwada
        </h2>

        <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">
          {UNIVERSITY_INFO.history}
        </p>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-2xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-display">
            University Vision
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {UNIVERSITY_INFO.vision}
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-2xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-display">
            University Mission
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {UNIVERSITY_INFO.mission}
          </p>
        </div>
      </div>

      {/* Jurisdiction Districts */}
      <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400">
            Regional Jurisdiction
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
            Jurisdiction Across 4 Marathwada Districts
          </h3>
          <p className="text-sm text-slate-400">
            SRTMUN oversees higher education, conduct of examinations, and academic quality assurance across 590+ affiliated colleges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {jurisdictions.map((item) => (
            <div key={item.district} className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="text-lg font-bold text-white font-display flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{item.district}</span>
              </div>
              <div className="text-xs text-blue-300 font-medium">{item.colleges}</div>
              <p className="text-[11px] text-slate-400">{item.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 13 Academic Schools Quick Directory */}
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              13 On-Campus Academic Schools
            </h3>
            <p className="text-sm text-slate-600">
              Specialized multidisciplinary faculties providing world-class teaching and lab research.
            </p>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-xl text-xs font-bold transition-colors"
          >
            <span>View All Courses</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SCHOOLS_DATA.map((school, index) => (
            <Link
              key={school.id}
              to={`/courses?q=${encodeURIComponent(school.name)}`}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group flex items-start gap-3.5"
            >
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {index + 1}
              </span>
              <div>
                <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                  {school.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {school.courses.length} Programmes Available
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact & Administration Details */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-2xs space-y-6">
        <div className="flex items-center gap-3 text-blue-700 font-bold text-xl font-display">
          <Phone className="w-6 h-6 text-blue-600" />
          <h3>University Contact &amp; Administration</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="text-xs font-bold uppercase text-slate-400">Campus Address</span>
            <p className="font-semibold text-slate-900">
              Swami Ramanand Teerth Marathwada University
            </p>
            <p className="text-xs text-slate-600">
              Dnyanteerth, Vishnupuri, Nanded, Maharashtra - 431606, India.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="text-xs font-bold uppercase text-slate-400">Telephone Lines</span>
            <p className="font-semibold text-slate-900">+91-2462-229242 / 229243</p>
            <p className="text-xs text-slate-600">Registrar Office / Enquiry: +91-2462-229555</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="text-xs font-bold uppercase text-slate-400">Email &amp; Portal</span>
            <p className="font-semibold text-slate-900">registrar@srtmun.ac.in</p>
            <p className="text-xs text-slate-600">Official Portal: srtmun.ac.in</p>
          </div>
        </div>
      </div>

    </div>
  );
};
