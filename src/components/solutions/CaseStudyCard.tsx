import React from 'react';
import { m } from 'motion/react';
import { masterCaseStudies } from '../../data/caseStudies';
import { Sparkles, ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

export const CaseStudyCard: React.FC = () => {
  const caseStudy = masterCaseStudies[0];

  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7 }}
      className="liquid-glass rounded-3xl p-6 sm:p-10 md:p-12 border border-white/15 shadow-2xl relative overflow-hidden max-w-5xl mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#00d2ff] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{caseStudy.badge}</span>
          </div>
          <h3 className="text-white text-2xl sm:text-3xl font-bold">
            {caseStudy.businessName}
          </h3>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 self-start sm:self-auto">
          <span className="text-[#00d2ff] font-medium">Solución:</span>
          <span>{caseStudy.solutionApplied}</span>
        </div>
      </div>

      {/* Challenge Description */}
      <p className="text-white/75 text-sm md:text-base font-light leading-relaxed mb-8">
        <strong className="text-white font-medium">El reto del negocio: </strong>
        {caseStudy.challenge}
      </p>

      {/* Before vs After Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        
        {/* Before */}
        <div className="p-6 rounded-2xl bg-red-500/[0.03] border border-red-500/20">
          <div className="flex items-center gap-2 text-red-400 text-sm font-semibold mb-4">
            <XCircle className="w-4 h-4" />
            <span>{caseStudy.before.title}</span>
          </div>
          <ul className="space-y-3">
            {caseStudy.before.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2.5 text-xs text-white/70 font-light">
                <span className="text-red-400 font-bold">•</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="p-6 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/30 shadow-lg shadow-emerald-500/5">
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span>{caseStudy.after.title}</span>
          </div>
          <ul className="space-y-3">
            {caseStudy.after.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2.5 text-xs text-white/90 font-light">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-black/40 border border-white/10 mb-8 text-center">
        {caseStudy.metrics.map((m) => (
          <div key={m.label} className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-black text-[#00d2ff] mb-0.5">
              {m.value}
            </div>
            <div className="text-[11px] text-white/60 font-light">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        <span className="text-xs text-white/60 text-center sm:text-left">
          ¿Tienes un negocio similar? Adaptamos la misma arquitectura a tu operación.
        </span>

        <a
          href="/#demo"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md active:scale-[0.98]"
        >
          <span>Agendar una demostración</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </m.div>
  );
};
