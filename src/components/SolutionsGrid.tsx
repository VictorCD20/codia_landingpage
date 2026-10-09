import React from 'react';
import { m } from 'motion/react';
import { SectionEyebrow } from './Primitives';
import { Globe, LayoutGrid, Zap, Database, SearchCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    icon: Globe,
    title: 'Sitios Web & Tiendas Online',
    category: 'Presencia & Ventas',
    description: 'Páginas web rápidas, optimizadas para móviles y diseñadas para convertir visitas en clientes reales y cobros directos.',
    deliverables: ['E-Commerce integrado', 'Catálogo interactivo', 'SEO y velocidad de carga'],
    route: '/servicios/desarrollo-web',
  },
  {
    icon: LayoutGrid,
    title: 'Puntos de Venta (POS) & Stock',
    category: 'Operación Diaria',
    description: 'Control de caja para tablets y computadoras, cobros rápidos, control de existencias y reportes diarios automáticos.',
    deliverables: ['Arqueo de caja rápido', 'Control de mermas', 'Acceso desde cualquier lugar'],
    route: '/servicios/sistemas-a-medida',
  },
  {
    icon: Zap,
    title: 'Automatización de Procesos',
    category: 'Eficiencia & Tiempo',
    description: 'Elimina tareas repetitivas conectando WhatsApp, notificaciones a clientes, bases de datos y confirmaciones de pago.',
    deliverables: ['Alertas por WhatsApp', 'Recordatorios automáticos', 'Sincronización de pedidos'],
    route: '/servicios/automatizacion',
  },
  {
    icon: Database,
    title: 'Software a la Medida',
    category: 'Escalabilidad',
    description: 'Plataformas diseñadas exactamente con las reglas de tu operación, sin funciones sobrantes ni limitaciones de plantillas.',
    deliverables: ['Paneles de control privados', 'Permisos por usuario', 'Código 100% de tu propiedad'],
    route: '/servicios/sistemas-a-medida',
  },
  {
    icon: SearchCheck,
    title: 'Diagnóstico & Consultoría Digital',
    category: 'Estrategia Previa',
    description: 'Evaluamos el flujo actual de tu negocio antes de programar una sola línea de código para recomendarte solo lo que necesitas.',
    deliverables: ['Mapa de procesos', 'Recomendación de arquitectura', 'Retorno de inversión claro'],
    route: '#diagnostico',
    isAnchor: true,
  },
];

export const SolutionsGrid: React.FC = () => {
  return (
    <section id="soluciones" className="max-w-6xl mx-auto px-6 py-20 relative z-10">
      <div className="liquid-glass liquid-glass-clear rounded-3xl px-6 py-8 sm:px-12 sm:py-10 max-w-4xl mx-auto flex flex-col items-center text-center mb-16">
        <SectionEyebrow label="Nuestras Soluciones" tag="Enfocadas en Resultados" />
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          Herramientas construidas para{' '}
          <span className="text-[#00d2ff]">hacer crecer tu operación.</span>
        </h2>
<<<<<<< HEAD
        <div className="mt-4 max-w-2xl px-5 py-3.5 rounded-2xl bg-black/70 border border-white/15 backdrop-blur-md shadow-xl text-center">
          <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
            No te vendemos tecnología por venderte tecnología. Desarrollamos soluciones directas que resuelven cuellos de botella específicos.
          </p>
        </div>
=======
        <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl font-light">
          No te vendemos tecnología por venderte tecnología. Desarrollamos soluciones directas que resuelven cuellos de botella específicos.
        </p>
>>>>>>> 0ebba1bca87bc65112bc95af9c3ab0b0b94d668b
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((sol, index) => {
          const Icon = sol.icon;
          const isSpan = index === 3 || index === 4;
          return (
            <m.div
              key={sol.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`surface-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group hover:border-[#00d2ff]/40 transition-all duration-300 ${
                isSpan ? 'md:col-span-1 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#00d2ff]/10 border border-[#00d2ff]/20 flex items-center justify-center text-[#00d2ff] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                    {sol.category}
                  </span>
                </div>

                <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-[#A4F4FD] transition-colors">
                  {sol.title}
                </h3>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                  {sol.description}
                </p>

                <div className="space-y-2 mb-6">
                  {sol.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e]"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                {sol.isAnchor ? (
                  <a
                    href={sol.route}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00d2ff] hover:text-white transition-colors"
                  >
                    <span>Iniciar Evaluación</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    to={sol.route}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00d2ff] hover:text-white transition-colors"
                  >
                    <span>Ver detalles y alcance</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </m.div>
          );
        })}
      </div>
    </section>
  );
};
