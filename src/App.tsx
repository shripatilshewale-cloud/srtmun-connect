import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { University } from './pages/University';
import { Courses } from './pages/Courses';
import { CourseDetails } from './pages/CourseDetails';
import { Admission } from './pages/Admission';
import { Campus } from './pages/Campus';
import { Hostel } from './pages/Hostel';
import { Sports } from './pages/Sports';
import { Services } from './pages/Services';
import { AcademicCalendar } from './pages/AcademicCalendar';
import { Chatbot } from './pages/Chatbot';
import { NotFound } from './pages/NotFound';

// Scroll to top helper on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/university" element={<University />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course-details" element={<CourseDetails />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/campus" element={<Campus />} />
              <Route path="/hostel" element={<Hostel />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/services" element={<Services />} />
              <Route path="/calendar" element={<AcademicCalendar />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
