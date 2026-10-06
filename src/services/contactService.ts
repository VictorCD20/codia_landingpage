import { sanitizeInput, validateEmail, validatePhone, isRateLimited } from '../utils/security';
import { telemetry } from '../tracking/tracker';

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  solutionType: string;
  message: string;
  honeypot?: string; // Anti-spam hidden field
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
}): Promise<boolean> {
  try {
    const formData = new URLSearchParams();
    formData.append('nombre', payload.nombre || '');
    formData.append('negocio', payload.negocio || '');
    formData.append('correo', payload.correo || '');
    formData.append('telefono', payload.telefono || '');
    formData.append('solucion', payload.solucion || '');
    formData.append('mensaje', payload.mensaje || '');
    formData.append('fecha', new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' }));

    await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    console.log('[Google Sheets]: Lead successfully dispatched to database.');
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
  // 1. Anti-spam honeypot check
  if (data.honeypot && data.honeypot.trim() !== '') {
    console.warn('[Anti-Spam]: Honeypot triggered.');
    return { success: false, status: 'spam_rejected', error: 'Solicitud sospechosa detectada.' };
  }

  // 2. Client-side Rate Limiting
  const userKey = `${data.email}_${data.phone}`;
  if (isRateLimited(userKey, 10000)) {
    return {
      success: false,
      status: 'rate_limited',
      error: 'Por favor espera unos momentos antes de enviar otra solicitud.'
    };
  }

  // 3. Sanitization & Validation
  const cleanName = sanitizeInput(data.name);
  const cleanBusiness = sanitizeInput(data.businessName);
  const cleanEmail = sanitizeInput(data.email);
  const cleanPhone = sanitizeInput(data.phone);
  const cleanSolution = sanitizeInput(data.solutionType);
  const cleanMessage = sanitizeInput(data.message);

  if (!validateEmail(cleanEmail)) {
    return { success: false, status: 'validation_error', error: 'Ingresa un correo electrónico válido.' };
  }

  if (!validatePhone(cleanPhone)) {
    return { success: false, status: 'validation_error', error: 'Ingresa un número de WhatsApp/teléfono válido.' };
  }

  try {
    // 1. Save to Google Sheets
    await saveLeadToGoogleSheets({
      nombre: cleanName,
      negocio: cleanBusiness,
      correo: cleanEmail,
      telefono: cleanPhone,
      solucion: cleanSolution,
      mensaje: cleanMessage,
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
          message: cleanMessage
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
