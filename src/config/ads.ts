import type { AdsStrategyMap } from '../types/ads';

export const adsStrategyMap: AdsStrategyMap = {
  '/': {
    route: '/',
    commercialObjective: 'Captación general de leads B2B y solicitudes de diagnóstico digital',
    expectedConversion: 'Solicitud de diagnóstico o contacto vía WhatsApp',
    primaryKeyword: 'desarrollo de software para negocios',
    secondaryKeywords: [
      'sitios web profesionales',
      'sistemas a medida',
      'automatizacion de procesos',
      'consultoria digital B2B'
    ],
    metaEvent: 'ViewContent',
    googleAdsConversionLabel: 'hp_diagnostic_lead',
    targetAudience: 'Dueños de pymes, gerentes operativos, emprendedores locales'
  },
  '/servicios': {
    route: '/servicios',
    commercialObjective: 'Presentar el catálogo integral de servicios y dirigir tráfico cualificado',
    expectedConversion: 'Navegación hacia servicio específico o solicitud de cotización',
    primaryKeyword: 'servicios de desarrollo web y software',
    secondaryKeywords: [
      'desarrollo de catalogos digitales',
      'sistemas administrativos pymes',
      'soluciones digitales empresariales'
    ],
    metaEvent: 'ViewContent',
    googleAdsConversionLabel: 'services_catalog_view',
    targetAudience: 'Empresas buscando soluciones tecnológicas integrales'
  },
  '/servicios/desarrollo-web': {
    route: '/servicios/desarrollo-web',
    commercialObjective: 'Captar clientes que requieren páginas web corporativas y landings de alta conversión',
    expectedConversion: 'Formulario de propuesta de sitio web profesional',
    primaryKeyword: 'paginas web profesionales para empresas',
    secondaryKeywords: [
      'diseno web corporativo',
      'landing page de alta conversion',
      'desarrollo web responsivo pymes'
    ],
    metaEvent: 'ViewContent',
    googleAdsConversionLabel: 'web_dev_lead',
    targetAudience: 'Negocios locales, despachos, clínicas y comercios sin sitio o con web obsoleta'
  },
  '/servicios/sistemas-a-medida': {
    route: '/servicios/sistemas-a-medida',
    commercialObjective: 'Venta de software administrativo, dashboards y sistemas internos personalizados',
    expectedConversion: 'Solicitud de demo o consulta técnica de sistemas',
    primaryKeyword: 'sistemas web a medida para empresas',
    secondaryKeywords: [
      'desarrollo de sistemas internos',
      'panel administrativo personalizado',
      'software de gestion de clientes pyme'
    ],
    metaEvent: 'ViewContent',
    googleAdsConversionLabel: 'custom_systems_lead',
    targetAudience: 'Empresas operativas con procesos manuales en Excel o papel'
  },
  '/servicios/automatizacion': {
    route: '/servicios/automatizacion',
    commercialObjective: 'Atraer negocios buscando reducir tiempos en tareas repetitivas e integración de APIs',
    expectedConversion: 'Diagnóstico de automatización operativa',
    primaryKeyword: 'automatizacion de procesos de negocio',
    secondaryKeywords: [
      'automatizar whatsapp y correo',
      'integracion de sistemas pyme',
      'flujos de trabajo automaticos'
    ],
    metaEvent: 'ViewContent',
    googleAdsConversionLabel: 'automation_lead',
    targetAudience: 'Directores de operaciones, administradores y equipos de ventas'
  },
  '/como-trabajamos': {
    route: '/como-trabajamos',
    commercialObjective: 'Reducir la fricción de compra explicando la metodología clara en 6 pasos',
    expectedConversion: 'Click en solicitar diagnóstico tras revisar el proceso',
    primaryKeyword: 'metodologia de desarrollo de software',
    secondaryKeywords: [
      'proceso de trabajo desarrollo web',
      'etapas de proyecto de software'
    ],
    metaEvent: 'ViewContent',
    googleAdsConversionLabel: 'process_view',
    targetAudience: 'Clientes potenciales evaluando la confiabilidad del proveedor'
  },
  '/nosotros': {
    route: '/nosotros',
    commercialObjective: 'Generar confianza institucional, mostrar la visión del equipo y valores CODIA',
    expectedConversion: 'Contacto directo tras validación de equipo',
    primaryKeyword: 'empresa de desarrollo de software codia',
    secondaryKeywords: [
      'equipo de desarrolladores web',
      'agencia de soluciones digitales'
    ],
    metaEvent: 'ViewContent',
    googleAdsConversionLabel: 'about_view',
    targetAudience: 'Prospectos en fase final de decisión de contratación'
  },
  '/contacto': {
    route: '/contacto',
    commercialObjective: 'Landing dedicada a la conversión de leads calificados',
    expectedConversion: 'Envío completado de formulario de contacto/diagnóstico',
    primaryKeyword: 'contacto agencia desarrollo software',
    secondaryKeywords: [
      'solicitar cotizacion sitio web',
      'diagnostico digital gratis'
    ],
    metaEvent: 'Contact',
    googleAdsConversionLabel: 'contact_form_view',
    targetAudience: 'Tráfico de alto intent publicitario (Search Ads / Meta Retargeting)'
  },
  '/gracias': {
    route: '/gracias',
    commercialObjective: 'Página de confirmación de conversión final y remarketing pixel trigger',
    expectedConversion: 'Lead Registrado / Conversion completada (Thank You Page)',
    primaryKeyword: 'confirmacion de solicitud codia',
    secondaryKeywords: ['gracias por tu mensaje'],
    metaEvent: 'Lead',
    googleAdsConversionLabel: 'lead_conversion_complete',
    targetAudience: 'Usuarios que acaban de convertir'
  },
  '/aviso-de-privacidad': {
    route: '/aviso-de-privacidad',
    commercialObjective: 'Cumplimiento legal y transparencia de datos personales (ARCO)',
    expectedConversion: 'Lectura legal',
    primaryKeyword: 'aviso de privacidad codia',
    secondaryKeywords: ['tratamiento de datos personales'],
    metaEvent: 'ViewContent',
    googleAdsConversionLabel: 'privacy_view',
    targetAudience: 'Usuarios revisando políticas legales'
  }
};
