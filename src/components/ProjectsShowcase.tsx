import React from 'react';
import { motion } from 'motion/react';
import { SectionEyebrow } from './Primitives';

// Import local project assets from the fotos_sitios folder
import kyrosWebImg from '../../assets/fotos_sitios/kyros_web.png';
import kyrosMovilImg from '../../assets/fotos_sitios/kayrosmovil.png';
import festeasyImg from '../../assets/fotos_sitios/festeasy.png';
import festeasyMovilImg from '../../assets/fotos_sitios/festeasy_movil.png';
import sunglasImg from '../../assets/fotos_sitios/sunglas_sitioweb.png';
import sunglasMovilImg from '../../assets/fotos_sitios/sunglasmovil.png';

const projects = [
  {
    num: "01",
    client: "Demo Conceptual",
    name: "Catálogo Digital para Óptica",
    desc: "Catálogo claro, visual y responsivo diseñado para ópticas y tiendas de accesorios. Incluye categorías, filtros rápidos y un botón directo para consultar y hacer pedidos por WhatsApp.",
    images: {
      left2: sunglasMovilImg,
      right: sunglasImg
    }
  },
  {
    num: "02",
    client: "Proyecto Real",
    name: "FestEasy - Invitaciones Digitales",
    desc: "Plataforma interactiva para eventos. Permite la confirmación de asistencia en tiempo real, detalles del evento con geolocalización, mesa de regalos y un diseño personalizado.",
    images: {
      left2: festeasyMovilImg,
      right: festeasyImg
    }
  },
  {
    num: "03",
    client: "Proyecto Real",
    name: "Kyros - Sistema Administrativo",
    desc: "Panel de administración y CRM a medida para control de operaciones, seguimiento de solicitudes, registro de notas de clientes y métricas de desempeño básicas.",
    images: {
      left2: kyrosMovilImg,
      right: kyrosWebImg
    }
  },
  {
    num: "04",
    client: "Proyecto Real",
    name: "Tienda en Línea y Conversión",
    desc: "Plataforma de comercio electrónico diseñada para maximizar ventas. Integramos pasarelas de pago seguras, gestión de inventario en tiempo real y una experiencia de usuario fluida en cualquier dispositivo.",
    images: {
      left2: "/p1_ecommerce_mobile_1783039166808.jpg",
      right: "/p1_ecommerce_dashboard_1783039159517.jpg"
    }
  },
  {
    num: "05",
    client: "Proyecto Real",
    name: "Finanzas y Analíticas POS",
    desc: "Control total de tu negocio con nuestro sistema POS en la nube. Reportes financieros al instante, gestión multiplanta y sincronización de datos para que tomes decisiones basadas en información real.",
    images: {
      left2: "/p2_pos_tablet_1783039188003.jpg",
      right: "/p2_pos_dashboard_1783039180830.jpg"
    }
  },
  {
    num: "06",
    client: "Proyecto Real",
    name: "Gestión de Envíos Inteligente",
    desc: "Sistema centralizado para el control de flotillas y rastreo de entregas. Optimiza rutas automáticamente mediante algoritmos de inteligencia artificial, reduciendo costos operativos drásticamente.",
    images: {
      left2: "/p3_delivery_mobile_1783039208097.jpg",
      right: "/p3_delivery_dashboard_1783039201262.jpg"
    }
  }
];

export const ProjectsShowcase: React.FC = () => {
  return (
    <section id="portafolio" className="relative z-20 pt-20 pb-40 px-6 max-w-6xl mx-auto">
      <div className="mb-20 flex flex-col items-center">
        <SectionEyebrow label="Demos y Soluciones" tag="Nuestras Soluciones" />
        <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-center heading-gradient" style={{ filter: 'url(#c3-noise)' }}>
          Demos y soluciones que podemos desarrollar
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
                <span className="text-white font-black text-6xl leading-none opacity-90">{project.num}</span>
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
                {/* Mobile version: only visible on mobile (hidden on md and above) */}
                {project.images.left2 && (
                  <div className="block md:hidden md:col-span-12 relative rounded-3xl overflow-hidden border border-white/10 h-[420px] bg-black/40 p-3 group">
                    <img 
                      src={project.images.left2} 
                      alt="Mobile View" 
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
                    />
                  </div>
                )}
                {/* Web version: on mobile, hidden if we have a mobile image; on desktop, always shown at full width */}
                <div className={`${project.images.left2 ? 'hidden md:block md:col-span-12' : 'block md:col-span-12'} relative rounded-3xl overflow-hidden border border-white/10 h-[320px] md:h-full bg-black/40 p-3 group`}>
                  <img 
                    src={project.images.right} 
                    alt="Main Showcase" 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
                  />
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
