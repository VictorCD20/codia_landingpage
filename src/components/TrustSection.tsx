import React from 'react';
import { motion } from 'motion/react';
import { SectionEyebrow } from './Primitives';
import { Users, Info, Sparkles, Code, ClipboardList, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Atención directa',
    desc: 'Hablas directamente con el equipo que diseña y desarrolla tu proyecto.',
    icon: Users,
    color: '#00d2ff',
  },
  {
    title: 'Soluciones claras',
    desc: 'Te explicamos lo que tu negocio necesita sin usar tecnicismos o lenguaje complicado.',
    icon: Info,
    color: '#3ecf8e',
  },
  {
    title: 'Diseño profesional',
    desc: 'Creamos interfaces modernas, limpias y 100% adaptadas a la identidad de tu negocio.',
    icon: Sparkles,
    color: '#B600A8',
  },
  {
    title: 'Desarrollo funcional',
    desc: 'No solo hacemos pantallas bonitas; creamos herramientas que realmente resuelven problemas.',
    icon: Code,
    color: '#f59e0b',
  },
  {
    title: 'Proceso por etapas',
    desc: 'Trabajamos con un flujo estructurado: diagnóstico, propuesta, revisión y entrega.',
    icon: ClipboardList,
    color: '#ff4b4b',
  },
  {
    title: 'Periodo inicial de ajustes',
    desc: 'Incluimos una etapa de revisión para corregir cualquier detalle acordado tras la entrega.',
    icon: CheckCircle2,
    color: '#a3a3a3',
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div className="mb-16 flex flex-col items-center text-center">
        <SectionEyebrow label="Nuestros Valores" tag="Confianza" />
        <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight heading-gradient" style={{ filter: 'url(#c3-noise)' }}>
          ¿Por qué trabajar con CODIA?
        </h2>
        <p className="mt-4 text-white/60 max-w-xl text-sm md:text-base leading-relaxed">
          Nos enfocamos en la honestidad, la claridad y el beneficio real para tu negocio. Sin falsas promesas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex gap-4 items-start p-4 rounded-2xl bg-white/[0.01] border border-white/5"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0" style={{ color: item.color }}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
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
