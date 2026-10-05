import React from 'react';
import { getComingSoonModuleConfig, type ModulePageConfig } from './comingSoon.config';
import { HeadManager } from '../../seo/HeadManager';
import { ComingSoonHero } from './ComingSoonHero';
import { ComingSoonModules } from './ComingSoonModules';
import { ComingSoonWhy } from './ComingSoonWhy';
import { ComingSoonTimeline } from './ComingSoonTimeline';
import { ComingSoonCTA } from './ComingSoonCTA';
import { ComingSoonNewsletter } from './ComingSoonNewsletter';
import { ComingSoonFAQ } from './ComingSoonFAQ';

interface ComingSoonLayoutProps {
  moduleKey?: string;
  customConfig?: Partial<ModulePageConfig>;
}

export const ComingSoonLayout: React.FC<ComingSoonLayoutProps> = ({
  moduleKey = 'proximamente',
  customConfig,
}) => {
  const baseConfig = getComingSoonModuleConfig(moduleKey);
  const config = { ...baseConfig, ...customConfig };

  return (
    <div className="w-full text-white overflow-x-hidden">
      {/* Inject custom route metadata for SEO, OpenGraph, Schema */}
      <HeadManager customMetadata={config.seo} />

      {/* Hero Section */}
      <ComingSoonHero
        badge={config.badge}
        title={config.heroTitle}
        subtitle={config.heroSubtitle}
        primaryCtaText={config.primaryCtaText}
        primaryCtaUrl={config.primaryCtaUrl}
        secondaryCtaText={config.secondaryCtaText}
        secondaryCtaUrl={config.secondaryCtaUrl}
      />

      {/* Section 1: Modules Grid */}
      <ComingSoonModules currentModuleKey={moduleKey} />

      {/* Section 2: Why We Are Building It */}
      <ComingSoonWhy
        title={config.whyTitle}
        subtitle={config.whySubtitle}
        bullets={config.whyBullets}
      />

      {/* Section 3: Visual Timeline */}
      <ComingSoonTimeline />

      {/* Section 4: Quick Access Active Services */}
      <ComingSoonCTA />

      {/* Section 5: Newsletter / Lead Form */}
      <ComingSoonNewsletter />

      {/* Section 6: FAQ */}
      <ComingSoonFAQ />
    </div>
  );
};
