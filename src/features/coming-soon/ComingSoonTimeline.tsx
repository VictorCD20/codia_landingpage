import React from 'react';
import { m } from 'motion/react';
import { comingSoonTimeline, type TimelineStep, type ModuleStatus } from './comingSoon.config';
import { ArrowDown, ArrowRight } from 'lucide-react';

const getStatusBadgeStyle = (status: ModuleStatus) => {
  switch (status) {
    case 'En desarrollo':
      return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
    case 'Planeado':
      return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
    case 'Próximamente':
      return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    case 'Futuro':
      return 'bg-white/10 text-white/60 border-white/20';
    default:
      return 'bg-white/10 text-white/70 border-white/20';
  }
};

export const ComingSoonTimeline: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <m.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold"
          >
            ROADMAP DE DESARROLLO
          </m.span>
          <m.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4"
          >
            Próximas funcionalidades
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-white/70 leading-relaxed"
          >
            Nuestro plan continuo de evolución por fases. Cada etapa se lanza tras exhaustivas pruebas de rendimiento y seguridad.
          </m.p>
        </div>

        {/* Visual Timeline Grid / Flow */}
        <div className="relative">
          {/* Desktop Timeline Flow */}
          <div className="hidden lg:grid grid-cols-6 gap-3 relative z-10">
            {comingSoonTimeline.map((step: TimelineStep, idx: number) => {
              const IconComp = step.icon;
              const isLast = idx === comingSoonTimeline.length - 1;

              return (
                <div key={step.name} className="relative flex flex-col items-center">
                  <m.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="w-full rounded-2xl p-4 bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all text-center flex flex-col items-center justify-between h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-blue-300 flex items-center justify-center mb-3">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h3 className="text-sm font-bold text-white mb-2 leading-tight">
                      {step.name}
                    </h3>

                    <p className="text-[11px] text-white/60 leading-snug mb-3 min-h-[2.5rem]">
                      {step.description}
                    </p>

                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${getStatusBadgeStyle(step.status)}`}>
                      {step.status}
                    </span>
                  </m.div>

                  {!isLast && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-white/30">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile / Tablet Vertical Timeline */}
          <div className="lg:hidden flex flex-col items-center gap-4 max-w-md mx-auto">
            {comingSoonTimeline.map((step: TimelineStep, idx: number) => {
              const IconComp = step.icon;
              const isLast = idx === comingSoonTimeline.length - 1;

              return (
                <React.Fragment key={step.name}>
                  <m.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="w-full p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-base font-bold text-white">{step.name}</h3>
                        <p className="text-xs text-white/60">{step.description}</p>
                      </div>
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border flex-shrink-0 ${getStatusBadgeStyle(step.status)}`}>
                      {step.status}
                    </span>
                  </m.div>

                  {!isLast && (
                    <div className="text-white/30 my-1">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
