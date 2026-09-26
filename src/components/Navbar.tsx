import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { AppleButton } from './Primitives';
import { navLinks } from '../config/navigation';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <Link to="/" className="flex items-center no-underline">
          <img src="/logo.png" alt="CODIA Logo" className="h-7 md:h-8 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <NavLink 
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `text-sm font-medium transition-colors uppercase tracking-wider no-underline ${
                  isActive ? 'text-white font-bold border-b-2 border-blue-400 pb-1' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:block cursor-pointer" onClick={() => navigate('/contacto')}>
          <AppleButton label="Contáctanos" />
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
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
            className="absolute top-full left-0 w-full bg-[#0c0c0c]/95 border-b border-white/10 backdrop-blur-xl lg:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `text-base font-medium uppercase tracking-wider transition-colors no-underline ${
                    isActive ? 'text-blue-400 font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </NavLink>
              ))}
              <div 
                className="pt-4 border-t border-white/5 cursor-pointer" 
                onClick={() => {
                  setIsOpen(false);
                  navigate('/contacto');
                }}
              >
                <AppleButton label="Contáctanos" full />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
