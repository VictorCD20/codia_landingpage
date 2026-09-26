export interface TeamMember {
  name: string;
  href: string;
  pending: boolean;
}

export const teamMembers: TeamMember[] = [
  { name: 'Victor Can', href: 'https://victorportafolio-orcin.vercel.app/', pending: false },
  { name: 'Kevin Vargas', href: 'https://portafolio-kevin-vargas.vercel.app/', pending: false },
  { name: 'Emir Montalvo', href: 'https://portafolio-emir-montalvo.vercel.app/', pending: false },
];
