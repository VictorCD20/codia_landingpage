import React from 'react';

interface IndustryBadgeProps {
  status: 'available' | 'upcoming';
  label?: string;
  className?: string;
}

export const IndustryBadge: React.FC<IndustryBadgeProps> = ({ 
  status, 
  label, 
  className = '' 
}) => {
  const isAvailable = status === 'available';
  const displayLabel = label || (isAvailable ? 'Disponible hoy' : 'Próximamente');

  if (isAvailable) {
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>{displayLabel}</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
      <span>{displayLabel}</span>
    </span>
  );
};
