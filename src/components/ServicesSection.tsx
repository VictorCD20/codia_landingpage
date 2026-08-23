import React from 'react';
import { FadeIn } from './FadeIn';

const services = [
  {
    num: "01",
    name: "Sitios web profesionales",
    desc: "Creamos sitios modernos para que tu negocio tenga presencia digital, muestre sus servicios y facilite el contacto con clientes."
  },
  {
    num: "02",
    name: "Catálogos digitales",
    desc: "Organizamos tus productos o servicios en un catálogo claro, visual y fácil de consultar."
  },
  {
    num: "03",
    name: "Sistemas internos",
    desc: "Desarrollamos herramientas para registrar clientes, solicitudes, notas, pagos o procesos internos."
  },
  {
    num: "04",
    name: "Automatizaciones",
    desc: "Reducimos tareas repetitivas para que tu negocio trabaje con más orden y ahorre tiempo."
  },
  {
    num: "05",
    name: "Paneles administrativos",
    desc: "Creamos espacios privados para que puedas consultar y gestionar información importante de tu negocio."
  },
  {
    num: "06",
    name: "Mantenimiento y soporte",
    desc: "Te apoyamos con ajustes, mejoras y seguimiento después de la entrega."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div className="mb-20 flex flex-col items-center">
        <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-center heading-gradient" style={{ filter: 'url(#c3-noise)' }}>
          Servicios
        </h2>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.05} y={30}>
            <div className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-white/10 ${i === 0 ? 'border-t' : ''}`}>
              <div className="text-white font-black text-[clamp(3rem,8vw,100px)] leading-none w-[120px] md:w-[180px] shrink-0 opacity-90">
                {svc.num}
              </div>
              <div className="flex flex-col gap-2 md:gap-4 flex-1">
                <h3 className="text-white font-semibold uppercase text-[clamp(1.1rem,2.2vw,1.8rem)]">
                  {svc.name}
                </h3>
                <p className="text-white/60 font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.1rem)]">
                  {svc.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
