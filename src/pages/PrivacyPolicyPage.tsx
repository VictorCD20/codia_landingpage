import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MapPin, AlertCircle, FileText } from 'lucide-react';
import { siteConfig } from '../config/site';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-12 pb-24 max-w-4xl mx-auto px-6 relative z-10 text-white/90">
      
      {/* Header */}
      <div className="mb-10 border-b border-white/10 pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
          <FileText className="w-4 h-4" />
          <span>Documento Legal Oficial</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Aviso de Privacidad Integral de CODIA
        </h1>
        <p className="text-white/50 text-xs sm:text-sm">
          Última actualización: 8 de octubre de 2026 | Responsable: CODIA
        </p>
      </div>

      {/* Notice box */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-5 mb-10 text-xs sm:text-sm text-blue-200/90 leading-relaxed flex items-start gap-3.5">
        <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div>
          <strong>Documento base de trabajo:</strong> El presente Aviso de Privacidad regula el tratamiento de datos personales de acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) en México. Los campos identificados entre corchetes <code className="text-blue-300 bg-blue-900/40 px-1 py-0.5 rounded">[ ]</code> corresponden a información corporativa en proceso de formalización legal definitiva.
        </div>
      </div>

      {/* Legal Structure */}
      <div className="space-y-10 text-sm font-light leading-relaxed text-white/80">
        
        {/* 1. Responsable */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">1.</span> Responsable del tratamiento
          </h2>
          <p>
            <strong>[Razón social o nombre completo del responsable]</strong>, en adelante <strong>CODIA</strong>, con domicilio en <strong>[domicilio completo]</strong>, es responsable del tratamiento y protección de los datos personales que recaba a través del sitio web oficial:
          </p>
          <p>
            <a href="https://codiasoftware.online/" className="text-blue-400 hover:underline font-medium">
              https://codiasoftware.online/
            </a>
          </p>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 mt-3 space-y-2 text-xs sm:text-sm">
            <p className="font-semibold text-white">Para cualquier consulta o solicitud relacionada con este aviso, puedes contactar a:</p>
            <ul className="space-y-1.5 text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span><strong>Correo:</strong> [correo oficial de privacidad] (o soporte: {siteConfig.contact.email})</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span><strong>Teléfono o WhatsApp:</strong> [número oficial] (o canal público: {siteConfig.contact.phone})</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span><strong>Domicilio:</strong> [domicilio completo]</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 2. Datos recabados */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">2.</span> Datos personales que podemos recabar
          </h2>
          <p>
            Dependiendo de la interacción realizada en el sitio, CODIA podrá recabar:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Nombre y apellidos.</li>
            <li>Correo electrónico.</li>
            <li>Número telefónico o de WhatsApp.</li>
            <li>Nombre del negocio o marca.</li>
            <li>Tipo de negocio y sector comercial.</li>
            <li>Información proporcionada voluntariamente en diagnósticos digitales.</li>
            <li>Necesidades relacionadas con procesos, inventario, ventas, caja o automatización.</li>
            <li>Información técnica básica, como dirección IP, navegador, dispositivo y páginas visitadas, cuando las cookies o herramientas de medición estén habilitadas tras su consentimiento.</li>
          </ul>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70">
            <strong>Exclusión de datos sensibles:</strong> CODIA no solicita intencionalmente datos personales sensibles a través de sus formularios. El usuario deberá evitar incluir información sensible, financiera, médica, biométrica o confidencial que no sea estrictamente necesaria para recibir atención comercial o técnica preliminar.
          </div>
        </section>

        {/* 3. Finalidades primarias */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">3.</span> Finalidades primarias
          </h2>
          <p>Los datos personales serán utilizados para las siguientes finalidades necesarias:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Responder solicitudes de información y cotización.</li>
            <li>Contactar al usuario respecto a sus necesidades operativas o tecnológicas.</li>
            <li>Analizar las respuestas del diagnóstico digital para estructurar una recomendación preliminar.</li>
            <li>Preparar una orientación o propuesta técnica inicial.</li>
            <li>Agendar demostraciones o reuniones virtuales.</li>
            <li>Dar seguimiento comercial y técnico a una solicitud.</li>
            <li>Atender dudas, comentarios o solicitudes de soporte.</li>
            <li>Mantener la seguridad, integridad y correcto funcionamiento del sitio.</li>
            <li>Cumplir con las obligaciones legales aplicables.</li>
          </ul>
        </section>

        {/* 4. Finalidades secundarias */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">4.</span> Finalidades secundarias
          </h2>
          <p>
            De manera adicional, y únicamente cuando el usuario haya otorgado su consentimiento expreso y separado, los datos podrán utilizarse para:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Enviar información sobre nuevos servicios, módulos, soluciones o novedades de CODIA.</li>
            <li>Realizar encuestas breves de satisfacción y calidad del servicio.</li>
            <li>Elaborar estadísticas comerciales y de navegación anonimizadas.</li>
            <li>Mejorar el contenido, la experiencia de usuario y el funcionamiento del sitio web.</li>
            <li>Crear audiencias publicitarias o realizar campañas de remarketing, siempre que el usuario haya otorgado el consentimiento correspondiente cuando sea necesario.</li>
          </ul>
          <p className="text-xs text-white/60">
            Si no deseas que tus datos sean utilizados para finalidades secundarias, puedes manifestarlo marcando las casillas correspondientes o solicitándolo en cualquier momento enviando un correo a <strong>[correo oficial de privacidad]</strong>.
          </p>
        </section>

        {/* 5. Diagnósticos y resultados */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">5.</span> Diagnósticos y resultados
          </h2>
          <p>
            Las respuestas proporcionadas en los diagnósticos digitales y cuestionarios del sitio se utilizan para generar una recomendación orientativa y preliminar. El resultado:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>No constituye una auditoría profesional ni certificación de procesos.</li>
            <li>No representa una cotización definitiva o vinculante.</li>
            <li>No garantiza que una solución sea técnicamente compatible con la totalidad de la infraestructura del negocio sin una validación previa.</li>
            <li>Puede requerir validación posterior mediante una reunión técnica o demostración en vivo.</li>
            <li>Puede cambiar tras analizar los flujos reales de la operación del negocio.</li>
          </ul>
        </section>

        {/* 6. Beta y demostraciones */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">6.</span> Beta, demostraciones y funcionalidades en validación
          </h2>
          <p>
            Algunas de las funciones, módulos y pantallas mostradas por CODIA en su plataforma o sitio web pueden pertenecer a prototipos, demostraciones de concepto, versiones beta, flujos en validación, propuestas de desarrollo o funcionalidades sujetas a configuración e infraestructura específica.
          </p>
          <p className="text-white/70">
            Las funciones presentadas en etapa de beta o demo no deberán entenderse como servicios productivos de disponibilidad permanente, integraciones definitivas ni garantías de nivel de servicio (SLA), salvo que exista una contratación formal o acuerdo escrito bilateral que indique expresamente lo contrario.
          </p>
        </section>

        {/* 7. Transferencia de datos */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">7.</span> Transferencia o comunicación de datos
          </h2>
          <p>
            CODIA no vende, no alquila ni comercializa datos personales con terceros. CODIA podrá apoyarse en proveedores tecnológicos estrictamente necesarios para operar el sitio web y atender solicitudes de servicio, tales como:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li><strong>Proveedor de alojamiento e infraestructura web:</strong> Vercel Inc.</li>
            <li><strong>Servicio de correo transaccional:</strong> Resend Inc. (para confirmación y entrega de solicitudes).</li>
            <li><strong>Sistemas de registro y base de datos de respaldo:</strong> Google Sheets / Google Workspace mediante conexiones seguras.</li>
            <li><strong>Canal de mensajería:</strong> WhatsApp (Meta Platforms Inc.), cuando el usuario solicite explícitamente iniciar o continuar la comunicación por dicho medio.</li>
            <li><strong>Herramientas de medición y analítica:</strong> Vercel Analytics y Google Analytics, exclusivamente cuando el usuario haya aceptado su uso a través del banner de consentimiento.</li>
          </ul>
        </section>

        {/* 8. Conservación */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">8.</span> Conservación de la información
          </h2>
          <p>
            Los datos personales se conservarán únicamente durante el tiempo estrictamente necesario para cumplir con las finalidades descritas, atender la relación comercial o de consultoría, cumplir con las obligaciones legales aplicables o resolver posibles controversias. El plazo específico dependerá del tipo de solicitud, la existencia de una relación contractual y la solicitud de eliminación o cancelación por parte del titular.
          </p>
        </section>

        {/* 9. Derechos ARCO */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">9.</span> Derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO)
          </h2>
          <p>
            El titular de los datos personales tiene derecho a conocer qué datos tenemos de usted y para qué los utilizamos (<strong>Acceso</strong>), solicitar la corrección de su información desactualizada o inexacta (<strong>Rectificación</strong>), solicitar que sea eliminada de nuestras bases cuando considere que no está siendo utilizada adecuadamente (<strong>Cancelación</strong>), u oponerse al uso de sus datos para fines específicos (<strong>Oposición</strong>).
          </p>
          <p>
            Para ejercer cualquiera de sus derechos ARCO, deberá enviar una solicitud por escrito al correo electrónico <strong>[correo oficial de privacidad]</strong>, incluyendo:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Nombre completo del titular de los datos.</li>
            <li>Medio electrónico para comunicarle la respuesta a su solicitud.</li>
            <li>Descripción clara y precisa de los datos personales respecto de los que busca ejercer alguno de los derechos ARCO.</li>
            <li>Cualquier elemento o documento que facilite la localización de sus datos en nuestros sistemas.</li>
            <li>Documentación que acredite la identidad del titular o, en su caso, la representación legal correspondiente.</li>
          </ul>
          <p className="text-xs text-white/60">
            CODIA responderá a su solicitud dentro de los plazos y bajo las formalidades establecidas por la legislación aplicable en México.
          </p>
        </section>

        {/* 10. Revocación del consentimiento */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">10.</span> Revocación del consentimiento
          </h2>
          <p>
            El titular puede revocar en cualquier momento el consentimiento que haya otorgado para el tratamiento de sus datos personales enviando un correo a <strong>[correo oficial de privacidad]</strong>. La revocación del consentimiento para finalidades primarias podría implicar la imposibilidad de continuar brindando diagnósticos, propuestas o atención comercial solicitada.
          </p>
        </section>

        {/* 11. Limitación del uso o divulgación */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">11.</span> Limitación del uso o divulgación
          </h2>
          <p>
            El usuario puede solicitar en cualquier momento que sus datos no sean utilizados para comunicaciones comerciales o finalidades secundarias mediante:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>El enlace de baja incluido al pie de los correos promocionales enviados.</li>
            <li>Solicitud directa por correo a <strong>[correo oficial de privacidad]</strong>.</li>
            <li>Mensaje directo al canal oficial de WhatsApp utilizado para la comunicación.</li>
          </ul>
        </section>

        {/* 12. Cookies y tecnologías similares */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">12.</span> Cookies y tecnologías similares
          </h2>
          <p>
            El sitio web utiliza cookies y almacenamiento local para mantener funciones esenciales, recordar preferencias, medir visitas y analizar el rendimiento. Para consultar la información técnica detallada sobre las cookies utilizadas, su duración y cómo gestionar su consentimiento, visita nuestra{' '}
            <Link to="/politica-de-cookies" className="text-blue-400 underline font-medium">
              Política de Cookies
            </Link>.
          </p>
        </section>

        {/* 13. Cambios al aviso */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">13.</span> Cambios al aviso de privacidad
          </h2>
          <p>
            CODIA se reserva el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas, jurisprudenciales, políticas internas o nuevos requerimientos técnicos. La versión vigente estará siempre disponible en:
          </p>
          <p>
            <Link to="/aviso-de-privacidad" className="text-blue-400 underline font-medium">
              https://codiasoftware.online/aviso-de-privacidad
            </Link>
          </p>
        </section>

        {/* 14. Contacto */}
        <section className="space-y-3 border-t border-white/10 pt-6">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">14.</span> Contacto
          </h2>
          <p>Para cualquier duda, comentario o ejercicio de derechos respecto a este aviso de privacidad:</p>
          <ul className="space-y-1 text-white/70 text-xs sm:text-sm">
            <li><strong>Correo:</strong> [correo oficial] (soporte general: {siteConfig.contact.email})</li>
            <li><strong>WhatsApp:</strong> [número oficial] (atención comercial: {siteConfig.contact.phone})</li>
            <li><strong>Sitio web:</strong> <a href="https://codiasoftware.online/" className="text-blue-400 hover:underline">https://codiasoftware.online/</a></li>
          </ul>
        </section>

      </div>

    </div>
  );
};
