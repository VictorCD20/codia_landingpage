import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
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

    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Faltan campos obligatorios',
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: 'Correo no válido',
      });
    }

    const fromEmail = process.env.CODIA_FROM_EMAIL;
    const internalEmail = process.env.CODIA_CONTACT_EMAIL;

    if (!fromEmail || !internalEmail) {
      return res.status(500).json({
        error: 'Faltan variables de entorno en el servidor',
      });
    }

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

    await resend.emails.send({
      from: fromEmail,
      to: internalEmail,
      subject: 'Nueva solicitud desde el sitio web de CODIA',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; color: #333; border: 1px solid #ddd; padding: 20px; rounded-xl">
          <h2 style="color: #7621B0; border-bottom: 2px solid #7621B0; padding-bottom: 10px;">Nueva solicitud desde CODIA</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Negocio:</strong> ${business_name || 'No especificado'}</p>
          <p><strong>Correo:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>WhatsApp:</strong> ${phone || 'No especificado'}</p>
          <p><strong>Tipo de solución:</strong> ${solution_type || 'No especificado'}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #7621B0; margin-top: 10px;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Correo enviado correctamente',
    });
  } catch (error) {
    console.error('Error enviando correo:', error);

    return res.status(500).json({
      error: 'No se pudo enviar el correo',
    });
  }
}
