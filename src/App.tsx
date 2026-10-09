import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LazyMotion, domAnimation, MotionConfig } from 'motion/react';
import { MainLayout } from './layouts/MainLayout';
import { LegalLayout } from './layouts/LegalLayout';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { DemoPage } from './pages/DemoPage';
import { WebDevelopmentPage } from './pages/WebDevelopmentPage';
import { CustomSystemsPage } from './pages/CustomSystemsPage';
import { AutomationPage } from './pages/AutomationPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { ComingSoonPage } from './pages/ComingSoonPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CookieBanner } from './components/CookieBanner';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              
              {/* Canonical Redirects */}
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/servicios" element={<Navigate to="/soluciones" replace />} />
              <Route path="/demostracion" element={<Navigate to="/demo" replace />} />
              <Route path="/proximamente" element={<Navigate to="/coming-soon" replace />} />

              {/* Main Commercial Pages */}
              <Route path="/soluciones" element={<SolutionsPage />} />
              <Route path="/planes" element={<PricingPage />} />
              <Route path="/demo" element={<DemoPage />} />

              {/* Service Pages */}
              <Route path="/servicios/desarrollo-web" element={<WebDevelopmentPage />} />
              <Route path="/servicios/sistemas-a-medida" element={<CustomSystemsPage />} />
              <Route path="/servicios/automatizacion" element={<AutomationPage />} />
              
              {/* Informational Pages */}
              <Route path="/como-trabajamos" element={<ProcessPage />} />
              <Route path="/nosotros" element={<AboutPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/gracias" element={<ThankYouPage />} />
              
              {/* Future Modules Coming Soon Routes */}
              <Route path="/coming-soon" element={<ComingSoonPage />} />
              <Route path="/crm" element={<ComingSoonPage moduleKey="crm" />} />
              <Route path="/ia" element={<ComingSoonPage moduleKey="ia" />} />
              <Route path="/herramientas" element={<ComingSoonPage moduleKey="herramientas" />} />
              <Route path="/comunidad" element={<ComingSoonPage moduleKey="comunidad" />} />
              <Route path="/dashboard" element={<ComingSoonPage moduleKey="dashboard" />} />
              <Route path="/recursos" element={<ComingSoonPage moduleKey="recursos" />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>

            <Route element={<LegalLayout />}>
              <Route path="/aviso-de-privacidad" element={<PrivacyPolicyPage />} />
              <Route path="/terminos-y-condiciones" element={<TermsPage />} />
              <Route path="/politica-de-cookies" element={<CookiePolicyPage />} />
            </Route>
          </Routes>
          <CookieBanner />
          <Analytics />
        </BrowserRouter>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;
