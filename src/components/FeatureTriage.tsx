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
          <SectionEyebrow label="Arquitectura" tag="Escalable" />
          
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
            Optimiza tus procesos <br/> con Inteligencia Artificial.
          </h2>
          
          <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
            Integramos modelos inteligentes para optimizar tareas repetitivas y potenciar la productividad. Enfócate en hacer crecer tu negocio, nosotros nos encargamos del código.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {['Automatización', 'Machine Learning', 'Data Analytics', 'APIs Robustas'].map(chip => (
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
            Módulos del Sistema CODIA
          </div>

          <div className="space-y-3">
            {/* Priority */}
            <div className="liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold" style={{ color: '#00d2ff' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00d2ff' }} />
                Soluciones E-Commerce (3)
              </div>
              <div className="text-sm text-white/80 pl-4 space-y-1">
                <div>Tiendas en línea escalables</div>
                <div>Pasarelas de pago integradas</div>
              </div>
            </div>

            {/* Follow-up */}
            <div className="liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold" style={{ color: '#A4F4FD' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A4F4FD' }} />
                Punto de Venta POS (5)
              </div>
              <div className="text-sm text-white/60 pl-4 space-y-1">
                <div>Sistemas para retail y restaurantes</div>
                <div>Analíticas en tiempo real</div>
              </div>
            </div>

            {/* Updates */}
            <div className="liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold" style={{ color: '#f59e0b' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
                Desarrollo Móvil (8)
              </div>
              <div className="text-sm text-white/50 pl-4 space-y-1">
                <div>Apps nativas y multiplataforma</div>
                <div>Geolocalización y tracking</div>
              </div>
            </div>

            {/* Archived */}
            <div className="liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold" style={{ color: '#525252' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#525252' }} />
                Integraciones (12)
              </div>
              <div className="text-sm text-white/40 pl-4">
                CRMs · ERPs · APIs de terceros
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
