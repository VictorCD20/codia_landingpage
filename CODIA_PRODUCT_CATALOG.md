# CODIA PRODUCT CATALOG
## Catálogo Maestro de Productos, Módulos y Soluciones

> **Documento Oficial de Producto y Matriz de Valor**  
> **Versión:** 1.0  
> **Estado:** Aprobado para alimentar Home, Planes, Demo, Diagnóstico y Recursos  
> **Proyecto:** CODIA Software  
> **Propósito:** Definir el alcance funcional, problemas que resuelve, beneficios tangibles, tiempos de entrega y modelos de cotización de cada producto antes del desarrollo del Plan Engine.

---

## 1. Matriz de Arquitectura del Producto (Plan Engine)

```
PRODUCTO / MÓDULO ───► DOLOR ESPECÍFICO ───► BENEFICIO MEDIBLE ───► SECTOR ───► DEMO ASOCIADA
```

---

## 2. Catálogo Detallado por Producto

---

### 📦 01. Punto de Venta (POS) & Control de Stock

| Atributo | Definición |
| :--- | :--- |
| **¿Para quién es?** | Cafeterías, restaurantes, boutiques, minisúpers, reposterías y negocios con venta en mostrador o mostrador + delivery. |
| **Problema que resuelve** | Cuentas manuales lentas, descontrol en arqueos de caja al cambio de turno, pérdidas por mermas no registradas y productos agotados sin aviso previo. |
| **Beneficio de negocio** | **Cobros y toma de órdenes en < 30 segundos**, arqueo de caja con 0% de discrepancias y alertas de stock mínimo en tiempo real. |
| **Módulos incluidos** | • Terminal de cobro táctil para tablet / smartphone / PC<br>• Catálogo visual con variantes y extras/modificadores<br>• Control de comandas / tickets para cocina o barra<br>• Módulo de inventarios con descuento automático de insumos<br>• Reporte diario de ventas, ticket promedio y método de pago |
| **Integraciones** | Impresoras térmicas (Bluetooth / USB), lectores de código de barras, pasarelas de pago y exportación a Excel/Sheets. |
| **Tiempo estimado** | 2 a 3 semanas (Implementación llave en mano). |
| **Demo & Evidencias** | MVP Cafetería en vivo: `https://mvp-cafeteria-tau.vercel.app/` |
| **FAQ clave** | *¿Funciona si se va el internet momentáneamente?* Cuenta con almacenamiento local para no interrumpir el cobro en mostrador. |

---

### 🌐 02. Sitios Web Profesionales & E-Commerce

| Atributo | Definición |
| :--- | :--- |
| **¿Para quién es?** | Marcas locales, empresas de servicios, tiendas boutique y negocios que necesitan validar credibilidad y capturar clientes 24/7. |
| **Problema que resuelve** | Dependencia absoluta de redes sociales, pérdida de prospectos por no tener presencia confiable en Google y atención manual repetitiva de catálogos en WhatsApp. |
| **Beneficio de negocio** | **Canal comercial activo 24/7**, incremento en la tasa de conversión de visitas a contactos y posicionamiento en búsquedas locales. |
| **Módulos incluidos** | • Diseño a la medida de alta gama (responsive para móviles y computadoras)<br>• Catálogo interactivo de productos o servicios con buscador<br>• Botón directo de compra / cotización hacia WhatsApp o pasarela<br>• Optimización SEO técnica y velocidad de carga ultrarrápida (&lt; 1.5s)<br>• Certificado de seguridad SSL y dominio propio |
| **Integraciones** | WhatsApp Business API, Stripe, Mercado Pago, Google Analytics 4, Meta Pixel y formularios a Sheets/Email. |
| **Tiempo estimado** | 1 a 2 semanas. |
| **Demo & Evidencias** | Proyectos entregados (FestEasy, Kyros, Sunglass Óptica). |
| **FAQ clave** | *¿Tengo que pagar mensualidades forzosas?* No, el sitio y el dominio son 100% tuyos desde el día de entrega. |

---

### ⚡ 03. Automatización de Procesos & Notificaciones

| Atributo | Definición |
| :--- | :--- |
| **¿Para quién es?** | Negocios con alto volumen de consultas, agendamiento de citas, despachos de pedidos o cobranza recurrente. |
| **Problema que resuelve** | Cientos de horas perdidas respondiendo lo mismo por chat, olvidos en confirmaciones de citas y retrasos en el seguimiento de prospectos. |
| **Beneficio de negocio** | **Ahorro de más de 15 horas semanales de trabajo manual**, respuesta inmediata en &lt; 5 segundos a clientes y cero citas olvidadas. |
| **Módulos incluidos** | • Flujos automatizados de WhatsApp para confirmación de pedidos<br>• Recordatorios automáticos de citas y pagos por WhatsApp/Email<br>• Sincronización instantánea de registros a Google Sheets / CRM<br>• Alertas al dueño o gerente sobre eventos críticos (ej. inventario bajo) |
| **Integraciones** | WhatsApp Cloud API / Webhooks, Make/Zapier, Google Workspace, Resend Email. |
| **Tiempo estimado** | 1 a 2 semanas. |
| **Demo & Evidencias** | Flujo de confirmación automática de FestEasy y alertas operativas. |
| **FAQ clave** | *¿Requiere un número de teléfono especial?* Se puede configurar sobre tu número actual o una línea dedicada de WhatsApp Business. |

---

### 🛠️ 04. Software de Gestión a la Medida (ERP Ligero / Paneles)

| Atributo | Definición |
| :--- | :--- |
| **¿Para quién es?** | Empresas en expansión, talleres, despachos, clínicas o negocios con reglas operativas únicas que ningún software genérico resuelve. |
| **Problema que resuelve** | Información dispersa en 10 archivos de Excel diferentes, falta de trazabilidad de quién hizo qué y desorden al delegar tareas al personal. |
| **Beneficio de negocio** | **Control total de la operación en una sola pantalla**, trazabilidad completa por empleado y reducción de costos operativos por errores. |
| **Módulos incluidos** | • Panel administrativo seguro con usuarios y roles diferenciados<br>• Módulo de seguimiento de órdenes / estatus de servicios en vivo<br>• CRM ligero de clientes con historial de compras y notas internas<br>• Dashboard financiero con ingresos, egresos y proyecciones<br>• Exportación de reportes ejecutivos en PDF y Excel |
| **Integraciones** | Bases de datos relacionales seguras (PostgreSQL/Supabase), APIs de facturación electrónica y servicios en la nube. |
| **Tiempo estimado** | 3 a 6 semanas (con entregas por módulos). |
| **Demo & Evidencias** | Sistema administrativo Kyros & Dashboard de logística. |
| **FAQ clave** | *¿Es escalable si abro otra sucursal?* Sí, la arquitectura multi-tenant permite agregar sucursales y usuarios ilimitados. |

---

### 🔍 05. Diagnóstico Digital & Consultoría Estratégica

| Atributo | Definición |
| :--- | :--- |
| **¿Para quién es?** | Dueños de negocios que saben que necesitan tecnología pero no tienen claro por dónde empezar o temen gastar de más. |
| **Problema que resuelve** | Inversiones erróneas en software que nadie usa y frustración por contratar herramientas sobredimensionadas o insuficientes. |
| **Beneficio de negocio** | **Claridad absoluta del mapa de digitalización**, plan de inversión por fases y garantía de que cada peso invertido resuelve un cuello de botella. |
| **Módulos incluidos** | • Sesión de diagnóstico de 20 a 45 minutos con arquitecto de software<br>• Evaluación de madurez digital (Ventas, Operación, Control)<br>• Propuesta de arquitectura técnica recomendada y ROI estimado<br>• Recomendación del plan óptimo (Start, Business o Enterprise) |
| **Tiempo estimado** | Sesión interactiva de 20 minutos + entrega de reporte en 24h. |
| **Demo & Evidencias** | Assessment Engine interactivo embebido en el Home (`#diagnostico`). |
| **FAQ clave** | *¿El diagnóstico tiene costo?* Es 100% gratuito y sin compromiso de contratación. |

---

## 3. Matriz de Combinación por Sectores

| Sector | Solución Base Recomendada | Módulos Clave | Demo Asociada |
| :--- | :--- | :--- | :--- |
| 🟢 **Alimenticio** | Plan Business (Alimentos) | POS Tablet + Control Insumos + Comandas Cocina + Menú QR | MVP Cafetería |
| 🟡 **Ópticas** | Plan Business (Salud Visual) | Catálogo Digital + Ficha de Graduación + Agendamiento Citas | Sunglass Óptica |
| 🟡 **Retail & Boutiques** | Plan Start / Business (Comercio) | Catálogo E-Commerce + POS Mostrador + Stock Multi-Talla | Tienda Online |
| 🟡 **Servicios Profesionales** | Plan Start + Automatización | Sitio Web Conversión + CRM Ligero + Recordatorios WhatsApp | FestEasy / Kyros |

---

## 4. Próximo Paso en el Roadmap

Este catálogo servirá como **especificación técnica directa para el Sprint 2 (Página `/planes`)**, asegurando que cada plan desglose el valor tangible para el usuario antes de mostrar el comparador de precios.
