import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center min-h-[65vh]">
      
      <span className="text-7xl font-extrabold text-blue-500 tracking-tight mb-4 opacity-80">
        404
      </span>

      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Página No Encontrada
      </h1>

      <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto mb-8 font-light leading-relaxed">
        La ruta a la que intentas acceder no existe o fue movida como parte de la reestructuración del sitio.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-white/90 transition-all no-underline"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver a la Página Principal</span>
      </Link>

    </div>
  );
};
