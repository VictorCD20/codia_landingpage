import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { AppleButton } from './Primitives';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const links = ['Inicio', 'Soluciones', 'Servicios', 'Portafolio', 'Proceso', 'Contacto'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      // Small timeout to allow the mobile dropdown unmount/closing animation to start
      setTimeout(() => {
        const offset = 80; // Offset for sticky navbar height
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0c0c0c]/80 backdrop-blur-md border-b border-white/10 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="flex items-center">
          <img src="/logo.png" alt="CODIA Logo" className="h-7 md:h-8 w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a 
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleLinkClick(e, link.toLowerCase())}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="text-white/70 text-sm font-medium hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
            >
              {link}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:block" onClick={(e) => handleLinkClick(e as any, 'contacto')}>
          <AppleButton label="Contáctanos" />
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
        >
          {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#0c0c0c]/95 border-b border-white/10 backdrop-blur-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {links.map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleLinkClick(e, link.toLowerCase())}
                  className="text-white/80 text-base font-medium uppercase tracking-wider hover:text-white transition-colors cursor-pointer"
                >
                  {link}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5" onClick={(e) => handleLinkClick(e as any, 'contacto')}>
                <AppleButton label="Contáctanos" full />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
