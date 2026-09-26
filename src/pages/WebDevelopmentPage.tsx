import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { CheckCircle2, Globe, Layout, ShieldCheck, Zap } from 'lucide-react';

export const WebDevelopmentPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 relative z-10">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-8">
        <Link to="/" className="hover:text-white transition-colors no-underline">Inicio</Link>
        <span>/</span>
        <Link to="/servicios" className="hover:text-white transition-colors no-underline">Servicios</Link>
        <span>/</span>
        <span className="text-blue-400">Desarrollo Web</span>
      </div>

      {/* Hero Header */}
      <FadeIn>
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Globe className="w-4 h-4" />
            <span>Presencia Digital Profesional</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight heading-gradient mb-6">
            Sitios Web & Landing Pages para Negocios
          </h1>
          <p className="text-white/70 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
            Diseñamos y desarrollamos sitios web modernos, rápidos y adaptados a dispositivos móviles. El objetivo principal es generar confianza, explicar con claridad qué hace tu negocio y facilitar que tus clientes te contacten.
          </p>
        </div>
      </FadeIn>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="liquid-glass rounded-2xl p-6 border border-white/10">
          <Zap className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Carga Ultrarrápida</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Optimizamos cada imagen y código para que tu sitio cargue de inmediato en cualquier celular o conexión.
          </p>
        </div>
        <div className="liquid-glass rounded-2xl p-6 border border-white/10">
          <Layout className="w-8 h-8 text-emerald-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Diseño Adaptativo</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Tu sitio lucirá impecable en teléfonos, tabletas y computadoras de escritorio.
          </p>
        </div>
        <div className="liquid-glass rounded-2xl p-6 border border-white/10">
          <ShieldCheck className="w-8 h-8 text-purple-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Confianza Comercial</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Diseñado para proyectar solidez, testimonios, ubicación exacta y atención profesional desde el primer segundo.
          </p>
        </div>
      </div>

      {/* What is included */}
      <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-white/10 mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">¿Qué incluye nuestro servicio de Desarrollo Web?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            'Estructura One-Page o Multipágina según la necesidad de tu empresa.',
            'Integración directa con botones inteligentes a WhatsApp y llamadas.',
            'Formulario de contacto conectado con tu correo electrónico y registro en Google Sheets.',
            'Optimización SEO básica en código (títulos, meta descripciones y etiquetas OpenGraph).',
            'Hosting confiable en n cloud con SSL (candado de seguridad HTTPS).',
            'Periodo inicial de revisión y ajustes posteriores a la entrega.',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-white/80 text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">
        <h3 className="text-2xl font-bold text-white mb-3">¿Listo para darle la cara digital a tu negocio?</h3>
        <p className="text-white/60 text-sm mb-8 max-w-lg mx-auto">
          Solicita un diagnóstico gratuito. Te asesoramos sobre la mejor estructura para tus clientes.
        </p>
        <Link
          to="/contacto"
          className="inline-block rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-white/90 transition-all no-underline"
        >
          Solicitar Propuesta Web
        </Link>
      </div>

    </div>
  );
};
