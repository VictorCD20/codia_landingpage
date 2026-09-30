import { siteConfig } from '../config/site';
import type { BreadcrumbItem, PageMetadata } from '../types/seo';

/**
 * Schema Engine (FASE 6)
 * Proporciona generadores de JSON-LD estructurado desacoplados.
 */

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': siteConfig.name,
    'legalName': 'CODIA Software Solutions',
    'url': siteConfig.domain,
    'logo': `${siteConfig.domain}logo.png`,
    'image': `${siteConfig.domain}logo.png`,
    'description': siteConfig.description,
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': siteConfig.contact.phone,
      'contactType': 'customer support',
      'email': siteConfig.contact.email,
      'availableLanguage': ['Spanish', 'es']
    },
    'sameAs': [
      siteConfig.social.facebook,
      siteConfig.social.instagram
    ]
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': siteConfig.name,
    'url': siteConfig.domain,
    'description': siteConfig.description,
    'inLanguage': 'es-MX',
    'publisher': {
      '@type': 'Organization',
      'name': siteConfig.name
    }
  };
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'CODIA - Soluciones Digitales',
    'image': `${siteConfig.domain}logo.png`,
    'url': siteConfig.domain,
    'telephone': siteConfig.contact.phone,
    'email': siteConfig.contact.email,
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'MX',
      'addressRegion': 'Yucatán',
      'addressLocality': 'Mérida'
    },
    'priceRange': '$$',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '09:00',
      'closes': '18:00'
    }
  };
}

export function buildServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Software Development & Web Design',
    'provider': {
      '@type': 'Organization',
      'name': siteConfig.name,
      'url': siteConfig.domain
    },
    'areaServed': {
      '@type': 'Country',
      'name': 'Mexico'
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Servicios Digitales CODIA',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Desarrollo de Sitios Web Profesionales',
            'description': 'Diseño y programación de sitios web corporativos y páginas de aterrizaje enfocadas en conversión.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Catálogos Digitales',
            'description': 'Catálogos interactivos para mostrar productos o servicios integrados con solicitudes vía WhatsApp.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Sistemas Internos y Paneles Administrativos',
            'description': 'Desarrollo de software a medida para control de clientes, solicitudes y procesos operativos.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Automatización de Procesos',
            'description': 'Integraciones y flujos automáticos para notificaciones y tareas repetitivas de negocio.'
          }
        }
      ]
    }
  };
}

export function buildFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

export function buildBreadcrumbSchema(items?: BreadcrumbItem[]) {
  if (!items || items.length === 0) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}

/**
 * Esquema preparado para BlogPosting (Academy / Blog futuro)
 */
export function buildBlogPostingSchema(post?: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  authorName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post?.title || 'CODIA Tech Insights',
    'description': post?.description || 'Artículos y guías sobre transformación digital y desarrollo de software.',
    'url': post?.url || `${siteConfig.domain}blog`,
    'datePublished': post?.datePublished || new Date().toISOString(),
    'author': {
      '@type': 'Organization',
      'name': post?.authorName || 'CODIA Team'
    },
    'publisher': {
      '@type': 'Organization',
      'name': siteConfig.name,
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteConfig.domain}logo.png`
      }
    }
  };
}

/**
 * Esquema preparado para Course (CODIA Academy futuro)
 */
export function buildCourseSchema(course?: {
  name: string;
  description: string;
  providerName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': course?.name || 'Formación Digital para Negocios - CODIA Academy (Próximamente)',
    'description': course?.description || 'Programa de capacitación en digitalización y herramientas tecnológicas para pymes.',
    'provider': {
      '@type': 'Organization',
      'name': course?.providerName || siteConfig.name,
      'sameAs': siteConfig.domain
    }
  };
}

/**
 * Esquema para SoftwareApplication (Sistemas a medida)
 */
export function buildSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'CODIA Custom Business Systems',
    'operatingSystem': 'Web, Cloud, Cross-Platform',
    'applicationCategory': 'BusinessApplication',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'MXN',
      'description': 'Cotización personalizada en base a diagnóstico digital.'
    }
  };
}

export function generateSchemasForPage(metadata: PageMetadata): object[] {
  const schemas: object[] = [
    buildOrganizationSchema(),
    buildWebSiteSchema()
  ];

  if (metadata.breadcrumbs) {
    const breadcrumbSchema = buildBreadcrumbSchema(metadata.breadcrumbs);
    if (breadcrumbSchema) schemas.push(breadcrumbSchema);
  }

  switch (metadata.jsonLdType) {
    case 'LocalBusiness':
      schemas.push(buildLocalBusinessSchema());
      break;
    case 'Service':
      schemas.push(buildServiceSchema());
      break;
    case 'SoftwareApplication':
      schemas.push(buildSoftwareApplicationSchema());
      break;
    case 'FAQ':
      // standard faqs built in component or default
      break;
    default:
      break;
  }

  return schemas;
}
