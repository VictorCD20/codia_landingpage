import React from 'react';
import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import { AppleButton } from './Primitives';

export const Navbar: React.FC = () => {
  const links = ['Inicio', 'Soluciones', 'Servicios', 'Proceso', 'Contacto'];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between relative z-10"
    >
      <div className="flex items-center">
        <img src="/logo.jpeg" alt="CODIA Logo" className="h-7 md:h-8 w-auto object-contain" />
      </div>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link, i) => (
          <motion.a 
            key={link}
            href={`#${link.toLowerCase()}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="text-white/70 text-sm font-medium hover:text-white transition-colors uppercase tracking-wider"
          >
            {link}
          </motion.a>
        ))}
      </div>

      <div className="hidden md:block">
        <AppleButton label="Contáctanos" />
      </div>

      <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5">
        <Menu className="w-5 h-5 text-white" />
      </div>
    </motion.nav>
  );
};
