import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  ShieldCheck, 
  Utensils, 
  Droplet, 
  Wifi, 
  Tv, 
  FileText, 
  CheckCircle2, 
  Bot,
  AlertCircle,
  Clock
} from 'lucide-react';
import { HOSTEL_DATA } from '../data/universityData';

export const Hostel: React.FC = () => {
  const navigate = useNavigate();

  const amenities = [
    { icon: Droplet, title: "Commercial RO Purified Water", desc: "Installed in every hostel wing with hot & cold dispensers on all floors." },
    { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Dedicated high-bandwidth wireless network for study and research purposes." },
    { icon: Utensils, title: "Hygienic Mess Facility", desc: "Student-managed cooperative mess serving nutritious vegetarian lunch & dinner." },
    { icon: ShieldCheck, title: "24/7 Security & CCTV", desc: "Round-the-clock security personnel, biometric gate entry, and boundary monitoring." },
    { icon: Tv, title: "Recreation & Reading Hall", desc: "Equipped with daily Marathi/English newspapers, LED television, and study tables." },
    { icon: Clock, title: "Power Backup & Solar Heaters", desc: "Continuous electricity backup and rooftop solar water heating system in winter." }
  ];

  const hostelRules = [
    "Admission to hostels is strictly based on merit in the qualifying exam and Maharashtra reservation quotas.",
    "Hostel gates close strictly at 9:00 PM for all residents. Late entry requires prior written approval from the Warden.",
    "Students must maintain cleanliness in rooms and corridors; ragging is strictly prohibited and punishable under law.",
    "Cooking inside individual hostel rooms is prohibited. All residents must subscribe to the hostel mess.",
    "Guests or outside visitors are not permitted to stay overnight in hostel rooms."
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-200">
          <Home className="w-4 h-4" />
          <span>Student Residential Facilities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
          University Hostel Accommodation
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Safe, comfortable, and affordable on-campus residential facilities for boys, girls, and research scholars pursuing education at SRTMUN Vishnupuri.
        </p>
      </div>

      {/* Hero Stats */}
      <div className="bg-gradient-to-br from-amber-900 via-amber-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
              Campus Residence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              A Supportive Home Away From Home
            </h2>
            <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
              The university provides separate hostel complexes for male and female students with modern amenities, solar water heating, high-speed Wi-Fi, and disciplined management under resident wardens.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                id="hostel-ask-ai-cta"
                onClick={() => navigate('/chatbot?q=What is the hostel fee and allotment procedure at SRTMUN?')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs shadow-md transition-colors"
              >
                <Bot className="w-4 h-4" />
                <span>Ask AI About Hostel Admissions</span>
              </button>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Hostel Capacity Summary
            </h4>
            <div className="space-y-2.5 text-xs text-slate-200">
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Boys Hostels</span>
                <span className="font-bold text-white">3 Buildings (550+ Beds)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Girls Hostels</span>
                <span className="font-bold text-white">3 Buildings (600+ Beds)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Research Scholar Hostel</span>
                <span className="font-bold text-white">Dedicated Wing (100+ Beds)</span>
              </div>
              <div className="flex justify-between">
                <span>Accommodation Fee</span>
                <span className="font-bold text-white">₹3,000 – ₹5,500 / year</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Hostels Overview Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Boys Hostel */}
        <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-2xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
            <Users className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
            3 Buildings
          </span>
          <h3 className="text-xl font-bold text-slate-900 font-display">
            Boys Hostel Complex
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Spacious 2-seater and 3-seater rooms with individual beds, study tables, chairs, and cupboards. Common room, reading hall, and basketball court.
          </p>
          <div className="pt-2 text-xs font-semibold text-slate-500 border-t border-slate-100">
            Capacity: 550+ Students • Subsidized Annual Fee
          </div>
        </div>

        {/* Girls Hostel */}
        <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-2xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold">
            <Users className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full">
            3 Buildings
          </span>
          <h3 className="text-xl font-bold text-slate-900 font-display">
            Girls Hostel Complex
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            High-security gated facility with female wardens, biometric attendance, hygienic dining hall, indoor recreation room, and 24/7 solar water heating.
          </p>
          <div className="pt-2 text-xs font-semibold text-slate-500 border-t border-slate-100">
            Capacity: 600+ Students • Strict 24/7 Security
          </div>
        </div>

        {/* Research Hostel */}
        <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-2xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
            <FileText className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
            Dedicated Wing
          </span>
          <h3 className="text-xl font-bold text-slate-900 font-display">
            Research Scholars Hostel
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Quiet, single and twin-occupancy rooms equipped for Ph.D. scholars and JRF/SRF fellows with extended Wi-Fi bandwidth and 24-hour study areas.
          </p>
          <div className="pt-2 text-xs font-semibold text-slate-500 border-t border-slate-100">
            Capacity: 100+ Scholars • High-Speed LAN
          </div>
        </div>

      </div>

      {/* Amenities Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display text-center">
          Hostel Amenities &amp; Facilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl md:rounded-3xl border border-slate-200 shadow-2xs space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base font-display">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hostel Rules & Allotment Procedure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Rules */}
        <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-2xs space-y-5">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-xl font-display">
            <AlertCircle className="w-6 h-6 text-amber-600" />
            <h2>Hostel Code of Conduct &amp; Rules</h2>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
            {hostelRules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Allotment Procedure & Fees */}
        <div className="bg-slate-900 text-white rounded-3xl p-7 sm:p-9 space-y-5 shadow-lg">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xl font-display">
            <FileText className="w-6 h-6" />
            <h3>How to Apply for Hostel</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Students who receive on-campus school admission can submit the hostel application form at the Chief Warden office immediately after department verification.
          </p>

          <div className="space-y-3 text-xs divide-y divide-slate-800 text-slate-300">
            <div className="pt-2">
              <strong className="text-white block">Hostel Room Rent:</strong>
              <span>₹3,000 – ₹5,500 per academic year (highly subsidized).</span>
            </div>
            <div className="pt-2">
              <strong className="text-white block">Mess Charges:</strong>
              <span>Monthly dividing system (~₹2,000 – ₹2,500/month for two meals).</span>
            </div>
            <div className="pt-2">
              <strong className="text-white block">Chief Warden Contact:</strong>
              <span>Hostel Office, Near Sports Complex, Vishnupuri, Nanded.</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/chatbot?q=How to fill the SRTMUN hostel admission form?"
              className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 text-center font-bold text-xs rounded-xl block transition-colors"
            >
              Ask AI about Hostel Vacancy
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};
