import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'motion/react';
import { Mail, User, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { telemetry } from '../../tracking/tracker';
import { saveLeadToGoogleSheets } from '../../services/contactService';

export const ComingSoonNewsletter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg('Por favor completa todos los campos.');
      return;
    }

    if (!privacyAccepted) {
      setErrorMsg('Debes leer y aceptar el Aviso de Privacidad para suscribirte.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    telemetry.trackFormSubmit('ComingSoonNewsletter', { name, email });

    try {
      await saveLeadToGoogleSheets({
        nombre: name,
        correo: email,
        telefono: 'Newsletter',
        solucion: 'Lista de Espera / Novedades Módulos',
        mensaje: '[NEWSLETTER / ACCESO PRIORITARIO] Registro para próximos módulos de CODIA.',
        aviso_privacidad: 'Aceptado el ' + new Date().toISOString(),
        consentimiento_marketing: 'Aceptado (Newsletter)'
      });
    } catch (err) {
      console.warn('[Newsletter Sync Warning]:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 relative" id="newsletter">
      <div className="max-w-4xl mx-auto">
        <m.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-white/10 via-white/[0.04] to-black/60 border border-white/15 backdrop-blur-2xl overflow-hidden shadow-2xl"
        >
          {/* Subtle glow background effect */}
          <div 
            className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none"
            aria-hidden="true" 
          />

          <div className="text-center max-w-2xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Acceso Prioritario</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              ¿Quieres enterarte cuando esté listo?
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8">
              Déjanos tu nombre y correo. Te enviaremos actualizaciones exclusivas y acceso prioritario 
              a las primeras demos y betas del ecosistema CODIA.
            </p>

            {isSubmitted ? (
              <m.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 flex flex-col items-center gap-3"
              >
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">¡Gracias por registrarte!</h3>
                <p className="text-xs sm:text-sm text-emerald-200/90 max-w-md">
                  Hemos guardado tu interés. Te notificaremos de manera prioritaria en cuanto el primer módulo esté listo.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setEmail('');
                    setPrivacyAccepted(false);
                  }}
                  className="mt-2 text-xs underline text-emerald-300 hover:text-white cursor-pointer"
                >
                  Registrar otro correo
                </button>
              </m.div>
            ) : (
              <form onSubmit={handleSubmit} method="post" className="space-y-4 text-left max-w-xl mx-auto">
                {errorMsg && (
                  <div role="alert" className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs font-medium text-center">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="coming-soon-name" className="block text-xs font-medium text-white/80 mb-1.5">
                      Nombre completo *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="coming-soon-name"
                        name="nombre"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Carlos Mendoza"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="coming-soon-email" className="block text-xs font-medium text-white/80 mb-1.5">
                      Correo electrónico *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="coming-soon-email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="carlos@empresa.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Mandatory Privacy Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-white/80 select-none">
                    <input
                      type="checkbox"
                      name="aviso_privacidad_aceptado"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      required
                      className="mt-0.5 w-4 h-4 rounded border-white/30 bg-black/40 text-blue-500 focus:ring-blue-400 focus:ring-offset-0 shrink-0 cursor-pointer"
                    />
                    <span>
                      He leído y acepto el{' '}
                      <Link to="/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-medium">
                        Aviso de Privacidad
                      </Link>
                      . <span className="text-red-400">*</span>
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 px-6 rounded-xl bg-white hover:bg-white/90 text-black font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-white/20 focus-visible:ring-2 focus-visible:ring-blue-400 outline-none disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Procesando...</span>
                  ) : (
                    <>
                      <span>Quiero recibir novedades</span>
                      <Send className="w-4 h-4 text-black" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-white/40 text-center mt-3">
                  Respetamos tu privacidad conforme a la LFPDPPP. Puedes darte de baja en cualquier momento.
                </p>
              </form>
            )}
          </div>
        </m.div>
      </div>
    </section>
  );
};
