import type { PageMetadata } from '../types/seo';
import { siteConfig } from './site';

export const defaultSEO: PageMetadata = {
  title: siteConfig.fullTitle,
  description: siteConfig.description,
  canonical: siteConfig.domain,
  keywords: [
    'CODIA',
    'desarrollo de software',
    'sitios web profesionales',
    'catálogos digitales',
    'sistemas internos',
    'automatización de procesos',
    'paneles administrativos',
    'soluciones digitales',
    'desarrollo web pymes'
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
  },
  verification: {
    google: 'google-site-verification-codia-placeholder',
    bing: 'bing-site-verification-codia-placeholder'
  }
};

export const pageMetadataMap: Record<string, PageMetadata> = {
  '/': {
    ...defaultSEO,
    title: 'CODIA | Soluciones Digitales y Desarrollo de Software a Medida',
    description: 'Soluciones digitales para negocios que quieren crecer. Creamos páginas web profesionales, catálogos digitales, sistemas internos y automatización de procesos.',
    canonical: `${siteConfig.domain}`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` }
    ],
    jsonLdType: 'Organization'
  },
  '/servicios': {
    ...defaultSEO,
    title: 'Servicios de Desarrollo Web y Sistemas | CODIA',
    description: 'Catálogo de servicios tecnológicos de CODIA: desarrollo de páginas web corporativas, catálogos digitales interactivos, software a medida y automatizaciones.',
    canonical: `${siteConfig.domain}servicios`,
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
    title: 'Aviso de Privacidad Legal | CODIA',
    description: 'Consulta nuestro aviso de privacidad y conoce cómo protegemos tus datos personales conforme a la ley.',
    canonical: `${siteConfig.domain}aviso-de-privacidad`,
    breadcrumbs: [
      { name: 'Inicio', url: `${siteConfig.domain}` },
      { name: 'Aviso de Privacidad', url: `${siteConfig.domain}aviso-de-privacidad` }
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
