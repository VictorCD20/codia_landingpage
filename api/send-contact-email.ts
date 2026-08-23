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

  // 1. Secure Logging
  console.log("Endpoint send-contact-email ejecutado");
  console.log("Método:", req.method);
  console.log("Variables presentes:", {
    hasResendKey: Boolean(process.env.RESEND_API_KEY),
    hasContactEmail: Boolean(process.env.CODIA_CONTACT_EMAIL),
    hasFromEmail: Boolean(process.env.CODIA_FROM_EMAIL),
  });

  // 2. Validate Method (Respond 405 for GET or others)
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

    // 3. Validate Environmental Variables safely
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CODIA_FROM_EMAIL;
    const internalEmail = process.env.CODIA_CONTACT_EMAIL;

    if (!resendApiKey) {
      console.error("Error: Falta RESEND_API_KEY en las variables de entorno");
      return res.status(500).json({ error: 'Configuración del servidor incompleta (Resend Key)' });
    }
    if (!fromEmail || !internalEmail) {
      console.error("Error: Faltan correos origen o destino en variables de entorno");
      return res.status(500).json({ error: 'Configuración del servidor incompleta (Emails)' });
    }

    // 4. Validate Fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Faltan campos obligatorios (nombre, correo o mensaje)' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'El formato de correo no es válido' });
    }

    // 5. Initialize Resend safely inside the handler to prevent startup crashes
    const resend = new Resend(resendApiKey);

    // 6. Send User confirmation email
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Recibimos tu solicitud en CODIA',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #3D81E3;">Gracias por contactar a CODIA</h2>
          <p>Hola, <strong>${name}</strong>.</p>
          <p>
            Recibimos la información de tu proyecto y la revisaremos para entender mejor
            qué solución digital puede ayudarte.
          </p>
          <p>
            Nos comunicaremos contigo pronto para conocer más detalles y preparar una propuesta clara.
          </p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 0.9em; color: #777;">
            Atentamente,<br/>
            <strong>Equipo CODIA</strong><br/>
            <a href="https://codiasoftware.online/" style="color: #3D81E3; text-decoration: none;">https://codiasoftware.online/</a>
          </p>
        </div>
      `,
    });

    // 7. Send internal CODIA notification email
    await resend.emails.send({
      from: fromEmail,
      to: internalEmail,
      subject: 'Nueva solicitud desde el sitio web de CODIA',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; color: #333; border: 1px solid #ddd; padding: 20px; border-radius: 12px;">
          <h2 style="color: #7621B0; border-bottom: 2px solid #7621B0; padding-bottom: 10px; margin-top: 0;">Nueva solicitud desde CODIA</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Negocio:</strong> ${business_name || 'No especificado'}</p>
          <p><strong>Correo:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>WhatsApp:</strong> ${phone || 'No especificado'}</p>
          <p><strong>Tipo de solución:</strong> ${solution_type || 'No especificado'}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #7621B0; margin-top: 10px; border-radius: 4px;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Correos enviados correctamente',
    });
  } catch (error: any) {
    console.error('Error enviando correo:', error);
    return res.status(500).json({
      error: 'Error al enviar el correo a través de Resend',
      details: error?.message || 'Error desconocido'
    });
  }
}
