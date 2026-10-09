import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionEyebrow } from './Primitives';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: '¿El software y el sitio web son 100% de mi propiedad?',
    a: 'Sí. A diferencia de plataformas cerradas que te cobran rentas mensuales forzosas para siempre, en CODIA el desarrollo y código fuente son tuyos. No estás atado a permanencias obligatorias.',
  },
  {
    q: '¿Cuánto tiempo toma tener mi sistema o página web funcionando?',
    a: 'Un sitio web o catálogo profesional está listo en 1 a 2 semanas. Un sistema POS o panel a la medida toma entre 2 y 4 semanas con entregas parciales y pruebas continuas con tu equipo.',
  },
  {
    q: '¿Qué pasa si mi personal no tiene experiencia usando tecnología?',
    a: 'Nuestras interfaces están diseñadas con la máxima simplicidad (similares a una app común de celular). Además, incluimos sesiones de capacitación directa y videos de uso para todo tu equipo.',
  },
  {
    q: '¿Puedo empezar con un plan básico y agregar módulos después?',
    a: 'Totalmente. Construimos bajo una arquitectura modular y escalable. Puedes iniciar con presencia web y después conectar inventario, facturación, pasarelas de cobro o alertas por WhatsApp.',
  },
  {
    q: '¿Qué tipo de garantía y soporte técnico ofrecen tras la entrega?',
    a: 'Todos los proyectos incluyen periodo de garantía post-lanzamiento para resolver cualquier eventualidad técnica sin costo, además de canales de soporte directo vía WhatsApp y teléfono.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div className="liquid-glass liquid-glass-clear rounded-3xl px-6 py-8 sm:px-12 sm:py-10 mb-16 flex flex-col items-center text-center">
        <SectionEyebrow label="Dudas comunes" tag="FAQ" />
        <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight heading-gradient" style={{ filter: 'url(#c3-noise)' }}>
          Preguntas frecuentes
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="surface-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left font-medium text-white hover:text-brand transition-colors focus:outline-none"
              >
                <span className="text-base md:text-lg pr-4">{faq.q}</span>
                <span className="p-1 rounded-full bg-white/5 border border-white/10 shrink-0">
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="p-6 pt-0 text-white/70 text-sm md:text-base leading-relaxed border-t border-white/5 bg-black/10">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
