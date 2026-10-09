import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { CheckCircle2, Zap, Mail, MessageSquare, Clock } from 'lucide-react';

export const AutomationPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 relative z-10">
      
      {/* Hero Header */}
      <FadeIn>
        <div className="mb-14 liquid-glass liquid-glass-clear rounded-[28px] px-6 py-10 sm:px-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4" />
            <span>Ahorro de Tiempo Operativo</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight heading-gradient mb-6">
            Automatización Básica de Flujos & Notificaciones
          </h1>
          <p className="text-white/70 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
            Elimina tareas repetitivas conectando formularios web con notificaciones por correo, registros automáticos en bases de datos y respuestas rápidas para tus clientes.
          </p>
        </div>
      </FadeIn>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="surface-card rounded-2xl p-6 border border-white/10">
          <Mail className="w-8 h-8 text-pink-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Correos Transaccionales</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Confirmaciones instantáneas al correo de tus clientes cada vez que envíen un formulario o cotización.
          </p>
        </div>
        <div className="surface-card rounded-2xl p-6 border border-white/10">
          <MessageSquare className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Notificaciones de Equipo</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Alertas inmediatas a tu correo personal o WhatsApp cuando entre un nuevo prospecto interesado.
          </p>
        </div>
        <div className="surface-card rounded-2xl p-6 border border-white/10">
          <Clock className="w-8 h-8 text-emerald-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Menos Carga Manual</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Reduce errores de captura y evita olvidar responder a clientes potenciales por falta de tiempo.
          </p>
        </div>
      </div>

      {/* Capabilities */}
      <div className="liquid-glass rounded-3xl p-8 sm:p-12 mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">¿Qué tipo de automatizaciones implementamos?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            'Integración de formularios con Resend API para envío confiable de correos.',
            'Conexión automática de formularios con tablas de Google Sheets como base de datos.',
            'Notificaciones automáticas ante solicitudes de cotización o diagnóstico.',
            'Envío de mensajes programados o confirmaciones predeterminadas.',
            'Disparadores y webhooks entre sitios web y herramientas internas.',
            'Verificación automática de correos válidos en la recepción de solicitudes.',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
              <span className="text-white/80 text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">
        <h3 className="text-2xl font-bold text-white mb-3">¿Quieres que tu negocio responda más rápido?</h3>
        <p className="text-white/60 text-sm mb-8 max-w-lg mx-auto">
          Conectamos tus canales digitales para que ahorres horas de trabajo administrativo semanal.
        </p>
        <Link
          to="/contacto"
          className="inline-block rounded-full bg-pink-500 text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-pink-600 transition-all no-underline"
        >
          Solicitar Automatización
        </Link>
      </div>

    </div>
  );
};
