import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Code2, Palette, Database } from 'lucide-react';
import { SectionEyebrow } from './Primitives';

// Inline SVG components for Github and Linkedin to prevent lucide dependency mismatches
const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const teamMembers = [
  {
    name: 'Victor Can',
    role: 'Lead Developer & Full-Stack Engineer',
    specialties: ['React / Next.js', 'Node.js', 'UX/UI & SEO'],
    icon: Code2,
    gradient: 'from-[#3D81E3] to-[#00d2ff]',
    portfolioUrl: 'https://portafolio-victor-can.vercel.app/',
    githubUrl: 'https://github.com/VictorCD20',
    linkedinUrl: 'https://www.linkedin.com/in/victor-can-dominguez-722711366/',
    accentColor: '#3D81E3'
  },
  {
    name: 'Kevin Vargas',
    role: 'Frontend Developer & UI/UX Designer',
    specialties: ['React / Tailwind', 'Diseño de Interfaz', 'Figma Prototyping'],
    icon: Palette,
    gradient: 'from-[#B600A8] to-[#ff007f]',
    portfolioUrl: 'https://portafolio-kevin-vargas.vercel.app/',
    githubUrl: 'https://github.com/',
    linkedinUrl: 'https://www.linkedin.com/',
    accentColor: '#B600A8'
  },
  {
    name: 'Emir Montalvo',
    role: 'Backend Developer & Systems Architect',
    specialties: ['Laravel / PHP', 'SQL / Bases de Datos', 'Infraestructura Cloud'],
    icon: Database,
    gradient: 'from-[#10b981] to-[#3ecf8e]',
    portfolioUrl: 'https://portafolio-emir-montalvo.vercel.app/',
    githubUrl: 'https://github.com/',
    linkedinUrl: 'https://www.linkedin.com/',
    accentColor: '#10b981'
  }
];

export const TeamSection: React.FC = () => {
  return (
    <section id="equipo" className="relative z-20 pt-20 pb-40 px-6 max-w-6xl mx-auto">
      <div className="mb-20 flex flex-col items-center">
        <SectionEyebrow label="Conoce al Equipo" tag="Talento" />
        <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-center heading-gradient" style={{ filter: 'url(#c3-noise)' }}>
          Nuestros Portafolios
        </h2>
        <p className="text-white/60 text-sm md:text-base text-center max-w-lg mt-4 leading-relaxed font-light">
          Los ingenieros y diseñadores detrás de CODIA. Explora nuestros portafolios individuales para conocer nuestra experiencia, proyectos personales e iniciativas tecnológicas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, i) => {
          const IconComponent = member.icon;
          return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="flex flex-col relative w-full liquid-glass rounded-[32px] p-8 border border-white/10 shadow-xl group transition-all duration-300"
            >
              {/* Soft glow background on card hover */}
              <div className="absolute inset-0 bg-radial from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[32px]" />

              <div className="flex items-start justify-between mb-8">
                {/* Feature Icon Container */}
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${member.gradient} text-white shadow-lg`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a 
                    href={member.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-full border border-white/5 hover:border-white/20 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-200"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-full border border-white/5 hover:border-white/20 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-200"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title & Info */}
              <div className="flex-1 flex flex-col mb-8">
                <h3 className="text-white font-semibold text-2xl group-hover:text-white transition-colors duration-200 mb-1">
                  {member.name}
                </h3>
                <span className="text-brand text-xs font-semibold uppercase tracking-wider mb-4">
                  {member.role}
                </span>

                <div className="flex flex-wrap gap-2 mt-2">
                  {member.specialties.map((spec) => (
                    <span 
                      key={spec} 
                      className="text-[11px] font-medium text-white/60 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={member.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-white text-black font-semibold text-sm transition-all hover:bg-neutral-100 hover:shadow-lg hover:shadow-white/5 active:scale-[0.98] cursor-pointer"
              >
                <span>Explorar Portafolio</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
