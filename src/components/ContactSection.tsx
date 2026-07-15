import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = `Hola, quiero mandar una propuesta acerca de una idea o proyecto que tengo.\n\nNombre: ${name || 'No proporcionado'}\nCorreo: ${email || 'No proporcionado'}\nMensaje: ${message || 'No proporcionado'}`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=9995405419&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
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
            <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,100px)] leading-none mb-6">
              Hablemos
            </h2>
            <p className="text-[#D7E2EA] font-light leading-relaxed mb-10 text-lg opacity-80 max-w-xl">
              ¿Tienes un proyecto en mente? Contáctanos y descubre cómo podemos ayudarte a transformar tu negocio con la arquitectura de software correcta.
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
                className="bg-transparent border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/60 uppercase text-xs tracking-widest ml-4">Mensaje</label>
              <textarea 
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="bg-transparent border border-white/20 rounded-3xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="mt-4 rounded-full text-white font-medium uppercase tracking-[0.2em] px-8 py-4 outline-none w-full transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99]"
              style={{
                background: 'linear-gradient(123deg, #17011E 7%, #B600A8 38%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 8px 24px rgba(181, 1, 167, 0.2), 0px 0px 0px 1px rgba(255,255,255,0.55) inset, 4px 4px 12px #7721B1 inset',
                border: '1px solid rgba(255,255,255,0.6)'
              }}
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        </div>
      </div>
    </section>
  );
};
