import React from 'react';
import { 
  Code, 
  Terminal, 
  Database, 
  Layers, 
  Cpu, 
  Layout, 
  GitBranch, 
  Server,
  Workflow
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const FigmaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1-3.5 3.5V2z" />
    <path d="M8.5 16H12v-7H8.5A3.5 3.5 0 1 0 8.5 16z" />
    <path d="M12 9h3.5A3.5 3.5 0 1 1 12 12.5V9z" />
    <path d="M5 18.5A3.5 3.5 0 0 1 8.5 15H12v3.5a3.5 3.5 0 1 1-7 0z" />
  </svg>
);

const techItems = [
  { name: 'JavaScript', category: 'FRONTEND', icon: Code, color: '#00d2ff' },
  { name: 'TypeScript', category: 'FRONTEND', icon: Terminal, color: '#3D81E3' },
  { name: 'React', category: 'FRONTEND', icon: Layout, color: '#00d2ff' },
  { name: 'Next.js', category: 'FRONTEND', icon: Layers, color: '#ffffff' },
  { name: 'Tailwind CSS', category: 'FRONTEND', icon: Cpu, color: '#3ecf8e' },
  { name: 'Python', category: 'BACKEND', icon: Server, color: '#f59e0b' },
  { name: 'PostgreSQL', category: 'BASES DE DATOS', icon: Database, color: '#3D81E3' },
  { name: 'MySQL', category: 'BASES DE DATOS', icon: Database, color: '#00d2ff' },
  { name: 'Supabase', category: 'BACKEND & DB', icon: Workflow, color: '#3ecf8e' },
  { name: 'Firebase', category: 'BACKEND & DB', icon: Layers, color: '#f59e0b' },
  { name: 'Git', category: 'HERRAMIENTAS', icon: GitBranch, color: '#ff4b4b' },
  { name: 'GitHub', category: 'HERRAMIENTAS', icon: GithubIcon, color: '#ffffff' },
  { name: 'Figma', category: 'DISEÑO UX/UI', icon: FigmaIcon, color: '#B600A8' },
];

// Duplicate items twice to ensure smooth seamless loop
const marqueeItems = [...techItems, ...techItems, ...techItems];

export const TechStack: React.FC = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden relative z-10">
      <div className="text-center mb-12">
        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white font-medium">
          Tecnologías y herramientas que utilizamos
        </p>
      </div>

      <div className="relative w-full flex items-center justify-start overflow-hidden">
        {/* Soft fading overlays for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0c0c0c] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0c0c0c] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee gap-5 py-4">
          {marqueeItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={`${item.name}-${index}`}
                className="flex items-center gap-4 bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 shrink-0 transition-all duration-300 hover:border-[#00d2ff]/40 hover:bg-white/[0.04]"
                style={{ minWidth: '220px' }}
              >
                <div 
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10"
                  style={{ color: item.color }}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white leading-none mb-1">{item.name}</h4>
                  <span className="text-[10px] font-bold text-white/40 tracking-wider uppercase leading-none">{item.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
