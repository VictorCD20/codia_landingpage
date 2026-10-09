import React from 'react';
import { m } from 'motion/react';
import { AlertCircle, ArrowRight, Database, LayoutGrid, Globe, Zap } from 'lucide-react';

interface ProblemCardProps {
  pain: string;
  consequence: string;
  solution: string;
  iconName?: string;
  index?: number;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Database,
  LayoutGrid,
  Globe,
  Zap,
};

export const ProblemCard: React.FC<ProblemCardProps> = ({
  pain,
  consequence,
  solution,
  iconName = 'Database',
  index = 0,
}) => {
  const IconComponent = iconMap[iconName] || Database;

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="liquid-glass rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
    >
      <div>
        {/* Top Pain Warning */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
            <AlertCircle className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-red-400/80">
              Fricción Operativa
            </span>
            <h4 className="text-white text-base sm:text-lg font-semibold mt-0.5 leading-snug">
              "{pain}"
            </h4>
          </div>
        </div>

        <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed mb-6 pl-11">
          {consequence}
        </p>
      </div>

      {/* Solution Link */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#00d2ff] font-medium">
          <IconComponent className="w-4 h-4 text-[#3ecf8e]" />
          <span>{solution}</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[#00d2ff] group-hover:border-[#00d2ff]/40 group-hover:translate-x-0.5 transition-all">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </m.div>
  );
};
