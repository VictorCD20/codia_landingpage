export interface CookiePreferences {
  necessary: boolean; // Always true
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
}

export type CookieCategory = 'necessary' | 'preferences' | 'analytics' | 'marketing';

export interface CookieInventoryItem {
  name: string;
  provider: string;
  purpose: string;
  category: CookieCategory;
  duration: string;
  type: 'Cookie' | 'LocalStorage' | 'SessionStorage';
  requiresConsent: boolean;
}
