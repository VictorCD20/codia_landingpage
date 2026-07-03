import React from 'react';
import { motion } from 'motion/react';

export const TechStack: React.FC = () => {
  const tech = ['React', 'Node.js', 'Inteligencia Artificial', 'Pasarelas de Pago', 'Bases de Datos', 'Cloud Computing', 'APIs', 'Seguridad'];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20 relative z-10">
      <div className="text-center">
        <p className="text-xs uppercase tracking-widest text-white/40">
          Impulsado por tecnología de vanguardia
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
        {tech.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="flex items-center justify-center text-center"
          >
            <span className="text-xs font-semibold tracking-tight text-white/50 hover:text-white transition-colors cursor-default">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
