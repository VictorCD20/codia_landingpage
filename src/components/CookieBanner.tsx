import React, { useState, useEffect } from 'react';
import { ShieldCheck, Settings, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  getSavedCookieConsent, 
  acceptAllCookies, 
  rejectNonEssentialCookies, 
  onCookieConsentChange 
} from '../services/cookieConsent';
import { CookiePreferencesModal } from './CookiePreferencesModal';

export const CookieBanner: React.FC = () => {
  const [hasConsent, setHasConsent] = useState<boolean>(() => {
    return getSavedCookieConsent() !== null;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Verificar si ya existe consentimiento
    const consent = getSavedCookieConsent();
    setHasConsent(consent !== null);
  }, []);

  // Bloquear scroll si aún no se ha dado consentimiento
  useEffect(() => {
    if (!hasConsent) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [hasConsent]);

  useEffect(() => {
    // Escuchar eventos globales para abrir modal desde cualquier parte
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };

    window.addEventListener('codia_open_cookie_preferences', handleOpenModal);
    
    // Escuchar cambios de consentimiento para desbloquear acceso
    const unsubscribe = onCookieConsentChange(() => {
      setHasConsent(true);
      setIsModalOpen(false);
    });

    return () => {
      window.removeEventListener('codia_open_cookie_preferences', handleOpenModal);
      unsubscribe();
    };
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setHasConsent(true);
  };

  const handleRejectNonEssential = () => {
    rejectNonEssentialCookies();
    setHasConsent(true);
  };

  const handleOpenConfig = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Overlay bloqueante: no se puede acceder a la web hasta elegir preferencias de cookies */}
      {!hasConsent && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn"
          aria-label="Consentimiento obligatorio de cookies"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-xl p-6 sm:p-8 rounded-3xl border border-white/20 bg-[#0e0e0e]/95 backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] text-white relative">
            
            <div className="flex items-start gap-4 mb-5">
              <div className="p-3 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 shrink-0">
                <ShieldCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-medium tracking-wide">
                  <Lock className="w-3 h-3" />
                  <span>Acceso protegido</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Configuración de Cookies y Privacidad
                </h2>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed pt-1">
                  Para poder acceder y navegar en el sitio web de <strong className="text-white font-semibold">CODIA</strong>, debes registrar tus preferencias de cookies. Utilizamos cookies indispensables para el funcionamiento y seguridad, así como opcionales para analítica y mejora de tu experiencia.
                </p>
                <p className="text-[11px] text-white/50 pt-1">
                  Puedes consultar más información en nuestro{' '}
                  <Link to="/aviso-de-privacidad" className="text-blue-400 underline hover:text-blue-300">
                    Aviso de Privacidad
                  </Link>{' '}
                  y{' '}
                  <Link to="/terminos-y-condiciones" className="text-blue-400 underline hover:text-blue-300">
                    Términos y Condiciones
                  </Link>.
                </p>
              </div>
            </div>

            {/* Acciones para desbloquear */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleOpenConfig}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-white/15 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all focus-visible:ring-2 focus-visible:ring-blue-400 outline-none cursor-pointer"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Personalizar</span>
              </button>

              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="px-4 py-2.5 rounded-full border border-white/15 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all focus-visible:ring-2 focus-visible:ring-blue-400 outline-none cursor-pointer"
              >
                Rechazar no esenciales
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-white/90 active:scale-95 transition-all shadow-lg focus-visible:ring-2 focus-visible:ring-blue-400 outline-none cursor-pointer"
              >
                Aceptar todas
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Modal de personalización de preferencias */}
      <CookiePreferencesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

