import React from 'react';
import { motion } from 'motion/react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="agenda" className="max-w-6xl mx-auto px-6 py-20 md:py-32 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center border border-white/10 shadow-2xl"
      >
        <div 
          className="absolute inset-0 z-0 pointer-events-none" 
          style={{ 
            background: 'radial-gradient(600px circle at 50% 0%, rgba(0, 210, 255, 0.15), transparent 70%)',
            opacity: 0.4
          }} 
        />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            ¿Listo para ordenar y hacer crecer{' '}
            <span className="text-[#00d2ff]">la operación de tu negocio?</span>
          </h2>
          
          <p className="mt-6 text-white/70 max-w-xl mx-auto text-base md:text-lg leading-[1.6] font-light">
            Agenda una llamada de 20 minutos con uno de nuestros desarrolladores para analizar tu flujo actual y mostrarte una solución a la medida sin compromiso.
          </p>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/525547087640?text=Hola%20CODIA,%20me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n%20para%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-8 py-4 bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] hover:opacity-90 transition-all shadow-xl shadow-[#00d2ff]/20 active:scale-[0.98]"
            >
              Agendar una reunión
            </a>
            
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-6 py-4 border border-white/20 text-white hover:bg-white/5 transition-all"
            >
              Evaluar mi negocio
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
