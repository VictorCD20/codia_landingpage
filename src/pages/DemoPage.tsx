import React from 'react';
import { DemoCenterSection } from '../components/DemoCenterSection';
import { CTASection } from '../components/solutions/CTASection';
import { CaseStudyCard } from '../components/solutions/CaseStudyCard';
import { SectionEyebrow } from '../components/Primitives';
import { m } from 'motion/react';

export const DemoPage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-24 text-white">
      {/* Hero Eyebrow for Dedicated Demo Page */}
      <section className="max-w-6xl mx-auto px-6 text-center mb-12 relative z-10">
        <div className="flex justify-center mb-4">
          <SectionEyebrow label="Sesión de Demostración Guiada" tag="Recorrido 1 a 1 en Vivo" />
        </div>
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl mx-auto"
        >
          Conoce el software en acción{' '}
          <span 
            className="block animate-shiny mt-1"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 0%, #A4F4FD 25%, #00d2ff 50%, #3ecf8e 75%, #ffffff 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
              filter: 'url(#c3-noise)'
            }}
          >
            con ejemplos reales de tu giro comercial.
          </span>
        </m.h1>
      </section>

      {/* Main Interactive Video & Booking Center */}
      <DemoCenterSection />

      {/* Case Study Proof */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionEyebrow label="Evidencia Operativa" tag="Resultados Reales" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            Lo que verás implementado en tu negocio
          </h2>
        </div>
        <CaseStudyCard />
      </section>

      {/* Unified CTA Section */}
      <CTASection
        title="¿Quieres ver cómo aplicaría este sistema a tus productos?"
        subtitle="Agenda una sesión de 20 minutos con uno de nuestros desarrolladores para evaluar tu caso específico."
      />
    </div>
  );
};
