import React from 'react';
import { ChevronRight } from 'lucide-react';

export const AppleButton: React.FC<{ label?: string, full?: boolean }> = ({ label = "Iniciar Proyecto", full = false }) => (
  <a 
    href="#contacto"
    className={`group inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-5 py-3 transition-all active:scale-[0.98] btn-slide ${full ? 'w-full' : ''}`}
  >
    {label}
    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-[2px]" />
  </a>
);

export const SectionEyebrow: React.FC<{ label: string, tag?: string }> = ({ label, tag }) => (
  <div className="flex items-center gap-2 text-xs font-medium text-white/70">
    <span className="w-1.5 h-1.5 rounded-full bg-white" />
    {label}
    {tag && <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50 ml-2">{tag}</span>}
  </div>
);
