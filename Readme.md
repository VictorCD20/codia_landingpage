# CODAI

CODAI es una aplicación web desarrollada para presentar servicios digitales mediante una **one page pública** y, al mismo tiempo, administrar internamente solicitudes, clientes, cobros y notas a través de un **panel administrativo**.

El proyecto está planteado para comenzar con una base simple usando **HTML, CSS y JavaScript**, con una estructura modular que permita crecer de forma ordenada.

---

## Descripción general

CODAI se divide en dos partes principales:

### Sitio público

La parte pública funciona como una **one page** donde toda la información está concentrada en una sola vista. El menú de navegación mueve al usuario entre secciones mediante scroll interno.

### Panel administrativo

La parte privada permite que el equipo gestione la operación interna del proyecto. Aquí se podrán revisar solicitudes, registrar clientes, controlar cobros y dar seguimiento mediante notas.

---

## Objetivo

Desarrollar una aplicación web que permita:

- presentar a CODAI de forma clara y profesional;
- captar solicitudes mediante un formulario de contacto;
- administrar internamente la información comercial del equipo;
- mantener una base ordenada para futuras ampliaciones.

---

## Estructura funcional

### Parte pública

La one page pública contempla las siguientes secciones:

- **Inicio**
- **Servicios**
- **Enfoque de trabajo**
- **Proceso de trabajo**
- **Contacto**

### Panel administrativo

La parte administrativa contempla los siguientes módulos:

- **Login**
- **Dashboard**
- **Solicitudes**
- **Clientes**
- **Cobros**
- **Notas / Seguimiento**

---

## Perfiles del sistema

Actualmente el sistema está pensado para trabajar con:

- **3 administradores**

Todos los usuarios activos tendrán permisos completos sobre la operación interna.

### Rol disponible

- `admin`

### Rol contemplado a futuro

- `collaborator`

El rol `collaborator` queda previsto para una etapa posterior, con acceso limitado principalmente a visualización y seguimiento.

---

## Flujo general

### Flujo público

1. El usuario entra a la one page.
2. Navega entre secciones.
3. Completa el formulario de contacto.
4. La solicitud se registra en el sistema.

### Flujo interno

1. Un administrador inicia sesión.
2. Revisa solicitudes recibidas.
3. Da seguimiento a la solicitud.
4. Convierte la solicitud en cliente si procede.
5. Registra cobros y agrega notas de seguimiento.

---

## Módulos principales

### Login

Permite autenticar a los usuarios internos y restringir el acceso al panel administrativo.

### Dashboard

Muestra un resumen general del sistema, incluyendo actividad reciente, solicitudes nuevas, clientes activos y cobros pendientes.

### Solicitudes

Permite listar y gestionar los contactos enviados desde el formulario público.

### Clientes

Permite crear, editar y administrar clientes reales del sistema.

### Cobros

Permite registrar montos, conceptos y estado de pago por cliente.

### Notas / Seguimiento

Permite registrar observaciones internas y mantener historial de seguimiento.

---

## Modelo funcional de datos

Las entidades principales del sistema son:

### `contacts`

Almacena las solicitudes enviadas desde el formulario público.

Campos base:

- `id`
- `name`
- `email`
- `phone`
- `description`
- `status`
- `created_at`
- `updated_at`
- `assigned_to`

### `clients`

Almacena clientes reales.

Campos base:

- `id`
- `contact_id`
- `business_name`
- `client_name`
- `email`
- `phone`
- `service_type`
- `project_status`
- `assigned_to`
- `created_at`
- `updated_at`

### `charges`

Almacena cobros relacionados con clientes.

Campos base:

- `id`
- `client_id`
- `amount`
- `concept`
- `payment_status`
- `due_date`
- `notes`
- `created_by`
- `created_at`
- `updated_at`

### `notes`

Almacena notas de seguimiento.

Campos base:

- `id`
- `client_id`
- `contact_id`
- `note`
- `created_by`
- `created_at`
- `updated_at`

### `profiles`

Almacena usuarios internos del sistema.

Campos base:

- `id`
- `name`
- `email`
- `role`
- `is_active`
- `created_at`
- `updated_at`

---

## Tecnología actual

En esta etapa inicial, el proyecto utiliza:

- **HTML**
- **CSS**
- **JavaScript**

### Motivo

El objetivo es construir primero una base clara, entendible y funcional, evitando complejidad innecesaria mientras se define correctamente la lógica del sistema.

---

## Estructura inicial sugerida

```text
codai/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── public/
│   │   ├── navigation.js
│   │   └── contact-form.js
│   └── shared/
│       ├── validators.js
│       └── helpers.js
├── admin/
│   ├── login.html
│   ├── dashboard.html
│   ├── solicitudes.html
│   ├── clientes.html
│   ├── cobros.html
│   ├── notas.html
│   ├── css/
│   │   └── admin.css
│   └── js/
│       ├── login.js
│       ├── dashboard.js
│       ├── solicitudes.js
│       ├── clientes.js
│       ├── cobros.js
│       ├── notas.js
│       └── crud/
│           ├── contacts-crud.js
│           ├── clients-crud.js
│           ├── charges-crud.js
│           └── notes-crud.js
└── docs/
    └── arquitectura-funcional.md
```
