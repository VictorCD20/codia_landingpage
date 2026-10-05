import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Rocket, TrendingUp } from 'lucide-react';

interface ComingSoonWhyProps {
  title?: string;
  subtitle?: string;
  bullets?: Array<{ title: string; text: string }>;
}

export const ComingSoonWhy: React.FC<ComingSoonWhyProps> = ({
  title = '¿Por qué estamos desarrollándolo?',
  subtitle = 'No se trata de una simple pausa o un sitio en construcción. CODIA está evolucionando para brindar a empresas un ecosistema tecnológico verdaderamente integral y autónomo.',
  bullets = [
    {
      title: 'Evolución sin interrupciones',
      text: 'Buscamos que cada nueva herramienta se integre perfectamente con la infraestructura web y los sistemas internos de nuestros clientes.',
    },
    {
      title: 'Mayor orden y control operativo',
      text: 'Diseñamos cada función para reducir tareas manuales, centralizar información y ofrecer claridad en la toma de decisiones.',
    },
    {
      title: 'Preparados para escalar',
      text: 'Desarrollamos tecnología con visión de futuro, combinando inteligencia artificial, automatización y seguridad desde el día uno.',
    },
  ],
}) => {
  const icons = [Layers, TrendingUp, Rocket];

  return (
    <section className="py-16 md:py-24 px-6 relative bg-white/[0.015] border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Header */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold"
            >
              VISIÓN ESTRATÉGICA
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2 mb-6"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-white/70 leading-relaxed font-normal"
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-5">
            {bullets.map((bullet, idx) => {
              const IconComp = icons[idx % icons.length];
              return (
                <motion.div
                  key={bullet.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 flex items-start gap-5 hover:border-white/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {bullet.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed font-normal">
                      {bullet.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
