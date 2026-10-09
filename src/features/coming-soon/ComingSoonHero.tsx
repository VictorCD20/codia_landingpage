import React from 'react';
import { useNavigate } from 'react-router-dom';
import { m } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Cpu } from 'lucide-react';
import { AppleButton } from '../../components/Primitives';
import { telemetry } from '../../tracking/tracker';

interface ComingSoonHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
}

export const ComingSoonHero: React.FC<ComingSoonHeroProps> = ({
  badge = 'NEXT GENERATION PLATFORM PREVIEW',
  title,
  subtitle,
  primaryCtaText,
  primaryCtaUrl,
  secondaryCtaText,
  secondaryCtaUrl,
}) => {
  const navigate = useNavigate();

  const handlePrimaryClick = () => {
    telemetry.trackCTAClick('ComingSoon_Hero_Primary', primaryCtaUrl);
    navigate(primaryCtaUrl);
  };

  const handleSecondaryClick = () => {
    telemetry.trackCTAClick('ComingSoon_Hero_Secondary', secondaryCtaUrl);
    navigate(secondaryCtaUrl);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Copy and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
              {badge}
            </span>
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
              {title}
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-white/70 max-w-2xl font-normal leading-relaxed mb-8"
          >
            {subtitle}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <div onClick={handlePrimaryClick} className="cursor-pointer">
              <AppleButton label={primaryCtaText} full />
            </div>

            {secondaryCtaText ? (
              <button
                onClick={handleSecondaryClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all border border-white/10 hover:border-white/20 focus-visible:ring-2 focus-visible:ring-blue-400 outline-none cursor-pointer"
              >
                <span>{secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-white/70" />
              </button>
            ) : null}
          </m.div>

          {/* Value Badges */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-white/60 text-xs font-medium"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Arquitectura Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Alta Automatización</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Escalabilidad Modular</span>
            </div>
          </m.div>
        </div>

        {/* Right Column: Dynamic Preview Mockup Card */}
        <m.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.02] p-6 backdrop-blur-xl shadow-2xl overflow-hidden group">
            {/* Glossy top highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            {/* Header of preview window */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[11px] font-mono tracking-wide text-white/40 uppercase">
                codia-platform.v2 // preview
              </span>
            </div>

            {/* Mockup dashboard elements */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                    CD
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Plataforma Unificada</p>
                    <p className="text-[11px] text-white/50">Ecosistema en construcción activa</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  BUILDING
                </span>
              </div>

              {/* Progress bar simulation */}
              <div className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/70 font-medium">Progreso del Ecosistema</span>
                  <span className="text-blue-400 font-semibold font-mono">EN FASE BETA</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <m.div
                    initial={{ width: '0%' }}
                    animate={{ width: '78%' }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="bg-gradient-to-r from-blue-500 to-sky-400 h-full rounded-full"
                  />
                </div>
              </div>

              {/* Grid of future module items in mockup */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] uppercase text-white/40 font-mono mb-1">Módulo</div>
                  <div className="text-xs font-medium text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Sistemas
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] uppercase text-white/40 font-mono mb-1">Módulo</div>
                  <div className="text-xs font-medium text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    Automatización
                  </div>
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};
