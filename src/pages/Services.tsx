import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, 
  ExternalLink, 
  FileText, 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Download, 
  HelpCircle, 
  Bot,
  UserCheck
} from 'lucide-react';
import { DIGITAL_SERVICES } from '../data/universityData';

export const Services: React.FC = () => {
  const navigate = useNavigate();

  const servicesList = [
    {
      title: "e-Suvidha Student Portal",
      category: "Academic Records",
      desc: "One-stop digital portal for student profile, PRN enrollment verification, subject selection, college admission confirmation, and fee receipts.",
      url: "https://srtmun.digitaluniversity.ac",
      icon: UserCheck,
      action: "Access e-Suvidha Portal"
    },
    {
      title: "Examination Services & Hall Tickets",
      category: "Examinations",
      desc: "Download examination application forms, seat numbers, theory & practical exam timetables, admit cards/hall tickets, and exam center allocation.",
      url: "https://srtmun.ac.in",
      icon: FileText,
      action: "Download Hall Tickets"
    },
    {
      title: "Online Results & Marksheet Verification",
      category: "Evaluation",
      desc: "Check semester results across all UG, PG, and professional courses. Apply online for paper re-evaluation, verification, and photocopies.",
      url: "https://srtmun.ac.in",
      icon: Award,
      action: "Check Online Results"
    },
    {
      title: "Degree & Migration Certificate Services",
      category: "Certifications",
      desc: "Apply online for Degree / Passing Certificate, Migration Certificate, Transcript, and Duplicate Marksheet with fast-track postal delivery.",
      url: "https://srtmun.digitaluniversity.ac",
      icon: Download,
      action: "Apply for Certificates"
    },
    {
      title: "Knowledge Resource Centre (e-Library)",
      category: "Digital Library",
      desc: "Search Web-OPAC catalog, access e-journals via UGC e-ShodhSindhu, Delnet, and access Indian Electronic Theses & Dissertations on Shodhganga.",
      url: "https://srtmun.ac.in",
      icon: BookOpen,
      action: "Search e-Catalog"
    },
    {
      title: "Anti-Ragging & Grievance Portal",
      category: "Student Welfare",
      desc: "Online submission of anti-ragging affidavits, student grievance redressal cell, internal complaint committee (ICC), and women development cell.",
      url: "https://srtmun.ac.in",
      icon: ShieldCheck,
      action: "Lodge Grievance"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
          <Globe className="w-4 h-4" />
          <span>University Digital Infrastructure</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
          Digital Services &amp; Student Portals
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Quick, paperless access to online university portals, examination hall tickets, semester results, certificates, and student welfare services.
        </p>
      </div>

      {/* 6 Digital Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full">
                    {srv.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-display">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={srv.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold transition-colors"
                >
                  <span>{srv.action}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* e-Suvidha Help Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-bold font-display">Need help with PRN or Examination Forms?</h3>
          <p className="text-sm text-slate-300 max-w-xl">
            Ask our AI Assistant about eligibility PRN number generation, hall ticket download steps, or photocopy re-evaluation deadlines.
          </p>
        </div>
        <button
          type="button"
          id="services-ask-ai-btn"
          onClick={() => navigate('/chatbot?q=How to check exam results and download hall ticket on SRTMUN portal?')}
          className="shrink-0 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-2xl font-bold text-sm shadow-md transition-colors"
        >
          Ask AI Portal Help
        </button>
      </div>

    </div>
  );
};
