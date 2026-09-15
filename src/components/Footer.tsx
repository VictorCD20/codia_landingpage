import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC = () => {
  const menuLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Diagnóstico', href: '#diagnostico' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const teamMembers = [
    { name: 'Victor Can', href: 'https://victorportafolio-orcin.vercel.app/', pending: false },
    { name: 'Kevin Vargas', href: 'https://portafolio-kevin-vargas.vercel.app/', pending: false },
    { name: 'Emir Montalvo', href: 'https://portafolio-emir-montalvo.vercel.app/', pending: false },
  ];

  return (
    <footer className="relative z-20 w-full border-t border-white/10 bg-[#0c0c0c]/85 backdrop-blur-md py-12 md:py-16 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        
        {/* Brand & Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <img src="/logo.png" alt="CODIA Logo" className="h-8 w-auto object-contain rounded-md" />
          </div>
          <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm">
            Estudio y laboratorio de soluciones digitales prácticas para negocios locales. Te ayudamos a ordenar procesos, automatizar tareas y mejorar tu presencia digital.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <a 
              href="https://www.facebook.com/CodiaSoftware/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/10 text-white/60 hover:text-blue-400 hover:border-blue-400/50 bg-white/5 transition-all duration-200"
              title="Facebook CODIA"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/codia_software/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/10 text-white/60 hover:text-pink-400 hover:border-pink-400/50 bg-white/5 transition-all duration-200"
              title="Instagram CODIA"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="text-white/40 text-xs mt-2">
            &copy; {new Date().getFullYear()} CODIA. Todos los derechos reservados.
          </div>
        </div>

        {/* Menu & Contact */}
        <div className="grid grid-cols-2 gap-6">
          {/* Menu Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest opacity-80 mb-2">
              Menú
            </h4>
            {menuLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-white/60 text-sm hover:text-white transition-colors duration-200 w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact & Social Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest opacity-80 mb-2">
              Contacto y Redes
            </h4>
            <a 
              href="tel:+5219995370947" 
              className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors duration-200 w-fit"
            >
              <Phone className="w-4 h-4" />
              <span>+52 1 999 537 0947</span>
            </a>
            <a 
              href="https://wa.me/5219995370947" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 text-sm hover:text-emerald-400 transition-colors duration-200 w-fit"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
            <a 
              href="mailto:codiasupport@gmail.com" 
              className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors duration-200 w-fit"
            >
              <Mail className="w-4 h-4" />
              <span>Soporte</span>
            </a>
            <a 
              href="https://www.facebook.com/CodiaSoftware/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 text-sm hover:text-blue-400 transition-colors duration-200 w-fit"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/codia_software/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 text-sm hover:text-pink-400 transition-colors duration-200 w-fit"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Team Portfolios */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xs font-semibold uppercase tracking-widest opacity-80 mb-1">
            Nuestros Portafolios
          </h4>
          <div className="flex flex-col gap-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="group flex items-center justify-between text-sm">
                {member.pending ? (
                  <span className="text-white/40 cursor-not-allowed flex items-center gap-2">
                    {member.name}
                    <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-white/5 text-white/30 border border-white/5">
                      Próximamente
                    </span>
                  </span>
                ) : (
                  <a 
                    href={member.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/65 hover:text-[#B600A8] transition-colors duration-300 font-medium"
                  >
                    <span>{member.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
