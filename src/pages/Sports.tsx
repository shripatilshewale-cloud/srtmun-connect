import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Activity, 
  Trophy, 
  Flame, 
  Dumbbell, 
  Heart, 
  Award, 
  Users, 
  ShieldCheck, 
  Bot,
  ChevronRight
} from 'lucide-react';
import { SPORTS_DATA } from '../data/universityData';

export const Sports: React.FC = () => {
  const navigate = useNavigate();

  const facilities = [
    {
      title: "400m 8-Lane Olympic Running Track",
      tag: "Athletics",
      desc: "Standard 8-lane all-weather running track with high-jump, long-jump pits, shot-put, discus, and javelin throwing arenas host to state and zonal athletic meets.",
      icon: Activity,
      color: "from-rose-600 to-red-600"
    },
    {
      title: "Indoor Sports Complex & Stadium",
      tag: "Indoor Games",
      desc: "Multi-court indoor arena equipped with international standard wooden flooring for badminton, table tennis, wrestling mats, judo, and chess.",
      icon: Trophy,
      color: "from-amber-600 to-orange-600"
    },
    {
      title: "Cricket & Football Ground",
      tag: "Outdoor Turf",
      desc: "Full-sized manicured cricket oval with turf wickets and pavilions, alongside a standard football and handball field.",
      icon: Flame,
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Modern Gymnasium & Fitness Centre",
      tag: "Strength & Cardio",
      desc: "Equipped with state-of-the-art motorized treadmills, cross trainers, multi-gym stations, Olympic barbells, and qualified fitness instructors.",
      icon: Dumbbell,
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Yoga & Meditation Centre",
      tag: "Wellness",
      desc: "Spacious serene hall dedicated to daily morning yoga practices, pranayama sessions, stress management workshops, and International Yoga Day celebrations.",
      icon: Heart,
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "Basketball & Volleyball Courts",
      tag: "Hard Courts",
      desc: "Floodlit concrete basketball court and international dimension volleyball and kabaddi clay courts.",
      icon: Users,
      color: "from-sky-600 to-blue-600"
    }
  ];

  const achievements = [
    { year: "2024–25", title: "West Zone Inter-University Wrestling Championship", result: "3 Gold & 2 Bronze Medals" },
    { year: "2024", title: "Maharashtra State Inter-University Krida Mahotsav", result: "Overall Runners-Up Trophy in Athletics" },
    { year: "2023–24", title: "All India Inter-University Powerlifting Meet", result: "1 National Record & Gold Medal" },
    { year: "2023", title: "Inter-Collegiate Volleyball Tournament", result: "Over 64 Affiliated Colleges Participated" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider border border-rose-200">
          <Activity className="w-4 h-4" />
          <span>Department of Physical Education &amp; Sports</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
          University Sports &amp; Athletics
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          State-of-the-art sports complex, Olympic-grade athletic tracks, indoor stadiums, and athletic coaching at SRTMUN Vishnupuri.
        </p>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-rose-950 via-red-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-rose-300">
              Sports Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              Fostering Sportsmanship, Health &amp; Athletic Excellence
            </h2>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
              The Board of Sports and Physical Education at SRTMUN conducts university-level selection trials, organizes the annual Krida Mahotsav, and sends university contingents to All-India and West Zone Inter-University tournaments with full sponsorship.
            </p>
            <div className="pt-2">
              <button
                type="button"
                id="sports-ask-ai-btn"
                onClick={() => navigate('/chatbot?q=What sports facilities and tournaments are available at SRTMUN?')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-rose-900 font-bold rounded-xl text-xs shadow-md hover:bg-rose-50 transition-colors"
              >
                <Bot className="w-4 h-4 text-rose-600" />
                <span>Ask AI About Sports &amp; Trials</span>
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              Sports Facilities At A Glance
            </h4>
            <div className="space-y-2 text-xs text-slate-200">
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Athletic Track</span>
                <span className="font-bold text-white">400m 8-Lane Track</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Indoor Stadium</span>
                <span className="font-bold text-white">Wooden Badminton Courts</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Gymnasium</span>
                <span className="font-bold text-white">Modern Cardio &amp; Strength</span>
              </div>
              <div className="flex justify-between">
                <span>Annual Event</span>
                <span className="font-bold text-white">Krida Mahotsav &amp; Ashwamedh</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Sports Facilities Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display text-center">
          World-Class Sports Facilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${fac.color} text-white flex items-center justify-center font-bold shadow-md shadow-rose-500/15`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full">
                      {fac.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs font-bold text-rose-600 flex items-center gap-1">
                  <span>Open for all enrolled students</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Achievements & Krida Mahotsav */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-2xs space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2.5 text-rose-700 font-bold text-xl font-display">
            <Award className="w-6 h-6" />
            <h2>Recent University Sports Accolades</h2>
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            West Zone &amp; All-India Inter-University
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-700">{item.year}</span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  {item.result}
                </span>
              </div>
              <p className="font-bold text-sm text-slate-900">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
