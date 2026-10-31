import React from 'react';
import { m } from 'motion/react';
import { ArrowRight, Check, Globe, LayoutGrid, Database, Zap, SearchCheck, Smartphone } from 'lucide-react';
import { telemetry } from '../../tracking/tracker';

interface ServiceGridCardProps {
  id: string;
  title: string;
  category: string;
  tagline: string;
  deliverables: string[];
  iconName: string;
  ctaText: string;
  ctaHref: string;
  ctaType: 'demo' | 'proposal' | 'assessment';
  index?: number;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Globe,
  LayoutGrid,
  Database,
  Zap,
  SearchCheck,
  Smartphone,
};

const ctaStyles: Record<string, string> = {
  demo: 'bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] hover:opacity-90 shadow-md shadow-[#00d2ff]/15',
  proposal: 'border border-[#3D81E3]/60 text-[#3D81E3] hover:bg-[#3D81E3]/10',
  assessment: 'border border-[#3ecf8e]/60 text-[#3ecf8e] hover:bg-[#3ecf8e]/10',
};

const iconAccents: Record<string, string> = {
  Globe: 'from-[#00d2ff]/20 to-[#3D81E3]/10 border-[#00d2ff]/30 text-[#00d2ff]',
  LayoutGrid: 'from-[#3ecf8e]/20 to-[#00d2ff]/10 border-[#3ecf8e]/30 text-[#3ecf8e]',
  Database: 'from-[#3D81E3]/20 to-[#00d2ff]/10 border-[#3D81E3]/30 text-[#3D81E3]',
  Zap: 'from-amber-500/20 to-orange-500/10 border-amber-400/30 text-amber-300',
  SearchCheck: 'from-purple-500/20 to-[#3D81E3]/10 border-purple-400/30 text-purple-300',
  Smartphone: 'from-[#00d2ff]/20 to-[#3ecf8e]/10 border-[#00d2ff]/30 text-[#00d2ff]',
};

export const ServiceGridCard: React.FC<ServiceGridCardProps> = ({
  id,
  title,
  category,
  tagline,
  deliverables,
  iconName,
  ctaText,
  ctaHref,
  ctaType,
  index = 0,
}) => {
  const IconComponent = iconMap[iconName] || Globe;
  const accent = iconAccents[iconName] || iconAccents['Globe'];
  const top3 = deliverables.slice(0, 3);

  return (
    <m.article
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ scale: 1.015 }}
      className="liquid-glass rounded-2xl border border-white/10 p-6 flex flex-col gap-5 transition-colors duration-300 hover:border-[#00d2ff]/30 focus-within:border-[#00d2ff]/30 group"
      aria-label={`Servicio: ${title}`}
    >
      {/* Header: icon + category */}
      <div className="flex items-start justify-between gap-3">
        <div
          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${accent} border flex items-center justify-center shrink-0`}
          aria-hidden="true"
        >
          <IconComponent className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-semibold tracking-wide text-white/40 border border-white/10 rounded-full px-2.5 py-1 mt-0.5 text-right leading-none">
          {category}
        </span>
      </div>

      {/* Title + tagline */}
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-lg font-semibold leading-snug">
          {title}
        </h3>
        <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-2">
          {tagline}
        </p>
      </div>

      {/* Top 3 deliverables */}
      <ul className="flex flex-col gap-2" aria-label="Incluye">
        {top3.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-white/70">
            <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#3ecf8e]" aria-hidden="true" />
            <span className="font-light">{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto pt-2">
        <a
          href={ctaHref}
          onClick={() => telemetry.trackCTAClick(`ServiceGrid_${id}`, ctaHref)}
          className={`inline-flex items-center justify-center gap-2 rounded-full text-xs font-semibold px-5 py-2.5 w-full transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#00d2ff] outline-none ${ctaStyles[ctaType]}`}
          aria-label={`${ctaText} — ${title}`}
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </m.article>
  );
};
