# Mapa de Rutas — CODIA

Fuente de verdad: `src/App.tsx`. Si agregas una ruta, actualiza también:
`vercel.json` (lista de rewrites, o devolverá 404), `public/sitemap.xml` y `src/config/metadata.ts`.

| Ruta | Página | Layout | Notas |
| :--- | :--- | :--- | :--- |
| `/` | `HomePage` | `MainLayout` | Hero, diagnóstico digital, demo y planes resumidos. |
| `/soluciones` | `SolutionsPage` | `MainLayout` | Catálogo de soluciones. |
| `/productos` | `ProductsPage` | `MainLayout` | Catálogo de productos. |
| `/productos/:slug` | `ProductDetailPage` | `MainLayout` | Slugs: `pos-cafeteria`, `ecommerce`, `delivery`, `crm`, `gimnasios` (`src/data/products.ts`). Slug inválido muestra `NotFoundPage`. |
| `/planes` | `PricingPage` | `MainLayout` | Planes Arranque, Operativo y Completo. |
| `/demo` | `DemoPage` | `MainLayout` | Solicitud de demostración. |
| `/servicios/desarrollo-web` | `WebDevelopmentPage` | `MainLayout` | |
| `/servicios/sistemas-a-medida` | `CustomSystemsPage` | `MainLayout` | |
| `/servicios/automatizacion` | `AutomationPage` | `MainLayout` | |
| `/como-trabajamos` | `ProcessPage` | `MainLayout` | |
| `/nosotros` | `AboutPage` | `MainLayout` | |
| `/contacto` | `ContactPage` | `MainLayout` | Formulario; envía a `/api/send-contact-email`. |
| `/gracias` | `ThankYouPage` | `MainLayout` | `noindex`. |
| `/coming-soon`, `/crm`, `/ia`, `/herramientas`, `/comunidad`, `/dashboard`, `/recursos` | `ComingSoonPage` | `MainLayout` | Módulos futuros, `noindex`. |
| `/aviso-de-privacidad` | `PrivacyPolicyPage` | `LegalLayout` | |
| `/terminos-y-condiciones` | `TermsPage` | `LegalLayout` | |
| `/politica-de-cookies` | `CookiePolicyPage` | `LegalLayout` | |
| `*` | `NotFoundPage` | `MainLayout` | En producción, Vercel responde HTTP 404 con `public/404.html`. |

## Redirecciones (301/308, `vercel.json` y `App.tsx`)

`/home` → `/` · `/servicios` → `/soluciones` · `/demostracion` → `/demo` · `/proximamente` → `/coming-soon`

## API

`POST /api/send-contact-email` (Resend). CORS limitado a codiasoftware.online y localhost:5173.

## Código sin uso (sin ruta ni importadores)

`ServicesPage.tsx`, `ContactForm.tsx`, `HeroSection.tsx`.
