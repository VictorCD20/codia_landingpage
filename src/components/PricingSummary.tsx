import React from 'react';
import { SectionEyebrow } from './Primitives';
import { ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

import { masterPlans, plansNotice } from '../data/plans';
import { PlanCard } from './solutions/PlanCard';

export const PricingSummary: React.FC = () => {
  return (
    <section id="planes" className="max-w-6xl mx-auto px-6 py-20 relative z-10">
      <div className="liquid-glass liquid-glass-clear rounded-3xl px-6 py-8 sm:px-12 sm:py-10 max-w-4xl mx-auto flex flex-col items-center text-center mb-16">
        <SectionEyebrow label="Inversión Transparente" tag="Planes & Escalabilidad" />
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          Elige el nivel de solución que{' '}
          <span className="text-[#00d2ff]">tu negocio necesita hoy.</span>
        </h2>
<<<<<<< HEAD
        <div className="mt-4 max-w-2xl px-5 py-3.5 rounded-2xl bg-black/70 border border-white/15 backdrop-blur-md shadow-xl text-center">
          <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
            Sin costos ocultos ni letras pequeñas. Inicia con lo indispensable y escala módulos conforme tu operación crezca.
          </p>
        </div>
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-light">
          <Info className="w-3.5 h-3.5 text-[#00d2ff] shrink-0" />
          <span>{plansNotice}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {masterPlans.map((plan, idx) => (
          <PlanCard key={plan.id} plan={plan} index={idx} />
=======
        <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl font-light">
          Sin costos ocultos ni letras pequeñas. Inicia con lo indispensable y escala módulos conforme tu operación crezca.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
              plan.highlight
                ? 'border border-[#00d2ff]/50 bg-gradient-to-b from-[#00d2ff]/10 via-black/40 to-black/60 shadow-2xl shadow-[#00d2ff]/10'
                : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3" />
                <span>Más Solicitado</span>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#00d2ff]">
                  {plan.tagline}
                </span>
              </div>

              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                {plan.name}
              </h3>

              <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed mb-6 min-h-[40px]">
                {plan.idealFor}
              </p>

              <div className="h-px w-full bg-white/10 mb-6"></div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#00d2ff]/15 flex items-center justify-center text-[#00d2ff] shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-white/80 text-xs sm:text-sm font-light leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={plan.target}
                className={`w-full text-center block py-3 px-4 rounded-full text-sm font-medium transition-all ${
                  plan.highlight
                    ? 'bg-[#00d2ff] text-[#091020] font-semibold hover:bg-[#A4F4FD] shadow-lg shadow-[#00d2ff]/20'
                    : 'border border-white/20 text-white hover:bg-white/5'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </motion.div>
>>>>>>> 0ebba1bca87bc65112bc95af9c3ab0b0b94d668b
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/planes"
          className="inline-flex items-center gap-2 text-sm text-[#00d2ff] hover:text-[#A4F4FD] transition-all group px-5 py-2.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 backdrop-blur-md hover:bg-[#00d2ff]/15 hover:border-[#00d2ff]/50"
        >
          <span>¿Quieres comparar módulos en detalle? Ver comparativa completa de planes</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
