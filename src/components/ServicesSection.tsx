import React from 'react';
import { FadeIn } from './FadeIn';

const services = [
  {
    num: "01",
    name: "Soluciones personalizadas",
    desc: "Arquitectura a medida que se adapta exactamente a los procesos y necesidades de su negocio."
  },
  {
    num: "02",
    name: "Enfoque profesional",
    desc: "Metodologías ágiles y estándares corporativos para garantizar entregas puntuales y robustas."
  },
  {
    num: "03",
    name: "Automatización e IA",
    desc: "Integramos modelos inteligentes para optimizar tareas repetitivas y potenciar la productividad."
  },
  {
    num: "04",
    name: "Desarrollo escalable",
    desc: "Código limpio y estructuras modulares preparadas para crecer junto con su volumen de usuarios."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(2.5rem,10vw,140px)] mb-16 sm:mb-20 md:mb-28 leading-none">
        Servicios
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.1} y={30}>
            <div className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] ${i === 0 ? 'border-t' : ''}`}>
              <div className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none w-[120px] md:w-[180px] shrink-0">
                {svc.num}
              </div>
              <div className="flex flex-col gap-2 md:gap-4 flex-1">
                <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                  {svc.name}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
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
