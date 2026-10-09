import React from 'react';
import { m } from 'motion/react';
import { Check, Sparkles, Globe, Store, Layers, Cpu, Clock, ArrowRight } from 'lucide-react';
import type { PlanTier } from '../../data/plans';
import { telemetry } from '../../tracking/tracker';

interface PlanCardProps {
  plan: PlanTier;
  index: number;
}

const planIcons: Record<string, React.FC<{ className?: string }>> = {
  basico: Globe,
  intermedio: Store,
  completo: Layers,
  personalizado: Cpu,
  start: Globe,
  business: Layers,
  enterprise: Cpu,
};

export const PlanCard: React.FC<PlanCardProps> = ({ plan, index }) => {
  const IconComponent = planIcons[plan.id] || Sparkles;

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-300 backdrop-blur-xl border ${
        plan.highlight
          ? 'border-[#00d2ff]/50 bg-gradient-to-b from-[#00d2ff]/12 via-[#0b1728]/90 to-black/90 shadow-2xl shadow-[#00d2ff]/10 lg:-translate-y-2'
          : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]'
      }`}
    >
      {/* Recommended Top Badge */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full flex items-center gap-1.5 shadow-lg shadow-[#00d2ff]/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{plan.badge || 'Recomendado'}</span>
        </div>
      )}

      <div>
        {/* Tier Header with Icon & Badges */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${
              plan.highlight
                ? 'bg-[#00d2ff]/20 border-[#00d2ff]/40 text-[#00d2ff]'
                : 'bg-white/5 border-white/10 text-white/80'
            }`}>
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#00d2ff] block mb-0.5">
                {plan.tagline}
              </span>
              <h3 className="text-white text-2xl font-bold tracking-tight">
                {plan.name}
              </h3>
            </div>
          </div>

          {plan.status === 'validation' && (
            <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              En Validación
            </span>
          )}
          {plan.status === 'custom' && (
            <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              A la Medida
            </span>
          )}
        </div>

        {/* Ideal For Target */}
        <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 min-h-[48px] font-light">
          {plan.idealFor}
        </p>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

        {/* Features Checklist */}
        <div className="space-y-3.5 mb-8">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-2">
            Incluye en este plan:
          </div>
          {plan.features.map((feat) => (
            <div key={feat} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span className="text-white/85 text-xs sm:text-sm leading-relaxed font-light">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Details & Action */}
      <div className="pt-4 border-t border-white/5 mt-auto">
        {plan.note && (
          <div className="flex items-center gap-2 text-[11px] text-white/50 mb-4 font-light">
            <Clock className="w-3.5 h-3.5 text-[#00d2ff] shrink-0" />
            <span>{plan.note}</span>
          </div>
        )}

        <a
          href={plan.ctaTarget}
          onClick={() => telemetry.trackCTAClick(`PlanCard_${plan.name}`, plan.ctaTarget)}
          className={`w-full text-center py-3.5 px-5 rounded-full text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
            plan.highlight
              ? 'bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] hover:opacity-95 shadow-lg shadow-[#00d2ff]/20 hover:scale-[1.01] active:scale-[0.99]'
              : 'bg-white/10 text-white hover:bg-white/15 border border-white/15 hover:border-white/30'
          }`}
        >
          <span>{plan.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </m.div>
  );
};
