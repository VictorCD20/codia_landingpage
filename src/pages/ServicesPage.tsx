import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { SectionEyebrow } from '../components/Primitives';
import { ValidationSolutionsSection } from '../components/ValidationSolutionsSection';
import { Globe, Cpu, Zap, LayoutDashboard, ShoppingCart } from 'lucide-react';

const detailedServices = [
  {
    id: 'desarrollo-web',
    title: 'Desarrollo Web & Landing Pages',
    path: '/servicios/desarrollo-web',
    icon: Globe,
    color: '#00d2ff',
    badge: 'Disponible',
    description: 'Sitios web profesionales, landing pages comerciales y rediseños enfocados en captar clientes y generar confianza inmediata.',
    features: ['Diseño moderno responsivo', 'Optimización de velocidad', 'Integración con WhatsApp', 'Formularios interactivos'],
  },
  {
    id: 'sistemas-a-medida',
    title: 'Sistemas a Medida & Control Interno',
    path: '/servicios/sistemas-a-medida',
    icon: Cpu,
    color: '#3ecf8e',
    badge: 'Disponible',
    description: 'Herramientas web personalizadas para gestionar prospectos, pedidos, clientes y notas sin depender de plantillas rígidas.',
    features: ['Paneles de administración', 'Registro de clientes y ventas', 'Control de estatus', 'Multi-dispositivo'],
  },
  {
    id: 'automatizacion',
    title: 'Automatización de Procesos',
    path: '/servicios/automatizacion',
    icon: Zap,
    color: '#B600A8',
    badge: 'Disponible',
    description: 'Conexión de formularios, envío automático de correos, notificaciones por WhatsApp y flujos de trabajo eficientes.',
    features: ['Integración Resend / Email', 'Webhooks & Google Sheets', 'Confirmaciones automáticas', 'Ahorro de tareas manuales'],
  },
  {
    id: 'paneles-administrativos',
    title: 'Paneles Administrativos Avanzados',
    path: '#',
    icon: LayoutDashboard,
    color: '#f59e0b',
    badge: 'Expansión Futura',
    description: 'Dashboards analíticos completos y métricas operativas a medida para empresas en crecimiento.',
    features: ['Reportes visuales', 'Roles de usuario', 'Gestión de inventarios'],
  },
  {
    id: 'catalogos-digitales',
    title: 'Catálogos Digitales Interactivos',
    path: '#',
    icon: ShoppingCart,
    color: '#ff4b4b',
    badge: 'Expansión Futura',
    description: 'Muestra tus productos agrupados con pedidos directos a WhatsApp para ópticas, tiendas y comercio local.',
    features: ['Categorías inteligentes', 'Fichas de producto', 'Pedidos directos'],
  },
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-6 relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <SectionEyebrow label="Catálogo Completo" tag="Nuestros Servicios" />
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight heading-gradient">
          Soluciones Digitales Diseñadas para tu Negocio
        </h1>
        <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed font-light">
          Desde sitios web que generan ventas hasta herramientas de control interno. Elige la solución que tu empresa necesita para crecer hoy.
        </p>
      </div>

      {/* Grid of Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {detailedServices.map((svc, index) => {
          const Icon = svc.icon;
          const isAvailable = svc.badge === 'Disponible';
          return (
            <FadeIn key={svc.id} delay={index * 0.05}>
              <div className="liquid-glass rounded-3xl p-8 border border-white/10 flex flex-col justify-between h-full group hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10" style={{ color: svc.color }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border ${
                      isAvailable ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-white/5 text-white/40 border-white/10'
                    }`}>
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{svc.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                    {svc.description}
                  </p>

                  <ul className="space-y-2 mb-8 border-t border-white/5 pt-4">
                    {svc.features.map((feat) => (
                      <li key={feat} className="text-xs text-white/70 flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {isAvailable ? (
                  <Link
                    to={svc.path}
                    className="inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider py-3 px-5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white transition-all no-underline"
                  >
                    <span>Ver Detalles de Servicio</span>
                    <span>→</span>
                  </Link>
                ) : (
                  <span className="text-xs text-white/40 italic py-2">
                    Próximamente disponible
                  </span>
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Validation Section */}
      <ValidationSolutionsSection />

      {/* Call to Action */}
      <div className="mt-20 rounded-3xl border border-white/15 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-black p-10 text-center max-w-4xl mx-auto backdrop-blur-xl">
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">¿No estás seguro de cuál solución necesitas?</h2>
        <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
          Solicita un diagnóstico rápido sin compromiso. Analizamos tu operación y te aconsejamos el mejor camino.
        </p>
        <Link
          to="/contacto"
          className="inline-block rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-white/90 transition-all no-underline shadow-lg"
        >
          Solicitar Diagnóstico Gratuito
        </Link>
      </div>

    </div>
  );
};
