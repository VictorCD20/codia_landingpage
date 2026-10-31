import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { m } from 'motion/react';
import { Check, X, ArrowLeft, Calendar, Mail, Sparkles, LayoutGrid, ShoppingBag, Truck, Users, Dumbbell } from 'lucide-react';
import { SectionEyebrow } from '../components/Primitives';
import { products } from '../data/products';
import { submitContactDiagnostic } from '../services/contactService';
import { telemetry } from '../tracking/tracker';

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

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  const [notifyName, setNotifyName] = useState('');
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySubmitted, setNotifySubmitted] = useState(false);
  const [notifyLoading, setNotifyLoading] = useState(false);

  if (!product) return <Navigate to="/404" replace />;

  const IconComponent = iconMap[product.iconName] || LayoutGrid;
  const status = statusConfig[product.status];

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    setNotifyLoading(true);
    telemetry.trackCTAClick(`ProductNotify_${product.slug}`, 'notify');
    try {
      await submitContactDiagnostic({
        name: notifyName,
        businessName: '—',
        email: notifyEmail,
        phone: '',
        solutionType: `Notificación: ${product.name}`,
        message: `Solicitud de notificación de lanzamiento para: ${product.name}`,
        privacyAccepted: true,
        marketingAccepted: true,
      });
    } catch {
      // best-effort — show success either way
    } finally {
      setNotifyLoading(false);
      setNotifySubmitted(true);
    }
  };

  return (
    <div className="pt-16 md:pt-20 pb-24 text-white">

      {/* Back nav */}
      <div className="max-w-6xl mx-auto px-6 pt-6 mb-8 relative z-10">
        <Link
          to="/productos"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#00d2ff] outline-none rounded"
          aria-label="Volver al catálogo de productos"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Catálogo de productos
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
        <div className="liquid-glass liquid-glass-clear rounded-[32px] px-6 py-10 sm:px-12 sm:py-14 max-w-4xl mx-auto">
          <div className="flex justify-center mb-4">
            <SectionEyebrow label={product.category} tag="Producto CODIA" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50">
              <IconComponent className="w-8 h-8" />
            </div>

            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide border rounded-full px-3 py-1.5 ${status.badge}`}
              aria-label={`Estado: ${product.statusLabel}`}
            >
              <span className={`w-2 h-2 rounded-full ${status.dot}`} aria-hidden="true" />
              {product.statusLabel}
            </span>

            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-center max-w-3xl"
            >
              {product.name}
            </m.h1>

            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-white/65 max-w-xl text-center text-base font-light leading-relaxed"
            >
              {product.tagline}
            </m.p>
          </div>
        </div>
      </section>

      {/* Problem + Benefits */}
      <section className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Problem */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="liquid-glass rounded-2xl border border-white/10 p-6 sm:p-8"
          >
            <h2 className="text-xs font-bold text-red-400 tracking-widest mb-4">Problema que resuelve</h2>
            <p className="text-white/75 text-sm font-light leading-relaxed">{product.problem}</p>
          </m.div>

          {/* Benefits */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="liquid-glass rounded-2xl border border-white/10 p-6 sm:p-8"
          >
            <h2 className="text-xs font-bold text-[#3ecf8e] tracking-widest mb-4">Beneficios para tu negocio</h2>
            <ul className="flex flex-col gap-2.5" aria-label="Beneficios">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5 text-sm text-white/75">
                  <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#3ecf8e]" aria-hidden="true" />
                  <span className="font-light">{benefit}</span>
                </li>
              ))}
            </ul>
          </m.div>
        </div>
      </section>

      {/* Modules */}
      <section className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-2xl border border-white/10 p-6 sm:p-8"
        >
          <h2 className="text-sm font-semibold text-white mb-6">Módulos verificados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {product.modules.map((mod) => (
              <div
                key={mod.name}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium border ${
                  mod.available
                    ? 'border-[#3ecf8e]/25 bg-[#3ecf8e]/5 text-white/80'
                    : 'border-white/8 bg-white/3 text-white/30'
                }`}
                aria-label={`${mod.name}: ${mod.available ? 'disponible' : 'no disponible'}`}
              >
                {mod.available ? (
                  <Check className="w-3.5 h-3.5 text-[#3ecf8e] shrink-0" aria-hidden="true" />
                ) : (
                  <X className="w-3.5 h-3.5 text-white/25 shrink-0" aria-hidden="true" />
                )}
                {mod.name}
              </div>
            ))}
          </div>
          {product.modules.some((m) => !m.available) && (
            <p className="mt-4 text-xs text-white/35 font-light">
              Los módulos marcados con ✕ están en desarrollo y se activarán en versiones futuras.
            </p>
          )}
        </m.div>
      </section>

      {/* Sectors */}
      <section className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3"
          aria-label="Sectores habituales"
        >
          <span className="text-xs text-white/40 font-medium">Sectores habituales:</span>
          {product.sectors.map((sector) => (
            <span
              key={sector}
              className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/55 bg-white/3"
            >
              {sector}
            </span>
          ))}
        </m.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-b from-[#00d2ff]/8 via-black/40 to-black/70 border border-white/10"
        >
          {product.ctaType === 'demo' && (
            <>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00d2ff]/10 border border-[#00d2ff]/25 flex items-center justify-center text-[#00d2ff]">
                  <Calendar className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Agenda una demostración guiada
              </h2>
              <p className="text-white/65 text-sm font-light max-w-lg mx-auto mb-8 leading-relaxed">
                Sesión de 20 minutos con uno de nuestros desarrolladores. Te mostramos el sistema funcionando con los productos de tu negocio.
              </p>
              <Link
                to={`/demo?producto=${product.slug}`}
                onClick={() => telemetry.trackCTAClick(`ProductDetail_Demo_${product.slug}`, `/demo?producto=${product.slug}`)}
                className="inline-flex items-center gap-2 rounded-full font-semibold text-sm px-8 py-3.5 bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] hover:opacity-90 transition-all shadow-lg active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#00d2ff] outline-none"
                aria-label="Agendar demostración del sistema"
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>Agendar demostración gratuita</span>
              </Link>
            </>
          )}

          {product.ctaType === 'info' && (
            <>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/25 flex items-center justify-center text-amber-300">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Este producto está en desarrollo activo
              </h2>
              <p className="text-white/65 text-sm font-light max-w-lg mx-auto mb-8 leading-relaxed">
                Estamos construyendo este sistema. Si necesitas algo similar hoy, podemos desarrollarlo a la medida de tu operación.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contacto"
                  onClick={() => telemetry.trackCTAClick(`ProductDetail_Info_${product.slug}`, '/contacto')}
                  className="inline-flex items-center gap-2 rounded-full font-semibold text-sm px-8 py-3.5 border border-[#00d2ff]/50 text-[#00d2ff] hover:bg-[#00d2ff]/10 transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#00d2ff] outline-none"
                >
                  <span>Solicitar información</span>
                </Link>
                <Link
                  to="/#diagnostico"
                  className="inline-flex items-center gap-2 rounded-full font-medium text-sm px-7 py-3.5 border border-white/15 text-white hover:bg-white/5 transition-all text-center"
                >
                  Evaluar mi negocio
                </Link>
              </div>
            </>
          )}

          {product.ctaType === 'coming-soon' && (
            <>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white/40">
                  <Sparkles className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Próximamente</h2>
              <p className="text-white/65 text-sm font-light max-w-lg mx-auto mb-8 leading-relaxed">
                Este producto aún no está disponible. Déjanos tu correo y te avisamos cuando esté listo.
              </p>

              {notifySubmitted ? (
                <div className="inline-flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-sm font-medium">
                  <Check className="w-5 h-5" aria-hidden="true" />
                  <span>¡Listo! Te avisaremos cuando {product.name} esté disponible.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNotify}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  aria-label="Formulario de notificación de lanzamiento"
                >
                  <input
                    type="text"
                    required
                    value={notifyName}
                    onChange={(e) => setNotifyName(e.target.value)}
                    placeholder="Tu nombre"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none"
                    aria-label="Tu nombre"
                  />
                  <input
                    type="email"
                    required
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none"
                    aria-label="Tu correo electrónico"
                  />
                  <button
                    type="submit"
                    disabled={notifyLoading}
                    className="px-6 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-sm font-semibold hover:bg-white/20 transition-colors disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-[#00d2ff] outline-none"
                  >
                    {notifyLoading ? 'Enviando…' : 'Notifícame'}
                  </button>
                </form>
              )}
            </>
          )}
        </m.div>
      </section>
    </div>
  );
};
