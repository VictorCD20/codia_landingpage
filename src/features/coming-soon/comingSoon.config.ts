import { 
  LayoutDashboard, 
  Bot, 
  Wrench, 
  FolderKanban, 
  Share2, 
  BookOpen, 
  Layers,
  Code2,
  Cpu,
  Sparkles
} from 'lucide-react';
import type { PageMetadata } from '../../types/seo';
import { siteConfig } from '../../config/site';

export type ModuleStatus = 'En desarrollo' | 'Planeado' | 'Próximamente' | 'Futuro';

export interface EcosystemModule {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: any;
  status: ModuleStatus;
  highlight?: boolean;
}

export interface TimelineStep {
  name: string;
  status: ModuleStatus;
  description: string;
  icon: any;
}

export interface QuickService {
  title: string;
  description: string;
  link: string;
  ctaText: string;
  icon: any;
}

export interface ComingSoonFAQItem {
  question: string;
  answer: string;
}

export interface ModulePageConfig {
  key: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
  whyTitle: string;
  whySubtitle: string;
  whyBullets: Array<{ title: string; text: string }>;
  seo: PageMetadata;
}

// Full ecosystem modules dictionary
export const ecosystemModules: EcosystemModule[] = [
  {
    id: 'herramientas',
    name: 'Herramientas Digitales',
    slug: '/herramientas',
    description: 'Suite de utilidades interactivas para diagnóstico, cálculo de ROI y optimización de procesos.',
    icon: Wrench,
    status: 'Próximamente',
    highlight: true,
  },
  {
    id: 'automatizaciones',
    name: 'Automatizaciones',
    slug: '/servicios/automatizacion',
    description: 'Motores y flujos de trabajo inteligentes conectados a WhatsApp, correo y bases de datos.',
    icon: Cpu,
    status: 'Planeado',
    highlight: true,
  },
  {
    id: 'ia',
    name: 'Inteligencia Artificial',
    slug: '/ia',
    description: 'Agentes autónomos y modelos personalizados para asistencia de negocios y procesamiento de datos.',
    icon: Bot,
    status: 'Planeado',
  },
  {
    id: 'crm',
    name: 'CRM & Prospectos',
    slug: '/crm',
    description: 'Sistema especializado para captura, seguimiento y conversión de leads comercial para pymes.',
    icon: FolderKanban,
    status: 'Futuro',
  },
  {
    id: 'dashboard',
    name: 'Dashboard Ejecutivo',
    slug: '/dashboard',
    description: 'Panel visual de analítica operativa, rendimiento de campañas y métricas clave de negocio.',
    icon: LayoutDashboard,
    status: 'Futuro',
  },
  {
    id: 'comunidad',
    name: 'Comunidad CODIA',
    slug: '/comunidad',
    description: 'Red de fundadores y profesionales compartiendo buenas prácticas y soluciones tecnológicas.',
    icon: Share2,
    status: 'Futuro',
  },
  {
    id: 'recursos',
    name: 'Recursos Exclusivos',
    slug: '/recursos',
    description: 'Plantillas, frameworks de trabajo, checklists de digitalización y e-books técnicos descargables.',
    icon: BookOpen,
    status: 'Próximamente',
  },
];

// Timeline Visual Steps
export const comingSoonTimeline: TimelineStep[] = [
  {
    name: 'CRM de Negocios',
    status: 'Planeado',
    description: 'Seguimiento de leads y pipeline comercial.',
    icon: FolderKanban,
  },
  {
    name: 'Inteligencia Artificial',
    status: 'Planeado',
    description: 'Agentes inteligentes integrados a flujos de trabajo.',
    icon: Bot,
  },
  {
    name: 'Automatizaciones Avanzadas',
    status: 'Próximamente',
    description: 'Conexión multicanal y sincronización en la nube.',
    icon: Cpu,
  },
  {
    name: 'Herramientas Digitales',
    status: 'Futuro',
    description: 'Calculadoras y simuladores interactivos de operación.',
    icon: Wrench,
  },
];

// Quick Access Services ("Mientras tanto...")
export const quickAccessServices: QuickService[] = [
  {
    title: 'Desarrollo Web',
    description: 'Páginas web corporativas y catálogos digitales interactivos orientados a la conversión.',
    link: '/servicios/desarrollo-web',
    ctaText: 'Ver Servicio Web',
    icon: Code2,
  },
  {
    title: 'Software a Medida',
    description: 'Paneles administrativos y sistemas de control interno adaptados a la operación de tu empresa.',
    link: '/servicios/sistemas-a-medida',
    ctaText: 'Explorar Sistemas',
    icon: Layers,
  },
  {
    title: 'Automatización de Procesos',
    description: 'Integraciones con WhatsApp, notificaciones y flujos automáticos para eliminar trabajo repetitivo.',
    link: '/servicios/automatizacion',
    ctaText: 'Ver Automatizaciones',
    icon: Cpu,
  },
  {
    title: 'Consultoría Tecnológica',
    description: 'Diagnóstico digital personalizado para identificar oportunidades inmediatas de crecimiento.',
    link: '/contacto',
    ctaText: 'Solicitar Diagnóstico',
    icon: Sparkles,
  },
];

// Standard FAQ items
export const defaultComingSoonFAQs: ComingSoonFAQItem[] = [
  {
    question: '¿Cuándo estará disponible?',
    answer: 'Estamos trabajando continuamente para ofrecer una experiencia sólida y robusta. Anunciaremos la disponibilidad oficial de cada módulo a través de nuestros canales oficiales y boletín.',
  },
  {
    question: '¿Puedo solicitar información antes del lanzamiento?',
    answer: 'Sí, puedes ponerte en contacto con nuestro equipo directivo y con gusto te orientaremos sobre nuestras soluciones actuales y cómo integrarlas a tu empresa.',
  },
  {
    question: '¿Los servicios actuales de CODIA siguen estando disponibles?',
    answer: 'Por supuesto. Nuestro catálogo de desarrollo web, software a medida y automatización de procesos opera al 100% para clientes nuevos y activos.',
  },
  {
    question: '¿Tiene algún costo inscribirse a las novedades?',
    answer: 'No, registrarte en el formulario de vista previa es completamente gratuito y te dará acceso prioritario a versiones beta y beneficios de lanzamiento.',
  },
];

// Generic module page configuration fallback generator
export function getComingSoonModuleConfig(moduleSlugKey: string): ModulePageConfig {
  const normalizedKey = moduleSlugKey.replace(/^\//, '').toLowerCase();

  const moduleDataMap: Record<string, Partial<ModulePageConfig>> = {
    'coming-soon': {
      badge: 'PRÓXIMAMENTE',
      heroTitle: 'Próximamente',
      heroSubtitle: 'Estamos haciendo cambios en nuestro sitio web.',
      seo: {
        title: 'Próximamente | CODIA',
        description: 'Estamos haciendo cambios en nuestro sitio web.',
        canonical: `${siteConfig.domain}coming-soon`,
        jsonLdType: 'WebSite',
        breadcrumbs: [
          { name: 'Inicio', url: siteConfig.domain },
          { name: 'Próximamente', url: `${siteConfig.domain}coming-soon` },
        ],
      },
    },
    proximamente: {
      badge: 'PRÓXIMAMENTE',
      heroTitle: 'Próximamente',
      heroSubtitle: 'Estamos haciendo cambios en nuestro sitio web.',
      seo: {
        title: 'Próximamente | CODIA',
        description: 'Estamos haciendo cambios en nuestro sitio web.',
        canonical: `${siteConfig.domain}proximamente`,
        jsonLdType: 'WebSite',
        breadcrumbs: [
          { name: 'Inicio', url: siteConfig.domain },
          { name: 'Próximamente', url: `${siteConfig.domain}proximamente` },
        ],
      },
    },
    crm: {
      badge: 'CRM & LEADS PREVIEW',
      heroTitle: 'Estamos construyendo el CRM de CODIA',
      heroSubtitle: 'Un ecosistema ágil para la gestión de prospectos, cotizaciones y pipelines de ventas pensado específicamente para empresas en crecimiento.',
      seo: {
        title: 'CRM de Negocios | Próximamente | CODIA',
        description: 'Gestión inteligente de prospectos y ventas. CODIA CRM está siendo desarrollado para agilizar el pipeline comercial de pymes.',
        canonical: `${siteConfig.domain}crm`,
        jsonLdType: 'SoftwareApplication',
        breadcrumbs: [
          { name: 'Inicio', url: siteConfig.domain },
          { name: 'CRM', url: `${siteConfig.domain}crm` },
        ],
      },
    },
    ia: {
      badge: 'IA & AGENTES PREVIEW',
      heroTitle: 'Estamos construyendo la Suite de Inteligencia Artificial',
      heroSubtitle: 'Modelos de lenguaje y agentes autónomos integrados directamente en la operación diaria de tu negocio para acelerar la toma de decisiones.',
      seo: {
        title: 'Inteligencia Artificial | Próximamente | CODIA',
        description: 'Modelos y agentes de IA diseñados para potenciar empresas. Explora el desarrollo de la suite de inteligencia artificial de CODIA.',
        canonical: `${siteConfig.domain}ia`,
        jsonLdType: 'SoftwareApplication',
        breadcrumbs: [
          { name: 'Inicio', url: siteConfig.domain },
          { name: 'Inteligencia Artificial', url: `${siteConfig.domain}ia` },
        ],
      },
    },
    herramientas: {
      badge: 'SUITE DE HERRAMIENTAS PREVIEW',
      heroTitle: 'Estamos construyendo la Suite de Herramientas Digitales',
      heroSubtitle: 'Calculadoras interactivas, diagnósticos de madurez tecnológica y herramientas de optimización operativas al alcance de tu equipo.',
      seo: {
        title: 'Herramientas Digitales | Próximamente | CODIA',
        description: 'Herramientas interactivas para análisis de ROI y madurez tecnológica de tu empresa.',
        canonical: `${siteConfig.domain}herramientas`,
        jsonLdType: 'WebSite',
        breadcrumbs: [
          { name: 'Inicio', url: siteConfig.domain },
          { name: 'Herramientas', url: `${siteConfig.domain}herramientas` },
        ],
      },
    },
    comunidad: {
      badge: 'COMUNIDAD CODIA PREVIEW',
      heroTitle: 'Estamos construyendo la Comunidad CODIA',
      heroSubtitle: 'Un espacio de networking y aprendizaje colaborativo para líderes de negocio, desarrolladores y ejecutivos de innovación.',
      seo: {
        title: 'Comunidad CODIA | Próximamente | CODIA',
        description: 'Un red estratégica para conectar fundadores y líderes impulsando la transformación digital.',
        canonical: `${siteConfig.domain}comunidad`,
        jsonLdType: 'WebSite',
        breadcrumbs: [
          { name: 'Inicio', url: siteConfig.domain },
          { name: 'Comunidad', url: `${siteConfig.domain}comunidad` },
        ],
      },
    },
  };

  const specificData = moduleDataMap[normalizedKey] || {};

  return {
    key: normalizedKey || 'proximamente',
    badge: specificData.badge || 'PRÓXIMAMENTE',
    heroTitle: specificData.heroTitle || 'Próximamente',
    heroSubtitle: specificData.heroSubtitle || 'Estamos haciendo cambios en nuestro sitio web.',
    primaryCtaText: 'Contactar a CODIA',
    primaryCtaUrl: '/contacto',
    secondaryCtaText: '',
    secondaryCtaUrl: '',
    whyTitle: '¿Por qué estamos haciendo cambios?',
    whySubtitle: 'Estamos mejorando nuestro sitio y soluciones tecnológicas para ofrecerte una experiencia superior.',
    whyBullets: [
      {
        title: 'Ecosistema Unificado',
        text: 'Conectamos herramientas web, paneles internos y automatizaciones en una sola arquitectura sin fricción.',
      },
      {
        title: 'Estándares Empresariales',
        text: 'Diseñamos cada módulo con seguridad avanzada, velocidad y componentes de alta resiliencia.',
      },
      {
        title: 'Enfoque en Resultados',
        text: 'Cada funcionalidad responde a necesidades reales de orden, automatización y aceleración comercial.',
      },
    ],
    seo: specificData.seo || {
      title: 'Próximamente | CODIA',
      description: 'Estamos haciendo cambios en nuestro sitio web.',
      canonical: `${siteConfig.domain}${normalizedKey}`,
      jsonLdType: 'WebSite',
      breadcrumbs: [
        { name: 'Inicio', url: siteConfig.domain },
        { name: 'Próximamente', url: `${siteConfig.domain}${normalizedKey}` },
      ],
    },
  };
}
