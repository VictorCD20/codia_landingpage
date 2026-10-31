import React from 'react';
import { m } from 'motion/react';
import { SectionEyebrow } from '../components/Primitives';
import { ProductCard } from '../components/products/ProductCard';
import { products } from '../data/products';
import { CTASection } from '../components/solutions/CTASection';
import { Package } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const availableProducts = products.filter((p) => p.status === 'available');
  const inProgressProducts = products.filter((p) => p.status !== 'available');

  return (
    <div className="pt-16 md:pt-20 pb-24 text-white">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 text-center mb-20 relative z-10">
        <div className="liquid-glass liquid-glass-clear rounded-[32px] px-6 py-10 sm:px-12 sm:py-14 max-w-4xl mx-auto">
          <div className="flex justify-center mb-4">
            <SectionEyebrow label="Catálogo de Productos Propios" tag="Software CODIA" />
          </div>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl mx-auto"
          >
            Sistemas desarrollados{' '}
            <span
              className="block animate-shiny mt-1"
              style={{
                backgroundImage: 'linear-gradient(to right, #ffffff 0%, #A4F4FD 25%, #00d2ff 50%, #3ecf8e 75%, #ffffff 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                filter: 'url(#c3-noise)',
              }}
            >
              y probados por CODIA.
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 text-white/70 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed"
          >
            Cada producto es de tu propiedad: sin rentas mensuales forzosas, con código fuente incluido y soporte técnico directo. Solicita una demostración del producto que más se ajuste a tu negocio.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>Disponible ahora: POS Cafetería</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400" aria-hidden="true" />
              <span>En desarrollo: E-Commerce, Delivery</span>
            </div>
          </m.div>
        </div>
      </section>

      {/* Available products */}
      {availableProducts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-20 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <Package className="w-5 h-5 text-emerald-400" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-white">Disponibles para demostración</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableProducts.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </div>
        </section>
      )}

      {/* In-progress & coming-soon products */}
      {inProgressProducts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-20 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400 mt-0.5" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-white">En construcción & próximamente</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inProgressProducts.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </div>
        </section>
      )}

      <CTASection
        title="¿No encuentras lo que necesitas?"
        subtitle="Desarrollamos software a la medida de tu operación. Agenda una sesión de diagnóstico gratuita."
      />
    </div>
  );
};
