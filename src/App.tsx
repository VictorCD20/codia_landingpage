import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { LegalLayout } from './layouts/LegalLayout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WebDevelopmentPage } from './pages/WebDevelopmentPage';
import { CustomSystemsPage } from './pages/CustomSystemsPage';
import { AutomationPage } from './pages/AutomationPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/desarrollo-web" element={<WebDevelopmentPage />} />
          <Route path="/servicios/sistemas-a-medida" element={<CustomSystemsPage />} />
          <Route path="/servicios/automatizacion" element={<AutomationPage />} />
          <Route path="/como-trabajamos" element={<ProcessPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/gracias" element={<ThankYouPage />} />
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
