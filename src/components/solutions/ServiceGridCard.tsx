import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'motion/react';
import { ArrowRight, Check, Globe, LayoutGrid, Database, Zap, SearchCheck, Smartphone, ShoppingBag, Users } from 'lucide-react';
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
  ShoppingBag,
  Users,
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
  index = 0,
}) => {
  const IconComponent = iconMap[iconName] || Globe;
  const items = deliverables.slice(0, 3);

  return (
    <m.article
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="liquid-glass rounded-3xl border border-white/10 p-7 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d2ff]/40 focus-within:border-[#00d2ff]/40 group"
      aria-label={`Servicio: ${title}`}
    >
      <div
        className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00d2ff] to-[#3D81E3] text-[#091020] flex items-center justify-center shadow-lg shadow-[#00d2ff]/20"
        aria-hidden="true"
      >
        <IconComponent className="w-6 h-6" />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#00d2ff]/80">
          {category}
        </span>
        <h3 className="text-white text-xl font-semibold leading-snug">{title}</h3>
        <p className="text-white/70 text-sm font-light leading-relaxed">{tagline}</p>
      </div>

      <ul className="flex flex-col gap-2.5" aria-label="Incluye">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-white/75">
            <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#3ecf8e]" aria-hidden="true" />
            <span className="font-light">{item}</span>
          </li>
        ))}
      </ul>

      <Link
        to={ctaHref}
        onClick={() => telemetry.trackCTAClick(`ServiceGrid_${id}`, ctaHref)}
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white no-underline transition-colors hover:text-[#00d2ff] focus-visible:ring-2 focus-visible:ring-[#00d2ff] outline-none rounded"
        aria-label={`${ctaText}: ${title}`}
      >
        <span>{ctaText}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </m.article>
  );
};
