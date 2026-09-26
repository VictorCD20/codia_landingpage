# Arquitectura Frontend — CODIA

## Visión General

El proyecto **CODIA** utiliza una arquitectura **Multipágina basada en SPA** desarrollada con **React 19**, **TypeScript** y **Vite**, gestionada mediante **React Router DOM v7** y estilizada con **Tailwind CSS v4**.

---

## Capas de la Arquitectura

```
src/
├── api/          # Endpoints Serverless en Vercel (Resend Integration)
├── config/       # Configuración global del sitio (Site identity, enlaces)
├── constants/    # Constantes estáticas de negocio y servicios
├── layouts/      # Plantillas globales de estructura visual (MainLayout, LegalLayout)
├── components/   # Componentes UI reutilizables y secciones
├── pages/        # Vistas independientes de páginas orientadas a rutas
├── types/        # Definiciones de tipos e interfaces TypeScript
└── lib/          # Fachadas para integración futura (Analytics, SEO)
```

### Responsabilidades por Capa

1. **`layouts/`**:
   - `MainLayout.tsx`: Proveedor del marco principal. Incluye `Navbar`, `Footer`, fondo de video persistente y gestión de `ScrollToTop`.
   - `LegalLayout.tsx`: Envolvente simplificado para contenido legal con cabecera y pie de página minimalistas.

2. **`pages/`**:
   - Cada archivo representa una vista accedida mediante una ruta declarada en `App.tsx`.
   - Encapsulan composiciones de componentes o contenido específico sin acoplarse directamente a elementos globales.

3. **`config/` & `constants/`**:
   - Punto único de verdad para la información de contacto (`siteConfig`), menú (`navLinks`) y listas estáticas de servicios o equipo.

4. **`components/`**:
   - Componentes UI puros y secciones de presentación. Los componentes no manipulan estado global de navegación, consumen props o config centralizada.

---

## Estado y Flujo de Datos

- **Navegación:** Gestionada por `react-router-dom` mediante `BrowserRouter`, `NavLink` y `useNavigate`.
- **Formularios:** Procesamiento directo en 2 etapas en `ContactSection.tsx`:
  1. Guardado asíncrono en webhook de Google Sheets.
  2. Disparo de correo via `/api/send-contact-email` (Resend SDK).
  3. Redirección automática a la vista de conversión `/gracias`.
