import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Settings, ShieldCheck } from 'lucide-react';
import { COOKIE_INVENTORY } from '../services/cookieConsent';

export const CookiePolicyPage: React.FC = () => {
  const handleOpenPreferences = () => {
    window.dispatchEvent(new Event('codia_open_cookie_preferences'));
  };

  return (
    <div className="pt-12 pb-24 max-w-4xl mx-auto px-6 relative z-10 text-white/90">
      
      {/* Header */}
      <div className="mb-10 border-b border-white/10 pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
          <Cookie className="w-4 h-4" />
          <span>Documento Legal Oficial</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Política de Cookies de CODIA
        </h1>
        <p className="text-white/50 text-xs sm:text-sm">
          Última actualización: 8 de octubre de 2026 | Responsable: CODIA
        </p>
      </div>

      {/* Notice & Quick Action */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-white/80">
            <p className="font-semibold text-white">Control total de tus preferencias de privacidad</p>
            <p className="text-white/60 text-xs mt-0.5">Puedes modificar o revocar tu consentimiento de cookies no esenciales en cualquier momento.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleOpenPreferences}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shrink-0 focus-visible:ring-2 focus-visible:ring-blue-400 outline-none cursor-pointer"
        >
          <Settings className="w-4 h-4" />
          <span>Configurar Cookies</span>
        </button>
      </div>

      {/* Content */}
      <div className="space-y-10 text-sm font-light leading-relaxed text-white/80">
        
        {/* 1. ¿Qué son las cookies? */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">1.</span> ¿Qué son las cookies y tecnologías similares?
          </h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en el navegador o dispositivo del usuario al visitarlos. Asimismo, tecnologías como el almacenamiento local (LocalStorage) permiten guardar de forma segura preferencias del usuario y estados de la aplicación.
          </p>
          <p>
            Estas tecnologías se utilizan para:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Mantener funciones técnicas esenciales y de seguridad en el sitio.</li>
            <li>Recordar tus preferencias de navegación y de privacidad.</li>
            <li>Medir visitas y rendimiento de las páginas de forma anónima y agregada.</li>
            <li>Evaluar la efectividad de campañas informativas y de difusión tecnológica.</li>
          </ul>
        </section>

        {/* 2. Tipos de cookies */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">2.</span> Tipos de cookies según su finalidad
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] space-y-2">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Cookies Estrictamente Necesarias
              </h3>
              <p className="text-xs text-white/60">
                Son indispensables para el funcionamiento y seguridad básica del sitio (como el registro de tu consentimiento o la protección contra spam en formularios). No requieren autorización previa y no pueden desactivarse.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] space-y-2">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                Cookies de Preferencias
              </h3>
              <p className="text-xs text-white/60">
                Permiten recordar aspectos como idioma, personalizaciones visuales o estados de interfaces interactivas para una experiencia más fluida.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] space-y-2">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                Cookies Analíticas
              </h3>
              <p className="text-xs text-white/60">
                Permiten conocer métricas agregadas y anónimas como número de visitas, páginas consultadas, tiempos de navegación y posibles errores técnicos. Solo se activan tras tu consentimiento.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] space-y-2">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Cookies de Marketing
              </h3>
              <p className="text-xs text-white/60">
                Utilizadas para medir el rendimiento de campañas de difusión comercial y mostrar información relevante a usuarios interesados. No se activan sin tu consentimiento explícito.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Cookies utilizadas por CODIA (Tabla Real) */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">3.</span> Inventario técnico de cookies utilizadas por CODIA
          </h2>
          <p className="text-xs text-white/70">
            En cumplimiento con el principio de transparencia y honestidad técnica, a continuación se detallan las tecnologías de almacenamiento y cookies reales detectadas en este sitio web:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.05] text-white/90 font-semibold">
                  <th className="p-3.5 sm:p-4">Identificador</th>
                  <th className="p-3.5 sm:p-4">Proveedor</th>
                  <th className="p-3.5 sm:p-4">Finalidad</th>
                  <th className="p-3.5 sm:p-4">Tipo / Categoría</th>
                  <th className="p-3.5 sm:p-4">Duración</th>
                  <th className="p-3.5 sm:p-4">Requiere Consentimiento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white/75">
                {COOKIE_INVENTORY.map((item) => (
                  <tr key={item.name} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-3.5 sm:p-4 font-mono text-blue-300 font-medium whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="p-3.5 sm:p-4 whitespace-nowrap text-white/90">
                      {item.provider}
                    </td>
                    <td className="p-3.5 sm:p-4 max-w-xs font-light">
                      {item.purpose}
                    </td>
                    <td className="p-3.5 sm:p-4 whitespace-nowrap">
                      <span className="capitalize">{item.category}</span> ({item.type})
                    </td>
                    <td className="p-3.5 sm:p-4 whitespace-nowrap text-white/60">
                      {item.duration}
                    </td>
                    <td className="p-3.5 sm:p-4 whitespace-nowrap">
                      {item.requiresConsent ? (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium">Sí</span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">No (Esencial)</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Gestión del consentimiento */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">4.</span> Gestión del consentimiento
          </h2>
          <p>
            Al ingresar al sitio por primera vez, se muestra un banner interactivo que te permite:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li><strong>Aceptar todas:</strong> Habilita cookies esenciales, analíticas, de preferencias y marketing.</li>
            <li><strong>Rechazar no esenciales:</strong> Bloquea todas las cookies de medición y marketing, manteniendo únicamente las técnicas estrictamente necesarias.</li>
            <li><strong>Configurar:</strong> Abre el Centro de Preferencias para activar o desactivar cada categoría de manera granular.</li>
          </ul>
        </section>

        {/* 5. Retiro del consentimiento */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">5.</span> Retiro y modificación del consentimiento
          </h2>
          <p>
            Puedes cambiar o retirar tu consentimiento en cualquier momento utilizando el botón disponible a continuación o haciendo clic en el enlace permanente <strong>"Configuración de cookies"</strong> ubicado en el pie de página (footer) de todas las secciones del sitio:
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={handleOpenPreferences}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-xs font-semibold focus-visible:ring-2 focus-visible:ring-blue-400 outline-none cursor-pointer"
            >
              <Settings className="w-4 h-4" />
              <span>Abrir Centro de Preferencias de Cookies</span>
            </button>
          </div>
        </section>

        {/* 6. Cookies de terceros */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">6.</span> Cookies de terceros
          </h2>
          <p>
            En caso de interactuar con servicios externos (como reproducción de videos, mapas o enlaces a redes sociales como WhatsApp, Facebook o Instagram), dichos proveedores podrán instalar sus propias cookies sujetas a sus políticas de privacidad particulares. Te recomendamos consultar los términos de dichos terceros.
          </p>
        </section>

        {/* 7. Deshabilitar cookies desde el navegador */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">7.</span> Deshabilitar cookies desde tu navegador
          </h2>
          <p>
            Puedes bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador de internet (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, etc.). Ten en cuenta que si deshabilitas todas las cookies, algunas características o accesos del sitio web podrían verse afectados.
          </p>
        </section>

        {/* 8. Cambios a la política */}
        <section className="space-y-3 border-t border-white/10 pt-6">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-blue-400">8.</span> Cambios a la Política de Cookies
          </h2>
          <p>
            CODIA podrá actualizar esta Política de Cookies en función de nuevas exigencias legales o modificaciones en las herramientas técnicas utilizadas en el sitio. La versión vigente estará permanentemente publicada en:
          </p>
          <p>
            <Link to="/politica-de-cookies" className="text-blue-400 underline font-medium">
              https://codiasoftware.online/politica-de-cookies
            </Link>
          </p>
        </section>

      </div>

    </div>
  );
};
