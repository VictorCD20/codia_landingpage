import React from 'react';
import { motion } from 'framer-motion';
import { ecosystemModules, type EcosystemModule, type ModuleStatus } from './comingSoon.config';

interface ComingSoonModulesProps {
  currentModuleKey?: string;
}

const getStatusBadgeStyle = (status: ModuleStatus) => {
  switch (status) {
    case 'En desarrollo':
      return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
    case 'Planeado':
      return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
    case 'Próximamente':
      return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    case 'Futuro':
      return 'bg-white/10 text-white/60 border-white/20';
    default:
      return 'bg-white/10 text-white/70 border-white/20';
  }
};

export const ComingSoonModules: React.FC<ComingSoonModulesProps> = ({ currentModuleKey }) => {
  return (
    <section className="py-16 md:py-24 px-6 relative" id="modulos">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            ¿Qué estamos preparando?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-white/70 leading-relaxed"
          >
            Un ecosistema integral de soluciones creadas para ordenar la operación de tu empresa, 
            potenciar la captura de clientes y acelerar el crecimiento con tecnología moderna.
          </motion.p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemModules.map((moduleItem: EcosystemModule, index: number) => {
            const IconComponent = moduleItem.icon;
            const isCurrent = currentModuleKey && (
              currentModuleKey.toLowerCase().includes(moduleItem.id.toLowerCase()) ||
              moduleItem.slug.includes(currentModuleKey.toLowerCase())
            );

            return (
              <motion.div
                key={moduleItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
                  isCurrent
                    ? 'bg-gradient-to-b from-blue-900/40 via-black/80 to-black/60 border-blue-500/60 shadow-lg shadow-blue-500/10'
                    : 'bg-gradient-to-b from-white/[0.07] to-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.09]'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Status */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                      isCurrent
                        ? 'bg-blue-500/30 text-blue-300 border border-blue-400/40'
                        : 'bg-white/10 text-white/90 border border-white/10'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md ${getStatusBadgeStyle(moduleItem.status)}`}>
                      ✓ {moduleItem.status}
                    </span>
                  </div>

                  {/* Module Name */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {moduleItem.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/70 leading-relaxed font-normal">
                    {moduleItem.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/50 font-mono">
                  <span>MODULO CODIA</span>
                  <span className="text-blue-400/80">PRÓXIMAMENTE</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
