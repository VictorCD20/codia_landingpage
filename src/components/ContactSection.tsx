import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [solutionType, setSolutionType] = useState('Sitio web');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

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

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(() => {
      alert('Gracias por contactarnos. Revisaremos tu información y nos comunicaremos contigo para conocer mejor tu proyecto.');
      setName('');
      setBusinessName('');
      setEmail('');
      setPhone('');
      setSolutionType('Sitio web');
      setMessage('');
    })
    .catch(error => {
      console.error('Error!', error);
      alert('Hubo un error al enviar el mensaje.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contacto" className="relative z-20 overflow-hidden px-5 sm:px-8 md:px-10 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(61,129,227,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(182,0,168,0.16),transparent_30%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="relative mx-auto max-w-5xl rounded-[36px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        
        {/* Contact Info */}
        <div className="flex-1">
          <div>
            <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,80px)] leading-none mb-6">
              Diagnóstico
            </h2>
            <p className="text-[#D7E2EA] font-light leading-relaxed mb-10 text-lg opacity-80 max-w-xl">
              Cuéntanos qué necesitas y te ayudamos a definir si tu negocio requiere una página web, catálogo digital, sistema interno o automatización.
            </p>
            
            <div className="grid gap-4 text-[#D7E2EA] max-w-xl">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                <span className="block text-xs uppercase tracking-widest opacity-50 mb-1">Teléfono Principal</span>
                <span className="font-medium text-xl">+52 999 540 5419</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                <span className="block text-xs uppercase tracking-widest opacity-50 mb-1">WhatsApp / Ventas</span>
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-xl">+52 999 996 8380</span>
                  <span className="font-medium text-xl">+52 999 464 4181</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                <span className="block text-xs uppercase tracking-widest opacity-50 mb-1">Email</span>
                <span className="font-medium text-xl">codiasupport@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 rounded-[30px] sm:rounded-[40px] border border-white/10 bg-gradient-to-b from-white/7 to-white/3 p-6 sm:p-8 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-white/60 uppercase text-xs tracking-widest ml-4">Nombre</label>
              <input 
                type="text" 
                placeholder="Tu nombre completo"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="bg-transparent border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/60 uppercase text-xs tracking-widest ml-4">Nombre del negocio</label>
              <input 
                type="text" 
                placeholder="Nombre de tu negocio o marca"
                value={businessName}
                onChange={(event) => setBusinessName(event.target.value)}
                required
                className="bg-transparent border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/60 uppercase text-xs tracking-widest ml-4">WhatsApp</label>
              <input 
                type="tel" 
                placeholder="Tu número de WhatsApp"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
                className="bg-transparent border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/60 uppercase text-xs tracking-widest ml-4">Correo Electrónico</label>
              <input 
                type="email" 
                placeholder="ejemplo@empresa.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="bg-transparent border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/60 uppercase text-xs tracking-widest ml-4">Tipo de solución</label>
              <select
                value={solutionType}
                onChange={(event) => setSolutionType(event.target.value)}
                className="bg-transparent border border-white/20 rounded-full px-6 py-4 text-white focus:outline-none focus:border-white/60 transition-colors appearance-none cursor-pointer"
                style={{ colorScheme: 'dark' }}
              >
                <option value="Sitio web" className="bg-[#0C0C0C]">Sitio web</option>
                <option value="Catálogo digital" className="bg-[#0C0C0C]">Catálogo digital</option>
                <option value="Sistema interno" className="bg-[#0C0C0C]">Sistema interno</option>
                <option value="Automatización" className="bg-[#0C0C0C]">Automatización</option>
                <option value="No estoy seguro" className="bg-[#0C0C0C]">No estoy seguro</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/60 uppercase text-xs tracking-widest ml-4">Mensaje</label>
              <textarea 
                rows={4}
                placeholder="Cuéntanos más detalles sobre tu proyecto..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                className="bg-transparent border border-white/20 rounded-3xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="mt-4 rounded-full text-white font-medium uppercase tracking-[0.2em] px-8 py-4 outline-none w-full transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(123deg, #17011E 7%, #B600A8 38%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 8px 24px rgba(181, 1, 167, 0.2), 0px 0px 0px 1px rgba(255,255,255,0.55) inset, 4px 4px 12px #7721B1 inset',
                border: '1px solid rgba(255,255,255,0.6)'
              }}
            >
              {loading ? 'Enviando...' : 'Solicitar diagnóstico'}
            </button>
          </form>
        </div>
        </div>
      </div>
    </section>
  );
};
