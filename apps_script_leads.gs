/**
 * CODIA Software — Apps Script para captura de leads
 * Spreadsheet: https://docs.google.com/spreadsheets/d/19dhN5RGUPE7iAjPy_OBvsU8SBQ8fO6ROfXagiJ22qsM
 *
 * Instrucciones de despliegue:
 * 1. Ir a https://script.google.com → Nuevo proyecto
 * 2. Pegar este código, guardar (Ctrl+S)
 * 3. Implementar → Nueva implementación
 *    - Tipo: Aplicación web
 *    - Ejecutar como: Yo (tu cuenta Google)
 *    - Quién puede acceder: Cualquier usuario
 * 4. Copiar la URL de implementación
 * 5. Actualizar .env → VITE_GOOGLE_SHEETS_URL=<url copiada>
 * 6. Redeploy en Vercel / reiniciar servidor local
 */

const SPREADSHEET_ID = '19dhN5RGUPE7iAjPy_OBvsU8SBQ8fO6ROfXagiJ22qsM';
const SHEET_NAME    = 'LEADS CODIA';

function doPost(e) {
  try {
    const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);
    const p     = e.parameter || {};

    sheet.appendRow([
      p.fecha                  || new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' }),
      p.nombre                 || '',
      p.negocio                || '',
      p.correo                 || '',
      p.telefono               || '',
      p.solucion               || '',
      p.source                 || 'sitio-web',
      p.giro                   || '',
      p.tamano_equipo          || '',
      p.control_actual         || '',
      p.dolor_principal        || '',
      p.meta                   || '',
      p.modulos_sugeridos      || '',
      p.horario_preferido      || '',
      p.notas                  || '',
      p.mensaje                || '',
      p.aviso_privacidad       || '',
      p.consentimiento_marketing || '',
      p.consent_version        || '',
      p.consent_date           || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/** Prueba manual desde el editor — ejecutar esta función para verificar */
function testManual() {
  const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);
  sheet.appendRow([
    new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' }),
    'TEST Manual',
    'CODIA Test',
    'test@codiasoftware.online',
    '5512345678',
    'Diagnóstico Prueba',
    'apps-script-test',
    'Software',
    '1-5 personas',
    'Excel',
    'Control de inventario',
    'Automatizar reportes',
    'POS, Automatización',
    'Mañanas',
    'Fila de prueba — eliminar después',
    '[TEST] Verificación de integración con Apps Script',
    'Aceptado',
    'Aceptado',
    '1.0',
    new Date().toISOString()
  ]);
  Logger.log('✅ Fila de prueba insertada correctamente en ' + SHEET_NAME);
}
