import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const menuLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const teamMembers = [
    { name: 'Victor Can', href: 'https://portafolio-victor-can.vercel.app/', pending: false },
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
            Creamos soluciones de software a la medida con arquitectura robusta y diseño excepcional para potenciar el crecimiento de tu negocio.
          </p>
          <div className="text-white/40 text-xs mt-4">
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

          {/* Contact Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest opacity-80 mb-2">
              Contacto
            </h4>
            <a 
              href="mailto:codiasupport@gmail.com" 
              className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors duration-200 w-fit"
            >
              <Mail className="w-4 h-4" />
              <span>Soporte</span>
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=9995405419" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors duration-200 w-fit"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
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
