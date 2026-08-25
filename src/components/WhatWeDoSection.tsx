import React from 'react';
import { motion } from 'motion/react';
import { SectionEyebrow } from './Primitives';
import { SearchCheck, Layers, Terminal, Sparkles } from 'lucide-react';

const blocks = [
  {
    title: 'Diagnosticamos',
    desc: 'Analizamos a fondo tu negocio, tus herramientas actuales y tus cuellos de botella para encontrar la raíz del problema.',
    icon: SearchCheck,
    color: '#00d2ff',
  },
  {
    title: 'Diseñamos',
    desc: 'Estructuramos y diseñamos la solución digital óptima, visual y de fácil navegación para tus clientes o tu equipo.',
    icon: Layers,
    color: '#3ecf8e',
  },
  {
    title: 'Implementamos',
    desc: 'Desarrollamos e implementamos herramientas web modernas y seguras en la nube, optimizadas para el rendimiento.',
    icon: Terminal,
    color: '#B600A8',
  },
  {
    title: 'Mejoramos',
    desc: 'Acompañamos a tu negocio en la puesta en marcha, refinando la herramienta y adaptándola a las necesidades reales.',
    icon: Sparkles,
    color: '#f59e0b',
  },
];

export const WhatWeDoSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div className="mb-16 flex flex-col items-center text-center">
        <SectionEyebrow label="Qué hacemos" tag="Nuestro Enfoque" />
        <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight heading-gradient" style={{ filter: 'url(#c3-noise)' }}>
          No hacemos tecnología por hacer tecnología.
        </h2>
        <p className="mt-6 text-white/60 max-w-2xl text-base leading-relaxed">
          En CODIA partimos de una necesidad real: un negocio que necesita mostrarse mejor, ordenar información, dar seguimiento a clientes o automatizar tareas repetitivas. Después recomendamos la solución más adecuada.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blocks.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="liquid-glass rounded-3xl p-6 flex flex-col justify-between border border-white/10 group transition-all duration-300 min-h-[240px]"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white/10 transition-colors" style={{ color: item.color }}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
