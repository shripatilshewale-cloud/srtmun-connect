import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronRight, 
  Search, 
  BookOpen, 
  GraduationCap, 
  ArrowRight, 
  Sparkles,
  FlaskConical,
  Briefcase,
  Cpu,
  Globe,
  Palette,
  Dna,
  Binary,
  Video,
  ShieldAlert,
  Atom,
  Users,
  LucideIcon
} from 'lucide-react';
import { SCHOOLS_DATA, SchoolData, CourseItem } from '../data/universityData';
import { useLanguage } from '../context/LanguageContext';

const SCHOOL_ICONS: Record<string, LucideIcon> = {
  FlaskConical,
  Briefcase,
  Cpu,
  Globe,
  GraduationCap,
  Palette,
  BookOpen,
  Dna,
  Binary,
  Video,
  ShieldAlert,
  Atom,
  Users
};

export const Courses: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');
  
  // Track open accordion IDs (default: first school or matched school open)
  const [openSchoolIds, setOpenSchoolIds] = useState<string[]>(['chemical-sciences', 'computational-sciences']);

  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery);
      // Automatically expand matching schools
      const matching = SCHOOLS_DATA.filter(school => 
        school.name.toLowerCase().includes(initialQuery.toLowerCase()) ||
        school.courses.some(c => c.name.toLowerCase().includes(initialQuery.toLowerCase()))
      ).map(s => s.id);
      if (matching.length > 0) {
        setOpenSchoolIds(matching);
      }
    }
  }, [initialQuery]);

  const toggleAccordion = (schoolId: string) => {
    setOpenSchoolIds(prev => 
      prev.includes(schoolId) 
        ? prev.filter(id => id !== schoolId) 
        : [...prev, schoolId]
    );
  };

  const expandAll = () => {
    setOpenSchoolIds(SCHOOLS_DATA.map(s => s.id));
  };

  const collapseAll = () => {
    setOpenSchoolIds([]);
  };

  const handleCourseClick = (course: CourseItem, school: SchoolData) => {
    navigate('/course-details', {
      state: {
        courseId: course.id,
        courseName: course.name,
        schoolId: school.id,
        schoolName: school.name,
        courseData: course
      }
    });
  };

  // Filtered Schools & Courses
  const filteredSchools = SCHOOLS_DATA.map(school => {
    const q = searchQuery.toLowerCase().trim();
    const coursesMatch = school.courses.filter(course => {
      const matchesLevel = selectedLevel === 'ALL' || course.level === selectedLevel;
      const matchesSearch = !q || 
        course.name.toLowerCase().includes(q) || 
        school.name.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q);
      return matchesLevel && matchesSearch;
    });

    return {
      ...school,
      matchedCourses: coursesMatch,
      matchesSchool: !q || school.name.toLowerCase().includes(q)
    };
  }).filter(school => school.matchedCourses.length > 0 || (searchQuery && school.matchesSchool));

  const totalFilteredCourses = filteredSchools.reduce((acc, curr) => acc + curr.matchedCourses.length, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100">
          <BookOpen className="w-4 h-4" />
          <span>Academic Catalog 2025–26</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
          Schools & Courses
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Explore schools and courses available at Swami Ramanand Teerth Marathwada University (SRTMUN), Vishnupuri, Nanded.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          
          {/* Search Input */}
          <div className="md:col-span-2 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="courses-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses (e.g., M.Sc. Organic Chemistry, B.C.A., M.B.A., Pharmacy)..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-200 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {['ALL', 'UG', 'PG', 'Diploma', 'Certificate'].map((lvl) => (
              <button
                key={lvl}
                type="button"
                id={`filter-lvl-${lvl.toLowerCase()}`}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedLevel === lvl
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

        </div>

        {/* Status bar */}
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span>
            Showing <strong className="text-slate-800">{filteredSchools.length}</strong> schools &amp; <strong className="text-slate-800">{totalFilteredCourses}</strong> courses
          </span>

          <div className="flex items-center gap-3">
            <button
              type="button"
              id="expand-all-btn"
              onClick={expandAll}
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              Expand All
            </button>
            <span>•</span>
            <button
              type="button"
              id="collapse-all-btn"
              onClick={collapseAll}
              className="font-semibold text-slate-500 hover:text-slate-700"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* 13 Schools Accordion List */}
      <div className="space-y-4">
        {filteredSchools.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-4">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">No matching courses found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any courses matching "{searchQuery}". Try clearing filters or asking our AI Assistant.
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedLevel('ALL'); }}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredSchools.map((school, index) => {
            const isOpen = openSchoolIds.includes(school.id);
            const IconComp = SCHOOL_ICONS[school.icon] || BookOpen;

            return (
              <div
                key={school.id}
                id={`school-accordion-${school.id}`}
                className="bg-white rounded-2xl md:rounded-3xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                {/* Accordion Header / Click Trigger */}
                <button
                  type="button"
                  id={`school-header-${school.id}`}
                  onClick={() => toggleAccordion(school.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors focus:outline-hidden"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Index Number & Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs font-bold text-base">
                      <IconComp className="w-6 h-6" />
                    </div>

                    {/* School Name & Details */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                          School #{index + 1}
                        </span>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                          {school.matchedCourses.length} Courses
                        </span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-1 truncate">
                        {school.name}
                      </h2>
                      {school.marathiName && (
                        <p className="text-xs text-slate-500 font-medium">
                          {school.marathiName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Toggle Arrow */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-slate-100 text-slate-600 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-blue-600 text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Body: Course List */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
                    
                    {/* School Description */}
                    <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100 leading-relaxed">
                      {school.description}
                    </p>

                    {/* Courses Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
                      {school.matchedCourses.map((course) => (
                        <div
                          key={course.id}
                          id={`course-card-${course.id}`}
                          onClick={() => handleCourseClick(course, school)}
                          className="group p-4 rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white hover:bg-blue-50/50 hover:border-blue-300 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                                course.level === 'UG' 
                                  ? 'bg-emerald-100 text-emerald-800' 
                                  : course.level === 'PG' 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : course.level === 'Diploma'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-purple-100 text-purple-800'
                              }`}>
                                {course.level}
                              </span>

                              <span className="text-[11px] font-medium text-slate-500">
                                {course.duration}
                              </span>
                            </div>

                            <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                              {course.name}
                            </h3>

                            <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                              {course.description}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                            <span>View Syllabus &amp; Eligibility</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Bottom CTA for AI Assistance */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-2xl font-bold font-display">Need help choosing a course?</h3>
          <p className="text-sm text-blue-200 max-w-xl">
            Ask our AI University Assistant about admission cutoffs, CET examination schedules, and career prospects for any SRTMUN programme.
          </p>
        </div>
        <button
          type="button"
          id="courses-ask-ai-btn"
          onClick={() => navigate('/chatbot')}
          className="shrink-0 px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-2xl font-bold text-sm shadow-md transition-all duration-150 transform hover:scale-105"
        >
          Ask SRTMUN AI
        </button>
      </div>

    </div>
  );
};
