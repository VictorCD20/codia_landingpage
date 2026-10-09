import React from 'react';
import { SectionEyebrow } from './Primitives';
import { ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

import { masterPlans, plansNotice } from '../data/plans';
import { PlanCard } from './solutions/PlanCard';

export const PricingSummary: React.FC = () => {
  return (
    <section id="planes" className="max-w-6xl mx-auto px-6 py-20 relative z-10">
      <div className="flex flex-col items-center text-center mb-16">
        <SectionEyebrow label="Inversión Transparente" tag="Planes & Escalabilidad" />
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          Elige el nivel de solución que{' '}
          <span className="text-[#00d2ff]">tu negocio necesita hoy.</span>
        </h2>
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
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/planes"
          className="inline-flex items-center gap-2 text-sm text-[#00d2ff] hover:text-white transition-colors group"
        >
          <span>¿Quieres comparar módulos en detalle? Ver comparativa completa de planes</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
