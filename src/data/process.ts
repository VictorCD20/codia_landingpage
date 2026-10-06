export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export const masterProcess: ProcessStep[] = [
  {
    step: '01',
    title: 'Descubrimiento',
    subtitle: 'Entendemos tu operación',
    description: 'Conversamos 20 minutos para entender cómo cobras, cómo gestionas tus existencias y cuáles son los cuellos de botella que frenan a tu equipo.',
    deliverable: 'Mapa de fricciones operativas detectadas',
  },
  {
    step: '02',
    title: 'Diagnóstico & Estrategia',
    subtitle: 'Recomendación objetiva',
    description: 'Determinamos exactamente qué módulos necesitas y cuáles no, calculando los tiempos de retorno de inversión antes de iniciar.',
    deliverable: 'Propuesta formal con alcance y cronograma',
  },
  {
    step: '03',
    title: 'Diseño de Flujos',
    subtitle: 'Interfaz rápida y táctil',
    description: 'Estructuramos las pantallas del punto de venta o catálogo digital priorizando la velocidad de uso para que cualquier empleado lo use sin fricción.',
    deliverable: 'Prototipo visual interactivo aprobado',
  },
  {
    step: '04',
    title: 'Desarrollo & Configuración',
    subtitle: 'Código limpio y propio',
    description: 'Programamos la solución con arquitectura moderna, rápida y segura. Conectamos bases de datos, APIs de WhatsApp y pasarelas de pago.',
    deliverable: 'Sistema 100% funcional en entorno de pruebas',
  },
  {
    step: '05',
    title: 'Implementación & Migración',
    subtitle: 'Puesta en marcha en tu local',
    description: 'Cargamos tu catálogo real de productos, configuramos tus impresoras térmicas, tablets o celulares y validamos que todo opere en sincronía.',
    deliverable: 'Software activo en el hardware de tu negocio',
  },
  {
    step: '06',
    title: 'Capacitación al Personal',
    subtitle: 'Tu equipo dominando el sistema',
    description: 'Realizamos una sesión guiada con tus cajeros, meseros o administradores para que cobren y registren movimientos con total seguridad.',
    deliverable: 'Personal capacitado y manual de operación',
  },
  {
    step: '07',
    title: 'Acompañamiento & Soporte',
    subtitle: 'Soporte técnico directo',
    description: 'Te respaldamos con garantía técnica local. Sin bots que no resuelven; hablas directamente con los desarrolladores que construyeron tu software.',
    deliverable: 'Línea de soporte prioritario y garantía técnica',
  },
];
