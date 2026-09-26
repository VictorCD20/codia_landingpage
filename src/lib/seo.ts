import { siteConfig } from '../config/site';

export interface SEOConfig {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const getSEOMetadata = (customSEO?: SEOConfig): SEOConfig => {
  return {
    title: customSEO?.title || siteConfig.fullTitle,
    description: customSEO?.description || siteConfig.description,
    ogImage: customSEO?.ogImage || `${siteConfig.domain}og-image.png`,
    canonicalUrl: customSEO?.canonicalUrl || siteConfig.domain,
  };
};
