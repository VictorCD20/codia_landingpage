import React from 'react';
import { motion } from 'motion/react';
import { SectionEyebrow } from './Primitives';

const steps = [
  {
    num: '01',
    title: 'Escuchamos',
    desc: 'Platicamos con detalles sobre las necesidades reales, problemas y dinámicas actuales de tu negocio.',
    color: '#00d2ff',
  },
  {
    num: '02',
    title: 'Diagnosticamos',
    desc: 'Analizamos qué herramienta es la más conveniente o si requieres simplificar un proceso primero.',
    color: '#3ecf8e',
  },
  {
    num: '03',
    title: 'Proponemos',
    desc: 'Definimos una solución práctica, clara y con un alcance delimitado, sin tecnicismos innecesarios.',
    color: '#B600A8',
  },
  {
    num: '04',
    title: 'Implementamos',
    desc: 'Diseñamos y desarrollamos el prototipo o herramienta final y lo conectamos con tus flujos de trabajo.',
    color: '#f59e0b',
  },
  {
    num: '05',
    title: 'Acompañamos',
    desc: 'Te ayudamos a adoptar la herramienta, capacitando a tu equipo y refinando detalles para su correcto uso.',
    color: '#ff4b4b',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="proceso" className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div className="mb-16 flex flex-col items-center text-center">
        <SectionEyebrow label="Metodología" tag="Paso a paso" />
        <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight heading-gradient" style={{ filter: 'url(#c3-noise)' }}>
          Así trabajamos tu proyecto
        </h2>
        <p className="mt-4 text-white/60 max-w-xl text-sm md:text-base leading-relaxed">
          Trabajamos de forma transparente y estructurada para garantizar resultados que realmente ayuden a tu negocio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => {
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col border border-white/10 relative overflow-hidden group min-h-[180px]"
            >
              <div className="absolute top-4 right-6 text-5xl font-black text-white/5 select-none transition-transform duration-300 group-hover:scale-110" style={{ color: `${step.color}15` }}>
                {step.num}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: step.color }} />
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
