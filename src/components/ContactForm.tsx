import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'motion/react';
import { siteConfig } from '../config/site';
import { submitContactDiagnostic } from '../services/contactService';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!privacyAccepted) {
      setErrorMsg('Debes leer y aceptar el Aviso de Privacidad para enviar tu mensaje.');
      return;
    }

    setLoading(true);
    const result = await submitContactDiagnostic({
      name,
      businessName: 'Contacto Directo',
      email,
      phone,
      solutionType: 'Consulta General',
      message,
      privacyAccepted,
      marketingAccepted
    });
    setLoading(false);

    if (result.success) {
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setPrivacyAccepted(false);
      setMarketingAccepted(false);
    } else {
      setErrorMsg(result.error || 'Ocurrió un error. Inténtalo nuevamente.');
    }
  };

  return (
    <section id="contacto" className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <m.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl backdrop-blur-2xl bg-black/40"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 heading-gradient">
              Hablemos
            </h2>
            <p className="text-white/60 text-base leading-[1.6] mb-10 max-w-sm">
              ¿Tienes un proyecto en mente? Contáctanos y descubre cómo podemos ayudarte a transformar tu negocio.
            </p>
            
            <div className="flex flex-col gap-6 text-white">
              <div>
                <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Teléfono Principal</span>
                <a href={siteConfig.contact.phoneUrl} className="font-medium text-xl text-white hover:text-blue-400 transition-colors no-underline">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">WhatsApp / Ventas</span>
                <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-xl text-white hover:text-emerald-400 transition-colors no-underline">
                  {siteConfig.contact.whatsapp}
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Email</span>
                <a href={siteConfig.contact.emailUrl} className="font-medium text-xl text-brand hover:underline">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-xs sm:text-sm text-white/70 mb-6">
                  Nos pondremos en contacto contigo a la brevedad.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-full border border-white/20 text-xs text-white hover:bg-white/10"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-4 text-left">
                {errorMsg && (
                  <div role="alert" className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs font-medium text-center">
                    {errorMsg}
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="direct-nombre" className="text-white/60 uppercase text-[10px] tracking-widest ml-2 font-semibold">Nombre *</label>
                  <input 
                    id="direct-nombre"
                    name="nombre"
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre completo"
                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="direct-email" className="text-white/60 uppercase text-[10px] tracking-widest ml-2 font-semibold">Correo Electrónico *</label>
                  <input 
                    id="direct-email"
                    name="email"
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@empresa.com"
                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="direct-phone" className="text-white/60 uppercase text-[10px] tracking-widest ml-2 font-semibold">Teléfono *</label>
                  <input 
                    id="direct-phone"
                    name="telefono"
                    type="tel" 
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Tu número de teléfono"
                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="direct-mensaje" className="text-white/60 uppercase text-[10px] tracking-widest ml-2 font-semibold">Mensaje *</label>
                  <textarea 
                    id="direct-mensaje"
                    name="mensaje"
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors resize-none text-sm"
                  ></textarea>
                </div>
                
                {/* Consent Checkboxes */}
                <div className="flex flex-col gap-2 pt-1">
                  <label className="flex items-start gap-2 cursor-pointer text-xs text-white/80 select-none">
                    <input
                      type="checkbox"
                      name="aviso_privacidad_aceptado"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      required
                      className="mt-0.5 w-4 h-4 rounded border-white/30 bg-black/40 text-blue-500 focus:ring-blue-400 shrink-0 cursor-pointer"
                    />
                    <span>
                      He leído y acepto el{' '}
                      <Link to="/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-medium">
                        Aviso de Privacidad
                      </Link>
                      . <span className="text-red-400">*</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer text-xs text-white/60 select-none">
                    <input
                      type="checkbox"
                      name="consentimiento_marketing"
                      checked={marketingAccepted}
                      onChange={(e) => setMarketingAccepted(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-white/30 bg-black/40 text-blue-500 focus:ring-blue-400 shrink-0 cursor-pointer"
                    />
                    <span>
                      Deseo recibir información sobre soluciones y novedades de CODIA.
                    </span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="mt-2 w-full rounded-xl bg-white text-black font-semibold px-6 py-3.5 transition-all hover:bg-white/90 active:scale-[0.98] btn-slide text-xs uppercase tracking-wider cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            )}
          </div>

        </div>
      </m.div>
    </section>
  );
};
