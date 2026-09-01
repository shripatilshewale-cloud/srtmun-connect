import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  GraduationCap, 
  CheckCircle2, 
  FileText, 
  CreditCard, 
  Calendar, 
  HelpCircle, 
  Bot, 
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  Phone,
  Mail,
  FileCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Admission: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const applicationSteps = [
    {
      step: "01",
      title: "Online Registration & Profile Creation",
      desc: "Visit the SRTMUN Digital University Portal (srtmun.digitaluniversity.ac) or Maharashtra State CET Cell portal. Register using a valid email and mobile number to receive your application ID."
    },
    {
      step: "02",
      title: "Course & School Selection",
      desc: "Choose the desired School on the Vishnupuri campus (e.g. Chemical Sciences, Computational Sciences, Management, Pharmacy) and select your specific degree or diploma programme."
    },
    {
      step: "03",
      title: "Upload Documents & Certificates",
      desc: "Upload scanned copies of 10th, 12th, graduation marksheets, transfer certificate, caste certificate, validity, and non-creamy layer (if applicable)."
    },
    {
      step: "04",
      title: "CET / Merit List Verification",
      desc: "For professional programmes (MBA, MCA, B.Pharm, B.Ed, M.Ed), participate in Maharashtra State CAP rounds. For general PG/UG, verify your rank on the university merit list."
    },
    {
      step: "05",
      title: "Fee Payment & Seat Confirmation",
      desc: "Upon allotment, visit the respective School office with original documents, verify credentials, pay the semester admission fees online/challan, and collect your PRN enrollment confirmation."
    }
  ];

  const requiredDocuments = [
    "SSC (Class 10th) Marksheet & Passing Certificate",
    "HSC (Class 12th) Marksheet & Passing Certificate",
    "Bachelor's Degree All Semester Marksheets & Passing Certificate (for PG applicants)",
    "College Leaving Certificate (T.C. / Transfer Certificate)",
    "Migration Certificate (for students from universities other than SRTMUN)",
    "Caste Certificate & Caste Validity Certificate (for SC / ST / VJNT / OBC / SBC)",
    "Non-Creamy Layer Certificate (Valid for the current financial year for OBC/VJNT/SBC)",
    "Domicile Certificate / Nationality Certificate",
    "Income Certificate issued by competent authority (Tahsildar) for scholarship eligibility",
    "Valid Scorecard of MAH-CET / GPAT / GATE / CMAT (for professional courses)",
    "Recent passport size photographs (4 copies) & Aadhaar Card photocopy"
  ];

  const feeGuidelines = [
    {
      category: "General Science & Humanities (M.A., M.Sc., B.A., B.Sc.)",
      subsidized: "₹4,500 – ₹12,000 / year",
      notes: "Includes tuition, lab, library, sports, and gymkhana fees."
    },
    {
      category: "Professional Programmes (MCA, MBA, M.Pharm, B.Pharm)",
      subsidized: "₹18,000 – ₹45,000 / year",
      notes: "Regulated by Fees Regulating Authority (FRA), Govt of Maharashtra."
    },
    {
      category: "Teacher Education (B.Ed., M.Ed., B.P.Ed., M.P.Ed.)",
      subsidized: "₹15,000 – ₹30,000 / year",
      notes: "NCTE approved fee framework with standard welfare concessions."
    },
    {
      category: "Diploma & Certificate Programmes",
      subsidized: "₹2,500 – ₹7,000 total",
      notes: "Foreign languages, Digital Marketing, Stock Trading, Folk Arts."
    }
  ];

  const importantDates = [
    { event: "Opening of Online Application Portal (AY 2025–26)", date: "June 05, 2025", status: "Completed" },
    { event: "Last Date for Online Form Submission without Late Fee", date: "July 10, 2025", status: "Active" },
    { event: "Display of Provisional University Merit List", date: "July 15, 2025", status: "Upcoming" },
    { event: "Submission of Grievances regarding Merit Rank", date: "July 16 – 18, 2025", status: "Upcoming" },
    { event: "Display of Final Merit List & First Allotment Round", date: "July 22, 2025", status: "Upcoming" },
    { event: "Commencement of Regular Academic Classes", date: "August 01, 2025", status: "Upcoming" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200">
          <GraduationCap className="w-4 h-4" />
          <span>Admissions 2025 – 2026</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
          University Admission Portal
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Comprehensive guide to eligibility criteria, admission procedures, required documents, and important schedules for Swami Ramanand Teerth Marathwada University.
        </p>
      </div>

      {/* 1. Admission Overview Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
              Admission Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              Transparent, Merit-Based Admissions Across 13 University Schools
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              SRTMUN welcomes aspiring undergraduate, postgraduate, diploma, and Ph.D. scholars from across Maharashtra and India. Admissions adhere strictly to Government of Maharashtra reservation norms, UGC directives, and State CET Cell schedules.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://srtmun.digitaluniversity.ac"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs shadow-md transition-colors"
              >
                <span>Digital University Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                id="admission-ask-ai-cta"
                onClick={() => navigate('/chatbot?q=How to apply for admission at SRTMUN?')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs border border-white/20 transition-colors"
              >
                <Bot className="w-4 h-4 text-blue-300" />
                <span>Ask AI Admission Help</span>
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Reservation Policy
            </h4>
            <p className="text-slate-200 leading-relaxed">
              Reservations are provided as per Maharashtra Government norms: SC (13%), ST (7%), VJ/DT (3%), NT-B (2.5%), NT-C (3.5%), NT-D (2%), OBC (19%), EWS (10%), with 30% horizontal reservation for women and 5% for Persons with Disabilities (PwD).
            </p>
          </div>
        </div>
      </div>

      {/* 2. Step-by-Step Application Process */}
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Application Process
          </h2>
          <p className="text-sm text-slate-600">
            Follow these 5 streamlined steps to secure your admission at SRTMUN Vishnupuri campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-3 relative overflow-hidden"
            >
              <div className="text-3xl font-black text-blue-100 font-display absolute right-5 top-5">
                {step.step}
              </div>
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-md shadow-blue-500/20">
                {step.step}
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display pt-1">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Documents Required & Eligibility Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Documents Required */}
        <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-2xs space-y-5">
          <div className="flex items-center gap-2 text-blue-700 font-bold text-xl font-display">
            <FileCheck className="w-6 h-6 text-emerald-600" />
            <h2>Documents Required Checklist</h2>
          </div>
          <p className="text-xs text-slate-500">
            Keep clear self-attested photocopies along with original documents ready during the counseling round.
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {requiredDocuments.map((doc, idx) => (
              <li key={idx} className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fees and Scholarship Details */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-2xs space-y-5">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xl font-display">
              <CreditCard className="w-6 h-6 text-blue-600" />
              <h2>Estimated Fee Structure</h2>
            </div>
            <p className="text-xs text-slate-500">
              SRTMUN is a subsidized State Public University. Exact fees vary based on government freeship/scholarship categories.
            </p>

            <div className="space-y-3">
              {feeGuidelines.map((fee, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">{fee.category}</h4>
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md shrink-0">
                      {fee.subsidized}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">{fee.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scholarship Box */}
          <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-200 text-emerald-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <h3>Government Scholarships (MahaDBT)</h3>
            </div>
            <p className="text-xs text-emerald-900 leading-relaxed">
              100% Tuition Fee Freeship &amp; Maintenance Allowance is available for SC / ST / VJNT / SBC categories. 50% tuition concession for OBC &amp; EBC candidates under the Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk Shishyavrutti Yojna.
            </p>
          </div>
        </div>

      </div>

      {/* 4. Important Dates */}
      <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-2xs space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5 text-blue-700 font-bold text-xl font-display">
            <Calendar className="w-6 h-6 text-indigo-600" />
            <h2>Important Admission Dates (2025–26)</h2>
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            Subject to Directorate of Higher Education notifications
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {importantDates.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-700">{item.date}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  item.status === 'Active' ? 'bg-emerald-100 text-emerald-800' :
                  item.status === 'Completed' ? 'bg-slate-200 text-slate-700' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-800 leading-snug">
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Admission Help & Ask SRTMUN CTA */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 text-center md:text-left">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-300">
            Admission Helpdesk
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
            Have questions about eligibility or entrance exams?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl">
            Our AI Assistant can guide you instantly through course-specific eligibility, documents, or scholarship schemes in English, Marathi or Hindi.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-blue-200">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> +91-2462-229242
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> admission@srtmun.ac.in
            </span>
          </div>
        </div>

        <button
          type="button"
          id="admission-ask-srtmun-btn"
          onClick={() => navigate('/chatbot?q=What are the admission eligibility rules for SRTMUN?')}
          className="shrink-0 inline-flex items-center gap-2.5 px-7 py-4 bg-white text-blue-900 hover:bg-blue-50 rounded-2xl font-bold text-sm shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          <Bot className="w-5 h-5 text-blue-600" />
          <span>Ask SRTMUN</span>
          <ArrowRight className="w-4 h-4 text-blue-600" />
        </button>
      </div>

    </div>
  );
};
