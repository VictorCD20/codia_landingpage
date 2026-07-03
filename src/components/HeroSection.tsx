import React from 'react';
import { Navbar } from './Navbar';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      <Navbar />
      
      <div className="flex-1 flex flex-col justify-center">
        <div className="overflow-hidden w-full mt-0 sm:-mt-10 md:-mt-20">
          <FadeIn delay={0.15} y={40} className="w-full">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[12vw] sm:text-[14vw] md:text-[15vw] lg:text-[16vw]">
              SOMOS CODIA
            </h1>
          </FadeIn>
        </div>
      </div>

      <Magnet 
        padding={150} 
        strength={3} 
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto rounded-[30px] sm:rounded-[40px] overflow-hidden"
      >
        <FadeIn delay={0.6} y={30} className="w-full h-full flex justify-center items-center">
          <img 
            src="/codia_logo_1783039222784.jpg" 
            alt="Codia hero" 
            className="w-full h-[300px] sm:h-[400px] object-contain pointer-events-none rounded-[30px] sm:rounded-[40px]"
          />
        </FadeIn>
      </Magnet>

      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20 pointer-events-none">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[280px] text-[clamp(0.75rem,1.4vw,1.5rem)] pointer-events-auto">
            Arquitectura de Software y Desarrollo a Medida para tu negocio
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20} className="pointer-events-auto">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
