# CLAUDE.md — codia_landingpage

## Proyecto
Sitio corporativo de CODIA Software. URL producción: https://codiasoftware.online/
Repositorio: https://github.com/VictorCD20/codia_landingpage
Stack: Vite + React + TypeScript. Deploy: Vercel.

## Orquestador de skills
Repositorio central de conocimiento: https://github.com/VictorCD20/orquestador_victor (rama: main)
Antes de crear una skill nueva, verificar `registry/claude-skills.md` en ese repo para evitar duplicados.

## Reglas de desarrollo

1. Entender el propósito antes de implementar cualquier cambio.
2. Revisar componentes y estilos existentes antes de crear nuevos.
3. No cambiar el stack tecnológico sin autorización explícita.
4. No presentar datos mock como datos reales.
5. Separar estrictamente la lógica de cliente de los recursos reutilizables.
6. Ejecutar `npm run dev` (puerto 5173) para verificar cambios visuales.
7. Validar en móvil y escritorio antes de declarar completo.

## Skills recomendadas para este proyecto

Para dashboards / paneles administrativos: `dataviz`, `data:build-dashboard`, `frontend-design:frontend-design`, `engineering:architecture`
Para diseño UI: `design-skills:design-systems`, `artifact-design`
Para diagramas: `artifact-diagramming`

## Skills — política de creación

Solo crear una skill nueva si:
- No existe equivalente en el inventario del orquestador.
- El procedimiento es verdaderamente reutilizable (no específico de este cliente).
- Se valida el formato antes de registrarla.
- Se abre un PR en `orquestador_victor`, nunca se fusiona directamente a main sin revisión.

## Lo que NO es este proyecto

No mezclar con: Flutter app personal, trabajos universitarios, proyectos de otros clientes (Carlota, Sano Rewards, Autos Family).

## Contexto de negocio

CODIA Software — soluciones digitales para negocios locales, Mérida, Yucatán.
Equipo: Víctor (dev principal), Emir, Kevin.
Planes comerciales: Arranque, Operativo, Completo.
