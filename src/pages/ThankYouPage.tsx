import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, Mail, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';

export const ThankYouPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center min-h-[70vh]">
      
      {/* Icon Check */}
      <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-8 text-emerald-400 shadow-2xl">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
        Solicitud Recibida Con Éxito
      </span>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
        ¡Gracias por Ponerte en Contacto!
      </h1>

      <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-light">
        Hemos recibido los detalles de tu proyecto. Nuestro equipo revisará tu solicitud y nos comunicaremos contigo a la brevedad para conocer más detalles y preparar una propuesta clara.
      </p>

      {/* Info Card */}
      <div className="liquid-glass rounded-3xl p-8 max-w-lg w-full mb-12 text-left">
        <h3 className="text-white font-semibold text-base mb-4 text-center">¿Qué sucede a continuación?</h3>
        <ul className="space-y-4 text-sm text-white/80">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-bold text-white shrink-0">1</span>
            <span>Revisamos la información de tu negocio y la solución que necesitas.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-bold text-white shrink-0">2</span>
            <span>Te enviamos un correo de confirmación y agendamos una llamada breve por WhatsApp o teléfono.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-bold text-white shrink-0">3</span>
            <span>Definimos alcance, costo y entregables sin compromisos.</span>
          </li>
        </ul>
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-around gap-4 text-xs text-white/60">
          <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors no-underline">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{siteConfig.contact.whatsapp}</span>
          </a>
          <a href={siteConfig.contact.emailUrl} className="flex items-center gap-2 hover:text-white transition-colors no-underline">
            <Mail className="w-4 h-4" />
            <span>{siteConfig.contact.email}</span>
          </a>
        </div>
      </div>

      {/* Button Back */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-all no-underline"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver al Inicio</span>
      </Link>

    </div>
  );
};
