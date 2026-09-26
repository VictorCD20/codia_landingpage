import type { NavLink } from '../types/navigation';

export const navLinks: NavLink[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Cómo trabajamos', path: '/como-trabajamos' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Contacto', path: '/contacto' },
];

export const serviceSubLinks: NavLink[] = [
  { label: 'Desarrollo Web', path: '/servicios/desarrollo-web' },
  { label: 'Sistemas a Medida', path: '/servicios/sistemas-a-medida' },
  { label: 'Automatización', path: '/servicios/automatizacion' },
];
