import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, BookOpen, Bot } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[65vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
        
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-black text-slate-900 font-display">404</span>
          <h1 className="text-xl font-bold text-slate-900 font-display">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            The requested university information page does not exist or may have been moved.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            to="/"
            id="not-found-home-btn"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-md transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>← Back to Home</span>
          </Link>

          <Link
            to="/courses"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold text-xs transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Browse Schools &amp; Courses</span>
          </Link>

          <Link
            to="/chatbot"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-blue-600 hover:text-blue-800 text-xs font-semibold"
          >
            <Bot className="w-4 h-4" />
            <span>Ask SRTMUN AI Assistant</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
