import React from 'react';
import { Link } from 'react-router-dom';
import { ProcessSection } from '../components/ProcessSection';
import { TrustSection } from '../components/TrustSection';
import { SectionEyebrow } from '../components/Primitives';

export const ProcessPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-6 relative z-10">
      
      {/* Header */}
      <div className="liquid-glass liquid-glass-clear rounded-[28px] px-6 py-10 sm:px-12 text-center max-w-4xl mx-auto mb-12">
        <SectionEyebrow label="Transparencia & Certeza" tag="Metodología CODIA" />
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight heading-gradient">
          Cómo Trabajamos Tu Proyecto Paso a Paso
        </h1>
        <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed font-light">
          Sin términos confusos ni sorpresas de último momento. Te acompañamos desde la primera conversación hasta la entrega final y soporte posterior.
        </p>
      </div>

      {/* Main Process Timeline */}
      <ProcessSection />

      {/* Trust & Guarantee Section */}
      <TrustSection />

      {/* Action Banner */}
      <div className="mt-16 text-center rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">¿Tienes una idea en mente para tu negocio?</h2>
        <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 font-light">
          Iniciemos con el paso 1: Diagnóstico Gratuito. Hablamos de tu negocio y definimos qué necesitas.
        </p>
        <Link
          to="/contacto"
          className="inline-block rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-white/90 transition-all no-underline"
        >
          Iniciar Paso 1 — Diagnóstico
        </Link>
      </div>

    </div>
  );
};
