# Documentación funcional de CODAI

## 1. Descripción general

CODAI es una aplicación web dividida en dos partes principales:

### A. Sitio público

La parte pública será una **one page**. Toda la información del sitio estará concentrada en una sola vista y el menú de navegación moverá al usuario entre secciones mediante anclas o desplazamiento interno.

### B. Panel administrativo

La parte privada será un **panel administrativo interno** con acceso mediante login. Este panel permitirá al equipo gestionar solicitudes, registrar clientes, controlar cobros y llevar seguimiento mediante notas.

El proyecto está pensado para comenzar con una base simple usando **HTML, CSS y JavaScript**, evitando complejidad innecesaria en esta primera etapa.

---

## 2. Objetivo del sistema

Desarrollar una aplicación web que permita:

- presentar a CODAI mediante una one page pública;
- captar solicitudes mediante un formulario de contacto;
- administrar internamente solicitudes, clientes, cobros y notas;
- mantener una base organizada para escalar después a funciones más amplias.

---

## 3. Alcance general

### Parte pública

- mostrar información del equipo y servicios;
- comunicar capacidades técnicas;
- mostrar el proceso de trabajo;
- captar prospectos con un formulario.

### Parte privada

- autenticar usuarios internos;
- visualizar solicitudes recibidas;
- convertir solicitudes en clientes;
- registrar cobros;
- agregar notas y seguimiento;
- centralizar la operación interna del equipo.

---

## 4. Secciones del sitio público

La parte pública será una sola página con las siguientes secciones:

### 4.1 Inicio

Sección principal con:

- propuesta de valor;
- mensaje introductorio;
- llamada a la acción;
- identidad general de CODAI.

### 4.2 Servicios

Debe mostrar los servicios que ofrece el equipo, por ejemplo:

- sitios web informativos;
- sitios web comerciales;
- catálogos digitales;
- SaaS;
- inventarios;
- automatizaciones;
- mejora UI/UX.

### 4.3 Enfoque de trabajo

En esta parte se pueden destacar las capacidades y la forma en que CODAI desarrolla sus servicios, por ejemplo:

- desarrollo frontend;
- diseño de interfaces;
- experiencia de usuario;
- organización visual;
- mejora de flujo y estructura.

### 4.4 Proceso de trabajo

Debe explicar cómo trabaja CODAI:

- levantamiento de información;
- análisis de necesidad;
- propuesta;
- desarrollo;
- revisión;
- entrega;
- seguimiento.

### 4.5 Contacto

Formulario para captar solicitudes.

Campos base:

- nombre;
- correo;
- teléfono;
- qué desea.

---

## 5. Panel administrativo

El panel administrativo corresponde al área interna del sistema.

### Objetivo

Permitir que los integrantes del equipo gestionen la operación comercial básica del proyecto.

### Enfoque de implementación inicial

Para no complicar el desarrollo en esta etapa, el panel administrativo puede construirse como una carpeta separada dentro del proyecto, con módulos tipo CRUD hechos en JavaScript.

Ejemplo conceptual:

- `/admin/login.html`
- `/admin/dashboard.html`
- `/admin/solicitudes.html`
- `/admin/clientes.html`
- `/admin/cobros.html`
- `/admin/notas.html`

Y su lógica en JavaScript separada por módulo.

---

## 6. Perfiles del sistema

### 6.1 Administrador

En la etapa actual habrá **3 administradores**.

Todos tendrán permisos completos para operar el sistema.

Permisos del administrador:

- iniciar sesión;
- ver solicitudes;
- crear clientes;
- editar clientes;
- registrar cobros;
- editar cobros;
- agregar notas;
- cambiar estados;
- ver historial;
- consultar seguimiento;
- administrar la operación interna.

### 6.2 Collaborator (futuro)

Aunque no habrá colaboradores activos en esta etapa, conviene dejar el rol contemplado para crecimiento futuro.

Permisos sugeridos:

- ver solicitudes;
- ver clientes;
- ver seguimiento;
- consultar avances;
- acceso limitado a información operativa.

---

## 7. Flujo general del sistema

### 7.1 Flujo público

1. El usuario entra a la one page.
2. Navega por las secciones mediante el menú.
3. Llega al formulario de contacto.
4. Envía su información.
5. La solicitud se registra en el sistema.

### 7.2 Flujo interno de solicitudes

1. Un administrador entra al panel.
2. Revisa las solicitudes recibidas.
3. Cambia el estado de la solicitud.
4. Da seguimiento o la convierte en cliente.

### 7.3 Flujo de clientes

1. El administrador crea o convierte un registro en cliente.
2. Asigna el servicio contratado.
3. Registra responsable interno.
4. Actualiza estado del proyecto.

### 7.4 Flujo de cobros

1. El administrador registra el cobro asociado al cliente.
2. Define monto, concepto y estado del pago.
3. Actualiza el cobro conforme avance el servicio.

### 7.5 Flujo de notas

1. El administrador agrega una nota al cliente o solicitud.
2. La nota guarda fecha y responsable.
3. El sistema muestra el historial de seguimiento.

---

## 8. Módulos del panel administrativo

### 8.1 Login

Responsable de autenticar a los usuarios internos.

Funciones esperadas:

- validar correo y contraseña;
- permitir acceso al panel;
- restringir acceso a usuarios no autenticados.

### 8.2 Dashboard

Vista de resumen general.

Debe mostrar:

- solicitudes nuevas;
- clientes activos;
- cobros pendientes;
- actividad reciente;
- notas recientes.

### 8.3 Solicitudes

Módulo para revisar los contactos enviados desde el formulario.

Debe permitir:

- listar solicitudes;
- cambiar estado;
- revisar detalle;
- convertir en cliente.

### 8.4 Clientes

Módulo para administrar clientes reales.

Debe permitir:

- crear cliente manualmente;
- editar datos;
- asignar servicio;
- definir responsable;
- consultar historial.

### 8.5 Cobros

Módulo para registrar y controlar pagos.

Debe permitir:

- crear cobro;
- editar cobro;
- asociar cobro a cliente;
- cambiar estado del pago.

### 8.6 Notas / seguimiento

Módulo para registrar observaciones internas.

Debe permitir:

- agregar nota;
- ver historial;
- asociar nota a cliente o solicitud;
- mostrar autor y fecha.

---

## 9. Estados sugeridos

### Solicitudes

- nueva
- en revisión
- contactado
- convertida a cliente
- descartada

### Proyecto del cliente

- pendiente
- en proceso
- entregado
- pausado
- cancelado

### Cobros

- pendiente
- abonado
- pagado
- vencido

---

## 10. Modelo funcional de datos

### Tabla sugerida: `contacts`

Para solicitudes del formulario.

Campos base:

- id
- name
- email
- phone
- description
- status
- created_at
- updated_at
- assigned_to

### Tabla sugerida: `clients`

Para clientes reales.

Campos base:

- id
- contact_id
- business_name
- client_name
- email
- phone
- service_type
- project_status
- assigned_to
- created_at
- updated_at

### Tabla sugerida: `charges`

Para cobros.

Campos base:

- id
- client_id
- amount
- concept
- payment_status
- due_date
- notes
- created_by
- created_at
- updated_at

### Tabla sugerida: `notes`

Para seguimiento.

Campos base:

- id
- client_id
- contact_id
- note
- created_by
- created_at
- updated_at

### Tabla sugerida: `profiles`

Para usuarios internos.

Campos base:

- id
- name
- email
- role
- is_active
- created_at
- updated_at

---

## 11. Tecnología actual

Para esta etapa inicial, la tecnología definida es:

- **HTML** para la estructura;
- **CSS** para estilos;
- **JavaScript** para la lógica e interacción.

### Motivo

Se trabajará con una base simple para:

- no perderse en complejidad innecesaria;
- entender bien el flujo del sistema;
- tener control del proyecto;
- construir primero una lógica clara antes de migrar a estructuras más avanzadas.

---

## 12. Propuesta de estructura inicial del proyecto

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
