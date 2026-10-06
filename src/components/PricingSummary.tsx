import React from 'react';
import { motion } from 'motion/react';
import { SectionEyebrow } from './Primitives';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Esencial',
    tagline: 'Start',
    idealFor: 'Para negocios que inician su digitalización y necesitan canal de venta web.',
    features: [
      'Sitio Web Profesional o Catálogo Online',
      'Integración con pedidos directos a WhatsApp',
      'Optimizado 100% para celulares y tablets',
      'Hosting de alta velocidad y dominio propio',
      'Soporte técnico y capacitación inicial',
    ],
    highlight: false,
    cta: 'Solicitar una propuesta',
    target: '#diagnostico',
  },
  {
    name: 'Avanzado',
    tagline: 'Business',
    popular: true,
    idealFor: 'Para empresas en crecimiento que requieren control total de ventas e inventario.',
    features: [
      'Todo lo del Plan Esencial',
      'Sistema POS para cobros en mostrador',
      'Control de inventario con alertas de stock',
      'Dashboard con métricas de ventas y ganancias',
      'Pasarela de cobros con tarjeta (Stripe / MP)',
      'Notificaciones automáticas a clientes',
    ],
    highlight: true,
    cta: 'Solicitar una propuesta',
    target: '#diagnostico',
  },
  {
    name: 'Evolución',
    tagline: 'Enterprise',
    idealFor: 'Arquitectura completa y software a la medida con múltiples sucursales.',
    features: [
      'Desarrollo 100% a la medida de tu operación',
      'Multi-sucursal y control de roles/usuarios',
      'Automatización de procesos pesados & API',
      'Infraestructura en la nube escalable',
      'Soporte prioritario 24/7 y SLA garantizado',
      'Capacitación continua para todo el personal',
    ],
    highlight: false,
    cta: 'Hablar con un asesor',
    target: '#agenda',
  },
];

export const PricingSummary: React.FC = () => {
  return (
    <section id="planes" className="max-w-6xl mx-auto px-6 py-20 relative z-10">
      <div className="flex flex-col items-center text-center mb-16">
        <SectionEyebrow label="Inversión Transparente" tag="Planes & Escalabilidad" />
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          Elige el nivel de solución que{' '}
          <span className="text-[#00d2ff]">tu negocio necesita hoy.</span>
        </h2>
        <p className="mt-4 text-white/60 text-base md:text-lg max-w-2xl font-light">
          Sin costos ocultos ni letras pequeñas. Inicia con lo indispensable y escala módulos conforme tu operación crezca.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`liquid-glass rounded-3xl p-6 sm:p-8 border flex flex-col justify-between relative transition-all duration-300 ${
              plan.highlight
                ? 'border-[#00d2ff]/50 bg-gradient-to-b from-[#00d2ff]/10 via-black/40 to-black/60 shadow-2xl shadow-[#00d2ff]/10'
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3" />
                <span>Más Solicitado</span>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#00d2ff]">
                  {plan.tagline}
                </span>
              </div>

              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                {plan.name}
              </h3>

              <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed mb-6 min-h-[40px]">
                {plan.idealFor}
              </p>

              <div className="h-px w-full bg-white/10 mb-6"></div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#00d2ff]/15 flex items-center justify-center text-[#00d2ff] shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-white/80 text-xs sm:text-sm font-light leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={plan.target}
                className={`w-full text-center block py-3 px-4 rounded-full text-sm font-medium transition-all ${
                  plan.highlight
                    ? 'bg-[#00d2ff] text-[#091020] font-semibold hover:bg-[#A4F4FD] shadow-lg shadow-[#00d2ff]/20'
                    : 'border border-white/20 text-white hover:bg-white/5'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/planes"
          className="inline-flex items-center gap-2 text-sm text-[#00d2ff] hover:text-white transition-colors group"
        >
          <span>¿Quieres comparar módulos en detalle? Ver comparativa completa de planes</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
