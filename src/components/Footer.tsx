import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/site';
import { navLinks } from '../config/navigation';
import { teamMembers } from '../constants/company';
import { telemetry } from '../tracking/tracker';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC = () => {
  const menuLinks = navLinks;

  return (
    <footer className="relative z-20 w-full border-t border-white/10 bg-[#0c0c0c]/85 backdrop-blur-md py-12 md:py-16 mt-12" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        
        {/* Brand & Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <Link to="/" className="no-underline focus-visible:ring-2 focus-visible:ring-blue-400 outline-none rounded">
              <img src="/logo.png" alt={`${siteConfig.name} Logo`} className="h-8 w-auto object-contain rounded-md" loading="lazy" />
            </Link>
          </div>
          <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm">
            Estudio y laboratorio de soluciones digitales prácticas para negocios locales. Te ayudamos a ordenar procesos, automatizar tareas y mejorar tu presencia digital.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <a 
              href={siteConfig.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => telemetry.trackCTAClick('Footer_Facebook_Social', siteConfig.social.facebook)}
              className="p-2 rounded-full border border-white/10 text-white/60 hover:text-blue-400 hover:border-blue-400/50 bg-white/5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
              aria-label={`Facebook de ${siteConfig.name}`}
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a 
              href={siteConfig.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => telemetry.trackCTAClick('Footer_Instagram_Social', siteConfig.social.instagram)}
              className="p-2 rounded-full border border-white/10 text-white/60 hover:text-pink-400 hover:border-pink-400/50 bg-white/5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-pink-400 outline-none"
              aria-label={`Instagram de ${siteConfig.name}`}
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="text-white/40 text-xs mt-3 flex flex-col gap-1.5">
            <div>&copy; {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-white/50">
              <Link to="/aviso-de-privacidad" className="hover:text-white transition-colors underline focus-visible:ring-2 focus-visible:ring-blue-400 outline-none">
                Aviso de Privacidad
              </Link>
              <span>•</span>
              <Link to="/terminos-y-condiciones" className="hover:text-white transition-colors underline focus-visible:ring-2 focus-visible:ring-blue-400 outline-none">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>

        {/* Menu & Contact */}
        <div className="grid grid-cols-2 gap-6">
          {/* Menu Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest opacity-80 mb-2">
              Menú
            </h4>
            <nav aria-label="Navegación pie de página" className="flex flex-col gap-3">
              {menuLinks.map((link) => (
                <Link 
                  key={link.label}
                  to={link.path}
                  onClick={() => telemetry.trackCTAClick(`FooterNav_${link.label}`, link.path)}
                  className="text-white/60 text-sm hover:text-white transition-colors duration-200 w-fit no-underline focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest opacity-80 mb-2">
              Contacto y Redes
            </h4>
            <a 
              href={siteConfig.contact.phoneUrl} 
              onClick={() => telemetry.trackPhoneClick('Footer_Phone')}
              className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors duration-200 w-fit focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
              aria-label={`Llamar por teléfono al ${siteConfig.contact.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <a 
              href={siteConfig.contact.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => telemetry.trackWhatsAppClick('Footer_WhatsApp')}
              className="flex items-center gap-2 text-white/60 text-sm hover:text-emerald-400 transition-colors duration-200 w-fit focus-visible:ring-2 focus-visible:ring-emerald-400 outline-none"
              aria-label="Contactar por WhatsApp"
            >
              <Phone className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
            <a 
              href={siteConfig.contact.emailUrl} 
              onClick={() => telemetry.trackCTAClick('Footer_Email', siteConfig.contact.emailUrl)}
              className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors duration-200 w-fit focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
              aria-label={`Enviar correo a ${siteConfig.contact.email}`}
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Soporte</span>
            </a>
            <a 
              href={siteConfig.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => telemetry.trackCTAClick('Footer_Facebook_Text', siteConfig.social.facebook)}
              className="flex items-center gap-2 text-white/60 text-sm hover:text-blue-400 transition-colors duration-200 w-fit focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
              aria-label="Página de Facebook CODIA"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook</span>
            </a>
            <a 
              href={siteConfig.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => telemetry.trackCTAClick('Footer_Instagram_Text', siteConfig.social.instagram)}
              className="flex items-center gap-2 text-white/60 text-sm hover:text-pink-400 transition-colors duration-200 w-fit focus-visible:ring-2 focus-visible:ring-pink-400 outline-none"
              aria-label="Perfil de Instagram CODIA"
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
                    onClick={() => telemetry.trackCTAClick(`Portfolio_${member.name}`, member.href)}
                    className="flex items-center gap-2 text-white/65 hover:text-[#B600A8] transition-colors duration-300 font-medium focus-visible:ring-2 focus-visible:ring-purple-400 outline-none"
                    aria-label={`Ver portafolio de ${member.name}`}
                  >
                    <span>{member.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" aria-hidden="true" />
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
