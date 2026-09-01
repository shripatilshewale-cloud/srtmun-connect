import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  BookOpen, 
  Microscope, 
  Laptop, 
  HeartPulse, 
  Trees, 
  Utensils, 
  Wifi, 
  ShieldCheck,
  ChevronRight,
  Bot
} from 'lucide-react';
import { CAMPUS_FACILITIES } from '../data/universityData';

export const Campus: React.FC = () => {
  const navigate = useNavigate();

  const highlightCards = [
    {
      icon: BookOpen,
      title: "Central Library (KRC)",
      badge: "1.5 Lakh+ Books",
      desc: "The Knowledge Resource Centre boasts automated RFID checkouts, Delnet, UGC-Infonet e-journal access, and quiet air-conditioned reading halls accommodating 300+ students.",
      points: ["1,50,000+ Printed Volumes", "9,000+ Online Journals (e-ShodhSindhu)", "Institutional Repository & Ph.D. Theses (Shodhganga)"]
    },
    {
      icon: Microscope,
      title: "Central Instrumentation Facility (CIF)",
      badge: "High-End Research",
      desc: "Equipped with state-of-the-art analytical equipment funded by DST-FIST & PURSE for advanced research in chemistry, physics, and life sciences.",
      points: ["FT-IR, UV-Vis Spectrophotometer", "HPLC, GC-MS Chromatography", "Fluorescence Spectrometer & Thermal Analyzers"]
    },
    {
      icon: Laptop,
      title: "Smart Classrooms & 1Gbps LAN",
      badge: "NKN Connectivity",
      desc: "High-speed optical fiber backbone connected to National Knowledge Network (NKN), digital interactive smartboards, and centralized computer centers.",
      points: ["1 Gbps NKN Dedicated Internet", "Campus-Wide Secure Wi-Fi", "Multimedia Lecture Capture Studios"]
    },
    {
      icon: Trees,
      title: "595-Acre Eco-Green Campus",
      badge: "Solar & Rainwater",
      desc: "Sprawling green grounds with 50,000+ planted trees, specialized botanical garden, medicinal plant conservatory, and rooftop solar power generators.",
      points: ["Herbal & Medicinal Plant Conservatory", "Rainwater Harvesting Lakes", "Zero-Waste Campus Initiatives"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100">
          <Building2 className="w-4 h-4" />
          <span>Campus &amp; Facilities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
          SRTMUN Campus Life &amp; Infrastructure
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Spread over 595 acres at Vishnupuri, Nanded, the university blends scenic natural beauty with modern laboratories, digital libraries, and student amenities.
        </p>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-300">
              Vishnupuri Main Campus
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              A Vibrant 595-Acre Eco-Friendly Knowledge Hub
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Located on the Nanded-Latur highway in Vishnupuri, the university campus offers an intellectually invigorating environment. It houses all 13 academic schools, modern administrative complexes, the Knowledge Resource Centre, residential staff quarters, and dedicated student hostels.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-blue-200">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <Wifi className="w-3.5 h-3.5 text-emerald-400" /> High Speed Campus Wi-Fi
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> 24/7 Security &amp; CCTV
              </span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Quick Campus Key Stats
            </h4>
            <div className="space-y-2 text-xs text-slate-200">
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Total Campus Area</span>
                <span className="font-bold text-white">595+ Acres</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Academic Schools</span>
                <span className="font-bold text-white">13 Schools</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Central Library Volumes</span>
                <span className="font-bold text-white">1,50,000+ Books</span>
              </div>
              <div className="flex justify-between">
                <span>Distance from Nanded Rly Stn</span>
                <span className="font-bold text-white">~10 km (Vishnupuri)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Facilities 4-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {highlightCards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-2xs space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-display">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Key Amenities
                </span>
                <ul className="space-y-1.5 text-xs font-medium text-slate-700">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Amenities (Health Centre, Canteen, Bank) */}
      <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/90 space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 font-display">
          Supportive Campus Amenities
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <HeartPulse className="w-6 h-6 text-rose-600" />
            <h4 className="font-bold text-slate-900 text-sm">Health &amp; Medical Centre</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Resident medical officer, primary emergency care, basic pharmacy dispensary, and ambulance facility on call.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <Utensils className="w-6 h-6 text-amber-600" />
            <h4 className="font-bold text-slate-900 text-sm">Student Canteen &amp; Cafe</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hygienic subsidized food service providing fresh Maharashtrian breakfast, lunch, tea, and packaged snacks.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <Building2 className="w-6 h-6 text-blue-600" />
            <h4 className="font-bold text-slate-900 text-sm">Bank &amp; Post Office Branch</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              On-campus nationalized bank branch (State Bank of India) with 24/7 ATM and Indian Post sub-post office.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-2xl font-bold font-display">Planning a visit to SRTMUN Campus?</h3>
          <p className="text-sm text-blue-200 max-w-xl">
            Ask our AI Assistant for directions from Nanded Railway Station, Central Bus Stand (CIDCO), or campus landmark timings.
          </p>
        </div>
        <button
          type="button"
          id="campus-ask-ai-btn"
          onClick={() => navigate('/chatbot?q=How to reach SRTMUN campus in Vishnupuri Nanded?')}
          className="shrink-0 px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-2xl font-bold text-sm shadow-md transition-all duration-150 transform hover:scale-105"
        >
          Ask Directions
        </button>
      </div>

    </div>
  );
};
