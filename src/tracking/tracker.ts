import type { TelemetryEvent, MetaPixelEventName } from '../types/tracking';
import { adsStrategyMap } from '../config/ads';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

/**
 * Motor de Rastreo Unificado CODIA (Tracking & Telemetry Engine - FASES 10, 15, 16)
 */
class TelemetryEngine {
  private isDev = import.meta.env.DEV;

  /**
   * Dispara un evento unificado a GA4, GTM, Meta Pixel y Microsoft Clarity
   */
  public trackEvent(event: TelemetryEvent): void {
    if (this.isDev) {
      console.log('[CODIA Telemetry Event]:', event);
    }

    if (typeof window === 'undefined') return;

    // 1. GA4 / Google Ads via gtag
    if (window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.params
      });

      // Disparar conversión Google Ads si aplica
      if (event.googleAdsConversionLabel) {
        window.gtag('event', 'conversion', {
          send_to: event.googleAdsConversionLabel,
          value: event.value || 1.0,
          currency: 'MXN'
        });
      }
    }

    // 2. Google Tag Manager via dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: event.action,
        category: event.category,
        label: event.label,
        value: event.value,
        ...event.params
      });
    }

    // 3. Meta Pixel (Facebook Ads)
    if (window.fbq) {
      const metaEvent: MetaPixelEventName = event.metaPixelEvent || 'PageView';
      if (['PageView', 'ViewContent', 'Lead', 'Contact', 'CompleteRegistration'].includes(metaEvent)) {
        window.fbq('track', metaEvent, {
          content_name: event.label || event.action,
          content_category: event.category,
          value: event.value,
          currency: 'MXN',
          ...event.params
        });
      } else {
        window.fbq('trackCustom', metaEvent, { ...event.params });
      }
    }

    // 4. Microsoft Clarity
    if (window.clarity) {
      window.clarity('event', event.action);
    }
  }

  /**
   * Registra vista de página (Page View) con estrategia publicitaria asociada
   */
  public trackPageView(pathname: string): void {
    const adsStrategy = adsStrategyMap[pathname];
    const metaPixelEvent: MetaPixelEventName = (adsStrategy?.metaEvent as MetaPixelEventName) || 'PageView';

    this.trackEvent({
      action: 'page_view',
      category: 'Navigation',
      label: pathname,
      metaPixelEvent,
      params: {
        page_path: pathname,
        commercial_objective: adsStrategy?.commercialObjective || 'General Navigation'
      }
    });
  }

  /**
   * Evento de conversión de Lead (Formulario enviado exitosamente)
   */
  public trackLead(solutionType: string): void {
    this.trackEvent({
      action: 'generate_lead',
      category: 'Conversion',
      label: solutionType,
      value: 100,
      metaPixelEvent: 'Lead',
      googleAdsConversionLabel: 'lead_form_submitted'
    });
  }

  /**
   * Clics en WhatsApp
   */
  public trackWhatsAppClick(locationLabel: string): void {
    this.trackEvent({
      action: 'click_whatsapp',
      category: 'Lead Initiation',
      label: locationLabel,
      metaPixelEvent: 'Contact'
    });
  }

  /**
   * Clics en Llamada Telefónica
   */
  public trackPhoneClick(locationLabel: string): void {
    this.trackEvent({
      action: 'click_phone',
      category: 'Lead Initiation',
      label: locationLabel,
      metaPixelEvent: 'Contact'
    });
  }

  /**
   * Clics en botones CTA
   */
  public trackCTAClick(ctaName: string, destination: string): void {
    this.trackEvent({
      action: 'click_cta',
      category: 'Engagement',
      label: `${ctaName} -> ${destination}`
    });
  }

  /**
   * Tracking de profundidad de scroll (50% y 90%)
   */
  public trackScrollDepth(depthPercent: 50 | 90): void {
    this.trackEvent({
      action: depthPercent === 50 ? 'scroll_50' : 'scroll_90',
      category: 'Engagement',
      label: `Scroll ${depthPercent}%`,
      value: depthPercent
    });
  }

  /**
   * Tracking de tiempo en página
   */
  public trackTimeOnPage(seconds: number): void {
    this.trackEvent({
      action: 'time_on_page',
      category: 'Engagement',
      label: `${seconds}s on page`,
      value: seconds
    });
  }
}

export const telemetry = new TelemetryEngine();
