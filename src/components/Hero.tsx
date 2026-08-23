import React from 'react';
import { motion } from 'motion/react';
import { AppleButton } from './Primitives';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-16 md:pt-28 pb-20 text-center flex flex-col items-center relative z-10 px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl"
      >
        <span className="block text-white">Sitios web y soluciones digitales</span>
        <span 
          className="block animate-shiny"
          style={{
            backgroundImage: 'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
            filter: 'url(#c3-noise)'
          }}
        >
          para crecer
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8 text-white/60 max-w-2xl text-base md:text-lg leading-[1.6]"
      >
        Creamos páginas web, catálogos digitales, sistemas internos y automatizaciones para ayudarte a captar clientes, mostrar mejor tus servicios y organizar tu operación.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-8 flex flex-row items-center justify-center gap-4 flex-wrap"
      >
        <AppleButton label="Solicitar diagnóstico" href="#contacto" />
        <AppleButton label="Ver soluciones" href="#soluciones" />
      </motion.div>
      <span className="text-xs text-white/40 mt-4 block">Fácil, rápido y sin tecnicismos complejos</span>
    </section>
  );
};
