import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMetadataForRoute } from '../config/metadata';
import { generateSchemasForPage } from '../schema/schemaEngine';
import type { PageMetadata } from '../types/seo';

interface HeadManagerProps {
  customMetadata?: PageMetadata;
}

export const HeadManager: React.FC<HeadManagerProps> = ({ customMetadata }) => {
  const location = useLocation();
  const metadata = customMetadata || getMetadataForRoute(location.pathname);

  useEffect(() => {
    // 1. Title
    if (metadata.title) {
      document.title = metadata.title;
    }

    // Helper to update or create meta tag
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let meta = document.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper for link tags
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    if (metadata.description) {
      setMetaTag('meta[name="description"]', 'name', 'description', metadata.description);
    }
    if (metadata.robots) {
      setMetaTag('meta[name="robots"]', 'name', 'robots', metadata.robots);
    }
    if (metadata.keywords && metadata.keywords.length > 0) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', metadata.keywords.join(', '));
    }

    // 3. Canonical Link
    if (metadata.canonical) {
      setLinkTag('canonical', metadata.canonical);
    }

    // 4. OpenGraph Tags
    if (metadata.openGraph) {
      const og = metadata.openGraph;
      if (og.title) setMetaTag('meta[property="og:title"]', 'property', 'og:title', og.title);
      if (og.description) setMetaTag('meta[property="og:description"]', 'property', 'og:description', og.description);
      if (og.url) setMetaTag('meta[property="og:url"]', 'property', 'og:url', og.url);
      if (og.image) setMetaTag('meta[property="og:image"]', 'property', 'og:image', og.image);
      if (og.type) setMetaTag('meta[property="og:type"]', 'property', 'og:type', og.type);
      if (og.siteName) setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', og.siteName);
      if (og.locale) setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', og.locale);
    }

    // 5. Twitter Card Tags
    if (metadata.twitter) {
      const tw = metadata.twitter;
      if (tw.card) setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', tw.card);
      if (tw.title) setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', tw.title);
      if (tw.description) setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', tw.description);
      if (tw.image) setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', tw.image);
      if (tw.creator) setMetaTag('meta[name="twitter:creator"]', 'name', 'twitter:creator', tw.creator);
      if (tw.site) setMetaTag('meta[name="twitter:site"]', 'name', 'twitter:site', tw.site);
    }

    // 6. JSON-LD Schemas injection
    const existingScripts = document.querySelectorAll('script[data-schema-engine="true"]');
    existingScripts.forEach((script) => script.remove());

    const pageSchemas = generateSchemasForPage(metadata);
    pageSchemas.forEach((schemaObj, index) => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-schema-engine', 'true');
      script.setAttribute('id', `schema-jsonld-${index}`);
      script.textContent = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    });
  }, [location.pathname, metadata]);

  return null;
};
