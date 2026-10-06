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
    title: 'Sitios Web & Tiendas Online',
    category: 'Presencia & Ventas Online',
    tagline: 'Presencia digital de alta velocidad que convierte visitas en pedidos reales.',
    problem: 'No aparezco en Internet, dependo exclusivamente de redes sociales o mis clientes no pueden explorar mis productos con claridad.',
    benefit: 'Página web interactiva y responsiva con catálogo de productos, botón de compra directa a WhatsApp o pasarela de pagos con tarjeta 24/7.',
    deliverables: [
      'Catálogo interactivo con buscador y categorías',
      'Recepción automática de pedidos por WhatsApp',
      'Pasarela de cobro integrada (Stripe / Mercado Pago)',
      'Optimización SEO local y carga ultrarrápida (< 1.5s)',
      'Dominio propio, certificado SSL y hosting de alta velocidad',
    ],
    sectors: 'Cafeterías, Boutiques, Consultorios, Profesionistas y Comercios Locales',
    iconName: 'Globe',
    ctaText: 'Agendar una demostración',
    ctaHref: '/#demo',
    ctaType: 'demo',
  },
  {
    id: 'pos-inventario',
    title: 'Punto de Venta (POS) & Control de Stock',
    category: 'Operación Diaria & Caja',
    tagline: 'Cobros ágiles, comandas sincronizadas y control exacto de existencias.',
    problem: 'Pierdo horas haciendo cortes de caja al final del día, no tengo visibilidad del inventario real y hay mermas de insumos no registradas.',
    benefit: 'Punto de venta táctil para tablet o PC que registra ventas en menos de 30 segundos, envía comandas a cocina y descuenta insumos de forma automática por receta.',
    deliverables: [
      'Punto de venta táctil multidispositivo (Tablet / PC / Celular)',
      'Módulo de comandas y pantalla de cocina (KDS)',
      'Descuento automático de stock por receta o variante',
      'Alertas de stock mínimo directo a WhatsApp',
      'Corte de caja, turnos y tickets térmicos o digitales',
    ],
    sectors: 'Cafeterías, Restaurantes, Bares, Minisúpers y Tiendas de Retail',
    iconName: 'LayoutGrid',
    ctaText: 'Agendar una demostración',
    ctaHref: '/#demo',
    ctaType: 'demo',
  },
  {
    id: 'software-medida',
    title: 'Software a la Medida & Paneles Privados',
    category: 'Escalabilidad & Arquitectura',
    tagline: 'Plataformas hechas a la medida exacta de tus operaciones sin funciones sobrantes.',
    problem: 'Mi negocio tiene reglas comerciales únicas y las plataformas estándar del mercado son rígidas, costosas o me cobran rentas mensuales forzosas.',
    benefit: 'Desarrollamos arquitectura de software 100% personalizada y de tu propiedad. Sin mensualidades obligatorias y con la libertad de escalar según crezca tu operación.',
    deliverables: [
      'Panel de control administrativo privado y seguro',
      'Código fuente y base de datos 100% propios',
      'Módulos multi-sucursal y gestión de roles/permisos',
      'Integraciones con APIs externas, bases de datos y webhooks',
      'SLA de soporte técnico dedicado y garantía de evolución',
    ],
    sectors: 'Clínicas, Distribuidoras, Cadenas Comerciales y Despachos',
    iconName: 'Database',
    ctaText: 'Solicitar una propuesta',
    ctaHref: '/#diagnostico',
    ctaType: 'proposal',
  },
  {
    id: 'automatizacion',
    title: 'Automatización de Procesos & WhatsApp',
    category: 'Eficiencia & Productividad',
    tagline: 'Elimina tareas repetitivas y conecta tus canales de atención y cobro.',
    problem: 'Mi equipo pierde hasta 15 horas a la semana contestando los mismos mensajes, recordando citas a mano o recapturando información en Excel.',
    benefit: 'Conectamos tus canales de WhatsApp, notificaciones a clientes, confirmación de pedidos y registros en bases de datos sin intervención manual.',
    deliverables: [
      'Confirmación y recordatorio automático de citas por WhatsApp',
      'Alertas de estatus de orden y envío en tiempo real',
      'Sincronización bidireccional con Google Sheets y CRM',
      'Disparadores automáticos tras confirmación de pago',
      'Ahorro comprobado de hasta 15 horas semanales de personal',
    ],
    sectors: 'Eventos, Servicios Médicos, Talleres y Comercios con Envíos',
    iconName: 'Zap',
    ctaText: 'Evaluar mi negocio',
    ctaHref: '/#diagnostico',
    ctaType: 'assessment',
  },
  {
    id: 'consultoria-diagnostico',
    title: 'Diagnóstico & Consultoría Estratégica',
    category: 'Estrategia Previa',
    tagline: 'Evaluamos tu flujo de trabajo antes de programar una sola línea de código.',
    problem: 'Sé que mi negocio necesita digitalizarse, pero no sé por dónde comenzar ni qué tecnología me conviene para no gastar dinero de más.',
    benefit: 'Mapeamos los cuellos de botella de tu negocio en una sesión de 20 minutos y te entregamos un diagnóstico claro con las herramientas recomendadas y el ROI estimado.',
    deliverables: [
      'Auditoría operativa de 20 minutos con desarrolladores sénior',
      'Cálculo de índice de digitalización actual vs óptimo',
      'Roadmap de implementación priorizada por impacto comercial',
      'Presupuesto transparente y cotización formal sin compromiso',
      'Garantía de cero rentas ocultas y asesoría técnica directa',
    ],
    sectors: 'Todo tipo de negocios, comercios y empresas en crecimiento',
    iconName: 'SearchCheck',
    ctaText: 'Iniciar evaluación gratis',
    ctaHref: '/#diagnostico',
    ctaType: 'assessment',
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
