# CODIA — IMPLEMENTACIÓN COMPLETA DE SERVICIOS Y DEMOSTRACIONES

Actúa como arquitecto frontend senior, desarrollador React y especialista en UX/UI comercial.

## OBJETIVO

Completar las fases 1, 2, 3 y 4 del catálogo comercial de CODIA y publicar los cambios validados en la rama `main` del repositorio `VictorCD20/codia_landingpage`.

El usuario autoriza expresamente realizar los cambios necesarios, validarlos, integrarlos y subirlos a `main`.

No detenerse después de cada fase para solicitar aprobación, salvo que exista un bloqueo crítico, conflicto de cambios ajenos, riesgo de pérdida de información o una decisión comercial que no pueda inferirse.

## 1. REVISIÓN INICIAL

Antes de modificar:

- Verificar rama actual y estado Git.
- Revisar `main` y `feature/fase-1-servicios`.
- Comprobar si el commit `9a4190e` ya está integrado.
- Inspeccionar `SolutionsPage.tsx`, `SolutionCard.tsx`, `solutions.ts`, `App.tsx`, navegación, formularios y páginas existentes.
- Identificar componentes reutilizables.
- Confirmar los productos propios y sus estados reales.
- No sobrescribir cambios ajenos ni eliminar trabajo existente.

## 2. REDISEÑO VISUAL DE SERVICIOS

La Fase 1 anterior solamente añadió un servicio y modificó un encabezado. Ahora debe realizarse una mejora visual real.

Inspirarse en la captura de referencia proporcionada por el usuario: tarjetas organizadas, iconografía, jerarquía clara, títulos atractivos, textos comerciales y CTA visibles.

No copiar literalmente el diseño.

Conservar la identidad CODIA:

- Fondo oscuro y video existente.
- Azul corporativo `#3D81E3`.
- Tipografía Kanit.
- Glassmorphism y efectos existentes.
- Animaciones discretas.
- Responsive y accesibilidad.

Presentar seis categorías:

1. Sitios web y tiendas online.
2. Software a la medida.
3. Punto de venta e inventarios.
4. Aplicaciones móviles y PWA.
5. Automatización e inteligencia artificial.
6. Consultoría y diagnóstico digital.

Cada tarjeta debe explicar:

- Qué problema resuelve.
- Qué beneficio recibe el negocio.
- Qué puede desarrollar CODIA.
- Qué acción puede realizar el visitante.

Evitar descripciones excesivamente técnicas y afirmaciones comerciales no verificadas.

Diseño esperado: tres columnas en escritorio cuando el espacio lo permita, dos en tablet y una en móvil.

## 3. CATÁLOGO DE PRODUCTOS

Crear `/productos` y fichas independientes `/productos/:slug`, si las rutas no existen.

Evaluar los candidatos:

- E-commerce.
- POS e inventario.
- Delivery.
- CRM inteligente.
- Gestión de gimnasios.

Verificar código, funcionalidad, capturas y titularidad antes de publicar cualquier producto como disponible.

Cada ficha debe contener:

- Nombre.
- Problema que resuelve.
- Beneficios.
- Módulos verificados.
- Capturas autorizadas.
- Estado de disponibilidad.
- CTA correspondiente.

No mostrar precios en las fichas de productos.

No eliminar ni modificar los planes existentes sin necesidad.

## 4. DEMOSTRACIONES INDEPENDIENTES

Cada producto disponible debe contar con una presentación independiente y un CTA **Agendar demostración**.

Las demostraciones serán guiadas, no accesos públicos a sistemas privados.

Los productos no verificados deben mostrarse como En desarrollo o Próximamente, sin simular una demostración funcional.

No utilizar videos o capturas de un producto para representar otro.

## 5. FORMULARIO CENTRALIZADO

Reutilizar el flujo comercial existente y comprobar el contrato de `submitContactDiagnostic`.

Capturar:

- Producto solicitado.
- Nombre.
- Negocio.
- Correo.
- WhatsApp.
- Necesidad principal.
- Origen de campaña, cuando exista.

Verificar que el identificador del producto se conserve hasta el destino real de almacenamiento y seguimiento.

Mantener validaciones, privacidad, anti-spam y estados de error.

No crear endpoints duplicados ni introducir credenciales.

## 6. EXCLUSIONES

No utilizar información, imágenes, marcas, sistemas ni código privado de:

- Carlota.
- Sunglass Shop.
- PowerMX.

Revisar especialmente las referencias existentes en `ProjectsShowcase.tsx` y evitar que aparezcan en el nuevo catálogo.

No eliminar archivos originales de clientes sin autorización.

## 7. EXPERIENCIA COMERCIAL

La navegación debe permitir llegar a un servicio, producto o demostración en uno o dos clics desde las secciones principales.

Los CTA deben ser coherentes:

- Servicios personalizados → Solicitar propuesta.
- Productos demostrables → Agendar demostración.
- Productos no disponibles → Próximamente o Solicitar información.
- Diagnóstico → Evaluar mi negocio.

Evitar tarjetas decorativas sin acciones útiles.

## 8. PRUEBAS

Ejecutar las pruebas disponibles:

- TypeScript.
- Build.
- Lint.
- Navegación y rutas.
- CTA.
- Formularios.
- Responsive móvil, tablet y escritorio.
- Accesibilidad básica.
- SEO y metadatos.
- Regresión de páginas existentes.

Realizar revisión visual del resultado y corregir problemas detectados.

## 9. GIT Y PUBLICACIÓN

Una vez validados los cambios:

1. Registrar cambios en commits claros.
2. Integrar la rama de trabajo a `main`, conservando el historial.
3. Resolver únicamente conflictos seguros y comprendidos.
4. Hacer push a `origin/main`.
5. Verificar el estado de GitHub.
6. Comprobar el despliegue en Vercel si se dispone de acceso.
7. No declarar producción actualizada sin verificarla.

Si GitHub exige Pull Request o revisiones obligatorias, respetar esas protecciones e informar el bloqueo.

No realizar force push.

## 10. REPORTE FINAL

Entregar:

- Fases completadas.
- Archivos creados y modificados.
- Servicios publicados.
- Productos publicados y sus estados.
- Demostraciones disponibles.
- Formularios conectados.
- Pruebas ejecutadas y resultados.
- Commit final y rama.
- Estado real de `main`.
- Estado de despliegue.
- Pendientes o bloqueos.

**Resultado esperado:** un sitio CODIA visualmente atractivo, profesional, orientado a captar clientes, con servicios claros y un catálogo de productos propios que permita solicitar demostraciones independientes.
