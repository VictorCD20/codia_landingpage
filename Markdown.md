Inicialmente habrá 3 usuarios internos, y los 3 tendrán rol de administrador.

Debe existir el rol `admin` como rol operativo principal del sistema.

También puede contemplarse el rol `collaborator` para una etapa futura, pero por ahora no habrá colaboradores activos.

El rol `collaborator` debe pensarse como un perfil con acceso limitado principalmente a visualización de solicitudes, clientes y seguimiento, sin control total sobre la operación.

Por ahora, los 3 usuarios reales del sistema serán administradores.

## Usuarios internos y roles

El sistema tendrá inicialmente 3 usuarios internos activos, y los 3 serán administradores.

### Rol principal actual
- admin

Los 3 integrantes del equipo usarán el sistema con permisos completos de administrador.

### Permisos del admin
- iniciar sesión
- ver solicitudes
- crear clientes
- editar clientes
- registrar cobros
- editar cobros
- agregar notas de seguimiento
- cambiar estados
- ver historial
- asignar responsables
- administrar operación interna

### Rol opcional futuro
- collaborator

Aunque no habrá colaboradores activos por ahora, sí conviene dejar contemplado este rol para una etapa futura.

El collaborator debe tener un acceso más limitado, orientado principalmente a:
- visualizar solicitudes
- visualizar clientes
- visualizar seguimiento y notas
- consultar avances

Por ahora, la lógica del sistema debe asumir que los 3 usuarios reales son administradores.