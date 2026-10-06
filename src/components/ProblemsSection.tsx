import React from 'react';
import { motion } from 'motion/react';
import { SectionEyebrow } from './Primitives';
import { FileSpreadsheet, PackageX, MessageSquareWarning, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';

const problems = [
  {
    icon: FileSpreadsheet,
    pain: 'Llevo ventas y gastos en libretas o notas de WhatsApp',
    cause: 'Pérdida de notas, cuentas que no cuadran y desorden al final del día.',
    solution: 'Sistema de Gestión Centralizado',
    result: 'Registro instantáneo de cada movimiento con historial seguro y accesible.',
    tag: 'Control Financiero',
  },
  {
    icon: PackageX,
    pain: 'Se agota el producto sin previo aviso y pierdo clientes',
    cause: 'Falta de alertas de stock mínimo y conteos manuales tediosos.',
    solution: 'Control de Inventario & POS en Tiempo Real',
    result: 'Alertas automáticas de reposición y stock sincronizado con cada venta.',
    tag: 'Cero Mermas',
  },
  {
    icon: MessageSquareWarning,
    pain: 'Atiendo manualmente cada pedido por chat uno por uno',
    cause: 'Horas perdidas enviando fotos y datos bancarios repetitivos.',
    solution: 'Catálogo Online con Pedidos Automatizados',
    result: 'Tus clientes arman su orden y te llega el pedido listo con pago verificado.',
    tag: 'Ahorro de Tiempo',
  },
  {
    icon: BarChart3,
    pain: 'No tengo claridad del margen y la ganancia real de hoy',
    cause: 'Decisiones a ciegas sin datos reales de tus productos más rentables.',
    solution: 'Dashboard con Métricas y Reportes Clave',
    result: 'Gráficas simples de ingresos, productos estrella y horas pico en 1 clic.',
    tag: 'Toma de Decisiones',
  },
];

export const ProblemsSection: React.FC = () => {
  return (
    <section id="problemas" className="max-w-6xl mx-auto px-6 py-20 relative z-10">
      <div className="flex flex-col items-center text-center mb-16">
        <SectionEyebrow label="¿Te identificas con esto?" tag="Problemas Reales" />
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          Operar un negocio no debería significar{' '}
          <span className="text-[#00d2ff]">vivir en el desorden.</span>
        </h2>
        <p className="mt-4 text-white/60 text-base md:text-lg max-w-2xl font-light">
          La mayoría de los negocios no necesitan software genérico y complicado. Necesitan herramientas prácticas que resuelvan su problema específico.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group hover:border-[#00d2ff]/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                    {item.tag}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-red-400/90 text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span>El problema diario</span>
                  </div>
                  <h3 className="text-white text-lg sm:text-xl font-medium mb-2">
                    {item.pain}
                  </h3>
                  <p className="text-white/50 text-sm font-light">
                    {item.cause}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 bg-white/[0.02] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8 rounded-b-3xl">
                <div className="text-[#3ecf8e] text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>La solución CODIA</span>
                </div>
                <h4 className="text-white font-medium text-base mb-1">
                  {item.solution}
                </h4>
                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                  {item.result}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <a 
          href="#soluciones"
          className="inline-flex items-center gap-2 text-sm text-[#00d2ff] hover:text-[#A4F4FD] transition-colors group"
        >
          <span>Conoce cómo estructuramos estas soluciones</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
