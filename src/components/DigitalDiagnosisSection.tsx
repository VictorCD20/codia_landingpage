import React from 'react';
import { motion } from 'motion/react';
import { SectionEyebrow, AppleButton } from './Primitives';
import { Check } from 'lucide-react';

const checkPoints = [
  'Presencia digital',
  'Atención y seguimiento de clientes',
  'Productos o servicios',
  'Procesos repetitivos',
  'Herramientas que ya usas',
  'Oportunidades de mejora',
];

export const DigitalDiagnosisSection: React.FC = () => {
  return (
    <section id="diagnostico" className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        
        {/* Left column (Text & CTA) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-7"
        >
          <SectionEyebrow label="Diagnóstico digital" tag="Análisis Previo" />
          
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Primero diagnóstico, después desarrollo.
          </h2>
          
          <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-xl">
            Antes de ofrecerte una página, sistema o automatización, revisamos qué necesita realmente tu negocio. Puede que necesites una web profesional, un catálogo, un panel para solicitudes, una automatización o simplemente ordenar mejor tu proceso actual.
          </p>

          <div className="mt-8">
            <AppleButton label="Solicitar diagnóstico inicial" href="#contacto" />
          </div>
        </motion.div>

        {/* Right column (Checking points card) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-5 liquid-glass rounded-3xl p-6 sm:p-8 border border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-6">¿Qué evaluamos en tu negocio?</h3>
          
          <div className="space-y-4">
            {checkPoints.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 flex items-center justify-center text-[#00d2ff] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-white/80 text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
