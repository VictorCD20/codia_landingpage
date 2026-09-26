# Catálogo de Componentes — CODIA

## Layouts
- **`MainLayout`** ([`src/layouts/MainLayout.tsx`](file:///c:/codia_landing_page/codia_landingpage/src/layouts/MainLayout.tsx)): Layout principal con `Navbar`, `Footer`, fondo en video, noise SVG y `ScrollToTop`.
- **`LegalLayout`** ([`src/layouts/LegalLayout.tsx`](file:///c:/codia_landing_page/codia_landingpage/src/layouts/LegalLayout.tsx)): Layout limpio para avisos legales.

## Componentes Activos & Reutilizables
- **`Navbar`** ([`src/components/Navbar.tsx`](file:///c:/codia_landing_page/codia_landingpage/src/components/Navbar.tsx)): Navegación responsive con `NavLink`, resaltado activo y menú móvil.
- **`Footer`** ([`src/components/Footer.tsx`](file:///c:/codia_landing_page/codia_landingpage/src/components/Footer.tsx)): Pie de página multipágina con enlaces centralizados.
- **`ScrollToTop`** ([`src/components/ScrollToTop.tsx`](file:///c:/codia_landing_page/codia_landingpage/src/components/ScrollToTop.tsx)): Helper que reinicia el scroll al cambiar de ruta.
- **`ContactSection`** ([`src/components/ContactSection.tsx`](file:///c:/codia_landing_page/codia_landingpage/src/components/ContactSection.tsx)): Formulario activo conectado a Resend + Google Sheets con redirección a `/gracias`.
- **`ProcessSection`** ([`src/components/ProcessSection.tsx`](file:///c:/codia_landing_page/codia_landingpage/src/components/ProcessSection.tsx)): Sección cronológica de 6 pasos.
- **`TeamSection`** ([`src/components/TeamSection.tsx`](file:///c:/codia_landing_page/codia_landingpage/src/components/TeamSection.tsx)): Tarjetas de miembros del equipo e insignias.
- **`ValidationSolutionsSection`** ([`src/components/ValidationSolutionsSection.tsx`](file:///c:/codia_landing_page/codia_landingpage/src/components/ValidationSolutionsSection.tsx)): Grid de soluciones en validación.
- **`Primitives`** ([`src/components/Primitives.tsx`](file:///c:/codia_landing_page/codia_landingpage/src/components/Primitives.tsx)): Botones estilizables e insignias `SectionEyebrow`.

## Componentes de Páginas (`src/pages/`)
- **`HomePage`**: Landing principal desacoplada.
- **`ServicesPage`**: Vista general de servicios.
- **`WebDevelopmentPage`**: Detalle de desarrollo web.
- **`CustomSystemsPage`**: Detalle de sistemas a medida.
- **`AutomationPage`**: Detalle de automatización.
- **`ProcessPage`**: Detalle de proceso de trabajo.
- **`AboutPage`**: Vista de historia y equipo.
- **`ContactPage`**: Página dedicada de diagnóstico.
- **`ThankYouPage`**: Confirmación post-envío de formulario.
- **`PrivacyPolicyPage`**: Aviso de Privacidad.
- **`NotFoundPage`**: Vista de error 404.
