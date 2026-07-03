import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="servicios" className="c3-pricing-section">
      <svg className="hidden">
        <filter id="c3-noise-pricing">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
          <feComponentTransfer><feFuncA type="linear" slope="0.075" /></feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </svg>

      <div className="c3-watermark-container">
        <div className="c3-watermark-main" style={{ filter: 'url(#c3-noise-pricing)' }}>
          <span className="c3-watermark-line-1">Soluciones.</span>
          <span className="c3-watermark-line-2">Para tu negocio</span>
        </div>
      </div>

      <div className="c3-grid">
        {/* Startup Plan */}
        <div className="c3-card">
          <div className="c3-tier-small">Start</div>
          <div className="c3-tier-large">Esencial</div>
          <div className="c3-desc">Digitaliza tu presencia. Diseñado para PyMEs que necesitan establecer un canal de ventas digital profesional y optimizado para conversión.</div>
          <ul className="c3-list">
            <li><div className="c3-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>Plataforma E-Commerce segura</li>
            <li><div className="c3-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>Integración de cobros automatizados</li>
            <li><div className="c3-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>Adaptado para móviles y tablets</li>
            <li><div className="c3-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>Aumento de visibilidad en línea</li>
          </ul>
          <a href="#contacto" className="c3-btn text-center no-underline">Cotizar Solución</a>
        </div>

        {/* Business Plan */}
        <div className="c3-card">
          <div className="c3-tier-small">Business</div>
          <div className="c3-tier-large">Avanzado</div>
          <div className="c3-desc">Automatiza tu operación. Para empresas en crecimiento que requieren control total de inventarios, finanzas y una aplicación móvil propia.</div>
          <ul className="c3-list">
            <li><div className="c3-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>Sistemas de gestión (ERP / POS)</li>
            <li><div className="c3-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>Aplicaciones móviles personalizadas</li>
            <li><div className="c3-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>Reducción de costos operativos</li>
            <li><div className="c3-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>Métricas y reportes en tiempo real</li>
          </ul>
          <a href="#contacto" className="c3-btn text-center no-underline">Cotizar Solución</a>
        </div>

        {/* Pro Plan */}
        <div className="c3-card c3-card-pro">
          <div className="c3-tier-small">Enterprise</div>
          <div className="c3-tier-large">Evolución</div>
          <div className="c3-desc">Lidera tu industria. Arquitectura empresarial con Inteligencia Artificial, análisis predictivo y alta escalabilidad para corporativos.</div>
          <ul className="c3-list">
            <li><div className="c3-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>IA para toma de decisiones</li>
            <li><div className="c3-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>Automatización de procesos pesados</li>
            <li><div className="c3-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>Infraestructura en la nube escalable</li>
            <li><div className="c3-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>Soporte y consultoría prioritaria</li>
          </ul>
          <a href="#contacto" className="c3-btn text-center no-underline">Agendar Consultoría</a>
        </div>
      </div>

    </section>
  );
};
