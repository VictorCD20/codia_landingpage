import React from 'react';
import { Hero } from '../components/Hero';
import { DemoCenterSection } from '../components/DemoCenterSection';
import { PricingSummary } from '../components/PricingSummary';
import { DigitalDiagnosis } from '../components/DigitalDiagnosis';
import { TrustSection } from '../components/TrustSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 01. Hero (Propuesta de valor en < 15s + 2 CTAs) */}
      <Hero />

      {/* 02. Demo Center (Showcase interactivo MVP Cafetería + Sectores) */}
      <DemoCenterSection />

      {/* 05. Resumen de Planes (Start, Business, Enterprise + Link a /planes) */}
      <PricingSummary />

      {/* 06. Diagnóstico Digital (Assessment Engine en 6 pasos) */}
      <DigitalDiagnosis />

      {/* 07. Casos de Éxito & Compromisos de Confianza */}
      <TrustSection />

      {/* 08. Preguntas Frecuentes (Derribo de 5 objeciones clave) */}
      <FAQSection />

      {/* 09. Cierre Comercial & Agendamiento Estratégico */}
      <FinalCTA />
    </>
  );
};
