export interface CaseStudy {
  id: string;
  businessType: string;
  businessName: string;
  badge: string;
  challenge: string;
  before: {
    title: string;
    points: string[];
  };
  after: {
    title: string;
    points: string[];
  };
  metrics: {
    label: string;
    value: string;
  }[];
  solutionApplied: string;
}

export const masterCaseStudies: CaseStudy[] = [
  {
    id: 'cafeteria-especialidad',
    businessType: 'Alimentos & Bebidas',
    businessName: 'Cafetería de Especialidad',
    badge: 'Caso Real • Sector Alimenticio',
    challenge: 'Filas lentas en barra durante horas pico, errores frecuentes en comandas de cocina y pérdida de 45 minutos al final del turno cuadrando el corte de caja manual.',
    before: {
      title: 'Antes de CODIA (Operación en Papel)',
      points: [
        'Comandas escritas a mano que se traspapelaban o generaban quejas de clientes.',
        'El barista no sabía si quedaba leche vegetal o jarabes sin revisar físicamente el almacén.',
        'Corte de caja tardado de 45 a 60 minutos con diferencias de dinero no explicadas.',
        'Clientes pidiendo menú por WhatsApp recibían fotos pesadas y poco legibles.',
      ],
    },
    after: {
      title: 'Después de CODIA (Solución Integrada)',
      points: [
        'Toma de órdenes en tablet táctil en menos de 25 segundos con modificadores de bebida.',
        'Comandas enviadas instantáneamente a la pantalla de preparación.',
        'Descuento automático de gramos de café, leche y vasos con cada ticket cobrado.',
        'Corte de caja automático en 3 minutos con registro de efectivo y tarjeta.',
      ],
    },
    metrics: [
      { label: 'Tiempo de cobro', value: '-60%' },
      { label: 'Cierre de turno', value: '3 min' },
      { label: 'Mermas no registradas', value: '0%' },
      { label: 'Satisfacción de clientes', value: '98%' },
    ],
    solutionApplied: 'Punto de Venta POS + Módulo Cocina + Control de Insumos por Receta',
  },
];
