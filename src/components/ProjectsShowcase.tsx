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
    type: "Demo conceptual",
    name: "Catálogo Digital para Óptica",
    problem: "Exhibición desorganizada de productos y falta de vía rápida de contacto directo.",
    includes: "Categorías, buscador de productos, fichas de producto detalladas y botón directo para cotizar e iniciar pedido vía WhatsApp.",
    idealFor: "Ópticas, boutiques, joyerías y tiendas de accesorios locales.",
    images: {
      left2: sunglasMovilImg,
      right: sunglasImg
    }
  },
  {
    num: "02",
    type: "Proyecto real",
    name: "FestEasy - Invitaciones Digitales",
    problem: "Gestión compleja y manual de confirmación de asistencia en eventos sociales.",
    includes: "Página interactiva de evento, confirmación de asistencia en tiempo real conectada a panel administrativo, mapa con geolocalización, contador regresivo y mesa de regalos.",
    idealFor: "Organizadores de eventos, planeadores y familias.",
    images: {
      left2: festeasyMovilImg,
      right: festeasyImg
    }
  },
  {
    num: "03",
    type: "Proyecto real",
    name: "Kyros - Sistema Administrativo",
    problem: "Falta de historial de notas de clientes y desorden en el seguimiento de órdenes de servicio.",
    includes: "Panel de administración privado, CRM ligero de contactos, registro de estatus de servicios, notas internas e historial.",
    idealFor: "Talleres mecánicos, consultorios médicos, despachos y oficinas de servicios locales.",
    images: {
      left2: kyrosMovilImg,
      right: kyrosWebImg
    }
  },
  {
    num: "04",
    type: "Proyecto real",
    name: "Tienda en Línea y Conversión",
    problem: "Dificultad para vender productos y recibir cobros con tarjeta de forma automatizada.",
    includes: "Catálogo responsivo, pasarela de pago (Stripe/PayPal), carrito de compras interactivo y gestión administrativa básica.",
    idealFor: "Cafeterías de especialidad, marcas locales y comercios minoristas.",
    images: {
      left2: "/p1_ecommerce_mobile_1783039166808.jpg",
      right: "/p1_ecommerce_dashboard_1783039159517.jpg"
    }
  },
  {
    num: "05",
    type: "Prototipo",
    name: "Finanzas y Analíticas POS",
    problem: "Dificultad para controlar las ventas diarias y arqueo de caja de forma remota.",
    includes: "Punto de venta simplificado para tablets, registro de artículos, catálogo rápido e historial básico de transacciones.",
    idealFor: "Tiendas locales de retail, minisúpers, cafeterías y negocios con venta en mostrador.",
    images: {
      left2: "/p2_pos_tablet_1783039188003.jpg",
      right: "/p2_pos_dashboard_1783039180830.jpg"
    }
  },
  {
    num: "06",
    type: "Demo conceptual",
    name: "Gestión de Envíos Inteligente",
    problem: "Desorden en el despacho de entregas a domicilio y coordinación de repartidores locales.",
    includes: "Registro de entregas, asignación rápida de repartidor, estatus de entrega y panel administrativo para despacho local.",
    idealFor: "Servicios de entrega local, restaurantes con reparto propio o distribuidoras locales.",
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
        <SectionEyebrow label="Demos y Soluciones" tag="Nuestras Demos" />
        <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-center heading-gradient" style={{ filter: 'url(#c3-noise)' }}>
          Demos y soluciones conceptuales
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
            <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-10 gap-8">
              <div className="flex items-start gap-6">
                <span className="text-white font-black text-6xl leading-none opacity-90">{project.num}</span>
                <div className="flex flex-col">
                  <span className="text-[#00d2ff] uppercase tracking-widest text-xs font-semibold mb-2">{project.type}</span>
                  <h3 className="text-white font-semibold text-3xl md:text-4xl">{project.name}</h3>
                </div>
              </div>
              <div className="flex-1 max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-white/75">
                <div>
                  <span className="block font-semibold uppercase text-[10px] text-white/40 tracking-wider mb-1">Problema que resuelve</span>
                  <p className="leading-relaxed font-light">{project.problem}</p>
                </div>
                <div>
                  <span className="block font-semibold uppercase text-[10px] text-white/40 tracking-wider mb-1">Qué incluye</span>
                  <p className="leading-relaxed font-light">{project.includes}</p>
                </div>
                <div className="sm:col-span-2">
                  <span className="block font-semibold uppercase text-[10px] text-white/40 tracking-wider mb-1">Ideal para</span>
                  <p className="leading-relaxed font-light text-[#3ecf8e]">{project.idealFor}</p>
                </div>
              </div>
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
