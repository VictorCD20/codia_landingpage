import React from 'react';
import { motion } from 'motion/react';
import { SectionEyebrow } from './Primitives';
import { 
  Users, 
  FileText, 
  FolderHeart, 
  Home, 
  ShoppingBag, 
  Eye, 
  Share2, 
  Calculator, 
  DollarSign, 
  ClipboardCheck 
} from 'lucide-react';

const validationItems = [
  {
    title: 'CRM ligero para negocios locales',
    desc: 'Organiza contactos, registra conversaciones básicas y da seguimiento a prospectos sin sistemas complejos.',
    icon: Users,
    color: '#00d2ff',
  },
  {
    title: 'Sistema de solicitudes',
    desc: 'Centraliza pedidos de información, cotizaciones o servicios entrantes desde tu web en un panel ordenado.',
    icon: FileText,
    color: '#3ecf8e',
  },
  {
    title: 'Catálogo administrable',
    desc: 'Modifica precios, añade fotos y gestiona la disponibilidad de tus productos de forma rápida y sencilla.',
    icon: FolderHeart,
    color: '#B600A8',
  },
  {
    title: 'Sistema para inmobiliarias',
    desc: 'Publica tus propiedades en renta o venta de manera atractiva con filtros y contacto directo para interesados.',
    icon: Home,
    color: '#f59e0b',
  },
  {
    title: 'Sistema para tiendas',
    desc: 'Muestra tus productos agrupados por categorías con carrito conceptual y pedidos automáticos vía WhatsApp.',
    icon: ShoppingBag,
    color: '#ff4b4b',
  },
  {
    title: 'Panel de seguimiento',
    desc: 'Permite a tus clientes consultar el estatus de sus servicios, reparaciones o entregas en tiempo real.',
    icon: ClipboardCheck,
    color: '#a3a3a3',
  },
  {
    title: 'Automatización de publicaciones',
    desc: 'Envía información de nuevos productos o novedades a tus canales de comunicación de manera programada.',
    icon: Share2,
    color: '#00d2ff',
  },
  {
    title: 'Punto de venta básico',
    desc: 'Registra tus ventas diarias y mantén el control de tus ingresos desde cualquier dispositivo en la nube.',
    icon: DollarSign,
    color: '#3ecf8e',
  },
  {
    title: 'Facturación asistida',
    desc: 'Simplifica la recolección de datos fiscales de tus clientes mediante formularios web automatizados.',
    icon: Eye,
    color: '#B600A8',
  },
  {
    title: 'Calculadora de cotizaciones',
    desc: 'Permite a tus clientes calcular precios estimados de tus servicios al instante según sus necesidades.',
    icon: Calculator,
    color: '#f59e0b',
  },
];

export const ValidationSolutionsSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div className="mb-16 flex flex-col items-center text-center">
        <SectionEyebrow label="Validación" tag="En Desarrollo" />
        <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight heading-gradient" style={{ filter: 'url(#c3-noise)' }}>
          Soluciones que estamos validando
        </h2>
        <p className="mt-4 text-white/60 max-w-2xl text-sm md:text-base leading-relaxed">
          Estamos probando soluciones con negocios reales para convertir problemas comunes en herramientas simples, funcionales y escalables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {validationItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 group transition-all duration-300 min-h-[190px]"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white/10 transition-colors" style={{ color: item.color }}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white leading-snug">{item.title}</h3>
                </div>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
