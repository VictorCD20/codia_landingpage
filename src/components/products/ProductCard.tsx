import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'motion/react';
import { Check, ArrowRight, LayoutGrid, ShoppingBag, Truck, Users, Dumbbell } from 'lucide-react';
import type { ProductItem } from '../../data/products';

interface ProductCardProps {
  product: ProductItem;
  index?: number;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  LayoutGrid,
  ShoppingBag,
  Truck,
  Users,
  Dumbbell,
};

const statusConfig = {
  available: {
    dot: 'bg-emerald-400 animate-pulse',
    badge: 'text-emerald-300 border-emerald-400/40 bg-emerald-500/10',
  },
  development: {
    dot: 'bg-amber-400',
    badge: 'text-amber-200 border-amber-400/40 bg-amber-500/10',
  },
  'coming-soon': {
    dot: 'bg-white/40',
    badge: 'text-white/50 border-white/20 bg-white/5',
  },
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const IconComponent = iconMap[product.iconName] || LayoutGrid;
  const status = statusConfig[product.status];
  const top3 = product.benefits.slice(0, 3);

  return (
    <m.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="liquid-glass rounded-2xl border border-white/10 p-6 flex flex-col gap-5 hover:border-white/20 transition-colors duration-300 group"
      aria-label={`Producto: ${product.name}`}
    >
      {/* Status + icon row */}
      <div className="flex items-start justify-between gap-3">
        <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 shrink-0">
          <IconComponent className="w-5 h-5" />
        </div>
        <span
          className={`inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide border rounded-full px-2.5 py-1 ${status.badge}`}
          aria-label={`Estado: ${product.statusLabel}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} aria-hidden="true" />
          {product.statusLabel}
        </span>
      </div>

      {/* Category + name + tagline */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] text-white/40 font-medium">{product.category}</span>
        <h3 className="text-white text-lg font-semibold leading-snug">{product.name}</h3>
        <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-2">{product.tagline}</p>
      </div>

      {/* Top 3 benefits */}
      <ul className="flex flex-col gap-2" aria-label="Beneficios clave">
        {top3.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-xs text-white/65">
            <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#3ecf8e]" aria-hidden="true" />
            <span className="font-light">{benefit}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto pt-2">
        <Link
          to={`/productos/${product.slug}`}
          className="inline-flex items-center justify-center gap-2 rounded-full text-xs font-semibold px-5 py-2.5 w-full border border-white/15 text-white/80 hover:border-[#00d2ff]/40 hover:text-[#00d2ff] transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#00d2ff] outline-none"
          aria-label={`Ver detalles de ${product.name}`}
        >
          <span>Ver ficha completa</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </m.article>
  );
};
