export interface ProductModule {
  name: string;
  available: boolean;
}

export type ProductStatus = 'available' | 'development' | 'coming-soon';

export interface ProductItem {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  benefits: string[];
  modules: ProductModule[];
  status: ProductStatus;
  statusLabel: string;
  demoAvailable: boolean;
  ctaType: 'demo' | 'info' | 'coming-soon';
  iconName: string;
  category: string;
  sectors: string[];
  screenshotsAvailable: boolean;
}

export const products: ProductItem[] = [
  {
    slug: 'pos-cafeteria',
    name: 'POS Cafetería & Restaurante',
    tagline: 'Control completo de caja, cocina y stock desde una sola pantalla.',
    problem: 'Cierres de caja lentos, comandas perdidas e inventario que no coincide con las ventas del día.',
    benefits: [
      'Cobros en menos de 30 segundos desde tablet o PC',
      'Pantalla de cocina sincronizada en tiempo real',
      'Descuento automático de insumos por receta',
      'Corte de caja y resumen en minutos',
      'Alertas de stock mínimo directo a WhatsApp',
    ],
    modules: [
      { name: 'Punto de venta táctil', available: true },
      { name: 'Módulo de cocina (KDS)', available: true },
      { name: 'Control de inventario', available: true },
      { name: 'Corte de caja y turnos', available: true },
      { name: 'Tickets digitales y térmicos', available: true },
      { name: 'Reportes de ventas', available: true },
    ],
    status: 'available',
    statusLabel: 'Disponible ahora',
    demoAvailable: true,
    ctaType: 'demo',
    iconName: 'LayoutGrid',
    category: 'Punto de Venta & Inventario',
    sectors: ['Cafeterías', 'Restaurantes', 'Bares', 'Fondas'],
    screenshotsAvailable: false,
  },
  {
    slug: 'ecommerce',
    name: 'Tienda en Línea & Catálogo Digital',
    tagline: 'Vende desde tu sitio web con pagos integrados y pedidos a WhatsApp.',
    problem: 'No tener presencia digital ni forma de recibir pedidos fuera del mostrador sin depender de marketplaces con altas comisiones.',
    benefits: [
      'Catálogo con búsqueda, categorías y variantes',
      'Checkout con Stripe o Mercado Pago integrado',
      'Pedidos directos a WhatsApp con resumen automático',
      'Panel de administración de productos propio',
      'Diseño adaptado a tu marca y negocio',
    ],
    modules: [
      { name: 'Catálogo interactivo', available: true },
      { name: 'Pasarela de pagos', available: true },
      { name: 'Gestión de pedidos', available: true },
      { name: 'Panel de administración', available: true },
      { name: 'Módulo de envíos', available: false },
      { name: 'Programa de lealtad', available: false },
    ],
    status: 'development',
    statusLabel: 'En desarrollo',
    demoAvailable: false,
    ctaType: 'info',
    iconName: 'ShoppingBag',
    category: 'E-Commerce & Ventas Online',
    sectors: ['Boutiques', 'Comercios locales', 'Artesanos', 'Servicios'],
    screenshotsAvailable: false,
  },
  {
    slug: 'delivery',
    name: 'Sistema de Delivery & Pedidos',
    tagline: 'Gestiona pedidos a domicilio sin pagar comisiones a plataformas externas.',
    problem: 'Pagar comisiones altas a apps de delivery o gestionar pedidos por WhatsApp sin seguimiento de rutas ni estados.',
    benefits: [
      'Panel propio de pedidos sin comisiones externas',
      'Asignación de repartidores y seguimiento',
      'Notificaciones automáticas de estado al cliente',
      'Zonas de cobertura configurables',
    ],
    modules: [
      { name: 'Panel de pedidos', available: false },
      { name: 'Seguimiento de repartidores', available: false },
      { name: 'Notificaciones al cliente', available: false },
      { name: 'Reportes de entregas', available: false },
    ],
    status: 'development',
    statusLabel: 'En desarrollo',
    demoAvailable: false,
    ctaType: 'info',
    iconName: 'Truck',
    category: 'Logística & Delivery',
    sectors: ['Restaurantes', 'Tiendas de conveniencia', 'Farmacias'],
    screenshotsAvailable: false,
  },
  {
    slug: 'crm',
    name: 'CRM Inteligente',
    tagline: 'Centraliza clientes, seguimientos y oportunidades de venta en un solo lugar.',
    problem: 'Perder prospectos por falta de seguimiento y no saber en qué etapa está cada oportunidad de negocio.',
    benefits: [
      'Pipeline visual de ventas por etapas',
      'Historial completo de cada cliente',
      'Recordatorios automáticos de seguimiento',
      'Integración con WhatsApp y correo',
    ],
    modules: [
      { name: 'Gestión de contactos', available: false },
      { name: 'Pipeline de ventas', available: false },
      { name: 'Automatización de seguimiento', available: false },
      { name: 'Reportes de conversión', available: false },
    ],
    status: 'coming-soon',
    statusLabel: 'Próximamente',
    demoAvailable: false,
    ctaType: 'coming-soon',
    iconName: 'Users',
    category: 'CRM & Ventas',
    sectors: ['Servicios profesionales', 'Agencias', 'Distribuidoras'],
    screenshotsAvailable: false,
  },
  {
    slug: 'gimnasios',
    name: 'Gestión de Gimnasios & Estudios',
    tagline: 'Membresías, asistencia y cobros automatizados para espacios fitness.',
    problem: 'Llevar membresías en hojas de cálculo, cobrar manualmente y no saber quién asiste o cuándo vence una membresía.',
    benefits: [
      'Control de acceso y asistencia automático',
      'Gestión de membresías y renovaciones',
      'Cobros y recordatorios automáticos',
      'Estadísticas de asistencia y retención',
    ],
    modules: [
      { name: 'Control de membresías', available: false },
      { name: 'Control de acceso', available: false },
      { name: 'Cobros y notificaciones', available: false },
      { name: 'Estadísticas de asistencia', available: false },
    ],
    status: 'coming-soon',
    statusLabel: 'Próximamente',
    demoAvailable: false,
    ctaType: 'coming-soon',
    iconName: 'Dumbbell',
    category: 'Gestión Especializada',
    sectors: ['Gimnasios', 'Estudios de yoga', 'Centros deportivos'],
    screenshotsAvailable: false,
  },
];
