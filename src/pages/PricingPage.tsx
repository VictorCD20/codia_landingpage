import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { m, AnimatePresence } from 'motion/react';
import { SectionEyebrow, AppleButton } from '../components/Primitives';
import { 
  Sparkles, 
  Plus, 
  Minus, 
  Utensils, 
  Store, 
  Stethoscope, 
  Briefcase,
  TrendingUp,
  ArrowRight,
  PhoneCall,
  Calendar,
  Send,
  CheckCircle2,
  Clock,
  Info,
  Wrench
} from 'lucide-react';
import { telemetry } from '../tracking/tracker';
import { saveLeadToGoogleSheets } from '../services/contactService';
import { masterPlans, comparisonFeatures, plansNotice } from '../data/plans';
import { PlanCard } from '../components/solutions/PlanCard';

const industryUseCases = [
  {
    id: 'alimentos',
    title: 'Cafeterías & Restaurantes',
    status: 'available',
    statusLabel: 'Disponible hoy',
    badgeColor: 'emerald',
    icon: Utensils,
    recommendedPlan: 'Plan Avanzado (Business)',
    headline: 'Toma de órdenes en < 30s, comandas a cocina y control de insumos por receta.',
    benefits: [
      'Meseros toman pedidos en tablet o celular.',
      'Comandas se imprimen o proyectan en pantalla de cocina.',
      'El stock de café, leche y jarabes se descuenta automáticamente con cada venta.',
      'Menú QR interactivo para pedidos desde la mesa o para llevar.',
    ],
  },
  {
    id: 'retail',
    title: 'Boutiques & Comercios Locales',
    status: 'upcoming',
    statusLabel: 'Próximamente',
    badgeColor: 'amber',
    icon: Store,
    recommendedPlan: 'Plan en Desarrollo',
    headline: 'Catálogo online para ventas 24/7 con cobro en mostrador sincronizado y control de variantes.',
  },
  {
    id: 'salud',
    title: 'Ópticas & Salud Visual',
    status: 'upcoming',
    statusLabel: 'Próximamente',
    badgeColor: 'amber',
    icon: Stethoscope,
    recommendedPlan: 'Plan en Desarrollo',
    headline: 'Expediente clínico de pacientes, recetas graduadas y cotizador de micas.',
  },
  {
    id: 'servicios',
    title: 'Servicios Profesionales',
    status: 'upcoming',
    statusLabel: 'Próximamente',
    badgeColor: 'amber',
    icon: Briefcase,
    recommendedPlan: 'Plan en Desarrollo',
    headline: 'Presencia web de autoridad, cotizadores y seguimiento de prospectos.',
  },
];

const pricingFaqs = [
  {
    q: '¿Por qué CODIA no cobra una renta mensual obligatoria como otros software?',
    a: 'Creemos que las herramientas operativas deben pertenecer a tu negocio. En CODIA desarrollamos soluciones de tu propiedad, con tu propia base de datos. No te bloqueamos el acceso si un mes decides no pagar y solo ofrecemos mantenimiento si tú lo solicitas voluntariamente.',
  },
  {
    q: '¿Cómo es el esquema de pago de un proyecto?',
    a: 'Trabajamos con un esquema transparente dividido por hitos: 50% de anticipo para iniciar la arquitectura y diseño, y 50% contra entrega y satisfacción total tras las pruebas en tu negocio.',
  },
  {
    q: '¿Qué necesito tener listo antes de iniciar?',
    a: 'Solo tu catálogo inicial de productos/servicios y los datos de tu negocio. Si no tienes logotipo o fotos profesionales, nuestro equipo te asesora para estructurarlos durante la primera semana.',
  },
  {
    q: '¿Puedo solicitar una demostración antes de comprometerme con un plan?',
    a: 'Sí, 100%. Agendamos una sesión de 20 minutos donde te mostramos el sistema con ejemplos de tu giro comercial para que compruebes la velocidad y funcionalidad antes de firmar cualquier propuesta.',
  },
  {
    q: '¿Qué pasa si mi negocio crece y necesito más funciones después?',
    a: 'Toda nuestra arquitectura es modular. Puedes iniciar con el Plan Esencial y posteriormente agregar el punto de venta, facturación o alertas automatizadas sin tener que rehacer tu sistema desde cero.',
  },
];

export const PricingPage: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState('alimentos');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modalState, setModalState] = useState<{
    open: boolean;
    industryTitle: string;
    type: 'consultoria' | 'waitlist';
  }>({
    open: false,
    industryTitle: '',
    type: 'consultoria',
  });
  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    email: '',
    whatsapp: '',
    notes: '',
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);
  const [modalError, setModalError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedCase = industryUseCases.find(u => u.id === activeIndustry) || industryUseCases[0];

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalError('');

    if (!privacyAccepted) {
      setModalError('Debes leer y aceptar el Aviso de Privacidad para continuar.');
      return;
    }

    setIsSubmitting(true);
    telemetry.trackCTAClick(
      modalState.type === 'consultoria' ? 'Industry_Consulting_Request' : 'Industry_Waitlist_Request',
      `${modalState.industryTitle}: ${JSON.stringify(formData)}`
    );

    const messageText = `[${modalState.type === 'consultoria' ? 'SOLICITUD DE CONSULTORÍA PERSONALIZADA' : 'LISTA DE ESPERA PRIORITARIA'}]\nSector: ${modalState.industryTitle}\nNegocio: ${formData.businessName}\nCorreo: ${formData.email || 'No proporcionado'}\nNotas: ${formData.notes}`;

    try {
      // 1. Direct Save to Google Sheets Database
      await saveLeadToGoogleSheets({
        nombre: formData.name,
        negocio: formData.businessName,
        correo: formData.email || `${formData.businessName.replace(/\s+/g, '').toLowerCase()}@lead.request`,
        telefono: formData.whatsapp,
        solucion: `${modalState.type === 'consultoria' ? 'Consultoría' : 'Lista Espera'}: ${modalState.industryTitle}`,
        mensaje: messageText,
        aviso_privacidad: 'Aceptado el ' + new Date().toISOString(),
        consentimiento_marketing: marketingAccepted ? 'Aceptado' : 'No aceptado'
      });

      // 2. Send email via Resend serverless endpoint
      await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          business_name: formData.businessName,
          email: formData.email || `${formData.businessName.replace(/\s+/g, '').toLowerCase()}@lead.request`,
          phone: formData.whatsapp,
          solution_type: `${modalState.type === 'consultoria' ? 'Consultoría' : 'Lista Espera'}: ${modalState.industryTitle}`,
          message: messageText,
          privacy_accepted: true,
          marketing_accepted: marketingAccepted
        }),
      });
    } catch (err) {
      console.warn('[Pricing Modal Warning]:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 text-white">
      
      {/* 01. HERO DE FILOSOFÍA & VALOR */}
      <section className="max-w-6xl mx-auto px-6 text-center mb-20 relative z-10">
        <div className="flex justify-center mb-4">
          <SectionEyebrow label="Product & Pricing Experience" tag="Inversión con Retorno Real" />
        </div>

        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl mx-auto"
        >
          No vendemos software.{' '}
          <span 
            className="block animate-shiny mt-1"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 0%, #A4F4FD 25%, #00d2ff 50%, #3ecf8e 75%, #ffffff 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
              filter: 'url(#c3-noise)'
            }}
          >
            Diseñamos soluciones digitales adaptadas a tu operación.
          </span>
        </m.h1>

        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-white/70 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed"
        >
          Elige el nivel de herramienta que resuelve el cuello de botella actual de tu negocio. Código 100% propio, sin rentas ocultas y con soporte técnico local garantizado.
        </m.p>

        <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-light">
          <Info className="w-3.5 h-3.5 text-[#00d2ff] shrink-0" />
          <span>{plansNotice}</span>
        </div>

        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <AppleButton label="Evaluar mi negocio" href="/#diagnostico" />
          <a
            href="/#demo"
            className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-all"
          >
            Agendar una demostración
          </a>
        </m.div>
      </section>

      {/* 02. RESUMEN DE LOS 4 PLANES */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {masterPlans.map((plan, idx) => (
            <PlanCard key={plan.id} plan={plan} index={idx} />
          ))}
        </div>
      </section>

      {/* 03. CASOS DE USO POR INDUSTRIA */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionEyebrow label="Casos de Uso Reales" tag="Por Sector Comercial" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            ¿Cómo se traduce cada solución en tu industria?
          </h2>
          <div className="mt-4 max-w-2xl px-5 py-3.5 rounded-2xl bg-black/70 border border-white/15 backdrop-blur-md shadow-xl text-center">
            <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
              Conoce el estado actual de cada sector. Hoy contamos con <strong className="text-[#00d2ff] font-semibold">entrega inmediata para Alimentos</strong> y soluciones en desarrollo consultivo para los demás giros.
            </p>
          </div>

          {/* Industry Tabs with clear Status Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {industryUseCases.map((ind) => {
              const Icon = ind.icon;
              const isActive = activeIndustry === ind.id;
              const isAvailable = ind.status === 'available';
              return (
                <button
                  key={ind.id}
                  onClick={() => {
                    setActiveIndustry(ind.id);
                    telemetry.trackCTAClick('Pricing_Industry_Tab_Click', ind.title);
                  }}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? isAvailable
                        ? 'bg-[#00d2ff] text-[#091020] font-bold shadow-lg shadow-[#00d2ff]/20'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold shadow-lg shadow-amber-500/10'
                      : 'bg-white/5 text-white/70 hover:text-white border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{ind.title}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    isAvailable
                      ? isActive ? 'bg-[#091020]/20 text-[#091020]' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}>
                    {ind.statusLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Industry Dynamic Content */}
        {selectedCase.status === 'available' ? (
          /* Available Industry Card */
          <div className="liquid-glass rounded-3xl p-6 sm:p-10 border border-emerald-500/30 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Disponible hoy • Entrega en &lt; 7 días</span>
                </div>
                <h3 className="text-white text-2xl font-bold">
                  {selectedCase.title}
                </h3>
              </div>
              <a
                href="/#demo"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3ecf8e] hover:underline shrink-0"
              >
                <span>Ver demostración guiada</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-white/80 text-sm md:text-base font-light mb-6">
              {selectedCase.headline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {selectedCase.benefits?.map((b) => (
                <div key={b} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="w-5 h-5 rounded-full bg-[#00d2ff]/10 text-[#00d2ff] text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span className="text-white/75 text-xs leading-relaxed font-light">{b}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <a
                href="/#diagnostico"
                className="inline-flex items-center gap-2 text-sm text-[#00d2ff] hover:text-white transition-colors"
              >
                <span>Diagnosticar mi negocio de {selectedCase.title.toLowerCase()}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/#demo"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Agendar demostración</span>
              </a>
            </div>
          </div>
        ) : (
          /* Upcoming Industry Elegant Card */
          <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-amber-500/30 max-w-4xl mx-auto text-center relative overflow-hidden shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Wrench className="w-3.5 h-3.5 text-amber-300" />
              <span>Solución en Desarrollo</span>
            </div>

            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3">
              {selectedCase.title}
            </h3>

            <p className="text-white/80 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed mb-8">
              Actualmente estamos finalizando los módulos específicos para este sector. Mientras tanto, podemos ayudarte mediante una consultoría personalizada para entender los flujos de tu negocio y diseñar tu arquitectura a la medida.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setModalState({
                    open: true,
                    industryTitle: selectedCase.title,
                    type: 'consultoria',
                  });
                  setIsSubmitted(false);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-xs sm:text-sm px-6 py-3.5 bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] hover:opacity-95 transition-all shadow-lg active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar una consultoría personalizada</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setModalState({
                    open: true,
                    industryTitle: selectedCase.title,
                    type: 'waitlist',
                  });
                  setIsSubmitted(false);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-xs sm:text-sm px-6 py-3.5 border border-white/20 text-white hover:bg-white/10 transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Quiero ser de los primeros</span>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 04. TABLA COMPARATIVA EXHAUSTIVA DE MÓDULOS */}
      <section id="comparador" className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionEyebrow label="Comparativa Completa" tag="Transparencia Total" />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Tabla detallada de características
          </h2>
          <div className="mt-4 max-w-2xl px-5 py-3.5 rounded-2xl bg-black/70 border border-white/15 backdrop-blur-md shadow-xl text-center">
            <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
              Compara cada función incluida para asegurarte de que tu plan cubra todos los requerimientos de tu operación.
            </p>
          </div>
        </div>

        <div className="liquid-glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-white/15 bg-white/[0.03]">
                  <th className="p-4 sm:p-5 text-sm font-semibold text-white w-1/3">Características & Módulos</th>
                  <th className="p-4 sm:p-5 text-center text-sm font-semibold text-white/90">
                    <div className="text-[10px] uppercase text-white/50 mb-0.5">Start</div>
                    <div>Básico</div>
                  </th>
                  <th className="p-4 sm:p-5 text-center text-sm font-semibold text-white/90">
                    <div className="text-[10px] uppercase text-white/50 mb-0.5">Control</div>
                    <div>Intermedio</div>
                  </th>
                  <th className="p-4 sm:p-5 text-center text-sm font-semibold text-[#00d2ff] bg-[#00d2ff]/5">
                    <div className="text-[10px] uppercase text-[#00d2ff]/70 mb-0.5">Integral</div>
                    <div>Completo</div>
                  </th>
                  <th className="p-4 sm:p-5 text-center text-sm font-semibold text-purple-300">
                    <div className="text-[10px] uppercase text-purple-400/70 mb-0.5">A Medida</div>
                    <div>Personalizado</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm font-light">
                {comparisonFeatures.map((feat) => (
                  <tr key={feat.name} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 text-white/80">
                      <div>{feat.name}</div>
                      <span className="text-[10px] text-white/40 uppercase tracking-wider">{feat.category}</span>
                    </td>
                    
                    {/* Básico */}
                    <td className="p-4 sm:p-5 text-center text-white/70">
                      {typeof feat.basico === 'boolean' ? (
                        feat.basico ? (
                          <span className="inline-block w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold leading-5">✓</span>
                        ) : (
                          <span className="text-white/20">—</span>
                        )
                      ) : (
                        <span className="text-white/80 text-xs font-medium">{feat.basico}</span>
                      )}
                    </td>

                    {/* Intermedio */}
                    <td className="p-4 sm:p-5 text-center text-white/70">
                      {typeof feat.intermedio === 'boolean' ? (
                        feat.intermedio ? (
                          <span className="inline-block w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold leading-5">✓</span>
                        ) : (
                          <span className="text-white/20">—</span>
                        )
                      ) : (
                        <span className="text-white/80 text-xs font-medium">{feat.intermedio}</span>
                      )}
                    </td>

                    {/* Completo */}
                    <td className="p-4 sm:p-5 text-center text-white/90 bg-[#00d2ff]/5 font-medium">
                      {typeof feat.completo === 'boolean' ? (
                        feat.completo ? (
                          <span className="inline-block w-5 h-5 rounded-full bg-[#00d2ff]/20 text-[#00d2ff] text-xs font-bold leading-5">✓</span>
                        ) : (
                          <span className="text-white/20">—</span>
                        )
                      ) : (
                        <span className="text-[#00d2ff] text-xs font-semibold">{feat.completo}</span>
                      )}
                    </td>

                    {/* Personalizado */}
                    <td className="p-4 sm:p-5 text-center text-white/70">
                      {typeof feat.personalizado === 'boolean' ? (
                        feat.personalizado ? (
                          <span className="inline-block w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold leading-5">✓</span>
                        ) : (
                          <span className="text-white/20">—</span>
                        )
                      ) : (
                        <span className="text-purple-300 text-xs font-medium">{feat.personalizado}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 05. RETORNO DE INVERSIÓN (ROI ESTIMADO) */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-white/10 bg-gradient-to-r from-black/60 via-[#0B2551]/20 to-black/60 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#3ecf8e] font-semibold mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>Retorno de Inversión</span>
              </div>
              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                El software que se paga solo.
              </h3>
              <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                Nuestras herramientas eliminan los costos ocultos del desorden operativo y aumentan las ventas desde el primer mes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div className="text-3xl font-black text-[#00d2ff] mb-1">+15 hrs</div>
              <div className="text-white font-medium text-sm mb-1">Ahorro semanal de tiempo</div>
              <p className="text-white/50 text-xs font-light">Elimina conteos manuales, recapturas en WhatsApp y arqueos de caja lentos.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div className="text-3xl font-black text-[#3ecf8e] mb-1">0% Mermas</div>
              <div className="text-white font-medium text-sm mb-1">Control exacto de inventario</div>
              <p className="text-white/50 text-xs font-light">Alertas de stock mínimo y trazabilidad de insumos por cada venta registrada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06. PREGUNTAS FRECUENTES DE CONTRATACIÓN */}
      <section className="max-w-4xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionEyebrow label="Dudas de Contratación" tag="FAQ de Planes" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            Preguntas frecuentes sobre los planes
          </h2>
        </div>

        <div className="space-y-4">
          {pricingFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className="liquid-glass rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-medium text-white hover:text-[#00d2ff] transition-colors"
                >
                  <span className="text-base sm:text-lg pr-4">{faq.q}</span>
                  <span className="p-1 rounded-full bg-white/5 border border-white/10 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-white/70 text-sm leading-relaxed border-t border-white/5 bg-black/20">
                        {faq.a}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 07. CIERRE COMERCIAL */}
      <section className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="liquid-glass rounded-3xl p-8 sm:p-14 text-center border border-white/15 bg-gradient-to-b from-[#00d2ff]/10 via-black/40 to-black/80 shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight">
            ¿No estás seguro de cuál plan es el adecuado para tu negocio?
          </h2>
          <div className="mt-4 max-w-2xl mx-auto px-5 py-3.5 rounded-2xl bg-black/70 border border-white/15 backdrop-blur-md shadow-xl text-center">
            <p className="text-white/90 text-sm sm:text-base font-normal leading-relaxed">
              Realiza la evaluación en 2 minutos o agenda una llamada estratégica con nuestro equipo de desarrollo para recibir una recomendación personalizada.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <AppleButton label="Evaluar mi negocio" href="/#diagnostico" />
            <a
              href="/#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-8 py-3.5 bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] hover:opacity-95 transition-all shadow-lg active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Agendar una demostración</span>
            </a>
          </div>
        </div>
      </section>

      {/* MODAL DE CONSULTORÍA / LISTA DE ESPERA */}
      <AnimatePresence>
        {modalState.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/20 max-w-lg w-full shadow-2xl relative"
            >
              <button
                type="button"
                onClick={() => {
                  setModalState({ ...modalState, open: false });
                  setIsSubmitted(false);
                }}
                className="absolute top-5 right-5 text-white/50 hover:text-white text-sm"
              >
                ✕ Cerrar
              </button>

              {!isSubmitted ? (
                <form onSubmit={handleModalSubmit} method="post" className="space-y-4 text-left">
                  <div className="text-left mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{modalState.type === 'consultoria' ? 'Consultoría Estratégica' : 'Lista de Espera Prioritaria'}</span>
                    </div>
                    <h3 className="text-white text-xl sm:text-2xl font-bold">
                      {modalState.type === 'consultoria' 
                        ? `Consultoría para ${modalState.industryTitle}` 
                        : `Acceso Anticipado: ${modalState.industryTitle}`}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm font-light mt-1">
                      {modalState.type === 'consultoria'
                        ? 'Diseñaremos una propuesta técnica adaptada a los requerimientos específicos de tu operación.'
                        : 'Sé de los primeros en probar la solución y recibe acompañamiento directo de nuestro equipo técnico.'}
                    </p>
                  </div>

                  {modalError && (
                    <div role="alert" className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center font-medium">
                      {modalError}
                    </div>
                  )}

                  <div>
                    <label htmlFor="pricing-input-negocio" className="block text-xs text-white/70 mb-1 font-medium">Nombre de tu Negocio *</label>
                    <input
                      id="pricing-input-negocio"
                      name="nombre_negocio"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="Ej. Boutique Ópalo"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="pricing-input-name" className="block text-xs text-white/70 mb-1 font-medium">Tu Nombre *</label>
                      <input
                        id="pricing-input-name"
                        name="nombre"
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Sofía Morales"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="pricing-input-phone" className="block text-xs text-white/70 mb-1 font-medium">WhatsApp *</label>
                      <input
                        id="pricing-input-phone"
                        name="telefono"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="+52 55 1234 5678"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pricing-input-email" className="block text-xs text-white/70 mb-1 font-medium">Correo Electrónico (Opcional)</label>
                    <input
                      id="pricing-input-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sofia@empresa.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="pricing-input-notes" className="block text-xs text-white/70 mb-1 font-medium">
                      ¿Qué proceso te gustaría resolver o digitalizar primero? (Opcional)
                    </label>
                    <textarea
                      id="pricing-input-notes"
                      name="notas"
                      rows={3}
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Ej. Necesito control de inventario con tallas y ticket por WhatsApp..."
                      className="w-full px-4 py-2 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none resize-none"
                    />
                  </div>

                  {/* Consent Checkboxes */}
                  <div className="flex flex-col gap-2.5 pt-1">
                    {/* 1. Mandatory Privacy Consent */}
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-white/80 select-none">
                      <input
                        type="checkbox"
                        name="aviso_privacidad_aceptado"
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                        required
                        className="mt-0.5 w-4 h-4 rounded border-white/30 bg-black/40 text-blue-500 focus:ring-blue-400 focus:ring-offset-0 shrink-0 cursor-pointer"
                      />
                      <span>
                        He leído y acepto el{' '}
                        <Link to="/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-medium">
                          Aviso de Privacidad
                        </Link>
                        . <span className="text-red-400">*</span>
                      </span>
                    </label>

                    {/* 2. Optional Marketing Consent */}
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-white/60 select-none">
                      <input
                        type="checkbox"
                        name="consentimiento_marketing"
                        checked={marketingAccepted}
                        onChange={(e) => setMarketingAccepted(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-white/30 bg-black/40 text-blue-500 focus:ring-blue-400 focus:ring-offset-0 shrink-0 cursor-pointer"
                      />
                      <span>
                        Deseo recibir información sobre soluciones, demostraciones y novedades de CODIA.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Enviando solicitud...</span>
                      ) : (
                        <>
                          <span>{modalState.type === 'consultoria' ? 'Solicitar Consultoría' : 'Registrar mi Interés'}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-white text-2xl font-bold mb-2">¡Solicitud Registrada!</h4>
                  <p className="text-white/70 text-sm font-light mb-6">
                    Hemos recibido tus datos para <strong className="text-white">{formData.businessName}</strong>. Un especialista técnico se pondrá en contacto contigo vía WhatsApp para coordinar tu asesoría personalizada.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setModalState({ ...modalState, open: false });
                      setIsSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
                  >
                    Entendido
                  </button>
                </div>
              )}
            </m.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
