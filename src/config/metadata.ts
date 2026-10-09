import type { PageMetadata } from '../types/seo';
import { siteConfig } from './site';

export const defaultSEO: PageMetadata = {
  title: siteConfig.fullTitle,
  description: siteConfig.description,
  canonical: siteConfig.domain,
  keywords: [
    'CODIA',
    'soluciones digitales',
    'desarrollo de software para negocios',
    'software pymes',
    'sitios web profesionales',
    'catálogos digitales',
    'sistemas internos',
    'punto de venta pos',
    'automatización de procesos',
    'paneles administrativos',
    'soluciones digitales para negocios con más orden'
  ],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: siteConfig.fullTitle,
    description: siteConfig.description,
    url: siteConfig.domain,
    type: 'website',
    image: `${siteConfig.domain}logo.png`,
    siteName: siteConfig.name,
    locale: 'es_MX'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.fullTitle,
    description: siteConfig.description,
    image: `${siteConfig.domain}logo.png`,
    creator: '@CodiaSoftware',
    site: '@CodiaSoftware'
  },
  alternates: {
    canonical: siteConfig.domain,
    languages: {
      'es-MX': siteConfig.domain,
      'es': siteConfig.domain
    }
  }
};

export const pageMetadataMap: Record<string, PageMetadata> = {
  '/': {
    ...defaultSEO,
    title: 'CODIA | Soluciones Digitales para Negocios con Más Orden',
    description: 'Soluciones digitales para negocios con más orden. Creamos páginas web profesionales, catálogos digitales, sistemas internos a medida y automatizaciones para PyMEs.',
    canonical: `${siteConfig.domain}`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` }
    ],
    jsonLdType: 'Organization'
  },
  '/soluciones': {
    ...defaultSEO,
    title: 'Soluciones Digitales para Negocios | Catálogo de Software | CODIA',
    description: 'Conoce nuestras soluciones digitales diseñadas para ordenar tu operación y multiplicar tus ventas: presencia web, catálogos, sistemas POS y automatizaciones a medida.',
    canonical: `${siteConfig.domain}soluciones`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Soluciones', url: `${siteConfig.domain}soluciones` }
    ],
    jsonLdType: 'Service'
  },
  '/planes': {
    ...defaultSEO,
    title: 'Planes y Precios Transparentes | Soluciones Digitales | CODIA',
    description: 'Conoce nuestros planes de software y desarrollo digital para negocios. Software 100% de tu propiedad, sin rentas mensuales forzosas ni costos ocultos.',
    canonical: `${siteConfig.domain}planes`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Planes', url: `${siteConfig.domain}planes` }
    ],
    jsonLdType: 'Service'
  },
  '/demo': {
    ...defaultSEO,
    title: 'Demostración en Vivo de Software para Negocios | CODIA',
    description: 'Solicita un recorrido guiado 1 a 1 de nuestras soluciones digitales. Conoce el software en acción adaptado al giro comercial de tu negocio.',
    canonical: `${siteConfig.domain}demo`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Demostración', url: `${siteConfig.domain}demo` }
    ],
    jsonLdType: 'Service'
  },
  '/servicios': {
    ...defaultSEO,
    title: 'Servicios de Desarrollo Web y Sistemas | CODIA',
    description: 'Catálogo de servicios tecnológicos de CODIA: desarrollo de páginas web corporativas, catálogos digitales interactivos, software a medida y automatizaciones.',
    canonical: `${siteConfig.domain}soluciones`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Servicios', url: `${siteConfig.domain}servicios` }
    ],
    jsonLdType: 'Service'
  },
  '/servicios/desarrollo-web': {
    ...defaultSEO,
    title: 'Desarrollo de Páginas Web Profesionales | CODIA',
    description: 'Diseño y desarrollo de sitios web profesionales, landings de alta conversión y presencia digital moderna optimizada para captar clientes en tu negocio.',
    canonical: `${siteConfig.domain}servicios/desarrollo-web`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Servicios', url: `${siteConfig.domain}servicios` },
      { name: 'Desarrollo Web', url: `${siteConfig.domain}servicios/desarrollo-web` }
    ],
    jsonLdType: 'Service'
  },
  '/servicios/sistemas-a-medida': {
    ...defaultSEO,
    title: 'Sistemas Internos y Software a Medida para Pymes | CODIA',
    description: 'Desarrollamos herramientas y paneles administrativos a medida para registrar clientes, solicitudes, inventarios y gestionar la operación de tu empresa.',
    canonical: `${siteConfig.domain}servicios/sistemas-a-medida`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Servicios', url: `${siteConfig.domain}servicios` },
      { name: 'Sistemas a Medida', url: `${siteConfig.domain}servicios/sistemas-a-medida` }
    ],
    jsonLdType: 'SoftwareApplication'
  },
  '/servicios/automatizacion': {
    ...defaultSEO,
    title: 'Automatización de Procesos y Notificaciones | CODIA',
    description: 'Reduce tareas repetitivas y optimiza el flujo de trabajo de tu negocio con automatizaciones de WhatsApp, correos e integración de APIs.',
    canonical: `${siteConfig.domain}servicios/automatizacion`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Servicios', url: `${siteConfig.domain}servicios` },
      { name: 'Automatización', url: `${siteConfig.domain}servicios/automatizacion` }
    ],
    jsonLdType: 'Service'
  },
  '/como-trabajamos': {
    ...defaultSEO,
    title: 'Cómo Trabajamos | Metodología en 6 Pasos | CODIA',
    description: 'Conoce nuestro proceso claro de trabajo: diagnóstico, propuesta, desarrollo, revisión, entrega y seguimiento continuo para garantizar el éxito de tu proyecto.',
    canonical: `${siteConfig.domain}como-trabajamos`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Cómo Trabajamos', url: `${siteConfig.domain}como-trabajamos` }
    ],
    jsonLdType: 'WebSite'
  },
  '/nosotros': {
    ...defaultSEO,
    title: 'Sobre Nosotros | Equipo y Filosofía de Software | CODIA',
    description: 'Conoce al equipo detrás de CODIA. Atención directa por desarrolladores, transparencia, soluciones sin tecnicismos y enfoque en resultados para negocios.',
    canonical: `${siteConfig.domain}nosotros`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Nosotros', url: `${siteConfig.domain}nosotros` }
    ],
    jsonLdType: 'Organization'
  },
  '/contacto': {
    ...defaultSEO,
    title: 'Solicitar Diagnóstico o Cotización | Contacto CODIA',
    description: 'Solicita un diagnóstico sin costo para tu negocio. Cuéntanos tu proyecto de página web, catálogo o sistema interno y te orientamos.',
    canonical: `${siteConfig.domain}contacto`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Contacto', url: `${siteConfig.domain}contacto` }
    ],
    jsonLdType: 'LocalBusiness'
  },
  '/gracias': {
    ...defaultSEO,
    title: '¡Gracias por tu Solicitud! | CODIA',
    description: 'Hemos recibido tu solicitud de diagnóstico digital. Nuestro equipo se pondrá en contacto contigo muy pronto.',
    canonical: `${siteConfig.domain}gracias`,
    robots: 'noindex, follow',
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Gracias', url: `${siteConfig.domain}gracias` }
    ],
    jsonLdType: 'WebSite'
  },
  '/aviso-de-privacidad': {
    ...defaultSEO,
    title: 'Aviso de Privacidad | Tratamiento y Protección de Datos | CODIA',
    description: 'Aviso de Privacidad Integral de CODIA. Conoce cómo tratamos, protegemos y conservamos tus datos personales conforme a la LFPDPPP en México.',
    canonical: `${siteConfig.domain}aviso-de-privacidad`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Aviso de Privacidad', url: `${siteConfig.domain}aviso-de-privacidad` }
    ],
    jsonLdType: 'WebSite'
  },
  '/terminos-y-condiciones': {
    ...defaultSEO,
    title: 'Términos y Condiciones de Uso | Servicios y Diagnóstico | CODIA',
    description: 'Consulta los Términos y Condiciones de uso del sitio web, diagnósticos preliminares, soluciones y consultoría tecnológica de CODIA.',
    canonical: `${siteConfig.domain}terminos-y-condiciones`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Términos y Condiciones', url: `${siteConfig.domain}terminos-y-condiciones` }
    ],
    jsonLdType: 'WebSite'
  },
  '/politica-de-cookies': {
    ...defaultSEO,
    title: 'Política de Cookies y Preferencias | CODIA',
    description: 'Descubre qué cookies y tecnologías de almacenamiento utiliza CODIA, sus finalidades, duraciones y cómo gestionar tu consentimiento.',
    canonical: `${siteConfig.domain}politica-de-cookies`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Política de Cookies', url: `${siteConfig.domain}politica-de-cookies` }
    ],
    jsonLdType: 'WebSite'
  },
  '/coming-soon': {
    ...defaultSEO,
    title: 'Próximamente | Ecosistema CODIA',
    description: 'Estamos trabajando en nuevas herramientas y módulos para optimizar la operación de tu negocio.',
    canonical: `${siteConfig.domain}coming-soon`,
    robots: 'noindex, follow',
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Próximamente', url: `${siteConfig.domain}coming-soon` }
    ],
    jsonLdType: 'WebSite'
  },
  '/proximamente': {
    ...defaultSEO,
    title: 'Próximamente | Ecosistema CODIA',
    description: 'Estamos trabajando en nuevas herramientas y módulos para optimizar la operación de tu negocio.',
    canonical: `${siteConfig.domain}coming-soon`,
    robots: 'noindex, follow',
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Próximamente', url: `${siteConfig.domain}coming-soon` }
    ],
    jsonLdType: 'WebSite'
  },
  '/crm': {
    ...defaultSEO,
    title: 'CRM de Negocios | Próximamente | CODIA',
    description: 'Gestión inteligente de prospectos y ventas. CODIA CRM está siendo desarrollado para agilizar el pipeline comercial de pymes.',
    canonical: `${siteConfig.domain}crm`,
    robots: 'noindex, follow',
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'CRM', url: `${siteConfig.domain}crm` }
    ],
    jsonLdType: 'SoftwareApplication'
  },
  '/ia': {
    ...defaultSEO,
    title: 'Inteligencia Artificial | Próximamente | CODIA',
    description: 'Modelos y agentes de IA diseñados para potenciar empresas. Explora el desarrollo de la suite de inteligencia artificial de CODIA.',
    canonical: `${siteConfig.domain}ia`,
    robots: 'noindex, follow',
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Inteligencia Artificial', url: `${siteConfig.domain}ia` }
    ],
    jsonLdType: 'SoftwareApplication'
  },
  '/herramientas': {
    ...defaultSEO,
    title: 'Herramientas Digitales | Próximamente | CODIA',
    description: 'Suite de utilidades interactivas para análisis de ROI y madurez tecnológica de tu empresa.',
    canonical: `${siteConfig.domain}herramientas`,
    robots: 'noindex, follow',
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Herramientas', url: `${siteConfig.domain}herramientas` }
    ],
    jsonLdType: 'WebSite'
  },
  '/comunidad': {
    ...defaultSEO,
    title: 'Comunidad CODIA | Próximamente | CODIA',
    description: 'Una red estratégica para conectar fundadores y líderes impulsando la transformación digital.',
    canonical: `${siteConfig.domain}comunidad`,
    robots: 'noindex, follow',
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Comunidad', url: `${siteConfig.domain}comunidad` }
    ],
    jsonLdType: 'WebSite'
  },
  '/dashboard': {
    ...defaultSEO,
    title: 'Dashboard Ejecutivo | Próximamente | CODIA',
    description: 'Panel de control analítico para supervisar métricas operativas y de negocio en tiempo real.',
    canonical: `${siteConfig.domain}dashboard`,
    robots: 'noindex, follow',
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Dashboard', url: `${siteConfig.domain}dashboard` }
    ],
    jsonLdType: 'SoftwareApplication'
  },
  '/recursos': {
    ...defaultSEO,
    title: 'Recursos Exclusivos | Próximamente | CODIA',
    description: 'Descarga plantillas, e-books y guías de automatización diseñadas para líderes de negocio.',
    canonical: `${siteConfig.domain}recursos`,
    robots: 'noindex, follow',
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Recursos', url: `${siteConfig.domain}recursos` }
    ],
    jsonLdType: 'WebSite'
  }
};

export function getMetadataForRoute(pathname: string): PageMetadata {
  const meta = pageMetadataMap[pathname];
  if (meta) return meta;
  
  return {
    ...defaultSEO,
    title: 'Página no encontrada | CODIA',
    description: 'La página que buscas no existe o ha sido movida.',
    robots: 'noindex, nofollow'
  };
}
