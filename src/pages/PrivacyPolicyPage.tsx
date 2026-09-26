import React from 'react';
import { siteConfig } from '../config/site';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24 max-w-4xl mx-auto px-6 relative z-10 text-white/90">
      
      {/* Header */}
      <div className="mb-12 border-b border-white/10 pb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 block">
          Documento Legal
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Aviso de Privacidad
        </h1>
        <p className="text-white/50 text-xs sm:text-sm">
          Última actualización: Septiembre 2026 | Responsable: {siteConfig.name}
        </p>
      </div>

      {/* Notice box */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-10 text-xs sm:text-sm text-amber-200/90 leading-relaxed">
        <strong>Aviso de Transparencia:</strong> Este documento establece las políticas de tratamiento de datos personales de CODIA. El contenido legal formal definitivo para fines regulatorios estrictos se encuentra en proceso de validación jurídica.
      </div>

      {/* Legal Structure */}
      <div className="space-y-10 text-sm font-light leading-relaxed text-white/80">
        
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Identidad y Domicilio del Responsable</h2>
          <p>
            {siteConfig.name} (en adelante "CODIA"), alojado en <a href={siteConfig.domain} className="text-blue-400 hover:underline">{siteConfig.domain}</a>, con correo de contacto principal <a href={siteConfig.contact.emailUrl} className="text-blue-400 hover:underline">{siteConfig.contact.email}</a>, es responsable de recabar, usar y proteger sus datos personales enviados a través de nuestros formularios web.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Datos Personales Recabados</h2>
          <p className="mb-3">
            Para brindarle atención comercial, solicitudes de diagnóstico y cotización de servicios digitales, recabamos los siguientes datos personales:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Nombre completo.</li>
            <li>Nombre de la empresa o negocio.</li>
            <li>Número de teléfono y WhatsApp de contacto.</li>
            <li>Correo electrónico.</li>
            <li>Detalles y mensajes relativos a los requerimientos de su proyecto.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Finalidad del Tratamiento de Datos</h2>
          <p className="mb-3">
            Los datos personales que recabamos son utilizados exclusivamente para las siguientes finalidades necesarias:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Evaluar los requerimientos técnicos de su negocio para elaborar propuestas y diagnósticos digitales.</li>
            <li>Establecer comunicación directa vía correo electrónico o WhatsApp.</li>
            <li>Enviar confirmaciones de recepción de formulario y dar seguimiento a cotizaciones solicitadas.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Transferencia de Datos</h2>
          <p>
            {siteConfig.name} no vende, alquila ni comparte sus datos personales con terceros no autorizados. Los datos procesados a través del sitio web son transmitidos de manera segura a nuestros proveedores de infraestructura de correo (Resend API) e hiper-almacenamiento de respaldo exclusivamente para la prestación del servicio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Derechos ARCO</h2>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal (Rectificación), que la eliminemos de nuestros registros (Cancelación) u oponerse al uso de sus datos para fines específicos (Oposición). Para ejercer cualquiera de sus derechos ARCO, envíe una solicitud a <a href={siteConfig.contact.emailUrl} className="text-blue-400 hover:underline">{siteConfig.contact.email}</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Modificaciones al Aviso de Privacidad</h2>
          <p>
            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales o de nuestras propias prácticas de privacidad. Cualquier cambio será publicado oportunamente en este apartado de nuestro sitio web.
          </p>
        </section>

      </div>

    </div>
  );
};
