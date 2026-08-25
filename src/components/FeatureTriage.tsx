import React from 'react';
import { motion } from 'motion/react';
import { SectionEyebrow } from './Primitives';

export const FeatureTriage: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <SectionEyebrow label="Problemas que resolvemos" tag="Puntos de dolor" />
          
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            ¿Identificas estos obstáculos en tu negocio?
          </h2>
          
          <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
            Manejar un negocio local implica resolver detalles constantemente. Ayudamos a eliminar el desorden operativo y la falta de claridad digital mediante herramientas web prácticas y personalizadas.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {['Redes insuficientes', 'Productos desordenados', 'Mensajes perdidos', 'Tareas manuales'].map(chip => (
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
            Situación Actual → Solución Digital
          </div>

          <div className="space-y-3">
            {/* 1 */}
            <div className="liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold" style={{ color: '#00d2ff' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00d2ff' }} />
                Dependo solo de redes sociales
              </div>
              <div className="text-sm text-white/80 pl-4">
                Sitio web profesional
              </div>
            </div>

            {/* 2 */}
            <div className="liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold" style={{ color: '#3ecf8e' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#3ecf8e' }} />
                Mis productos están desordenados
              </div>
              <div className="text-sm text-white/80 pl-4">
                Catálogo digital
              </div>
            </div>

            {/* 3 */}
            <div className="liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold" style={{ color: '#B600A8' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B600A8' }} />
                Pierdo mensajes o prospectos
              </div>
              <div className="text-sm text-white/80 pl-4">
                Panel de solicitudes / CRM ligero
              </div>
            </div>

            {/* 4 */}
            <div className="liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold" style={{ color: '#f59e0b' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
                Hago tareas repetitivas
              </div>
              <div className="text-sm text-white/80 pl-4">
                Automatización básica
              </div>
            </div>

            {/* 5 */}
            <div className="liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold" style={{ color: '#ff4b4b' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ff4b4b' }} />
                No sé qué solución necesito
              </div>
              <div className="text-sm text-white/80 pl-4">
                Diagnóstico digital
              </div>
            </div>

            {/* 6 */}
            <div className="liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold" style={{ color: '#a3a3a3' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#a3a3a3' }} />
                Mi negocio se ve poco profesional
              </div>
              <div className="text-sm text-white/80 pl-4">
                Rediseño web
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
