import React from 'react';
import { motion } from 'motion/react';
import { SectionEyebrow } from './Primitives';
import { Eye, HeartPulse, ShoppingBag, Briefcase, Utensils, Settings } from 'lucide-react';

const businessTypes = [
  {
    title: 'Ópticas',
    desc: 'Catálogo de lentes, servicios, ubicación, WhatsApp y promociones.',
    icon: Eye,
    color: '#00d2ff',
  },
  {
    title: 'Clínicas y consultorios',
    desc: 'Servicios, equipo, horarios, preguntas frecuentes, ubicación y contacto.',
    icon: HeartPulse,
    color: '#3ecf8e',
  },
  {
    title: 'Tiendas',
    desc: 'Catálogo digital, categorías, fichas de producto y solicitudes por WhatsApp.',
    icon: ShoppingBag,
    color: '#B600A8',
  },
  {
    title: 'Despachos y servicios',
    desc: 'Perfil profesional, servicios, formulario de contacto y agenda de citas.',
    icon: Briefcase,
    color: '#f59e0b',
  },
  {
    title: 'Restaurantes',
    desc: 'Menú digital, promociones, ubicación y pedidos por WhatsApp.',
    icon: Utensils,
    color: '#ff4b4b',
  },
  {
    title: 'Operación interna',
    desc: 'Paneles para clientes, solicitudes, notas, seguimiento y control básico.',
    icon: Settings,
    color: '#a3a3a3',
  },
];

export const BusinessSolutionsSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div className="mb-16 flex flex-col items-center text-center">
        <SectionEyebrow label="Soluciones digitales" tag="Para tu giro" />
        <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight heading-gradient" style={{ filter: 'url(#c3-noise)' }}>
          Pensadas para distintos tipos de negocio
        </h2>
        <p className="mt-4 text-white/60 max-w-xl text-sm md:text-base leading-relaxed">
          Diseñamos herramientas que resuelven los problemas reales de tu industria, sin complicaciones ni desarrollos innecesarios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businessTypes.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 group transition-all duration-300 min-h-[220px]"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white/10 transition-colors" style={{ color: item.color }}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <a
                href="#contacto"
                className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors hover:text-white"
                style={{ color: item.color }}
              >
                <span>Solicitar propuesta</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
