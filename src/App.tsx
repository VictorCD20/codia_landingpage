import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { LegalLayout } from './layouts/LegalLayout';
import { HomePage } from './pages/HomePage'; // Archived full homepage view
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
import { ComingSoonPage } from './pages/ComingSoonPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/soluciones" element={<SolutionsPage />} />
          <Route path="/planes" element={<PricingPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/demostracion" element={<DemoPage />} />
          <Route path="/servicios" element={<SolutionsPage />} />
          <Route path="/servicios/desarrollo-web" element={<WebDevelopmentPage />} />
          <Route path="/servicios/sistemas-a-medida" element={<CustomSystemsPage />} />
          <Route path="/servicios/automatizacion" element={<AutomationPage />} />
          <Route path="/como-trabajamos" element={<ProcessPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/gracias" element={<ThankYouPage />} />
          
          {/* Future Modules Coming Soon Routes */}
          <Route path="/coming-soon" element={<ComingSoonPage />} />
          <Route path="/proximamente" element={<ComingSoonPage />} />
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
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
