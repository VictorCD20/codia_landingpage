import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, BarChart3, Megaphone, Sliders, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getSavedCookieConsent, saveCookieConsent, acceptAllCookies, rejectNonEssentialCookies } from '../services/cookieConsent';
import type { CookiePreferences } from '../types/cookies';

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({ isOpen, onClose }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    preferences: false,
    analytics: false,
    marketing: false,
    timestamp: '',
    version: '1.0.0'
  });

  useEffect(() => {
    if (isOpen) {
      const saved = getSavedCookieConsent();
      if (saved) {
        setPreferences(saved);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    saveCookieConsent({
      preferences: preferences.preferences,
      analytics: preferences.analytics,
      marketing: preferences.marketing
    });
    onClose();
  };

  const handleAcceptAll = () => {
    acceptAllCookies();
    onClose();
  };

  const handleRejectAll = () => {
    rejectNonEssentialCookies();
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl border border-white/15 bg-[#0e0e0e]/95 text-white shadow-[0_25px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Sliders className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 id="cookie-preferences-title" className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Centro de Preferencias de Privacidad
              </h2>
              <p className="text-xs text-white/50">Gestiona qué tecnologías y cookies permites en tu navegación.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
            aria-label="Cerrar panel de preferencias de cookies"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 text-sm">
          <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
            En CODIA utilizamos cookies y tecnologías de almacenamiento local para garantizar la seguridad del sitio, recordar preferencias, entender cómo interactúas con nuestras soluciones y ofrecerte la mejor experiencia posible. Puedes personalizar tus opciones a continuación. Para más detalles, consulta nuestra{' '}
            <Link to="/politica-de-cookies" onClick={onClose} className="text-blue-400 hover:underline">
              Política de Cookies
            </Link>{' '}
            y el{' '}
            <Link to="/aviso-de-privacidad" onClick={onClose} className="text-blue-400 hover:underline">
              Aviso de Privacidad
            </Link>.
          </p>

          {/* 1. Necessary */}
          <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white text-sm">Cookies Estrictamente Necesarias</span>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Siempre Activas
              </span>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">
              Son indispensables para que el sitio funcione de manera segura y correcta (navegación básica, protección contra spam en formularios y registro de tus preferencias de consentimiento). No pueden desactivarse.
            </p>
          </div>

          {/* 2. Preferences */}
          <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Sliders className="w-4 h-4 text-blue-400" />
                <label htmlFor="pref-toggle-preferences" className="font-semibold text-white text-sm cursor-pointer">
                  Cookies de Preferencias
                </label>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  id="pref-toggle-preferences"
                  type="checkbox"
                  checked={preferences.preferences}
                  onChange={(e) => setPreferences({ ...preferences, preferences: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">
              Permiten recordar configuraciones previas como el estado de paneles, formularios en curso o preferencias de interfaz para ofrecerte una experiencia personalizada.
            </p>
          </div>

          {/* 3. Analytics */}
          <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <BarChart3 className="w-4 h-4 text-purple-400" />
                <label htmlFor="pref-toggle-analytics" className="font-semibold text-white text-sm cursor-pointer">
                  Cookies Analíticas y Medición
                </label>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  id="pref-toggle-analytics"
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">
              Nos ayudan a conocer de forma anónima y agregada el número de visitantes, páginas más consultadas, tiempos de respuesta y rendimiento técnico (Vercel Analytics y GA4 si están habilitados) para optimizar el sitio.
            </p>
          </div>

          {/* 4. Marketing */}
          <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Megaphone className="w-4 h-4 text-amber-400" />
                <label htmlFor="pref-toggle-marketing" className="font-semibold text-white text-sm cursor-pointer">
                  Cookies de Marketing y Publicidad
                </label>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  id="pref-toggle-marketing"
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
              </label>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">
              Permiten evaluar la efectividad de campañas publicitarias digitales (Google Ads / Meta) para mostrar información relevante de las soluciones de CODIA a personas interesadas.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleRejectAll}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full border border-white/20 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
            >
              Rechazar no esenciales
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full border border-white/20 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
            >
              Aceptar todas
            </button>
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-white/90 active:scale-95 transition-all shadow-lg focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Guardar mis preferencias</span>
          </button>
        </div>
      </div>
    </div>
  );
};
