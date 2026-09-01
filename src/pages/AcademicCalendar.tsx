import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Award, 
  Sparkles, 
  ChevronRight, 
  AlertCircle,
  FileDown
} from 'lucide-react';
import { ACADEMIC_CALENDAR_DATA } from '../data/universityData';

export const AcademicCalendar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'odd' | 'even' | 'exam'>('all');

  // Flatten events with term context for seamless display and filtering
  const allEvents = ACADEMIC_CALENDAR_DATA.semesters.flatMap(sem => 
    sem.events.map(e => ({
      ...e,
      term: sem.term,
      isOdd: sem.term.includes('Odd'),
      isEven: sem.term.includes('Even')
    }))
  );

  const filteredEvents = allEvents.filter(item => {
    if (activeTab === 'odd') return item.isOdd;
    if (activeTab === 'even') return item.isEven;
    if (activeTab === 'exam') return item.type === 'exam';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wider border border-violet-200">
          <CalendarIcon className="w-4 h-4" />
          <span>Academic Schedules &amp; Terms</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
          Academic Calendar {ACADEMIC_CALENDAR_DATA.academicYear}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Comprehensive schedules for instructional teaching days, examination timelines, university foundation events, and vacations across all schools.
        </p>
      </div>

      {/* 2 Terms Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* First Term Card */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-3xl p-8 space-y-4 shadow-lg">
          <span className="text-xs font-extrabold uppercase tracking-wider text-blue-300">
            Odd Semester (Term I - Monsoons)
          </span>
          <h2 className="text-2xl font-bold font-display">
            {ACADEMIC_CALENDAR_DATA.semesters[0].duration}
          </h2>
          <div className="space-y-2 text-xs text-blue-100 divide-y divide-white/10 pt-2">
            <div className="pt-2 flex justify-between">
              <span>Instructional Days:</span>
              <strong className="text-white">90 Working Days</strong>
            </div>
            <div className="pt-2 flex justify-between">
              <span>Theory Examinations:</span>
              <strong className="text-white">Winter Exam Session (Nov 2025)</strong>
            </div>
            <div className="pt-2 flex justify-between">
              <span>Diwali / Mid-Term Break:</span>
              <strong className="text-white">Oct 20 - Nov 02, 2025</strong>
            </div>
          </div>
        </div>

        {/* Second Term Card */}
        <div className="bg-gradient-to-br from-purple-900 to-slate-900 text-white rounded-3xl p-8 space-y-4 shadow-lg">
          <span className="text-xs font-extrabold uppercase tracking-wider text-purple-300">
            Even Semester (Term II - Winter/Spring)
          </span>
          <h2 className="text-2xl font-bold font-display">
            {ACADEMIC_CALENDAR_DATA.semesters[1].duration}
          </h2>
          <div className="space-y-2 text-xs text-purple-100 divide-y divide-white/10 pt-2">
            <div className="pt-2 flex justify-between">
              <span>Instructional Days:</span>
              <strong className="text-white">90 Working Days</strong>
            </div>
            <div className="pt-2 flex justify-between">
              <span>Theory Examinations:</span>
              <strong className="text-white">Summer Exam Session (Apr 2026)</strong>
            </div>
            <div className="pt-2 flex justify-between">
              <span>Summer Vacation:</span>
              <strong className="text-white">May 02 – June 14, 2026</strong>
            </div>
          </div>
        </div>

      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {[
          { id: 'all', label: 'All Key Events' },
          { id: 'odd', label: 'Odd Semester (Term I)' },
          { id: 'even', label: 'Even Semester (Term II)' },
          { id: 'exam', label: 'Examinations Only' }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Detailed Events Timeline Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
        <div className="divide-y divide-slate-100">
          {filteredEvents.map((evt, idx) => (
            <div
              key={idx}
              className="py-4.5 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/70 px-3 rounded-2xl transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    evt.type === 'exam' ? 'bg-rose-100 text-rose-800' :
                    evt.type === 'festival' ? 'bg-amber-100 text-amber-800' :
                    evt.type === 'holiday' ? 'bg-emerald-100 text-emerald-800' :
                    evt.type === 'sports' ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {evt.type.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-500 font-medium truncate max-w-xs">
                    {evt.term}
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900">
                  {evt.title}
                </h3>
              </div>

              <div className="sm:text-right shrink-0">
                <div className="text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-xl inline-block">
                  {evt.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
