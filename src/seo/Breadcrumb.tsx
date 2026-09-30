import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMetadataForRoute } from '../config/metadata';

export const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const metadata = getMetadataForRoute(location.pathname);
  const breadcrumbs = metadata.breadcrumbs;

  if (!breadcrumbs || breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="mx-auto max-w-7xl px-5 sm:px-8 py-3 mb-4 text-xs text-white/60 font-light flex items-center space-x-2 overflow-x-auto"
    >
      <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const relativePath = item.url.replace(/^https?:\/\/[^/]+/, '') || '/';

          return (
            <li 
              key={item.url} 
              className="flex items-center space-x-2 whitespace-nowrap"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && <span className="text-white/30">/</span>}
              {isLast ? (
                <span className="text-white/90 font-medium" itemProp="name" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={relativePath}
                  className="hover:text-white transition-colors no-underline"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
