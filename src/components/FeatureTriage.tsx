import React from 'react';
import { motion } from 'motion/react';
import { SectionEyebrow } from './Primitives';

export const FeatureTriage: React.FC = () => {
  return (
    <section id="soluciones" className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <SectionEyebrow label="Problemas que resolvemos" tag="Negocios locales" />
          
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            ¿Tu negocio pierde oportunidades por no tener una presencia digital clara?
          </h2>
          
          <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
            Muchos negocios tienen buenos productos o servicios, pero dependen solo de redes sociales, WhatsApp o recomendaciones. Eso puede hacer que la información esté desordenada, que los clientes no encuentren fácilmente lo que ofrecen y que se pierdan oportunidades de venta o contacto.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {['Pérdida de ventas', 'Información desorganizada', 'Procesos lentos', 'Imagen poco profesional'].map(chip => (
              <span key={chip} className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column (Cards) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="liquid-glass rounded-2xl p-5"
        >
          <div className="text-xs font-medium text-white/60 mb-4 px-1">
            Situación Actual vs Solución Digital
          </div>

          <div className="space-y-3">
            {/* Solo uso redes */}
            <div className="liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold" style={{ color: '#00d2ff' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00d2ff' }} />
                Solo uso Facebook o Instagram
              </div>
              <div className="text-sm text-white/80 pl-4 space-y-1">
                <div>Sitio web profesional con tu propia marca y control.</div>
              </div>
            </div>

            {/* Productos desordenados */}
            <div className="liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold" style={{ color: '#A4F4FD' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A4F4FD' }} />
                Mis productos están desordenados
              </div>
              <div className="text-sm text-white/80 pl-4 space-y-1">
                <div>Catálogo digital claro, visual y fácil de consultar.</div>
              </div>
            </div>

            {/* Sin seguimiento */}
            <div className="liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold" style={{ color: '#f59e0b' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
                Me escriben pero no doy seguimiento
              </div>
              <div className="text-sm text-white/80 pl-4 space-y-1">
                <div>Panel de solicitudes para organizar y atender tus leads.</div>
              </div>
            </div>

            {/* Todo manual */}
            <div className="liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold" style={{ color: '#525252' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#525252' }} />
                Hago todo manual
              </div>
              <div className="text-sm text-white/80 pl-4">
                Automatización simple para ahorrar tiempo y evitar errores.
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
