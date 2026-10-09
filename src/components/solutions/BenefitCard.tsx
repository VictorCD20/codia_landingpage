import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Code, Zap, Award, Headphones, TrendingUp } from 'lucide-react';

interface WhyCodiaItem {
  iconName: string;
  title: string;
  description: string;
}

const whyCodiaItems: WhyCodiaItem[] = [
  {
    iconName: 'Code',
    title: 'Código y Datos 100% Propios',
    description: 'La tecnología le pertenece a tu negocio. No dependes de plataformas que te retienen tus clientes o aumentan sus precios sin previo aviso.',
  },
  {
    iconName: 'ShieldCheck',
    title: 'Cero Rentas Mensuales Forzosas',
    description: 'Eliminamos las suscripciones perpetuas innecesarias. Pagas por la solución que utilizas y adquieres el control total de tu sistema.',
  },
  {
    iconName: 'TrendingUp',
    title: 'Arquitectura Modular y Escalable',
    description: 'Comienza hoy con un punto de venta o catálogo web, y agrega más módulos o sucursales conforme crezca tu operación sin rehacer nada.',
  },
  {
    iconName: 'Zap',
    title: 'Puesta en Marcha en < 7 Días',
    description: 'Entregamos soluciones probadas y listas para operar. Sin proyectos eternos de meses que nunca terminan de implementarse.',
  },
  {
    iconName: 'Award',
    title: 'Capacitación en Vivo a tu Equipo',
    description: 'Nos aseguramos de que tus cajeros, meseros o personal administrativo dominen el software desde el primer turno.',
  },
  {
    iconName: 'Headphones',
    title: 'Soporte Técnico Local Directo',
    description: 'Hablas directamente por WhatsApp con los desarrolladores del sistema para resolver cualquier ajuste con agilidad.',
  },
];

const icons: Record<string, React.FC<{ className?: string }>> = {
  Code,
  ShieldCheck,
  TrendingUp,
  Zap,
  Award,
  Headphones,
};

export const BenefitCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {whyCodiaItems.map((item, index) => {
        const Icon = icons[item.iconName] || ShieldCheck;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="surface-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#00d2ff]/30 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00d2ff]/10 border border-[#00d2ff]/20 flex items-center justify-center text-[#00d2ff] mb-5 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-white text-lg font-bold mb-2 group-hover:text-[#A4F4FD] transition-colors">
                {item.title}
              </h4>
              <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
