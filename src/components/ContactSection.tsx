import React from 'react';
import { FadeIn } from './FadeIn';

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 relative z-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        
        {/* Contact Info */}
        <div className="flex-1">
          <FadeIn delay={0.1} y={20}>
            <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,100px)] leading-none mb-6">
              Hablemos
            </h2>
            <p className="text-[#D7E2EA] font-light leading-relaxed mb-10 text-lg opacity-80">
              ¿Tienes un proyecto en mente? Contáctanos y descubre cómo podemos ayudarte a transformar tu negocio con la arquitectura de software correcta.
            </p>
            
            <div className="flex flex-col gap-6 text-[#D7E2EA]">
              <div>
                <span className="block text-xs uppercase tracking-widest opacity-50 mb-1">Teléfono Principal</span>
                <span className="font-medium text-xl">+52 (55) 1234-5678</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest opacity-50 mb-1">WhatsApp / Ventas</span>
                <span className="font-medium text-xl">+52 (55) 8765-4321</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest opacity-50 mb-1">Email</span>
                <span className="font-medium text-xl">contacto@codia.com</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white/5 border border-white/10 rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 backdrop-blur-md">
          <FadeIn delay={0.3} y={30}>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-white/60 uppercase text-xs tracking-widest ml-4">Nombre</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre completo"
                  className="bg-transparent border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 uppercase text-xs tracking-widest ml-4">Correo Electrónico</label>
                <input 
                  type="email" 
                  placeholder="ejemplo@empresa.com"
                  className="bg-transparent border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 uppercase text-xs tracking-widest ml-4">Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="bg-transparent border border-white/20 rounded-3xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="mt-4 rounded-full text-white font-medium uppercase tracking-widest px-8 py-4 outline-none w-full hover:scale-105 transition-transform"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                  border: '2px solid white'
                }}
              >
                Enviar Mensaje
              </button>
            </form>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
