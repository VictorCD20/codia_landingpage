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

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw_0gV0-h6SZceJ65CW9uucl27kb6-dqMNS8Cc2k60gtl01UhYAB0uLt1Tvgva56zYx/exec';

  const sheetsPayload = {
    nombre: cleanName,
    negocio: cleanBusiness,
    correo: cleanEmail,
    telefono: cleanPhone,
    solucion: cleanSolution,
    mensaje: cleanMessage
  };

  try {
    // 1. Save to Google Sheets
    await fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sheetsPayload)
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
