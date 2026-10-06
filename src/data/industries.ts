export interface Industry {
  id: string;
  title: string;
  status: 'available' | 'upcoming';
  statusLabel: string;
  badgeColor: 'emerald' | 'amber';
  headline: string;
  description: string;
  iconName: string;
}

export const masterIndustries: Industry[] = [
  {
    id: 'alimentos',
    title: 'Cafeterías & Restaurantes',
    status: 'available',
    statusLabel: 'Disponible hoy',
    badgeColor: 'emerald',
    headline: 'Comandas en cocina, cobros en mostrador y control de inventario por receta.',
    description: 'Solución 100% desarrollada con entrega en menos de 7 días. Incluye POS táctil, pantalla KDS de cocina y control de stock con alertas por WhatsApp.',
    iconName: 'Utensils',
  },
  {
    id: 'retail',
    title: 'Boutiques & Comercios Locales',
    status: 'upcoming',
    statusLabel: 'Próximamente',
    badgeColor: 'amber',
    headline: 'Catálogo online, control de tallas y colores, y lector de código de barras.',
    description: 'Actualmente estamos finalizando esta solución. Podemos ayudarte mediante una consultoría técnica para diseñar tu arquitectura personalizada.',
    iconName: 'Store',
  },
  {
    id: 'salud',
    title: 'Ópticas & Salud Visual',
    status: 'upcoming',
    statusLabel: 'Próximamente',
    badgeColor: 'amber',
    headline: 'Expediente clínico, recetas graduadas y citas de examen de la vista.',
    description: 'En desarrollo activo. Regístrate en la lista de espera prioritaria o agenda una asesoría personalizada con nuestro equipo.',
    iconName: 'Stethoscope',
  },
  {
    id: 'servicios',
    title: 'Servicios Profesionales & Despachos',
    status: 'upcoming',
    statusLabel: 'Próximamente',
    badgeColor: 'amber',
    headline: 'Cotizadores inteligentes, seguimiento de prospectos y paneles privados.',
    description: 'En desarrollo activo. Atendemos proyectos a la medida bajo consultoría y propuesta técnica formal.',
    iconName: 'Briefcase',
  },
];
