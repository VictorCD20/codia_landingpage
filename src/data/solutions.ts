export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  benefit: string;
  deliverables: string[];
  sectors: string;
  iconName: string;
  ctaText: string;
  ctaHref: string;
  ctaType: 'demo' | 'proposal' | 'assessment';
}

export const masterSolutions: SolutionItem[] = [
  {
    id: 'sitios-web',
    title: 'Sitios Web',
    category: 'Presencia digital',
    tagline: 'Una página clara y rápida para que tus clientes te encuentren y te contacten.',
    problem: 'No aparezco en Internet o dependo solo de redes sociales.',
    benefit: 'Sitio profesional, responsivo y con contacto directo a WhatsApp.',
    deliverables: [
      'Diseño profesional adaptado a tu marca',
      'Botón de contacto directo a WhatsApp',
      'Aparece en Google y carga rápido',
    ],
    sectors: 'Comercios locales, consultorios y profesionistas',
    iconName: 'Globe',
    ctaText: 'Ver detalles',
    ctaHref: '/servicios/desarrollo-web',
    ctaType: 'demo',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    category: 'Ventas en línea',
    tagline: 'Tu tienda en línea con catálogo, pedidos y cobro, abierta las 24 horas.',
    problem: 'Mis clientes no pueden ver ni comprar mis productos en línea.',
    benefit: 'Tienda con catálogo, carrito y recepción automática de pedidos.',
    deliverables: [
      'Catálogo con categorías y buscador',
      'Pedidos por WhatsApp o pago con tarjeta',
      'Administras productos y precios tú mismo',
    ],
    sectors: 'Boutiques, cafeterías, tiendas y negocios con envíos',
    iconName: 'ShoppingBag',
    ctaText: 'Ver detalles',
    ctaHref: '/productos/ecommerce',
    ctaType: 'demo',
  },
  {
    id: 'pos-inventario',
    title: 'Punto de Venta e Inventario',
    category: 'Operación diaria',
    tagline: 'Cobra rápido, controla tu caja y sabe siempre cuánto stock tienes.',
    problem: 'Pierdo horas en el corte de caja y no sé mi inventario real.',
    benefit: 'Ventas en menos de 30 segundos, corte de caja y stock automático.',
    deliverables: [
      'Cobros desde tablet, celular o PC',
      'Corte de caja y tickets digitales',
      'Alertas de stock mínimo a tu WhatsApp',
    ],
    sectors: 'Cafeterías, restaurantes, bares y tiendas',
    iconName: 'LayoutGrid',
    ctaText: 'Ver detalles',
    ctaHref: '/productos/pos-cafeteria',
    ctaType: 'demo',
  },
  {
    id: 'crm',
    title: 'CRM de Clientes',
    category: 'Relación con clientes',
    tagline: 'Ordena tus clientes y da seguimiento a cada venta sin perder ninguna.',
    problem: 'Mis clientes y seguimientos están en libretas, chats o Excel.',
    benefit: 'Un solo lugar con el historial y las pendientes de cada cliente.',
    deliverables: [
      'Registro de clientes y su historial',
      'Seguimiento de ventas y recordatorios',
      'Reportes simples de tu operación',
    ],
    sectors: 'Servicios, gimnasios, clínicas y negocios con clientes recurrentes',
    iconName: 'Users',
    ctaText: 'Ver detalles',
    ctaHref: '/productos/crm',
    ctaType: 'demo',
  },
  {
    id: 'automatizacion',
    title: 'Automatización y WhatsApp',
    category: 'Ahorro de tiempo',
    tagline: 'Que los mensajes repetitivos, avisos y registros se hagan solos.',
    problem: 'Mi equipo pierde horas contestando lo mismo y capturando datos a mano.',
    benefit: 'Confirmaciones, recordatorios y registros automáticos.',
    deliverables: [
      'Confirmación y recordatorio de citas o pedidos',
      'Avisos de estatus a tus clientes',
      'Datos enviados directo a tu hoja de cálculo',
    ],
    sectors: 'Servicios médicos, eventos, talleres y comercios con envíos',
    iconName: 'Zap',
    ctaText: 'Ver detalles',
    ctaHref: '/servicios/automatizacion',
    ctaType: 'assessment',
  },
  {
    id: 'software-medida',
    title: 'Software a la Medida',
    category: 'Hecho para ti',
    tagline: 'Sistemas y paneles privados diseñados exactamente para tu negocio.',
    problem: 'Mi negocio tiene reglas propias y los sistemas genéricos no encajan.',
    benefit: 'Sistema 100% tuyo, sin rentas mensuales obligatorias.',
    deliverables: [
      'Panel administrativo privado y seguro',
      'Usuarios, roles y varias sucursales',
      'Código y datos de tu propiedad',
    ],
    sectors: 'Clínicas, distribuidoras, cadenas y despachos',
    iconName: 'Database',
    ctaText: 'Ver detalles',
    ctaHref: '/servicios/sistemas-a-medida',
    ctaType: 'proposal',
  },
];

export const painPointsMatrix = [
  {
    pain: 'Todo lo llevo en libretas o Excel y se pierden datos.',
    consequence: 'Errores en cobranza, horas de recaptura manual y falta de control de ganancias.',
    solution: 'Software a Medida & Paneles Privados',
    icon: 'Database',
  },
  {
    pain: 'Pierdo mucho tiempo haciendo el corte de caja diario.',
    consequence: 'Diferencias de dinero, descontrol de turnos y cierre tardío del local.',
    solution: 'Punto de Venta (POS) Táctil & Caja',
    icon: 'LayoutGrid',
  },
  {
    pain: 'No tengo presencia digital ni catálogo para enviar.',
    consequence: 'Pérdida de ventas frente a la competencia y clientes que no encuentran tu menú.',
    solution: 'Sitios Web & Catálogos Online',
    icon: 'Globe',
  },
  {
    pain: 'Paso horas contestando los mismos mensajes en WhatsApp.',
    consequence: 'Clientes desatendidos que se van con otros y saturación del personal.',
    solution: 'Automatización & Notificaciones',
    icon: 'Zap',
  },
];
