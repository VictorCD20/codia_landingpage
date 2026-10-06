import React from 'react';
import { motion } from 'motion/react';
import { AppleButton, SectionEyebrow } from './Primitives';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-20 md:pt-32 pb-20 text-center flex flex-col items-center relative z-10 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <SectionEyebrow label="Software & Soluciones Digitales" tag="Para Negocios y PyMEs" />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.08] max-w-4xl"
      >
        <span className="block text-white">Digitaliza tu negocio</span>
        <span 
          className="block animate-shiny mt-1"
          style={{
            backgroundImage: 'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
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
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6 text-white/70 max-w-xl text-base md:text-lg leading-[1.6] font-light"
      >
        Convertimos libretas, chats sueltos y procesos manuales en sistemas digitales prácticos que ordenan tu operación y multiplican tus ventas.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 flex flex-row items-center justify-center gap-4 flex-wrap"
      >
        <AppleButton label="Evaluar mi negocio" href="#diagnostico" />
        <a 
          href="#demo"
          className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-6 py-3 border border-white/20 text-white/90 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
        >
          Agendar una demostración
        </a>
      </motion.div>

      {/* Visual Step Indicator (Orientación al usuario) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-14 w-full max-w-4xl p-4 sm:p-5 rounded-2xl md:rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-sm grid grid-cols-2 md:grid-cols-4 gap-4 text-left"
      >
        <div className="flex items-center gap-3 px-2">
          <span className="w-6 h-6 rounded-full bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/30 text-xs font-bold flex items-center justify-center shrink-0">1</span>
          <div>
            <div className="text-[10px] uppercase font-semibold text-white/40 tracking-wider">Paso 1</div>
            <div className="text-white text-xs font-medium">Identifica tu problema</div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-2">
          <span className="w-6 h-6 rounded-full bg-white/10 text-white/80 border border-white/20 text-xs font-bold flex items-center justify-center shrink-0">2</span>
          <div>
            <div className="text-[10px] uppercase font-semibold text-white/40 tracking-wider">Paso 2</div>
            <div className="text-white text-xs font-medium">Conoce la solución</div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-2">
          <span className="w-6 h-6 rounded-full bg-white/10 text-white/80 border border-white/20 text-xs font-bold flex items-center justify-center shrink-0">3</span>
          <div>
            <div className="text-[10px] uppercase font-semibold text-white/40 tracking-wider">Paso 3</div>
            <div className="text-white text-xs font-medium">Elige tu plan</div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-2">
          <span className="w-6 h-6 rounded-full bg-[#3ecf8e]/10 text-[#3ecf8e] border border-[#3ecf8e]/30 text-xs font-bold flex items-center justify-center shrink-0">4</span>
          <div>
            <div className="text-[10px] uppercase font-semibold text-[#3ecf8e]/70 tracking-wider">Paso 4</div>
            <div className="text-white text-xs font-medium">Agenda tu demostración</div>
          </div>
        </div>
      </motion.div>

      {/* Trust micro-indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50"
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
      </motion.div>
    </section>
  );
};
