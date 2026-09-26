import React from 'react';
import { Hero } from '../components/Hero';
import { WhatWeDoSection } from '../components/WhatWeDoSection';
import { DigitalDiagnosisSection } from '../components/DigitalDiagnosisSection';
import { FeatureTriage } from '../components/FeatureTriage';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { ValidationSolutionsSection } from '../components/ValidationSolutionsSection';
import { ProjectsShowcase } from '../components/ProjectsShowcase';
import { TrustSection } from '../components/TrustSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <WhatWeDoSection />
      <DigitalDiagnosisSection />
      <FeatureTriage />
      <ServicesSection />
      <ProcessSection />
      <ValidationSolutionsSection />
      <ProjectsShowcase />
      <TrustSection />
      <ContactSection />
    </>
  );
};
