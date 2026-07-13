import React from 'react';
import { motion } from 'motion/react';
import { SectionEyebrow } from './Primitives';

const projects = [
  {
    num: "01",
    client: "E-Commerce",
    name: "Tienda en Línea y Conversión",
    desc: "Plataforma de comercio electrónico diseñada para maximizar ventas. Integramos pasarelas de pago seguras, gestión de inventario en tiempo real y una experiencia de usuario fluida en cualquier dispositivo.",
    images: {
      left1: "/p1_ecommerce_product_1783039173671.jpg",
      left2: "/p1_ecommerce_mobile_1783039166808.jpg",
      right: "/p1_ecommerce_dashboard_1783039159517.jpg"
    }
  },
  {
    num: "02",
    client: "Logística",
    name: "Gestión de Envíos Inteligente",
    desc: "Sistema centralizado para el control de flotillas y rastreo de entregas. Optimiza rutas automáticamente mediante algoritmos de inteligencia artificial, reduciendo costos operativos drásticamente.",
    images: {
      left1: "/p3_delivery_tracking_1783039215548.jpg",
      left2: "/p3_delivery_mobile_1783039208097.jpg",
      right: "/p3_delivery_dashboard_1783039201262.jpg"
    }
  },
  {
    num: "03",
    client: "Punto de Venta",
    name: "Finanzas y Analíticas POS",
    desc: "Control total de tu negocio con nuestro sistema POS en la nube. Reportes financieros al instante, gestión multiplanta y sincronización de datos para que tomes decisiones basadas en información real.",
    images: {
      left1: "/p2_pos_analytics_1783039194767.jpg",
      left2: "/p2_pos_tablet_1783039188003.jpg",
      right: "/p2_pos_dashboard_1783039180830.jpg"
    }
  }
];

export const ProjectsShowcase: React.FC = () => {
  return (
    <section id="portafolio" className="relative z-20 pt-20 pb-40 px-6 max-w-6xl mx-auto">
      <div className="mb-20 flex flex-col items-center">
        <SectionEyebrow label="Casos de Éxito" tag="Portafolio" />
        <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-center heading-gradient" style={{ filter: 'url(#c3-noise)' }}>
          Proyectos Destacados
        </h2>
      </div>

      <div className="flex flex-col gap-32">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col relative w-full liquid-glass rounded-[40px] p-6 sm:p-10 border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div className="flex items-start md:items-center gap-6">
                <span className="text-white/10 font-black text-6xl leading-none">{project.num}</span>
                <div className="flex flex-col">
                  <span className="text-brand uppercase tracking-widest text-xs font-semibold mb-2">{project.client}</span>
                  <h3 className="text-white font-semibold text-3xl md:text-4xl">{project.name}</h3>
                </div>
              </div>
              <p className="text-white/60 text-sm max-w-sm leading-relaxed">
                {project.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
              <div className="md:col-span-4 flex flex-col gap-6 h-full">
                <div className="relative w-full h-[240px] md:flex-1 rounded-3xl overflow-hidden border border-white/10 group">
                  <img src={project.images.left1} alt="Detail" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="relative w-full h-[240px] md:flex-1 rounded-3xl overflow-hidden border border-white/10 group">
                  <img src={project.images.left2} alt="Mobile View" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              <div className="md:col-span-8 relative rounded-3xl overflow-hidden border border-white/10 h-[300px] md:h-full group">
                <img src={project.images.right} alt="Main Dashboard" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
