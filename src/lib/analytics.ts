/**
 * Facade y utilidades de Analytics preparadas para escalabilidad futura.
 * En la Fase 1 no altera GTM, Google Analytics ni Vercel Analytics existente.
 */

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const trackEvent = (event: AnalyticsEvent): void => {
  // Facade preparado para enviar eventos personalizados en fases posteriores.
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }
};
