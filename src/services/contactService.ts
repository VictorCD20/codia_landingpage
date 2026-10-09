import { sanitizeInput, validateEmail, validatePhone, isRateLimited } from '../utils/security';
import { telemetry } from '../tracking/tracker';

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  solutionType: string;
  message: string;
  privacyAccepted: boolean;
  marketingAccepted?: boolean;
  source?: string;
  honeypot?: string; // Anti-spam hidden field
}

export interface ConsentAuditRecord {
  consentGiven: boolean;
  consentDate: string;
  consentVersion: string;
  privacyAccepted: boolean;
  marketingConsent: boolean;
  source: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  error?: string;
  status: 'success' | 'email_error' | 'rate_limited' | 'spam_rejected' | 'validation_error';
}

export const GOOGLE_SHEETS_SCRIPT_URL = 
  import.meta.env.VITE_GOOGLE_SHEETS_URL || 
  'https://script.google.com/macros/s/AKfycbw_0gV0-h6SZceJ65CW9uucl27kb6-dqMNS8Cc2k60gtl01UhYAB0uLt1Tvgva56zYx/exec';

/**
 * Universal direct sync to Google Sheets database.
 * Supports Google Apps Script e.parameter via URLSearchParams & mode: no-cors.
 */
export async function saveLeadToGoogleSheets(payload: {
  nombre: string;
  negocio?: string;
  correo?: string;
  telefono: string;
  solucion?: string;
  mensaje?: string;
  consentimiento?: ConsentAuditRecord;
  aviso_privacidad?: string;
  consentimiento_marketing?: string;
  source?: string;
}): Promise<boolean> {
  try {
    const isPrivacyAccepted = payload.consentimiento ? payload.consentimiento.privacyAccepted : (payload.aviso_privacidad === 'Aceptado' || Boolean(payload.aviso_privacidad));
    const isMarketingAccepted = payload.consentimiento ? payload.consentimiento.marketingConsent : (payload.consentimiento_marketing === 'Aceptado');
    const consentDate = payload.consentimiento?.consentDate || new Date().toISOString();
    const consentVersion = payload.consentimiento?.consentVersion || '1.0';
    const source = payload.consentimiento?.source || payload.source || 'sitio-web';

    const formData = new URLSearchParams();
    formData.append('nombre', payload.nombre || '');
    formData.append('negocio', payload.negocio || '');
    formData.append('correo', payload.correo || '');
    formData.append('telefono', payload.telefono || '');
    formData.append('solucion', payload.solucion || '');
    formData.append('mensaje', payload.mensaje || '');
    formData.append('aviso_privacidad', isPrivacyAccepted ? 'Aceptado' : 'No aceptado');
    formData.append('consentimiento_marketing', isMarketingAccepted ? 'Aceptado' : 'No aceptado');
    formData.append('consent_version', consentVersion);
    formData.append('consent_date', consentDate);
    formData.append('source', source);
    formData.append('fecha', new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' }));

    await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    console.log('[Google Sheets]: Lead successfully dispatched to database with consent audit.');
    return true;
  } catch (err) {
    console.warn('[Google Sheets Sync Warning]:', err);
    return false;
  }
}

/**
 * Comprehensive lead submission with rate-limiting, Google Sheets storage,
 * Resend email dispatch, and conversion telemetry.
 */
export async function submitContactDiagnostic(data: ContactFormData): Promise<ContactSubmissionResult> {
  // 1. Mandatory Privacy Policy Consent Check
  if (!data.privacyAccepted) {
    return {
      success: false,
      status: 'validation_error',
      error: 'Debes aceptar el Aviso de Privacidad para enviar tu solicitud.'
    };
  }

  // 2. Anti-spam honeypot check
  if (data.honeypot && data.honeypot.trim() !== '') {
    console.warn('[Anti-Spam]: Honeypot triggered.');
    return { success: false, status: 'spam_rejected', error: 'Solicitud sospechosa detectada.' };
  }

  // 3. Client-side Rate Limiting
  const userKey = `${data.email}_${data.phone}`;
  if (isRateLimited(userKey, 10000)) {
    return {
      success: false,
      status: 'rate_limited',
      error: 'Por favor espera unos momentos antes de enviar otra solicitud.'
    };
  }

  // 4. Sanitization & Validation
  const cleanName = sanitizeInput(data.name);
  const cleanBusiness = sanitizeInput(data.businessName);
  const cleanEmail = sanitizeInput(data.email);
  const cleanPhone = sanitizeInput(data.phone);
  const cleanSolution = sanitizeInput(data.solutionType);
  const cleanMessage = sanitizeInput(data.message);

  if (!cleanName || cleanName.trim().length < 2) {
    return { success: false, status: 'validation_error', error: 'Por favor ingresa tu nombre.' };
  }

  if (!validateEmail(cleanEmail)) {
    return { success: false, status: 'validation_error', error: 'Ingresa un correo electrónico válido.' };
  }

  if (!validatePhone(cleanPhone)) {
    return { success: false, status: 'validation_error', error: 'Ingresa un número de WhatsApp/teléfono válido (10 dígitos).' };
  }

  try {
    // Build audit record
    const consentAudit: ConsentAuditRecord = {
      consentGiven: true,
      consentDate: new Date().toISOString(),
      consentVersion: '1.0',
      privacyAccepted: true,
      marketingConsent: Boolean(data.marketingAccepted),
      source: data.source || 'formulario-contacto'
    };

    // 1. Save to Google Sheets with consent audit trail
    await saveLeadToGoogleSheets({
      nombre: cleanName,
      negocio: cleanBusiness,
      correo: cleanEmail,
      telefono: cleanPhone,
      solucion: cleanSolution,
      mensaje: cleanMessage,
      consentimiento: consentAudit
    });

    // 2. Send email via Resend serverless endpoint
    let emailStatus = true;
    try {
      const emailRes = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          business_name: cleanBusiness,
          email: cleanEmail,
          phone: cleanPhone,
          solution_type: cleanSolution,
          message: cleanMessage,
          consent: consentAudit
        })
      });
      if (!emailRes.ok) emailStatus = false;
    } catch {
      emailStatus = false;
    }

    // 3. Track conversion telemetry
    telemetry.trackLead(cleanSolution);

    if (!emailStatus) {
      return { success: true, status: 'email_error' };
    }

    return { success: true, status: 'success' };
  } catch (err) {
    console.error('Error submitting contact form:', err);
    return { success: false, status: 'validation_error', error: 'Error de conexión. Revisa tu internet e inténtalo nuevamente.' };
  }
}
