import React from 'react';
import { useNavigate } from 'react-router-dom';
import { m } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { quickAccessServices, type QuickService } from './comingSoon.config';
import { telemetry } from '../../tracking/tracker';

export const ComingSoonCTA: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceClick = (title: string, link: string) => {
    telemetry.trackCTAClick(`ComingSoon_QuickService_${title}`, link);
    navigate(link);
  };

  return (
    <section className="py-16 md:py-24 px-6 relative bg-white/[0.01] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <m.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold"
          >
            SOLUCIONES DISPONIBLES HOY
          </m.span>
          <m.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4"
          >
            Mientras tanto...
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-white/70 leading-relaxed"
          >
            Explora nuestros servicios activos de ingeniería y transformación digital. 
            Puedes comenzar hoy mismo a estructurar y acelerar tu empresa con nuestro equipo.
          </m.p>
        </div>

        {/* Quick Access Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickAccessServices.map((service: QuickService, idx: number) => {
            const IconComponent = service.icon;

            return (
              <m.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => handleServiceClick(service.title, service.link)}
                className="group relative rounded-3xl p-6 bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-blue-400/50 hover:bg-white/[0.09] transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors pt-4 border-t border-white/5">
                  <span>{service.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
