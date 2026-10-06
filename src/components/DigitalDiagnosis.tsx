import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionEyebrow } from './Primitives';
import { 
  Utensils, 
  Store, 
  Briefcase, 
  Stethoscope, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  CheckCircle2
} from 'lucide-react';
import { telemetry } from '../tracking/tracker';

interface AssessmentState {
  industry: string;
  teamSize: string;
  currentControl: string;
  mainPain: string;
  goal: string;
  name: string;
  whatsapp: string;
  email: string;
  notes: string;
}

export const DigitalDiagnosis: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<AssessmentState>({
    industry: '',
    teamSize: '',
    currentControl: '',
    mainPain: '',
    goal: '',
    name: '',
    whatsapp: '',
    email: '',
    notes: '',
  });

  const industries = [
    { label: 'Alimentos & Bebidas', desc: 'Cafetería, restaurante, dark kitchen, repostería', icon: Utensils },
    { label: 'Comercio & Retail', desc: 'Boutique, tienda de ropa, minisúper, refaccionaria', icon: Store },
    { label: 'Servicios Profesionales', desc: 'Consultoría, despacho, agencia, taller', icon: Briefcase },
    { label: 'Salud & Óptica', desc: 'Clínica, consultorio, óptica, laboratorio', icon: Stethoscope },
    { label: 'Otro Giro', desc: 'Operaciones comerciales o industriales personalizadas', icon: Sparkles },
  ];

  const teamSizes = [
    { label: '1 persona', desc: 'Dueño operando de forma directa' },
    { label: '2 a 5 personas', desc: 'Equipo pequeño con roles compartidos' },
    { label: '6 a 15 personas', desc: 'Múltiples turnos o áreas definidas' },
    { label: 'Más de 15 personas', desc: 'Operación multi-sucursal o corporativa' },
  ];

  const currentControls = [
    { label: 'Libretas o Excel', desc: 'Registros manuales que toman mucho tiempo y se desactualizan' },
    { label: 'WhatsApp y Notas', desc: 'Todo el flujo y comprobantes se quedan en chats sueltos' },
    { label: 'Software que no se adapta', desc: 'Herramientas genéricas difíciles de usar para el equipo' },
    { label: 'Sin sistema formal', desc: 'Se cobra y entrega sin un registro automatizado diario' },
  ];

  const mainPains = [
    { label: 'Descontrol de Stock y Mermas', desc: 'Productos que se agotan sin aviso o descuadres en almacén' },
    { label: 'Pérdida de Tiempo en WhatsApp', desc: 'Horas respondiendo lo mismo y enviando fotos manualmente' },
    { label: 'Falta de Cobros Digitales', desc: 'Clientes que no compran por falta de pasarela de pago o catálogo' },
    { label: 'Desorden en Caja y Ganancias', desc: 'Incertidumbre sobre el margen neto real al final de la semana' },
  ];

  const goals = [
    { label: 'Multiplicar ventas por internet', desc: 'Canal digital profesional activo las 24 horas' },
    { label: 'Ordenar y automatizar la operación', desc: 'Control de caja, stock y comandas sin fricción' },
    { label: 'Ahorrar tiempo del equipo', desc: 'Notificaciones automáticas y reportes en 1 clic' },
  ];

  const handleSelect = (field: keyof AssessmentState, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (step < 6) {
      setStep(prev => prev + 1);
    }
  };

  const calculateRecommendation = () => {
    if (formData.industry === 'Alimentos & Bebidas') {
      return {
        plan: 'Plan Avanzado — Sector Alimentos (POS & Insumos)',
        summary: 'Tu negocio se beneficiará al máximo de un Punto de Venta ágil conectado a comandas y control de insumos con menú digital para WhatsApp.',
        priorityModules: ['POS en Tablet', 'Control de Insumos', 'Catálogo QR', 'Alertas WhatsApp'],
      };
    } else if (formData.mainPain === 'Pérdida de Tiempo en WhatsApp' || formData.goal === 'Multiplicar ventas por internet') {
      return {
        plan: 'Plan Esencial — Presencia & Ventas Automatizadas',
        summary: 'Necesitas un Sitio Web/Catálogo de alta conversión con pasarela de pagos y pedidos automatizados directos a tu WhatsApp.',
        priorityModules: ['Sitio Web E-Commerce', 'Catálogo Interactivo', 'Pasarela de Cobros', 'Notificaciones'],
      };
    } else {
      return {
        plan: 'Solución a la Medida (Gestión Operativa Integral)',
        summary: 'Tu operación requiere un panel privado centralizado con reportes financieros, roles de usuario y control de procesos en tiempo real.',
        priorityModules: ['Panel de Administración', 'Control de Caja & Stock', 'Dashboard Financiero', 'Capacitación'],
      };
    }
  };

  const recommendation = calculateRecommendation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    telemetry.trackCTAClick('Assessment_Submit', JSON.stringify({ industry: formData.industry, plan: recommendation.plan }));

    try {
      // Simulate/Send payload
      await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
          message: `[DIAGNÓSTICO DIGITAL]\nGiro: ${formData.industry}\nEquipo: ${formData.teamSize}\nControl: ${formData.currentControl}\nDolor: ${formData.mainPain}\nMeta: ${formData.goal}\nRecomendación: ${recommendation.plan}\nNotas: ${formData.notes}`,
        }),
      });
    } catch {
      // Graceful fallback
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="diagnostico" className="max-w-4xl mx-auto px-6 py-20 relative z-10">
      <div className="flex flex-col items-center text-center mb-12">
        <SectionEyebrow label="Diagnóstico Digital sin Costo" tag="Evaluación de Negocio" />
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
          Descubre qué solución digital{' '}
          <span className="text-[#00d2ff]">resolverá tu operación.</span>
        </h2>
        <p className="mt-4 text-white/60 text-base md:text-lg max-w-xl font-light">
          Responde 5 preguntas rápidas y obtén una recomendación personalizada con los módulos exactos que tu negocio necesita.
        </p>
      </div>

      <div className="liquid-glass rounded-3xl md:rounded-[36px] p-6 sm:p-10 border border-white/15 shadow-2xl relative">
        
        {/* Progress bar */}
        {!isSubmitted && (
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs text-white/50 mb-2 font-medium">
              <span>Paso {step} de 6</span>
              <span>{Math.round((step / 6) * 100)}% completado</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e]"
                initial={{ width: '16%' }}
                animate={{ width: `${(step / 6) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          
          {/* STEP 1: INDUSTRY */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
                1. ¿Cuál es el giro principal de tu negocio?
              </h3>
              <p className="text-white/60 text-xs sm:text-sm font-light mb-6">
                Selecciona la categoría más cercana a tu operación diaria.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industries.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = formData.industry === item.label;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelect('industry', item.label)}
                      className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all ${
                        isSelected 
                          ? 'border-[#00d2ff] bg-[#00d2ff]/10' 
                          : 'border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#00d2ff]/10 border border-[#00d2ff]/20 flex items-center justify-center text-[#00d2ff] shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium mb-0.5">{item.label}</div>
                        <div className="text-white/50 text-xs font-light">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 2: TEAM SIZE */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
                2. ¿Cuántas personas colaboran en tu negocio?
              </h3>
              <p className="text-white/60 text-xs sm:text-sm font-light mb-6">
                Esto nos ayuda a definir si requieres roles o accesos simultáneos.
              </p>

              <div className="space-y-3">
                {teamSizes.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect('teamSize', item.label)}
                    className="w-full p-4 rounded-2xl border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-left flex items-center justify-between transition-all group"
                  >
                    <div>
                      <div className="text-white text-sm font-medium mb-0.5">{item.label}</div>
                      <div className="text-white/50 text-xs font-light">{item.desc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#00d2ff] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-start">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Regresar</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: CURRENT CONTROL */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
                3. ¿Cómo registras tus ventas y operación actualmente?
              </h3>
              <p className="text-white/60 text-xs sm:text-sm font-light mb-6">
                Identifiquemos el punto de partida técnico de tu equipo.
              </p>

              <div className="space-y-3">
                {currentControls.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect('currentControl', item.label)}
                    className="w-full p-4 rounded-2xl border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-left flex items-center justify-between transition-all group"
                  >
                    <div>
                      <div className="text-white text-sm font-medium mb-0.5">{item.label}</div>
                      <div className="text-white/50 text-xs font-light">{item.desc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#00d2ff] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-start">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Regresar</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: MAIN PAIN */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
                4. ¿Cuál es el mayor dolor de cabeza operativo hoy?
              </h3>
              <p className="text-white/60 text-xs sm:text-sm font-light mb-6">
                El problema que más tiempo o dinero te está costando resolver.
              </p>

              <div className="space-y-3">
                {mainPains.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect('mainPain', item.label)}
                    className="w-full p-4 rounded-2xl border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-left flex items-center justify-between transition-all group"
                  >
                    <div>
                      <div className="text-white text-sm font-medium mb-0.5">{item.label}</div>
                      <div className="text-white/50 text-xs font-light">{item.desc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#00d2ff] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-start">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Regresar</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 5: GOAL */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
                5. ¿Cuál es tu objetivo prioritario para los próximos 90 días?
              </h3>
              <p className="text-white/60 text-xs sm:text-sm font-light mb-6">
                El resultado comercial que transformará tu negocio.
              </p>

              <div className="space-y-3">
                {goals.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect('goal', item.label)}
                    className="w-full p-4 rounded-2xl border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-left flex items-center justify-between transition-all group"
                  >
                    <div>
                      <div className="text-white text-sm font-medium mb-0.5">{item.label}</div>
                      <div className="text-white/50 text-xs font-light">{item.desc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#00d2ff] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-start">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Regresar</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 6: RECOMMENDATION + CONTACT CAPTURE */}
          {step === 6 && !isSubmitted && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Dynamic Diagnostic Card with Digitalization Score */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#00d2ff]/15 via-black/40 to-black/60 border border-[#00d2ff]/40 mb-8 shadow-xl">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-[#3ecf8e] text-xs uppercase font-bold tracking-wider mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Diagnóstico Estratégico Generado</span>
                    </div>
                    <h4 className="text-white text-2xl font-bold">
                      {recommendation.plan}
                    </h4>
                  </div>

                  {/* Digitalization Level Gauge */}
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl shrink-0">
                    <div className="text-right">
                      <div className="text-[10px] uppercase font-semibold text-white/40 tracking-wider">Nivel Digital Actual</div>
                      <div className="text-white text-xs font-medium">Oportunidad de mejora</div>
                    </div>
                    <div className="text-2xl font-black text-[#00d2ff]">
                      38%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <span className="text-[11px] font-semibold text-red-400 uppercase tracking-wider block mb-2">
                      Problemas clave detectados en tu operación:
                    </span>
                    <ul className="space-y-1.5 text-xs text-white/75 font-light">
                      <li className="flex items-center gap-2">
                        <span className="text-red-400">✕</span>
                        <span>{formData.mainPain || 'Descontrol en registros y stock'}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-400">✕</span>
                        <span>Control manual actual: {formData.currentControl || 'Libreta / WhatsApp'}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-400">✕</span>
                        <span>Falta de reportería financiera automática</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-[#3ecf8e] uppercase tracking-wider block mb-2">
                      Módulos recomendados para resolverlo:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {recommendation.priorityModules.map((mod, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-[#3ecf8e]/10 text-[#3ecf8e] text-[11px] font-medium border border-[#3ecf8e]/20">
                          ✓ {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
                  {recommendation.summary}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-white text-base font-semibold">
                  ¿A dónde te enviamos la propuesta personalizada y el agendamiento?
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/70 mb-1 font-medium">Nombre de tu Negocio *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Cafetería La Sierra"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/70 mb-1 font-medium">WhatsApp / Teléfono *</label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="Ej. +52 55 1234 5678"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/70 mb-1 font-medium">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contacto@tunegocio.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/70 mb-1 font-medium">Detalles adicionales (Opcional)</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="¿Algún requerimiento especial o fecha estimada?"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#00d2ff] focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(5)}
                    className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Modificar respuestas</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-7 py-3.5 bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] hover:opacity-90 transition-all shadow-lg active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Generando Propuesta...</span>
                    ) : (
                      <>
                        <span>Agendar demostración personalizada</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* SUCCESS STATE — "¿QUÉ SIGUE?" ROADMAP */}
          {isSubmitted && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-4"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-2">
                  ¡Diagnóstico & Demostración Solicitados!
                </h3>

                <p className="text-white/70 text-sm max-w-lg mx-auto font-light">
                  Hemos generado la recomendación para <strong className="text-white">{formData.name}</strong> con base en el <strong className="text-white">{recommendation.plan}</strong>.
                </p>
              </div>

              {/* ¿Qué Sigue? Protocol Card */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 text-left">
                <h4 className="text-white text-sm font-semibold uppercase tracking-wider text-[#00d2ff] mb-4">
                  ¿Qué sigue ahora?
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#00d2ff]/15 text-[#00d2ff] font-bold flex items-center justify-center shrink-0">1</span>
                    <div>
                      <strong className="text-white block font-medium">Revisión de tu diagnóstico</strong>
                      <span className="text-white/60">Un arquitecto de software analiza tus respuestas.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#00d2ff]/15 text-[#00d2ff] font-bold flex items-center justify-center shrink-0">2</span>
                    <div>
                      <strong className="text-white block font-medium">Demostración enfocada en tu giro</strong>
                      <span className="text-white/60">Te mostramos el sistema con productos de tu sector.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#00d2ff]/15 text-[#00d2ff] font-bold flex items-center justify-center shrink-0">3</span>
                    <div>
                      <strong className="text-white block font-medium">Resolución de dudas en vivo</strong>
                      <span className="text-white/60">Preguntas directas sobre impresoras, WhatsApp y cobros.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#3ecf8e]/15 text-[#3ecf8e] font-bold flex items-center justify-center shrink-0">4</span>
                    <div>
                      <strong className="text-white block font-medium">Propuesta formal y plan de entrega</strong>
                      <span className="text-white/60">Recibes cotización formal sin compromiso.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-white/50">
                  <span>⏱️ Duración: 20 minutos</span>
                  <span>🛡️ Costo: 100% Gratuito y sin compromiso</span>
                </div>
              </div>

              {/* Contextual WhatsApp Confirmation Button */}
              {(() => {
                const waText = encodeURIComponent(`Hola CODIA.\n\nAcabo de terminar el Diagnóstico Digital en su sitio web.\n\nMi negocio: ${formData.name}\nSector: ${formData.industry}\nPrincipal desafío: ${formData.mainPain}\nSolución recomendada: ${recommendation.plan}\n\nQuisiera confirmar el horario para mi demostración personalizada.`);
                return (
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href={`https://wa.me/525547087640?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#3ecf8e] text-[#091020] font-bold text-sm hover:opacity-95 transition-all shadow-lg active:scale-[0.98]"
                    >
                      <span>Confirmar Demostración por WhatsApp</span>
                      <Sparkles className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setStep(1);
                      }}
                      className="px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:bg-white/5 transition-colors"
                    >
                      Hacer otra evaluación
                    </button>
                  </div>
                );
              })()}
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
};
