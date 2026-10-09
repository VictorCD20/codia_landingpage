import React from 'react';
import { motion } from 'motion/react';
import { AppleButton } from '../Primitives';
import { PhoneCall, FileText } from 'lucide-react';
import { telemetry } from '../../tracking/tracker';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "¿Listo para transformar la forma en que opera tu negocio?",
  subtitle = "Realiza la evaluación digital en 2 minutos, agenda una sesión guiada de 20 minutos o solicita una propuesta técnica a la medida.",
}) => {
  return (
    <section className="max-w-6xl mx-auto px-6 relative z-10 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="liquid-glass rounded-3xl p-8 sm:p-14 text-center bg-gradient-to-b from-[#00d2ff]/10 via-black/40 to-black/80 shadow-2xl relative overflow-hidden"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight text-white">
          {title}
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
          {subtitle}
        </p>

        {/* 3 Unified CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          
          {/* 1. Evaluar mi negocio */}
          <div onClick={() => telemetry.trackCTAClick('CTASection_Diagnostico', '/#diagnostico')}>
            <AppleButton label="Evaluar mi negocio" href="/#diagnostico" />
          </div>

          {/* 2. Agendar una demostración */}
          <a
            href="/#demo"
            onClick={() => telemetry.trackCTAClick('CTASection_Demo', '/#demo')}
            className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-7 py-3.5 bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] hover:opacity-95 transition-all shadow-lg active:scale-[0.98]"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Agendar una demostración</span>
          </a>

          {/* 3. Solicitar una propuesta */}
          <a
            href="/planes"
            onClick={() => telemetry.trackCTAClick('CTASection_Propuesta', '/planes')}
            className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-6 py-3.5 border border-white/20 text-white hover:bg-white/10 transition-all text-center"
          >
            <FileText className="w-4 h-4 text-purple-300" />
            <span>Ver Planes y Precios</span>
          </a>

        </div>
      </motion.div>
    </section>
  );
};
