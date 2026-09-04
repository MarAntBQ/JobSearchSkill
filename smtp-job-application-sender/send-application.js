// send-application.js — Autor: Marco Antonio Bustillos Quiroz (MarAntBQ) — https://marantbq.dev
// Parte del skill "smtp-job-application-sender".
//
// Uso:
//   node send-application.js "destinatario@empresa.com" "Asunto" "ruta/al/cv.pdf" ["ruta/al/cuerpo.html"]
//
// Requiere: npm install nodemailer dotenv
// Y un archivo .env con SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_NAME
//
// REGLA DE SEGURIDAD (ver SKILL.md §3): manda SIEMPRE una prueba a tu propio
// correo primero. Nunca corras esto apuntando directo a la empresa la primera vez.

require('dotenv').config({ quiet: true });
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

async function main() {
  const [, , toAddr, subject, pdfPath, htmlBodyPath] = process.argv;

  if (!toAddr || !subject || !pdfPath) {
    console.error('Uso: node send-application.js "<destinatario>" "<asunto>" "<ruta-pdf>" ["<ruta-cuerpo-html>"]');
    process.exit(1);
  }
  if (!fs.existsSync(pdfPath)) {
    console.error(`No existe el archivo PDF: ${pdfPath}`);
    process.exit(1);
  }
  const required = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];
  const missing = required.filter((k) => !process.env[k]);
  if (missing.length) {
    console.error(`Faltan variables en .env: ${missing.join(', ')}`);
    process.exit(1);
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465, // 465 = SSL directo; 587 = STARTTLS (secure: false, Nodemailer negocia solo)
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const html = htmlBodyPath
    ? fs.readFileSync(htmlBodyPath, 'utf8')
    : '<p>Buenas tardes,</p><p>Adjunto mi CV. Quedo atento a la oportunidad de conversar.</p>';

  console.log(`Enviando a: ${toAddr}`);
  console.log(`Asunto: ${subject}`);
  console.log(`Adjunto: ${pdfPath}`);

  const info = await transporter.sendMail({
    from: `"${process.env.FROM_NAME || 'Aplicante'}" <${process.env.SMTP_USER}>`,
    to: toAddr,
    subject,
    html,
    attachments: [{ filename: path.basename(pdfPath), path: pdfPath }],
  });

  console.log('✅ Enviado. Message ID:', info.messageId);
}

main().catch((e) => {
  console.error('❌ Error al enviar:', e.message);
  process.exit(1);
});
