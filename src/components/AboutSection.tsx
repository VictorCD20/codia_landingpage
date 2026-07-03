import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center relative px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      
      {/* Decorative floating elements */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[10%] left-[2%] sm:left-[5%] md:left-[8%] w-[120px] sm:w-[160px] md:w-[210px] opacity-40 blur-[2px]">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=300" alt="Tech" className="w-full h-auto rounded-full object-cover aspect-square" />
      </FadeIn>
      
      <FadeIn delay={0.25} x={80} y={0} duration={0.9} className="absolute bottom-[10%] right-[2%] sm:right-[5%] md:right-[8%] w-[120px] sm:w-[160px] md:w-[210px] opacity-40 blur-[2px]">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300" alt="Team" className="w-full h-auto rounded-full object-cover aspect-square" />
      </FadeIn>

      <div className="flex flex-col items-center z-10 w-full max-w-[900px]">
        <FadeIn delay={0} y={40} className="w-full">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(2.5rem,9vw,140px)]">
            Nosotros
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 md:mt-16 text-center text-[#D7E2EA] font-light leading-relaxed max-w-[700px] mx-auto text-[clamp(1.1rem,2vw,1.5rem)] space-y-6">
          <FadeIn delay={0.2} y={20}>
            <p>
              Creamos plataformas digitales modernas y eficientes para impulsar la transformación de tu negocio.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} y={20}>
            <p>
              No diseñamos plantillas genéricas, construimos soluciones tecnológicas robustas preparadas para escalar. <strong>¡Trabajemos juntos!</strong>
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </div>
      </div>
    </section>
  );
};
