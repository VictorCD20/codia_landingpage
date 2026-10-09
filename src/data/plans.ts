export interface PlanTier {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  status: 'confirmed' | 'validation' | 'custom';
  statusLabel?: string;
  idealFor: string;
  features: string[];
  note?: string;
  highlight: boolean;
  ctaText: string;
  ctaTarget: string;
}

export interface PlanFeatureRow {
  category: string;
  name: string;
  basico: boolean | string;
  intermedio: boolean | string;
  completo: boolean | string;
  personalizado: boolean | string;
  status?: 'confirmed' | 'validation';
}

export const masterPlans: PlanTier[] = [
  {
    id: 'basico',
    name: 'Plan Básico',
    tagline: 'Presencia & Ventas',
    status: 'confirmed',
    idealFor: 'Para negocios que buscan proyectar profesionalismo, mostrar su catálogo y recibir pedidos digitales.',
    features: [
      'Sitio Web Profesional o Catálogo Online responsivo',
      'Recepción de pedidos directos a WhatsApp',
      'Optimizado 100% para celulares, tablets y computadoras',
      'Dominio propio, hosting de alta velocidad y certificado SSL',
      'Capacitación inicial y soporte de lanzamiento',
    ],
    note: 'Tiempo de entrega estimado: 1 a 2 semanas.',
    highlight: false,
    ctaText: 'Solicitar Plan Básico',
    ctaTarget: '/#diagnostico',
  },
  {
    id: 'intermedio',
    name: 'Plan Intermedio',
    tagline: 'Punto de Venta & Caja',
    status: 'confirmed',
    idealFor: 'Para negocios locales que necesitan ordenar sus cobros en mostrador, inventario y cortes de turno.',
    features: [
      'Punto de Venta (POS) para tablet, laptop o PC',
      'Control de inventario en tiempo real con alertas de stock',
      'Arqueo de caja y registro de entradas y salidas',
      'Módulo de comandas / despacho para cocina o barra',
      'Reporte diario de ventas e ingresos',
    ],
    note: 'Solución validada y lista para implementar.',
    highlight: false,
    ctaText: 'Solicitar Plan Intermedio',
    ctaTarget: '/#diagnostico',
  },
  {
    id: 'completo',
    name: 'Plan Completo',
    tagline: 'Gestión Integral & Web',
    popular: true,
    badge: 'Más Recomendado',
    status: 'confirmed',
    idealFor: 'Para empresas que buscan sincronizar sus ventas en mostrador con su canal web en un solo sistema.',
    features: [
      'Todo lo incluido en Plan Básico y Plan Intermedio',
      'Sincronización de catálogo web con stock del punto de venta',
      'Dashboard gerencial con métricas y margen operativo',
      'Alertas automáticas de reposición por WhatsApp',
      'Soporte técnico prioritario y capacitación integral',
    ],
    note: 'El ecosistema completo para operar con máxima eficiencia.',
    highlight: true,
    ctaText: 'Solicitar Plan Completo',
    ctaTarget: '/#diagnostico',
  },
  {
    id: 'personalizado',
    name: 'Plan Personalizado',
    tagline: 'A la Medida',
    status: 'custom',
    statusLabel: 'A la Medida',
    idealFor: 'Para operaciones con flujos únicos, requerimientos especializados o múltiples sucursales.',
    features: [
      'Arquitectura de software desarrollada 100% a la medida',
      'Código fuente y base de datos de tu entera propiedad',
      'Multi-sucursal con roles y permisos avanzados por usuario',
      'Integraciones con APIs, webhooks y herramientas externas',
      'Acompañamiento técnico directo y evolución continua',
    ],
    note: 'Evaluamos tu flujo operativo para diseñar la solución ideal.',
    highlight: false,
    ctaText: 'Hablar con un asesor',
    ctaTarget: '/#contacto',
  },
];

export const comparisonFeatures: PlanFeatureRow[] = [
  // Presencia & Ventas Online
  { category: 'Presencia & Ventas Online', name: 'Sitio Web Responsivo de Alta Conversión', basico: true, intermedio: false, completo: true, personalizado: true, status: 'confirmed' },
  { category: 'Presencia & Ventas Online', name: 'Catálogo de Productos con Buscador', basico: true, intermedio: false, completo: true, personalizado: true, status: 'confirmed' },
  { category: 'Presencia & Ventas Online', name: 'Recepción de Pedidos directos a WhatsApp', basico: true, intermedio: false, completo: true, personalizado: true, status: 'confirmed' },
  { category: 'Presencia & Ventas Online', name: 'Dominio Propio y Hosting de Alta Velocidad', basico: true, intermedio: false, completo: true, personalizado: true, status: 'confirmed' },
  { category: 'Presencia & Ventas Online', name: 'Pasarela de Cobros con Tarjeta', basico: false, intermedio: false, completo: 'Adaptable', personalizado: true, status: 'validation' },

  // Control Operativo & POS
  { category: 'Control Operativo & Caja', name: 'Punto de Venta (POS) para Tablet / PC', basico: false, intermedio: true, completo: true, personalizado: true, status: 'confirmed' },
  { category: 'Control Operativo & Caja', name: 'Arqueo de Caja y Cierre de Turno', basico: false, intermedio: true, completo: true, personalizado: true, status: 'confirmed' },
  { category: 'Control Operativo & Caja', name: 'Control de Inventario y Alertas de Stock', basico: false, intermedio: true, completo: true, personalizado: true, status: 'confirmed' },
  { category: 'Control Operativo & Caja', name: 'Módulo de Comandas / Cocina (Alimentos)', basico: false, intermedio: true, completo: true, personalizado: true, status: 'confirmed' },
  { category: 'Control Operativo & Caja', name: 'Multi-sucursal y Roles Avanzados', basico: false, intermedio: false, completo: 'Opcional', personalizado: true, status: 'validation' },

  // Automatización & Reportes
  { category: 'Automatización & Métricas', name: 'Alertas Automáticas de Stock a WhatsApp', basico: false, intermedio: false, completo: true, personalizado: true, status: 'confirmed' },
  { category: 'Automatización & Métricas', name: 'Dashboard de Ventas y Métricas Clave', basico: 'Básico', intermedio: 'Caja & Stock', completo: 'Completo', personalizado: 'Personalizado', status: 'confirmed' },
  { category: 'Automatización & Métricas', name: 'Exportación de Reportes Financieros', basico: false, intermedio: true, completo: true, personalizado: true, status: 'confirmed' },
  { category: 'Automatización & Métricas', name: 'Integración y Módulos a la Medida', basico: false, intermedio: false, completo: false, personalizado: true, status: 'validation' },

  // Propiedad & Soporte
  { category: 'Propiedad & Garantía', name: 'Código y Datos 100% de tu Propiedad', basico: true, intermedio: true, completo: true, personalizado: true, status: 'confirmed' },
  { category: 'Propiedad & Garantía', name: 'Cero rentas mensuales forzosas', basico: true, intermedio: true, completo: true, personalizado: true, status: 'confirmed' },
  { category: 'Propiedad & Garantía', name: 'Capacitación al Personal', basico: '1 Sesión', intermedio: 'Operativa', completo: 'Completa', personalizado: 'Continua', status: 'confirmed' },
  { category: 'Propiedad & Garantía', name: 'Acompañamiento y Garantía de Entrega', basico: 'Incluido', intermedio: 'Incluido', completo: 'Prioritario', personalizado: 'Dedicado', status: 'confirmed' },
];

export const plansNotice = 'Planes en proceso de validación. Solicita una propuesta adaptada a tu negocio.';
