import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Validate Method (Only allow POST)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Solo se acepta POST.' });
  }

  try {
    const {
      name,
      business_name,
      email,
      phone,
      solution_type,
      message,
    } = req.body;

    // Validate Environmental Variables safely
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CODIA_FROM_EMAIL;
    const internalEmail = process.env.CODIA_CONTACT_EMAIL;

    if (!resendApiKey) {
      console.error("Error: Falta RESEND_API_KEY en las variables de entorno");
      return res.status(500).json({ error: 'Configuración del servidor incompleta' });
    }
    if (!fromEmail || !internalEmail) {
      console.error("Error: Faltan correos origen o destino en variables de entorno");
      return res.status(500).json({ error: 'Configuración del servidor incompleta' });
    }

    // Validate Fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Faltan campos obligatorios (nombre, correo o mensaje)' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'El formato de correo no es válido' });
    }

    // Initialize Resend safely inside the handler
    const resend = new Resend(resendApiKey);

    // 1. Send User confirmation email (Clean and high-deliverability template)
    const userEmailResult = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Hemos recibido tu solicitud en CODIA',
      text: `Hola, ${name}.\n\nGracias por contactar a CODIA.\n\nRecibimos la información de tu proyecto y la revisaremos para entender mejor qué solución digital puede ayudarte.\n\nNos comunicaremos contigo pronto para conocer más detalles y preparar una propuesta clara.\n\nAtentamente,\nEquipo CODIA\nhttps://codiasoftware.online/`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; max-width: 580px; margin: 0 auto; color: #2d3748; padding: 20px; border: 1px solid #edf2f7; border-radius: 8px; background-color: #ffffff;">
          <div style="text-align: center; border-bottom: 1px solid #edf2f7; padding-bottom: 20px; margin-bottom: 24px;">
            <span style="font-size: 24px; font-weight: 800; letter-spacing: 0.1em; color: #1a202c;">CODIA</span>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #a0aec0; text-transform: uppercase; letter-spacing: 0.15em;">Soluciones Digitales</p>
          </div>
          <h2 style="color: #2b6cb0; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 16px;">¡Hola, ${name}!</h2>
          <p style="margin-top: 0; margin-bottom: 16px; font-size: 15px;">Gracias por ponerte en contacto con nosotros.</p>
          <p style="margin-top: 0; margin-bottom: 16px; font-size: 15px;">Hemos recibido con éxito los detalles de tu solicitud. Nuestro equipo de ingeniería y diseño los revisará con detalle para ver qué tipo de solución o automatización se adapta mejor a tu negocio.</p>
          <p style="margin-top: 0; margin-bottom: 24px; font-size: 15px;">Nos comunicaremos contigo a la brevedad para agendar una llamada rápida, entender a fondo tus necesidades y prepararte una propuesta clara.</p>
          
          <div style="background-color: #ebf8ff; border-left: 4px solid #3182ce; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
            <p style="margin: 0; font-size: 14px; color: #2b6cb0; font-weight: 600;">¿Tienes dudas previas?</p>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #2c5282;">Puedes responder directamente a este correo o escribirnos vía WhatsApp a través de los números listados en nuestro sitio web.</p>
          </div>

          <hr style="border: 0; border-top: 1px solid #edf2f7; margin: 24px 0;" />
          <p style="font-size: 13px; color: #718096; margin: 0; line-height: 1.5;">
            Atentamente,<br/>
            <strong>Equipo de Tecnología de CODIA</strong><br/>
            <a href="https://codiasoftware.online/" style="color: #3182ce; text-decoration: none; font-weight: 500;">https://codiasoftware.online</a>
          </p>
        </div>
      `,
    });

    if (userEmailResult.error) {
      console.error("Error en Resend (correo usuario):", userEmailResult.error);
      return res.status(500).json({
        success: false,
        step: "user_email",
        error: userEmailResult.error
      });
    }

    // 2. Send internal CODIA notification email (Professional layout)
    const internalEmailResult = await resend.emails.send({
      from: fromEmail,
      to: internalEmail,
      subject: 'Nueva solicitud recibida en CODIA',
      text: `Se recibió una nueva solicitud desde el formulario del sitio web.\n\nNombre: ${name}\nNegocio: ${business_name || 'No especificado'}\nCorreo: ${email}\nWhatsApp: ${phone || 'No especificado'}\nTipo de solución: ${solution_type || 'No especificado'}\nMensaje: ${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; max-width: 580px; margin: 0 auto; color: #2d3748; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #f7fafc;">
          <h2 style="color: #4a5568; font-size: 18px; font-weight: 700; border-bottom: 2px solid #cbd5e0; padding-bottom: 12px; margin-top: 0; margin-bottom: 20px;">Nueva Solicitud - Diagnóstico</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #718096; width: 140px; font-size: 14px; border-bottom: 1px solid #edf2f7;">Nombre:</td>
              <td style="padding: 8px 0; color: #1a202c; font-size: 14px; border-bottom: 1px solid #edf2f7;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #718096; font-size: 14px; border-bottom: 1px solid #edf2f7;">Negocio:</td>
              <td style="padding: 8px 0; color: #1a202c; font-size: 14px; border-bottom: 1px solid #edf2f7;">${business_name || 'No especificado'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #718096; font-size: 14px; border-bottom: 1px solid #edf2f7;">Correo:</td>
              <td style="padding: 8px 0; color: #1a202c; font-size: 14px; border-bottom: 1px solid #edf2f7;"><a href="mailto:${email}" style="color: #3182ce; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #718096; font-size: 14px; border-bottom: 1px solid #edf2f7;">WhatsApp:</td>
              <td style="padding: 8px 0; color: #1a202c; font-size: 14px; border-bottom: 1px solid #edf2f7;">${phone || 'No especificado'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #718096; font-size: 14px; border-bottom: 1px solid #edf2f7;">Solución solicitada:</td>
              <td style="padding: 8px 0; color: #1a202c; font-size: 14px; border-bottom: 1px solid #edf2f7;">${solution_type || 'No especificado'}</td>
            </tr>
          </table>

          <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px;">
            <p style="margin: 0 0 8px 0; font-weight: 600; color: #718096; font-size: 14px;">Mensaje o requerimientos:</p>
            <p style="margin: 0; font-size: 14px; color: #2d3748; white-space: pre-wrap; line-height: 1.5;">${message}</p>
          </div>

          <div style="text-align: center; margin-top: 24px; font-size: 12px; color: #a0aec0;">
            Enviado de forma segura desde el formulario web oficial de CODIA.
          </div>
        </div>
      `,
    });

    if (internalEmailResult.error) {
      console.error("Error en Resend (correo interno):", internalEmailResult.error);
      return res.status(500).json({
        success: false,
        step: "internal_email",
        error: internalEmailResult.error
      });
    }

    return res.status(200).json({
      success: true,
      userEmailId: userEmailResult.data?.id,
      internalEmailId: internalEmailResult.data?.id
    });
  } catch (error: any) {
    console.error('Error fatal enviando correo:', error);
    return res.status(500).json({
      success: false,
      error: 'Error al enviar el correo a través de Resend',
      details: error?.message || 'Error desconocido'
    });
  }
}
