import React from 'react';
import { Link } from 'react-router-dom';
import { SectionEyebrow } from '../components/Primitives';
import { TeamSection } from '../components/TeamSection';
import { FadeIn } from '../components/FadeIn';
import { ShieldCheck, MessageSquare, Zap, Cpu } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-6 relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <SectionEyebrow label="Conoce CODIA" tag="Sobre Nosotros" />
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight heading-gradient">
          Desarrollo de Software Transparente & Cercano
        </h1>
        <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed font-light">
          Somos un laboratorio y estudio de software enfocado en resolver problemas reales de negocios locales y empresas en crecimiento mediante tecnología bien construida.
        </p>
      </div>

      {/* Philosophy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <FadeIn delay={0.1}>
          <div className="liquid-glass rounded-2xl p-6 border border-white/10 h-full">
            <MessageSquare className="w-7 h-7 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Atención Directa</h3>
            <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
              Hablas directamente con el equipo de ingeniería que desarrolla tu proyecto, sin intermediarios ni ejecutivos de ventas confusos.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="liquid-glass rounded-2xl p-6 border border-white/10 h-full">
            <Zap className="w-7 h-7 text-emerald-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Soluciones Claras</h3>
            <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
              Explicamos cada funcionalidad en lenguaje sencillo y orientado a los beneficios de tu negocio.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="liquid-glass rounded-2xl p-6 border border-white/10 h-full">
            <Cpu className="w-7 h-7 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Código Eficiente</h3>
            <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
              Construimos sobre arquitecturas limpias, modernas y ligeras que no requieren mantenimiento complejo.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="liquid-glass rounded-2xl p-6 border border-white/10 h-full">
            <ShieldCheck className="w-7 h-7 text-amber-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Garantía de Ajustes</h3>
            <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
              Incluimos un periodo de revisión inicial para corregir y afinar detalles acordados tras la entrega.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Team Section Component */}
      <TeamSection />

      {/* Call to Action */}
      <div className="mt-16 text-center rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">¿Quieres trabajar con nuestro equipo?</h2>
        <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 font-light">
          Analizamos tu proyecto y preparamos una propuesta adaptada a tus necesidades y tiempos.
        </p>
        <Link
          to="/contacto"
          className="inline-block rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-white/90 transition-all no-underline"
        >
          Solicitar Propuesta de Proyecto
        </Link>
      </div>

    </div>
  );
};
