import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../config/site';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-12 pb-24 max-w-4xl mx-auto px-6 relative z-10 text-white/90">
      
      {/* Header */}
      <div className="mb-10 border-b border-white/10 pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
          <Scale className="w-4 h-4" />
          <span>Documento Legal Oficial</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Términos y Condiciones de Uso
        </h1>
        <p className="text-white/50 text-xs sm:text-sm">
          Última actualización: 8 de octubre de 2026 | Responsable: CODIA
        </p>
      </div>

      {/* Notice box */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-5 mb-10 text-xs sm:text-sm text-blue-200/90 leading-relaxed flex items-start gap-3.5">
        <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div>
          <strong>Documento base de trabajo:</strong> Los presentes Términos y Condiciones regulan el acceso, navegación y uso del portal de CODIA conforme a la legislación aplicable en los Estados Unidos Mexicanos. Los campos identificados entre corchetes <code className="text-blue-300 bg-blue-900/40 px-1 py-0.5 rounded">[ ]</code> corresponden a datos en formalización jurídica.
        </div>
      </div>

      {/* Terms Content */}
      <div className="space-y-10 text-sm font-light leading-relaxed text-white/80">
        
        {/* 1. Aceptación */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">1.</span> Aceptación
          </h2>
          <p>
            Estos Términos y Condiciones regulan el acceso y uso del sitio web oficial de CODIA:
          </p>
          <p>
            <a href="https://codiasoftware.online/" className="text-blue-400 hover:underline font-medium">
              https://codiasoftware.online/
            </a>
          </p>
          <p>
            Al navegar o utilizar este sitio web, el usuario acepta de forma plena y sin reservas estos términos. Si no está de acuerdo con alguno de ellos, deberá abstenerse de utilizar el sitio y sus servicios digitales.
          </p>
        </section>

        {/* 2. Naturaleza del sitio */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">2.</span> Naturaleza del sitio
          </h2>
          <p>
            El sitio de CODIA tiene fines informativos, comerciales y de demostración técnica de capacidades de desarrollo de software y consultoría tecnológica. A través del sitio, CODIA puede presentar:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Soluciones digitales y módulos de software.</li>
            <li>Servicios de consultoría tecnológica y desarrollo web.</li>
            <li>Sistemas internos y paneles administrativos para negocios.</li>
            <li>Software y herramientas en validación para cafeterías y giros comerciales.</li>
            <li>Diagnósticos digitales interactivos.</li>
            <li>Demostraciones guiadas y simuladores interactivos.</li>
            <li>Planes, módulos orientativos o propuestas de servicio.</li>
            <li>Prototipos y funcionalidades beta.</li>
          </ul>
          <p className="text-xs text-white/60">
            La información publicada no constituye automáticamente una oferta comercial vinculante, cotización definitiva o garantía de contratación forzosa.
          </p>
        </section>

        {/* 3. Diagnóstico digital */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">3.</span> Diagnóstico digital
          </h2>
          <p>
            El diagnóstico digital interactivo disponible en el sitio genera una recomendación preliminar y orientativa con base en las respuestas proporcionadas por el usuario. El resultado:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Es meramente orientativo y con propósito de asesoría inicial.</li>
            <li>No sustituye una consultoría técnica o de negocio integral.</li>
            <li>No garantiza por sí mismo una implementación inmediata.</li>
            <li>No determina por sí solo el plan de trabajo o costo final.</li>
            <li>Puede cambiar tras validar la infraestructura y procesos reales del negocio.</li>
          </ul>
        </section>

        {/* 4. Beta y demostraciones */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">4.</span> Beta y demostraciones
          </h2>
          <p>
            Algunas funcionalidades, módulos y pantallas mostradas pueden encontrarse en etapas de prototipo, demo, beta, validación técnica o desarrollo futuro sujeto a configuración.
          </p>
          <p>
            Las interfaces o flujos visualizados no deben interpretarse como garantía de que todas las funciones están disponibles en producción de forma inmediata o universal. La disponibilidad final de cualquier desarrollo dependerá de:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Alcance técnico expresamente contratado.</li>
            <li>Configuración operativa y requerimientos del negocio.</li>
            <li>Infraestructura tecnológica y de servidores.</li>
            <li>Integraciones con terceros (APIs, pasarelas de pago, etc.).</li>
            <li>Número de usuarios, roles o sucursales.</li>
            <li>Acuerdo comercial y contrato de desarrollo bilateral formalizado por escrito.</li>
          </ul>
        </section>

        {/* 5. Planes y precios */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">5.</span> Planes y precios
          </h2>
          <p>
            Los planes, módulos, estimaciones, tiempos de entrega y características técnicas pueden variar antes de formalizar una contratación. Una contratación válida y exigible entre las partes deberá establecerse por escrito e incluir:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Servicio o software contratado.</li>
            <li>Alcance específico y entregables.</li>
            <li>Módulos incluidos y funcionalidades pactadas.</li>
            <li>Precio, desglose fiscal y forma de pago.</li>
            <li>Duración, cronograma y fechas de entrega.</li>
            <li>Responsabilidades de cada una de las partes.</li>
            <li>Condiciones de soporte y mantenimiento técnico.</li>
            <li>Integraciones y dependencias de terceros.</li>
            <li>Condiciones de cancelación y rescisión de servicio.</li>
          </ul>
        </section>

        {/* 6. Uso permitido */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">6.</span> Uso permitido
          </h2>
          <p>
            El usuario se compromete a utilizar el sitio web de forma lícita, diligente y conforme a la moral y el orden público. Queda estrictamente prohibido:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Intentar vulnerar, desactivar o alterar la seguridad del sitio web o servidores.</li>
            <li>Introducir virus, troyanos, scripts dañinos o código malicioso.</li>
            <li>Utilizar los formularios de contacto o diagnóstico para fines de spam o envío masivo no solicitado.</li>
            <li>Suplantar la identidad de otras personas o empresas.</li>
            <li>Proporcionar información deliberadamente falsa o engañosa.</li>
            <li>Extraer contenido o código de forma automatizada (scraping) sin autorización expresa.</li>
            <li>Interferir con el correcto funcionamiento y disponibilidad del sitio.</li>
          </ul>
        </section>

        {/* 7. Propiedad intelectual */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">7.</span> Propiedad intelectual
          </h2>
          <p>
            El contenido del sitio web, incluyendo sin limitar textos, logotipos, diseños, código fuente, componentes interactivos, nombres comerciales, marcas registradas, videos y materiales visuales, es propiedad exclusiva de CODIA o de sus respectivos titulares licenciantes.
          </p>
          <p className="text-white/70">
            No se permite copiar, modificar, reproducir, distribuir, comercializar o reutilizar dicho contenido sin la autorización previa, expresa y por escrito de CODIA.
          </p>
        </section>

        {/* 8. Enlaces externos */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">8.</span> Enlaces externos
          </h2>
          <p>
            El sitio puede contener hipervínculos a sitios, servicios externos, redes sociales o herramientas de terceros (como WhatsApp, Facebook, Instagram, Google, etc.). CODIA no controla ni asume responsabilidad alguna sobre la disponibilidad, contenido, políticas de privacidad, términos o seguridad de dichos sitios externos. El usuario deberá revisar las condiciones de cada plataforma externa al ingresar.
          </p>
        </section>

        {/* 9. Disponibilidad del sitio */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">9.</span> Disponibilidad del sitio
          </h2>
          <p>
            CODIA procurará mantener la máxima disponibilidad y funcionamiento continuo del sitio, pero no garantiza el acceso ininterrumpido, la ausencia total de errores o la compatibilidad con todas las versiones de navegadores o dispositivos. CODIA se reserva el derecho de realizar tareas de mantenimiento, actualización, suspensión o modificación temporal o definitiva del portal sin previo aviso.
          </p>
        </section>

        {/* 10. Limitación de responsabilidad */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">10.</span> Limitación de responsabilidad
          </h2>
          <p>
            En la medida permitida por la legislación aplicable, CODIA no será responsable por daños, pérdidas o perjuicios directos o indirectos derivados de:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>El uso indebido o imposibilidad de uso del sitio web.</li>
            <li>Decisiones comerciales u operativas tomadas únicamente con base en un diagnóstico digital orientativo.</li>
            <li>Información errónea o falsa proporcionada por el propio usuario.</li>
            <li>Interrupciones, caídas o fallas en servicios de telecomunicaciones o de proveedores externos de hosting y correo.</li>
            <li>Ataques cibernéticos o eventos de fuerza mayor fuera de nuestro control razonable.</li>
            <li>El uso de funcionalidades presentadas en etapa de prototipo o beta.</li>
          </ul>
        </section>

        {/* 11. Protección de datos */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">11.</span> Protección de datos
          </h2>
          <p>
            El tratamiento de los datos personales recabados a través del sitio web se realiza estrictamente conforme a nuestro{' '}
            <Link to="/aviso-de-privacidad" className="text-blue-400 underline font-medium">
              Aviso de Privacidad
            </Link>, en cumplimiento con la normativa mexicana aplicable.
          </p>
        </section>

        {/* 12. Modificaciones */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">12.</span> Modificaciones
          </h2>
          <p>
            CODIA se reserva el derecho de actualizar o modificar estos Términos y Condiciones en cualquier momento para reflejar cambios legales, técnicos o comerciales. La versión actualizada estará disponible en:
          </p>
          <p>
            <Link to="/terminos-y-condiciones" className="text-blue-400 underline font-medium">
              https://codiasoftware.online/terminos-y-condiciones
            </Link>
          </p>
          <p className="text-xs text-white/60">
            El uso continuo del sitio web tras la publicación de cambios implicará la aceptación expresa de los nuevos términos.
          </p>
        </section>

        {/* 13. Legislación aplicable */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">13.</span> Legislación aplicable y jurisdicción
          </h2>
          <p>
            Para la interpretación, cumplimiento y resolución de controversias derivadas del uso de este sitio web, las partes se someten expresamente a las leyes federales de los Estados Unidos Mexicanos y a los tribunales competentes en <strong>[Estado y jurisdicción aplicable]</strong>, renunciando a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros.
          </p>
        </section>

        {/* 14. Contacto */}
        <section className="space-y-3 border-t border-white/10 pt-6">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">14.</span> Contacto
          </h2>
          <p>Para cualquier duda o aclaración respecto a estos Términos y Condiciones, puedes contactarnos a:</p>
          <ul className="space-y-1 text-white/70 text-xs sm:text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span><strong>Correo:</strong> [correo oficial] (contacto directo: {siteConfig.contact.email})</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span><strong>Teléfono o WhatsApp:</strong> [número oficial] ({siteConfig.contact.phone})</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span><strong>Domicilio:</strong> [domicilio completo]</span>
            </li>
          </ul>
        </section>

      </div>

    </div>
  );
};
