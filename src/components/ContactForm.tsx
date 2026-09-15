import React from 'react';
import { motion } from 'motion/react';

export const ContactForm: React.FC = () => {
  return (
    <section id="contacto" className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <motion.div 
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
                <a href="tel:+5219995370947" className="font-medium text-xl text-white hover:text-blue-400 transition-colors no-underline">
                  +52 1 999 537 0947
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">WhatsApp / Ventas</span>
                <a href="https://wa.me/5219995370947" target="_blank" rel="noopener noreferrer" className="font-medium text-xl text-white hover:text-emerald-400 transition-colors no-underline">
                  +52 1 999 537 0947
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Email</span>
                <a href="mailto:codiasupport@gmail.com" className="font-medium text-xl text-brand hover:underline">
                  codiasupport@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-white/60 uppercase text-xs tracking-widest ml-2 font-semibold">Nombre</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre completo"
                  className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand/60 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 uppercase text-xs tracking-widest ml-2 font-semibold">Correo Electrónico</label>
                <input 
                  type="email" 
                  placeholder="ejemplo@empresa.com"
                  className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand/60 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 uppercase text-xs tracking-widest ml-2 font-semibold">Teléfono</label>
                <input 
                  type="tel" 
                  placeholder="Tu número de teléfono"
                  className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand/60 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 uppercase text-xs tracking-widest ml-2 font-semibold">Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand/60 transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="mt-2 w-full rounded-xl bg-white text-black font-semibold px-6 py-4 transition-all hover:bg-white/90 active:scale-[0.98] btn-slide"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
