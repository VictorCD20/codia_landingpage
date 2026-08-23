import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [solutionType, setSolutionType] = useState('Sitio web');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'email_error' | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw_0gV0-h6SZceJ65CW9uucl27kb6-dqMNS8Cc2k60gtl01UhYAB0uLt1Tvgva56zYx/exec';

    const formData = {
      nombre: name,
      negocio: businessName,
      correo: email,
      telefono: phone,
      solucion: solutionType,
      mensaje: message
    };

    // 1. Save data to Google Sheets (CRM backup)
    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(() => {
      // 2. Send email via serverless function (Resend API)
      return fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          business_name: businessName,
          email,
          phone,
          solution_type: solutionType,
          message
        })
      });
    })
    .then(response => {
      if (!response.ok) {
        // Succeeded in Google Sheets but failed Resend
        setSubmitStatus('email_error');
      } else {
        // Everything worked perfectly
        setSubmitStatus('success');
      }
      setIsSubmitted(true);
      setName('');
      setBusinessName('');
      setEmail('');
      setPhone('');
      setSolutionType('Sitio web');
      setMessage('');
    })
    .catch(error => {
      console.error('Error!', error);
      alert('Hubo un error al procesar tu mensaje. Por favor, inténtalo de nuevo.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contacto" className="relative z-20 overflow-hidden px-5 sm:px-8 md:px-10 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(61,129,227,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="relative mx-auto max-w-5xl rounded-[36px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-center">
        
        {/* Contact Info */}
        <div className="flex-1">
          <div>
            <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,80px)] leading-none mb-6">
              Diagnóstico
            </h2>
            <p className="text-[#D7E2EA] font-light leading-relaxed mb-10 text-lg opacity-80 max-w-xl">
              Cuéntanos qué necesitas y te ayudamos a definir si tu negocio requiere una página web, catálogo digital, sistema interno o automatización.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#D7E2EA] max-w-xl">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 flex flex-col justify-center">
                <span className="block text-xs uppercase tracking-widest opacity-50 mb-1">Teléfono Principal</span>
                <span className="font-medium text-base sm:text-[17px] md:text-lg lg:text-xl">+52 999 540 5419</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 flex flex-col justify-center">
                <span className="block text-xs uppercase tracking-widest opacity-50 mb-1">Email</span>
                <span className="font-medium text-xs sm:text-sm md:text-base lg:text-[18px] break-all">codiasupport@gmail.com</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 flex flex-col justify-center">
                <span className="block text-xs uppercase tracking-widest opacity-50 mb-1">WhatsApp / Ventas 1</span>
                <span className="font-medium text-base sm:text-[17px] md:text-lg lg:text-xl">+52 999 996 8380</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 flex flex-col justify-center">
                <span className="block text-xs uppercase tracking-widest opacity-50 mb-1">WhatsApp / Ventas 2</span>
                <span className="font-medium text-base sm:text-[17px] md:text-lg lg:text-xl">+52 999 464 4181</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 rounded-[30px] sm:rounded-[40px] border border-white/10 bg-gradient-to-b from-white/7 to-white/3 p-6 sm:p-8 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md flex flex-col justify-center min-h-[480px] transition-all duration-300">
          {isSubmitted ? (
            <div className="flex flex-col items-center text-center p-4">
              {submitStatus === 'success' ? (
                <>
                  <div className="w-16 h-16 rounded-full bg-[#3ecf8e]/10 border border-[#3ecf8e]/30 flex items-center justify-center mb-6 text-[#3ecf8e]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">¡Mensaje Enviado!</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                    Gracias por contactarnos. Recibimos tu solicitud y te enviaremos una confirmación por correo.
                  </p>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6 text-amber-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Solicitud Recibida</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                    Recibimos tu solicitud, pero hubo un problema al enviar el correo de confirmación. Nos pondremos en contacto contigo pronto.
                  </p>
                </>
              )}
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setSubmitStatus(null);
                }}
                className="mt-8 rounded-full border border-white/15 px-6 py-2.5 text-xs uppercase tracking-wider text-white/80 hover:bg-white/5 transition-colors cursor-pointer"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <label className="text-white/60 uppercase text-[10px] tracking-widest ml-4 font-medium">Nombre</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre completo"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  className="bg-transparent border border-white/20 rounded-full px-5 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors text-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-white/60 uppercase text-[10px] tracking-widest ml-4 font-medium">Nombre del negocio</label>
                <input 
                  type="text" 
                  placeholder="Nombre de tu negocio o marca"
                  value={businessName}
                  onChange={(event) => setBusinessName(event.target.value)}
                  required
                  className="bg-transparent border border-white/20 rounded-full px-5 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-white/60 uppercase text-[10px] tracking-widest ml-4 font-medium">WhatsApp</label>
                <input 
                  type="tel" 
                  placeholder="Tu número de WhatsApp (con lada)"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                  className="bg-transparent border border-white/20 rounded-full px-5 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors text-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-white/60 uppercase text-[10px] tracking-widest ml-4 font-medium">Correo Electrónico</label>
                <input 
                  type="email" 
                  placeholder="ejemplo@empresa.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="bg-transparent border border-white/20 rounded-full px-5 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-white/60 uppercase text-[10px] tracking-widest ml-4 font-medium">Tipo de solución</label>
                <div className="relative">
                  <select
                    value={solutionType}
                    onChange={(event) => setSolutionType(event.target.value)}
                    className="w-full bg-[#0C0C0C]/80 border border-white/20 rounded-full px-5 py-3 text-white focus:outline-none focus:border-white/60 transition-colors appearance-none cursor-pointer text-sm"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="Sitio web">Sitio web</option>
                    <option value="Catálogo digital">Catálogo digital</option>
                    <option value="Sistema interno">Sistema interno</option>
                    <option value="Automatización">Automatización</option>
                    <option value="No estoy seguro">No estoy seguro</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 text-[10px]">▼</div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-white/60 uppercase text-[10px] tracking-widest ml-4 font-medium">Mensaje</label>
                <textarea 
                  rows={3}
                  placeholder="Detalles adicionales de tu proyecto..."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                  className="bg-transparent border border-white/20 rounded-2xl px-5 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors resize-none text-sm"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="mt-2 rounded-full text-black font-semibold uppercase tracking-[0.2em] px-8 py-3.5 outline-none w-full transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed text-xs cursor-pointer btn-slide"
              >
                {loading ? 'Enviando...' : 'Solicitar diagnóstico'}
              </button>
            </form>
          )}
        </div>
        </div>
      </div>
    </section>
  );
};
