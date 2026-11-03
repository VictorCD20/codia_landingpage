import React, { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { SectionEyebrow, AppleButton } from '../components/Primitives';
import { masterSolutions } from '../data/solutions';
import { solutionsFaqs } from '../data/faqs';
import { ServiceGridCard } from '../components/solutions/ServiceGridCard';
import { ProcessTimeline } from '../components/solutions/ProcessTimeline';
import { CTASection } from '../components/solutions/CTASection';
import { Plus, Minus, PhoneCall } from 'lucide-react';
import { telemetry } from '../tracking/tracker';

export const SolutionsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-16 md:pt-20 pb-24 text-white">
      
      {/* 01. HERO */}
      <section className="max-w-6xl mx-auto px-6 text-center mb-24 relative z-10">
        <div className="liquid-glass liquid-glass-clear rounded-[32px] px-6 py-10 sm:px-12 sm:py-14 max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <SectionEyebrow label="Servicios CODIA" tag="Para negocios locales" />
        </div>

        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl mx-auto"
        >
          Creamos soluciones digitales{' '}
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
            adaptadas a la forma en que opera tu negocio.
          </span>
        </m.h1>

        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-white/70 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed"
        >
          Sin tecnicismos vacíos ni rentas mensuales obligatorias. Diseñamos herramientas prácticas que eliminan el desorden, automatizan tareas repetitivas y aumentan tus ventas.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <div onClick={() => telemetry.trackCTAClick('SolutionsHero_Assessment', '/#diagnostico')}>
            <AppleButton label="Evaluar mi negocio" href="/#diagnostico" />
          </div>
          <a
            href="/#demo"
            onClick={() => telemetry.trackCTAClick('SolutionsHero_Demo', '/#demo')}
            className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-7 py-3.5 bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] hover:opacity-95 transition-all shadow-lg active:scale-[0.98]"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Agendar una demostración</span>
          </a>
        </m.div>
        </div>
      </section>

      {/* 03. NUESTRAS SOLUCIONES DETALLADAS */}
      <section id="catalogo" className="max-w-6xl mx-auto px-6 mb-28 relative z-10">
        <div className="liquid-glass liquid-glass-clear rounded-3xl px-6 py-8 sm:px-12 sm:py-10 max-w-4xl mx-auto flex flex-col items-center text-center mb-12">
          <SectionEyebrow label="Servicios" tag="Elige lo que necesitas hoy" />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">
            Lo que hacemos por tu negocio
          </h2>
          <div className="mt-4 max-w-2xl px-5 py-3.5 rounded-2xl bg-black/70 border border-white/15 backdrop-blur-md shadow-xl text-center">
            <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
              Soluciones de tu propiedad, sin rentas obligatorias. Empieza con una y suma más cuando tu negocio crezca.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {masterSolutions.map((sol, index) => (
            <ServiceGridCard
              key={sol.id}
              id={sol.id}
              title={sol.title}
              category={sol.category}
              tagline={sol.tagline}
              deliverables={sol.deliverables}
              iconName={sol.iconName}
              ctaText={sol.ctaText}
              ctaHref={sol.ctaHref}
              ctaType={sol.ctaType}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* 04. CÓMO TRABAJAMOS (PROCESO EN 7 PASOS) */}
      <section className="max-w-6xl mx-auto px-6 mb-28 relative z-10">
        <div className="liquid-glass liquid-glass-clear rounded-3xl px-6 py-8 sm:px-12 sm:py-10 max-w-4xl mx-auto flex flex-col items-center text-center mb-16">
          <SectionEyebrow label="Metodología CODIA" tag="Transparencia Paso a Paso" />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">
            Cómo transformamos tu negocio en 7 pasos
          </h2>
          <div className="mt-4 max-w-2xl px-5 py-3.5 rounded-2xl bg-black/70 border border-white/15 backdrop-blur-md shadow-xl text-center">
            <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
              Desde la primera llamada hasta la capacitación en vivo de tus cajeros. Sin sorpresas ni entregas incompletas.
            </p>
          </div>
        </div>

        <ProcessTimeline />
      </section>

      {/* 07. FAQ ESPECÍFICO DE SOLUCIONES */}
      <section className="max-w-4xl mx-auto px-6 mb-24 relative z-10">
        <div className="liquid-glass liquid-glass-clear rounded-3xl px-6 py-8 sm:px-12 sm:py-10 max-w-4xl mx-auto flex flex-col items-center text-center mb-12">
          <SectionEyebrow label="Resolución de Dudas" tag="FAQ de Soluciones" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            Preguntas frecuentes sobre nuestras soluciones
          </h2>
        </div>

        <div className="space-y-4">
          {solutionsFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className="liquid-glass rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-medium text-white hover:text-[#00d2ff] transition-colors"
                >
                  <span className="text-base sm:text-lg pr-4">{faq.q}</span>
                  <span className="p-1 rounded-full bg-white/5 border border-white/10 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-white/70 text-sm leading-relaxed border-t border-white/5 bg-black/20 font-light">
                        {faq.a}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 08. CIERRE COMERCIAL */}
      <CTASection />

    </div>
  );
};
