import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionEyebrow } from './Primitives';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: '¿Cuánto cuesta una página web?',
    a: 'Depende del alcance, número de secciones y funcionalidades. Podemos hacer una propuesta a la medida según lo que necesite tu negocio.',
  },
  {
    q: '¿Cuánto tarda el desarrollo?',
    a: 'Un sitio informativo puede tomar de 1 a 3 semanas, dependiendo de qué tan rápido contemos con la información, imágenes y revisiones.',
  },
  {
    q: '¿Qué necesito para comenzar?',
    a: 'Tu logotipo, información del negocio, catálogo de servicios/productos, fotos, redes sociales, datos de contacto y referencias visuales si las tienes.',
  },
  {
    q: '¿Puedo pagar en partes?',
    a: 'Sí. Nos adaptamos a las necesidades de cobro del cliente y definimos el esquema de pagos antes de iniciar el desarrollo.',
  },
  {
    q: '¿El sitio incluye dominio y hosting?',
    a: 'Te orientamos en la compra y configuración a tu nombre para que seas el único dueño, o podemos trabajar sobre el dominio y hosting que ya tengas.',
  },
  {
    q: '¿Puedo pedir cambios después?',
    a: 'Sí. Incluimos un periodo inicial de revisión sin costo y también ofrecemos esquemas de mantenimiento mensual opcionales.',
  },
  {
    q: '¿Solo hacen páginas web?',
    a: 'No. También creamos catálogos digitales interactivos, sistemas internos para negocios locales, paneles administrativos y automatizaciones de tareas repetitivas.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div className="mb-16 flex flex-col items-center text-center">
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
              className="liquid-glass rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
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
