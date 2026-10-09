import React from 'react';
import { m } from 'motion/react';
import { SectionEyebrow } from './Primitives';
import { Users, Info, Cloud, Sparkles, ClipboardList, Wrench, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Atención directa',
    desc: 'Te comunicas directamente con el equipo técnico que diseña y desarrolla tus herramientas web.',
    icon: Users,
    color: '#00d2ff',
  },
  {
    title: 'Soluciones claras',
    desc: 'Te explicamos los beneficios y opciones sin tecnicismos complejos ni lenguaje corporativo confuso.',
    icon: Info,
    color: '#3ecf8e',
  },
  {
    title: 'Desarrollo en la nube',
    desc: 'Herramientas disponibles 24/7 en plataformas estables y de alta disponibilidad sin servidores costosos.',
    icon: Cloud,
    color: '#B600A8',
  },
  {
    title: 'Diseño moderno',
    desc: 'Creamos interfaces limpias, profesionales y con una excelente experiencia de usuario en móvil y web.',
    icon: Sparkles,
    color: '#f59e0b',
  },
  {
    title: 'Proceso consultivo',
    desc: 'Nos tomamos el tiempo para entender tus necesidades antes de sugerir cualquier desarrollo.',
    icon: ClipboardList,
    color: '#ff4b4b',
  },
  {
    title: 'Mantenimiento y mejora',
    desc: 'Te apoyamos en el seguimiento posterior para que tu sistema siga funcionando sin problemas.',
    icon: Wrench,
    color: '#00d2ff',
  },
  {
    title: 'Validación con negocios reales',
    desc: 'Probamos e iteramos nuestras herramientas con el feedback constante de comercios locales.',
    icon: CheckCircle2,
    color: '#3ecf8e',
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div className="liquid-glass liquid-glass-clear rounded-3xl px-6 py-8 sm:px-12 sm:py-10 max-w-4xl mx-auto mb-16 flex flex-col items-center text-center">
        <SectionEyebrow label="Por qué confiar en CODIA" tag="Nuestra Filosofía" />
        <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight heading-gradient" style={{ filter: 'url(#c3-noise)' }}>
          Por qué confiar en CODIA
        </h2>
<<<<<<< HEAD
        <div className="mt-4 max-w-2xl px-5 py-3.5 rounded-2xl bg-black/70 border border-white/15 backdrop-blur-md shadow-xl text-center">
          <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
            Estamos construyendo CODIA con método. No prometemos soluciones para todo. Escuchamos, diagnosticamos y desarrollamos herramientas digitales prácticas según la necesidad real de cada negocio.
          </p>
        </div>
=======
        <p className="mt-6 text-white/80 max-w-2xl text-sm md:text-base leading-relaxed">
          Estamos construyendo CODIA con método. No prometemos soluciones para todo. Escuchamos, diagnosticamos y desarrollamos herramientas digitales prácticas según la necesidad real de cada negocio.
        </p>
>>>>>>> 0ebba1bca87bc65112bc95af9c3ab0b0b94d668b
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="liquid-glass liquid-glass-clear flex gap-4 items-start p-5 rounded-2xl"
            >
              <div className="p-3 rounded-xl bg-white/10 border border-white/15 shrink-0" style={{ color: item.color }}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </m.div>
          );
        })}
      </div>
    </section>
  );
};
