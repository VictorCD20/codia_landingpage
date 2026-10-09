import React from 'react';
import { m } from 'motion/react';
import { AppleButton, SectionEyebrow } from './Primitives';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-10 md:pt-20 pb-20 text-center flex flex-col items-center relative z-10 px-6 max-w-6xl mx-auto">
      <div className="w-full min-h-[calc(100svh-9rem)] md:min-h-[calc(100svh-12rem)] flex flex-col items-center justify-center">
        <div className="liquid-glass liquid-glass-clear rounded-[32px] px-5 py-8 sm:px-12 sm:py-12 w-full max-w-4xl flex flex-col items-center">
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <SectionEyebrow label="Software & Soluciones Digitales" tag="Para Negocios y PyMEs" />
          </m.div>

          <m.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.08] max-w-4xl"
          >
            <span className="block text-white">Digitaliza tu negocio</span>
            <span 
              className="block animate-shiny mt-1"
              style={{
                backgroundImage: 'linear-gradient(to right, #3D81E3 0%, #00d2ff 25%, #A4F4FD 50%, #00d2ff 75%, #3D81E3 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                filter: 'url(#c3-noise)'
              }}
            >
              sin complicarte.
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-white/85 max-w-xl text-base md:text-lg leading-[1.6] font-light"
          >
            Convertimos libretas, chats sueltos y procesos manuales en sistemas digitales prácticos que ordenan tu operación y multiplican tus ventas.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex flex-row items-center justify-center gap-4 flex-wrap"
          >
            <AppleButton label="Evaluar mi negocio" href="#diagnostico" />
            <a 
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-6 py-3 border border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/20 transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
            >
              Agendar una demostración
            </a>
          </m.div>
        </div>
      </div>

      {/* Visual Step Indicator (Orientación al usuario) */}
      <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -90px 0px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-14 w-full max-w-4xl p-4 sm:p-5 rounded-2xl md:rounded-full liquid-glass liquid-glass-clear grid grid-cols-2 md:grid-cols-4 gap-4 text-left"
      >
        <div className="flex items-center gap-3 px-2">
          <span className="w-6 h-6 rounded-full bg-[#00d2ff]/15 text-[#00d2ff] border border-[#00d2ff]/40 text-xs font-bold flex items-center justify-center shrink-0">1</span>
          <div>
            <div className="text-[10px] uppercase font-semibold text-white/60 tracking-wider">Paso 1</div>
            <div className="text-white text-xs font-medium">Identifica tu problema</div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-2">
          <span className="w-6 h-6 rounded-full bg-white/10 text-white/80 border border-white/20 text-xs font-bold flex items-center justify-center shrink-0">2</span>
          <div>
            <div className="text-[10px] uppercase font-semibold text-white/60 tracking-wider">Paso 2</div>
            <div className="text-white text-xs font-medium">Conoce la solución</div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-2">
          <span className="w-6 h-6 rounded-full bg-white/10 text-white/80 border border-white/20 text-xs font-bold flex items-center justify-center shrink-0">3</span>
          <div>
            <div className="text-[10px] uppercase font-semibold text-white/60 tracking-wider">Paso 3</div>
            <div className="text-white text-xs font-medium">Elige tu plan</div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-2">
          <span className="w-6 h-6 rounded-full bg-[#3ecf8e]/15 text-[#3ecf8e] border border-[#3ecf8e]/40 text-xs font-bold flex items-center justify-center shrink-0">4</span>
          <div>
            <div className="text-[10px] uppercase font-semibold text-[#3ecf8e] tracking-wider">Paso 4</div>
            <div className="text-white text-xs font-medium">Agenda tu demostración</div>
          </div>
        </div>
      </m.div>

      {/* Trust micro-indicators */}
      <m.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -60px 0px' }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-8 px-6 py-3 rounded-2xl md:rounded-full liquid-glass liquid-glass-clear flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/85"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Demostración interactiva en vivo</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          <span>Software propio sin rentas forzosas</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400"></span>
          <span>Soporte y capacitación local</span>
        </div>
      </m.div>
    </section>
  );
};
