import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  GraduationCap, 
  Building2, 
  Home, 
  Activity, 
  Globe, 
  Calendar, 
  Info,
  ArrowRight,
  LucideIcon
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  GraduationCap,
  Building2,
  Home,
  Activity,
  Globe,
  Calendar,
  Info
};

interface FeatureCardProps {
  id: string;
  iconName: string;
  title: string;
  description: string;
  to: string;
  badge?: string;
  gradient?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  iconName,
  title,
  description,
  to,
  badge,
  gradient = "from-blue-600 to-indigo-600"
}) => {
  const { t } = useLanguage();
  const IconComponent = ICON_MAP[iconName] || Info;

  return (
    <Link
      to={to}
      id={`feature-card-${id}`}
      className="group relative bg-white rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-300/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden transform hover:-translate-y-1"
    >
      {/* Subtle top decorative accent bar on hover */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          {/* Icon Badge */}
          <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-108 transition-transform duration-300`}>
            <IconComponent className="w-6 h-6" />
          </div>

          {badge && (
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100/80 tracking-wide">
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 mb-2.5 font-display">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer Explore Action */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-blue-600 font-semibold text-sm">
        <span className="group-hover:underline underline-offset-4">
          {t.cards.exploreBtn || "Explore"}
        </span>
        <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-200 transform group-hover:translate-x-1">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};
