export interface OpenGraphMeta {
  title?: string;
  description?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  image?: string;
  siteName?: string;
  locale?: string;
}

export interface TwitterMeta {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  title?: string;
  description?: string;
  image?: string;
  creator?: string;
  site?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  robots?: string;
  openGraph?: OpenGraphMeta;
  twitter?: TwitterMeta;
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
  verification?: {
    google?: string;
    bing?: string;
    yandex?: string;
  };
  breadcrumbs?: BreadcrumbItem[];
  jsonLdType?: 'Organization' | 'WebSite' | 'LocalBusiness' | 'Service' | 'FAQ' | 'Breadcrumb' | 'BlogPosting' | 'Course' | 'SoftwareApplication';
}
