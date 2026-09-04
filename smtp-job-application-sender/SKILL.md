---
name: smtp-job-application-sender
description: Enviar tu CV por correo a una vacante, adjunto y con cuerpo redactado, usando tu propio correo SMTP (Node.js + Nodemailer) — nunca sin una prueba previa.
---

# Envío de Aplicaciones por SMTP (Node.js + Nodemailer)

> Autor: Marco Antonio Bustillos Quiroz (MarAntBQ) — https://marantbq.dev

Objetivo: un script simple que redacta el correo, adjunta tu CV en PDF y lo envía por SMTP — para no depender de la interfaz web de tu correo cada vez que aplicas a algo.

---

## 0. Por qué NO usar tu Gmail/Outlook personal para esto

- Se ve menos profesional que un correo con tu propio nombre de dominio (`tu-nombre@tudominio.com` en vez de `tunombre123@gmail.com`).
- Proveedores grandes (Gmail, Outlook) limitan el envío automatizado por SMTP con contraseñas de aplicación, y algunos filtros corporativos son más estrictos con remitentes de correo gratuito masivo.
- Un correo con tu propio dominio es tuyo para siempre — no depende de que un reclutador reconozca tu proveedor de correo gratuito.

Para esto necesitas un **buzón de correo con tu propio dominio**, que te da un hosting con correo (cualquier proveedor con DirectAdmin/cPanel, Google Workspace, Zoho Mail, etc.) — te entrega host, puerto, usuario y contraseña SMTP. Eso es lo único "externo" que este skill necesita; el resto es solo el script.

---

## 1. Instalación

```bash
npm init -y
npm install nodemailer dotenv
```

Crea un archivo `.env` (nunca lo subas a git — agrégalo a `.gitignore`) con las credenciales que te dio tu proveedor de correo:

```
SMTP_HOST=mail.tudominio.com
SMTP_PORT=465
SMTP_USER=tu-nombre@tudominio.com
SMTP_PASS=tu-contraseña-de-correo
FROM_NAME=Tu Nombre Completo
```

(Puerto 465 = SSL directo; 587 = STARTTLS. Tu proveedor te dice cuál usar — el script detecta automáticamente cuál modo activar según el puerto.)

---

## 2. El script: `send-application.js`

Ya está en esta misma carpeta, listo para usar. Uso:

```bash
node send-application.js "destinatario@empresa.com" "Asunto del correo" "ruta/a/mi-cv.pdf" "ruta/a/cuerpo.html"
```

El cuarto argumento (cuerpo en HTML) es opcional — si lo omites, usa un cuerpo genérico. Para personalizarlo, escribe un archivo `.html` simple con el texto de tu carta de presentación (ver ejemplo en `cuerpo-ejemplo.html`).

---

## 3. Regla dura de seguridad — nunca te la saltes

**Antes de enviar a una empresa real, manda SIEMPRE una prueba a tu propio correo primero.**

1. Corre el script con tu propio correo como destinatario.
2. Abre ese correo de prueba: revisa que el asunto, el cuerpo y el PDF adjunto se vean exactamente como quieres que los vea el reclutador.
3. Solo después de confirmar que está bien, vuelve a correr el script — mismo asunto, mismo PDF, mismo cuerpo — cambiando ÚNICAMENTE el destinatario al correo real de la vacante.

Nunca cambies el contenido entre la prueba y el envío real — si necesitas cambiar algo, corrige, vuelve a mandarte la prueba a ti mismo, y repite. Esto evita el error más caro en una búsqueda de trabajo: mandar un correo roto (adjunto faltante, cuerpo sin reemplazar placeholders, asunto genérico) directo a la empresa que te interesa.

---

## 4. Cómo pedírselo a Claude

Ejemplo de instrucción:

> "Ya tengo mi `.env` con mis credenciales SMTP. Quiero aplicar a [vacante] en [correo de la empresa], asunto '[asunto exacto que pide la vacante, si lo especifica]', adjuntando [ruta al PDF de mi CV tailored]. Redáctame el cuerpo del correo en [idioma], mándame PRIMERO la prueba a mi propio correo, y espera mi confirmación antes de mandarlo a la empresa."

Claude entonces: redacta el cuerpo (si no lo tienes ya), corre el script con tu propio correo como destino, te pide que revises, y solo tras tu "sí, envíalo" corre el script otra vez con el destinatario real.

---

## 5. Opcional (avanzado): respaldar el envío en tu carpeta "Enviados"

Si tu proveedor de correo soporta IMAP (la mayoría lo hace), puedes guardar una copia del correo enviado en tu carpeta "Sent"/"Enviados" con el paquete `imapflow`:

```bash
npm install imapflow
```

```js
// backup-sent.js — guarda un .eml ya enviado en la carpeta Sent vía IMAP
require('dotenv').config();
const { ImapFlow } = require('imapflow');
const fs = require('fs');

async function main() {
  const emlPath = process.argv[2]; // ruta a un .eml crudo (mismo contenido que se envió)
  const client = new ImapFlow({
    host: process.env.IMAP_HOST || process.env.SMTP_HOST,
    port: Number(process.env.IMAP_PORT || 993),
    secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await client.connect();
  await client.append('Sent', fs.readFileSync(emlPath), ['\\Seen']);
  await client.logout();
  console.log('Respaldado en Sent.');
}
main().catch((e) => { console.error(e); process.exit(1); });
```

Esto es opcional para empezar — el script principal (`send-application.js`) ya cumple el objetivo central: mandar tu CV por tu propio correo, con la seguridad de la prueba previa.
