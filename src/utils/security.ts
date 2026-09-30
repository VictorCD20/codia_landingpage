/**
 * Security & Sanitization Utilities (FASE 13)
 */

export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone: string): boolean {
  // Accepts standard numbers, +, spaces, hyphens (minimum 7 digits)
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 7 && digitsOnly.length <= 15;
}

/**
 * Client side rate limiter to prevent duplicate spam form submissions
 */
const lastSubmissionMap = new Map<string, number>();

export function isRateLimited(key: string, cooldownMs = 10000): boolean {
  const now = Date.now();
  const lastTime = lastSubmissionMap.get(key) || 0;
  if (now - lastTime < cooldownMs) {
    return true;
  }
  lastSubmissionMap.set(key, now);
  return false;
}
