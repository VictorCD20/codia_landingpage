import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Globe, LayoutGrid, Zap, Database, SearchCheck, Sparkles } from 'lucide-react';
import { telemetry } from '../../tracking/tracker';

interface SolutionCardProps {
  id: string;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  benefit: string;
  deliverables: string[];
  sectors: string;
  iconName: string;
  ctaText: string;
  ctaHref: string;
  ctaType: 'demo' | 'proposal' | 'assessment';
  index?: number;
  featured?: boolean;
}

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  Globe,
  LayoutGrid,
  Zap,
  Database,
  SearchCheck,
};

export const SolutionCard: React.FC<SolutionCardProps> = ({
  id,
  title,
  category,
  tagline,
  problem,
  benefit,
  deliverables,
  sectors,
  iconName,
  ctaText,
  ctaHref,
  index = 0,
  featured = false,
}) => {
  const IconComponent = iconComponents[iconName] || Globe;

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`liquid-glass rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
        featured 
          ? 'border border-[#00d2ff]/50 bg-gradient-to-b from-[#00d2ff]/10 via-black/40 to-black/70 shadow-2xl shadow-[#00d2ff]/10' 
          : ''
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
          <Sparkles className="w-3 h-3" />
          <span>Entrega Inmediata</span>
        </div>
      )}

      <div>
        {/* Category & Icon Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-[#00d2ff]/10 border border-[#00d2ff]/20 flex items-center justify-center text-[#00d2ff]">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#00d2ff]">
              {category}
            </span>
            <h3 className="text-white text-2xl sm:text-3xl font-bold leading-tight mt-0.5">
              {title}
            </h3>
          </div>
        </div>

        <p className="text-white/80 text-sm sm:text-base font-light mb-6 leading-relaxed">
          {tagline}
        </p>

        {/* Problem vs Solution Comparison Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-6">
          <div className="space-y-1.5">
            <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">
              Problema que elimina:
            </span>
            <p className="text-white/60 text-xs font-light leading-relaxed">
              {problem}
            </p>
          </div>

          <div className="space-y-1.5 border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-4">
            <span className="text-[10px] uppercase font-bold text-[#3ecf8e] tracking-wider">
              Beneficio para tu negocio:
            </span>
            <p className="text-white/90 text-xs font-light leading-relaxed">
              {benefit}
            </p>
          </div>
        </div>

        {/* Deliverables List */}
        <div className="mb-6">
          <h4 className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-3">
            Módulos & Entregables incluidos:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                <Check className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                <span className="font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors */}
        <div className="pt-4 border-t border-white/10 mb-8 flex flex-wrap items-center gap-2 text-xs text-white/50">
          <span className="font-medium text-white/70">Sectores habituales:</span>
          <span>{sectors}</span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
        <a
          href={ctaHref}
          onClick={() => telemetry.trackCTAClick(`SolutionCard_${id}`, ctaHref)}
          className={`inline-flex items-center justify-center gap-2 rounded-full text-xs sm:text-sm font-semibold px-6 py-3.5 transition-all shadow-md active:scale-[0.98] ${
            featured
              ? 'bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] hover:opacity-95 shadow-[#00d2ff]/20'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <a
          href="/#diagnostico"
          className="text-xs text-white/60 hover:text-[#00d2ff] transition-colors text-center sm:text-right"
        >
          ¿No sabes si necesitas esto? Evalúa tu negocio →
        </a>
      </div>
    </motion.div>
  );
};
