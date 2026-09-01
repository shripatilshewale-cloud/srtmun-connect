import React, { useMemo } from 'react';
import { useLocation, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  GraduationCap, 
  Building2, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Briefcase, 
  FileText, 
  ShieldCheck, 
  BookOpen,
  Bot,
  Calendar
} from 'lucide-react';
import { SCHOOLS_DATA, CourseItem, SchoolData } from '../data/universityData';

export const CourseDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Find course from state OR query parameter OR fallback to default
  const { course, school } = useMemo(() => {
    const stateData = location.state as {
      courseId?: string;
      courseName?: string;
      schoolId?: string;
      schoolName?: string;
      courseData?: CourseItem;
    } | null;

    const queryId = searchParams.get('id');
    const queryCourseName = searchParams.get('name');

    // 1. If full courseData in state
    if (stateData?.courseData) {
      let foundSchool = SCHOOLS_DATA.find(s => s.id === stateData.schoolId || s.name === stateData.schoolName);
      if (!foundSchool) {
        foundSchool = SCHOOLS_DATA.find(s => s.courses.some(c => c.id === stateData.courseData?.id)) || SCHOOLS_DATA[2];
      }
      return { course: stateData.courseData, school: foundSchool };
    }

    // 2. Lookup by ID or Name
    const targetIdentifier = stateData?.courseId || queryId || stateData?.courseName || queryCourseName;
    if (targetIdentifier) {
      for (const s of SCHOOLS_DATA) {
        const found = s.courses.find(
          c => c.id.toLowerCase() === targetIdentifier.toLowerCase() ||
               c.name.toLowerCase() === targetIdentifier.toLowerCase() ||
               c.name.toLowerCase().replace(/[^a-z0-9]/g, '') === targetIdentifier.toLowerCase().replace(/[^a-z0-9]/g, '')
        );
        if (found) {
          return { course: found, school: s };
        }
      }
    }

    // 3. Robust Default Fallback (B.C.A. - School of Computational Sciences) so page is NEVER blank
    const defaultSchool = SCHOOLS_DATA.find(s => s.id === 'computational-sciences') || SCHOOLS_DATA[0];
    const defaultCourse = defaultSchool.courses.find(c => c.id === 'bca') || defaultSchool.courses[0];

    return { course: defaultCourse, school: defaultSchool };
  }, [location.state, searchParams]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      
      {/* Top Back Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          id="course-back-btn"
          onClick={() => navigate('/courses')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:text-blue-700 shadow-2xs transition-all duration-150"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← View All Courses</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link to="/courses" className="hover:text-blue-600">Schools &amp; Courses</Link>
          <span>/</span>
          <span className="text-slate-800 font-bold truncate max-w-xs">{course.name}</span>
        </div>
      </div>

      {/* Hero Course Header Card */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-blue-500/30 border border-blue-400/40 text-xs font-extrabold uppercase tracking-wider text-blue-200">
            {course.level} Degree Programme
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-slate-200">
            SRTMUN Vishnupuri Campus
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-display text-white">
          {course.name}
        </h1>

        <p className="text-lg text-blue-200 font-medium">
          Offered by <strong className="text-white">{school.name}</strong> {school.marathiName ? `(${school.marathiName})` : ''}
        </p>
      </div>

      {/* 4 Core Information Spec Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Card 1: Programme */}
        <div className="bg-white p-6 rounded-2xl md:rounded-3xl border border-slate-200/90 shadow-2xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Programme
          </div>
          <div className="text-lg font-extrabold text-slate-900 font-display">
            {course.name}
          </div>
          <div className="text-xs text-slate-500">
            Level: {course.level}
          </div>
        </div>

        {/* Card 2: School */}
        <div className="bg-white p-6 rounded-2xl md:rounded-3xl border border-slate-200/90 shadow-2xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
            <Building2 className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            School
          </div>
          <div className="text-base font-extrabold text-slate-900 font-display line-clamp-2">
            {school.name}
          </div>
          <div className="text-xs text-slate-500">
            University Campus
          </div>
        </div>

        {/* Card 3: Duration */}
        <div className="bg-white p-6 rounded-2xl md:rounded-3xl border border-slate-200/90 shadow-2xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Duration
          </div>
          <div className="text-base font-extrabold text-slate-900 font-display">
            {course.duration}
          </div>
          <div className="text-xs text-slate-500">
            As per university programme
          </div>
        </div>

        {/* Card 4: University */}
        <div className="bg-white p-6 rounded-2xl md:rounded-3xl border border-slate-200/90 shadow-2xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            University
          </div>
          <div className="text-base font-extrabold text-slate-900 font-display">
            SRTMUN, Nanded
          </div>
          <div className="text-xs text-slate-500">
            Vishnupuri, Maharashtra
          </div>
        </div>

      </div>

      {/* Main Detailed Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Detailed Academic Breakdown */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Section 1: About the Course */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-blue-700 font-bold text-lg font-display">
              <BookOpen className="w-5 h-5" />
              <h2>About the Course</h2>
            </div>
            <p className="text-slate-700 text-base leading-relaxed">
              {course.description}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed pt-2">
              The syllabus is curated under the National Education Policy (NEP) guidelines with Choice Based Credit System (CBCS), continuous internal evaluations, laboratory practicals, industry internships, and research projects.
            </p>
          </div>

          {/* Section 2: Eligibility */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-blue-700 font-bold text-lg font-display">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h2>Eligibility Criteria</h2>
            </div>
            <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl text-emerald-950 text-sm leading-relaxed font-medium">
              {course.eligibility}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc pl-5">
              <li>Relaxation of 5% in minimum qualifying marks for SC / ST / VJNT / OBC / SBC / PwD candidates of Maharashtra State.</li>
              <li>Final year appearing students may apply on a provisional basis subject to submitting final marksheets prior to round allotment.</li>
            </ul>
          </div>

          {/* Section 3: Admission Process */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-blue-700 font-bold text-lg font-display">
              <FileText className="w-5 h-5 text-blue-600" />
              <h2>Admission Process</h2>
            </div>
            <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-2xl text-slate-800 text-sm leading-relaxed font-medium">
              {course.admissionMode}
            </div>
            <div className="space-y-3 pt-2 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">1</span>
                <span>Register online at <strong>srtmun.digitaluniversity.ac</strong> or Maharashtra State CET Portal during the admission window.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">2</span>
                <span>Submit academic credentials, category certificates, and entrance score cards for verification.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">3</span>
                <span>Check merit list / CAP allotment rounds, confirm admission and pay subsidized semester fees.</span>
              </div>
            </div>
          </div>

          {/* Section 4: Career Opportunities */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-blue-700 font-bold text-lg font-display">
              <Briefcase className="w-5 h-5 text-indigo-600" />
              <h2>Career Opportunities &amp; Placements</h2>
            </div>
            <p className="text-sm text-slate-600">
              Graduates from this programme are equipped with industry-aligned skills and recruited across leading corporations, government agencies, research institutions, and academia:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {course.careerProspects.map((career, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-sm font-medium text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                  <span>{career}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Sidebar: Important Info & Action Cards */}
        <div className="space-y-6">
          
          {/* Section 5: Important Information Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-7 space-y-5 shadow-lg">
            <div className="flex items-center gap-2 font-bold text-lg font-display text-blue-300">
              <ShieldCheck className="w-5 h-5" />
              <h3>Important Information</h3>
            </div>

            <div className="space-y-3 text-xs text-slate-300 divide-y divide-slate-800">
              <div className="pt-2">
                <span className="block text-slate-400 font-bold uppercase text-[10px]">Department Location</span>
                <span className="text-white font-medium">{school.name}, Campus Building, Vishnupuri, Nanded</span>
              </div>
              <div className="pt-3">
                <span className="block text-slate-400 font-bold uppercase text-[10px]">Academic Year</span>
                <span className="text-white font-medium">2025 – 2026</span>
              </div>
              <div className="pt-3">
                <span className="block text-slate-400 font-bold uppercase text-[10px]">Evaluation System</span>
                <span className="text-white font-medium">Semester CBCS (Continuous Assessment + Term End Exam)</span>
              </div>
              <div className="pt-3">
                <span className="block text-slate-400 font-bold uppercase text-[10px]">Scholarships Applicable</span>
                <span className="text-white font-medium">MahaDBT, Post-Matric SC/ST, EBC, Minority, PG Indira Gandhi</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/admission"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center font-bold text-xs rounded-xl block transition-colors"
              >
                View Admission Checklist
              </Link>
            </div>
          </div>

          {/* Ask AI Box for this specific course */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-7 space-y-4">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-base font-display">
              <Bot className="w-5 h-5 text-blue-600" />
              <h3>Have questions on {course.name}?</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ask our SRTMUN AI assistant about course syllabus, fee structure estimates, previous year cutoffs, or hostel accommodation.
            </p>
            <button
              type="button"
              id="course-ask-ai-btn"
              onClick={() => navigate(`/chatbot?q=${encodeURIComponent(`Tell me more about ${course.name} at ${school.name}`)}`)}
              className="w-full py-3 px-4 bg-white border border-blue-300 text-blue-800 hover:bg-blue-600 hover:text-white font-bold text-xs rounded-xl shadow-2xs transition-all duration-200"
            >
              Ask AI about {course.name}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
