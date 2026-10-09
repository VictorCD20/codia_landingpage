import type { CookiePreferences, CookieInventoryItem } from '../types/cookies';

const CONSENT_STORAGE_KEY = 'codia_cookie_consent';
const CONSENT_VERSION = '1.0.0';

export const COOKIE_INVENTORY: CookieInventoryItem[] = [
  {
    name: 'codia_cookie_consent',
    provider: 'CODIA (Propio)',
    purpose: 'Almacena de forma persistente las preferencias de consentimiento de cookies seleccionadas por el usuario.',
    category: 'necessary',
    duration: '12 meses (LocalStorage)',
    type: 'LocalStorage',
    requiresConsent: false
  },
  {
    name: 'va / _vercel_jwt',
    provider: 'Vercel Analytics',
    purpose: 'Mide visitas y métricas técnicas agregadas de rendimiento del sitio web con preservación de privacidad.',
    category: 'analytics',
    duration: 'Sesión / Persistente',
    type: 'LocalStorage',
    requiresConsent: true
  },
  {
    name: '_ga, _ga_*',
    provider: 'Google Analytics 4 (Google LLC)',
    purpose: 'Distingue usuarios únicos y sesiones para generar estadísticas anónimas de tráfico y navegación.',
    category: 'analytics',
    duration: '2 años / 24 horas',
    type: 'Cookie',
    requiresConsent: true
  },
  {
    name: '_gcl_au, gcl_aw',
    provider: 'Google Ads / Tag Manager (Google LLC)',
    purpose: 'Medición de efectividad y conversiones de campañas publicitarias de búsqueda.',
    category: 'marketing',
    duration: '90 días',
    type: 'Cookie',
    requiresConsent: true
  }
];

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
  timestamp: '',
  version: CONSENT_VERSION
};

/**
 * Obtiene las preferencias de cookies guardadas o null si aún no se ha decidido.
 */
export function getSavedCookieConsent(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookiePreferences;
    return parsed;
  } catch (e) {
    console.warn('[Cookie Consent] Error reading storage:', e);
    return null;
  }
}

/**
 * Guarda las preferencias de consentimiento en localStorage y despacha un evento.
 */
export function saveCookieConsent(prefs: Omit<CookiePreferences, 'timestamp' | 'version' | 'necessary'>): CookiePreferences {
  const fullConsent: CookiePreferences = {
    necessary: true,
    preferences: Boolean(prefs.preferences),
    analytics: Boolean(prefs.analytics),
    marketing: Boolean(prefs.marketing),
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION
  };

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(fullConsent));
      window.dispatchEvent(new CustomEvent('codia_cookie_consent_updated', { detail: fullConsent }));
    } catch (e) {
      console.warn('[Cookie Consent] Error saving storage:', e);
    }
  }

  return fullConsent;
}

/**
 * Acepta todas las cookies (necesarias, preferencias, analíticas y marketing).
 */
export function acceptAllCookies(): CookiePreferences {
  return saveCookieConsent({
    preferences: true,
    analytics: true,
    marketing: true
  });
}

/**
 * Rechaza todas las cookies no esenciales (solo conserva necesarias).
 */
export function rejectNonEssentialCookies(): CookiePreferences {
  return saveCookieConsent({
    preferences: false,
    analytics: false,
    marketing: false
  });
}

/**
 * Comprueba si el usuario tiene consentimiento activo para analítica.
 */
export function hasAnalyticsConsent(): boolean {
  const consent = getSavedCookieConsent();
  return consent ? consent.analytics : false;
}

/**
 * Comprueba si el usuario tiene consentimiento activo para marketing.
 */
export function hasMarketingConsent(): boolean {
  const consent = getSavedCookieConsent();
  return consent ? consent.marketing : false;
}

/**
 * Permite suscribirse a cambios de consentimiento.
 */
export function onCookieConsentChange(callback: (consent: CookiePreferences) => void): () => void {
  if (typeof window === 'undefined') return () => {};

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<CookiePreferences>;
    if (customEvent.detail) {
      callback(customEvent.detail);
    }
  };

  window.addEventListener('codia_cookie_consent_updated', handler);
  return () => {
    window.removeEventListener('codia_cookie_consent_updated', handler);
  };
}
