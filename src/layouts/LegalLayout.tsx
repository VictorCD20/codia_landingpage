import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const LegalLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white flex flex-col justify-between">
      {/* Background Subtle Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top_center,rgba(61,129,227,0.05),transparent_70%)]" />

      {/* Simplified Legal Header */}
      <header className="relative z-20 w-full border-b border-white/10 bg-[#0c0c0c]/90 backdrop-blur-md py-5 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <img src="/logo.png" alt={`${siteConfig.name} Logo`} className="h-8 w-auto object-contain rounded-md" />
            <span className="text-white font-bold text-lg tracking-wider">CODIA</span>
          </Link>
          <Link 
            to="/" 
            className="text-xs uppercase tracking-widest text-white/70 hover:text-white border border-white/15 hover:border-white/30 rounded-full px-4 py-2 transition-all no-underline"
          >
            ← Volver al Sitio
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1">
        <Outlet />
      </main>

      {/* Legal Footer */}
      <footer className="relative z-20 w-full border-t border-white/10 bg-[#0c0c0c]/90 backdrop-blur-md py-8 px-6 text-center text-xs text-white/40">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-white transition-colors no-underline">Inicio</Link>
            <Link to="/contacto" className="hover:text-white transition-colors no-underline">Contacto</Link>
            <Link to="/aviso-de-privacidad" className="hover:text-white transition-colors no-underline">Aviso de Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
