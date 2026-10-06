import type { NavLink } from '../types/navigation';

export const navLinks: NavLink[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Soluciones', path: '/soluciones' },
  { label: 'Planes', path: '/planes' },
  { label: 'Demostración', path: '/demo' },
  { label: 'Nosotros', path: '/nosotros' },
];

export const serviceSubLinks: NavLink[] = [
  { label: 'Sitios Web & E-Commerce', path: '/servicios/desarrollo-web' },
  { label: 'Sistemas a Medida & POS', path: '/servicios/sistemas-a-medida' },
  { label: 'Automatización & Notificaciones', path: '/servicios/automatizacion' },
];
