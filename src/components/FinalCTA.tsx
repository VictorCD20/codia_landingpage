import React from 'react';
import { motion } from 'motion/react';
import { AppleButton } from './Primitives';

export const FinalCTA: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 relative z-10">
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
            background: 'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)',
            opacity: 0.3
          }} 
        />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            Escala tu negocio. <br/> Lidera el futuro.
          </h2>
          
          <p className="mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
            Únete a empresas que ya transformaron su operación a través de arquitectura de software y tecnología de punta.
          </p>
          
          <div className="mt-10 flex items-center justify-center">
            <AppleButton label="Inicia tu proyecto" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
