import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { DigitalDiagnosisSection } from './components/DigitalDiagnosisSection';
import { FeatureTriage } from './components/FeatureTriage';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { ValidationSolutionsSection } from './components/ValidationSolutionsSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TrustSection } from './components/TrustSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      
      {/* Global Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover pointer-events-none"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4" 
        />
      </div>


      {/* Root SVG Noise Filter */}
      <svg className="hidden">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      <Navbar />
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
      <Footer />
      <Analytics />
      
    </div>
  );
}

export default App;
