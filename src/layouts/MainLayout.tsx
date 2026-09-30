import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { HeadManager } from '../seo/HeadManager';
import { Breadcrumb } from '../seo/Breadcrumb';
import { useTracking } from '../hooks/useTracking';

export const MainLayout: React.FC = () => {
  useTracking();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white flex flex-col justify-between">
      <HeadManager />
      <ScrollToTop />
      
      {/* Global Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
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
      <svg className="hidden" aria-hidden="true">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      <Navbar />
      <div className="relative z-10 pt-20">
        <Breadcrumb />
      </div>
      <main className="flex-1 relative z-10" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
