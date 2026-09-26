import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { CheckCircle2, Cpu, Database, Users, Shield } from 'lucide-react';

export const CustomSystemsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 relative z-10">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-8">
        <Link to="/" className="hover:text-white transition-colors no-underline">Inicio</Link>
        <span>/</span>
        <Link to="/servicios" className="hover:text-white transition-colors no-underline">Servicios</Link>
        <span>/</span>
        <span className="text-emerald-400">Sistemas a Medida</span>
      </div>

      {/* Hero Header */}
      <FadeIn>
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Cpu className="w-4 h-4" />
            <span>Orden Operativo & Control</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight heading-gradient mb-6">
            Sistemas Internos & Paneles a Medida
          </h1>
          <p className="text-white/70 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
            Desarrollamos herramientas sencillas en la nube para registrar clientes, solicitudes, notas del día o seguimiento de trabajos. Todo adaptado al flujo exacto de tu negocio sin complicaciones.
          </p>
        </div>
      </FadeIn>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="liquid-glass rounded-2xl p-6 border border-white/10">
          <Database className="w-8 h-8 text-emerald-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Centralización de Datos</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Olvídate de libretas o archivos de Excel traspapelados. Toda la información disponible en un solo lugar.
          </p>
        </div>
        <div className="liquid-glass rounded-2xl p-6 border border-white/10">
          <Users className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">CRM para Negocios Locales</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Mantenimiento de historial de clientes, teléfonos, acuerdos y estatus de atención actualizado en tiempo real.
          </p>
        </div>
        <div className="liquid-glass rounded-2xl p-6 border border-white/10">
          <Shield className="w-8 h-8 text-purple-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Acceso Seguro</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Ingreso privado mediante contraseña para ti y tu equipo desde teléfonos, laptops o tabletas.
          </p>
        </div>
      </div>

      {/* Typical Use Cases */}
      <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-white/10 mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">¿Qué tipo de sistemas desarrollamos?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            'Sistema de registro y estatus de solicitudes para negocios de servicio.',
            'CRM ligero para control de prospectos y notas de seguimiento.',
            'Paneles de administración de catálogo y precios.',
            'Punto de venta y registro básico de ventas del día.',
            'Plataforma para consulta de estatus de servicios o entregas para tus clientes.',
            'Sistemas de captura de solicitudes de facturación asistida.',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-white/80 text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">
        <h3 className="text-2xl font-bold text-white mb-3">¿Tu negocio necesita ordenar su operación?</h3>
        <p className="text-white/60 text-sm mb-8 max-w-lg mx-auto">
          Cuéntanos tu proceso actual y te ayudaremos a diseñar un panel simple a la medida.
        </p>
        <Link
          to="/contacto"
          className="inline-block rounded-full bg-emerald-400 text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-emerald-300 transition-all no-underline"
        >
          Solicitar Diagnóstico de Sistema
        </Link>
      </div>

    </div>
  );
};
