// cv-tools.js — Autor: Marco Antonio Bustillos Quiroz (MarAntBQ) — https://marantbq.dev
// Parte del skill "tailored-resume-ats".
//
// Uso:
//   node cv-tools.js render mi-cv.html mi-cv.pdf
//   node cv-tools.js check  mi-cv.pdf
//
// Requiere: npm install puppeteer pdf-parse

// Estas constantes asumen @page { size: A4; margin: 9mm 14mm; } en tu HTML.
// Si cambias esos márgenes, actualiza también estos 3 números.
const PAGE_CONTENT_WIDTH_MM = 182; // 210mm (A4) - 2 * 14mm
const PAGE_CONTENT_HEIGHT_MM = 279; // 297mm (A4) - 2 * 9mm
const MM_PER_PX = 25.4 / 96;

// Glifos verificados como riesgosos para parsers ATS — si aparecen, hay que
// reemplazarlos en el HTML (ver §4 de SKILL.md).
const RISKY_GLYPHS = new Set(['★', '→']); // ★, →

async function render(htmlPath, pdfPath) {
  const puppeteer = require('puppeteer');
  const path = require('path');
  const fileUrl = 'file://' + path.resolve(htmlPath).replace(/\\/g, '/');

  const browser = await puppeteer.launch({ headless: 'new' });
  try {
    const page = await browser.newPage();
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    await page.pdf({
      path: pdfPath,
      printBackground: true,
      preferCSSPageSize: true, // respeta el @page del HTML (tamaño y márgenes)
    });

    const { mm, fillPct } = await page.evaluate(
      (widthMm, mmPerPx, pageHeightMm) => {
        document.body.style.width = widthMm + 'mm';
        document.body.style.margin = '0';
        const h = document.body.getBoundingClientRect().height;
        const heightMm = h * mmPerPx;
        return { mm: +heightMm.toFixed(1), fillPct: +((heightMm / pageHeightMm) * 100).toFixed(1) };
      },
      PAGE_CONTENT_WIDTH_MM,
      MM_PER_PX,
      PAGE_CONTENT_HEIGHT_MM
    );

    console.log(`PDF escrito: ${pdfPath}`);
    console.log(`Altura de contenido: ${mm}mm de ${PAGE_CONTENT_HEIGHT_MM}mm disponibles`);
    console.log(`LLENADO: ${fillPct}%  ${fillPct >= 95 && fillPct <= 100.5 ? '✅ en objetivo (95-100%)' : fillPct > 100.5 ? '⚠️ se pasa de 1 página, aprieta el CSS' : '⚠️ corto, agrega contenido real (no solo aflojes el CSS)'}`);
  } finally {
    await browser.close();
  }
}

async function check(pdfPath) {
  const fs = require('fs');
  const { PDFParse } = require('pdf-parse');

  const parser = new PDFParse({ data: new Uint8Array(fs.readFileSync(pdfPath)) });
  const data = await parser.getText();
  await parser.destroy();

  const pageCount = data.pages ? data.pages.length : '?';
  console.log(`=== PÁGINAS: ${pageCount} ===`);
  if (pageCount !== 1) {
    console.log('⚠️  El CV debe quedar en 1 sola página.');
  }
  console.log('');
  console.log(data.text);
  console.log('');

  const nonAscii = [...new Set([...data.text].filter((c) => c.charCodeAt(0) > 126))];
  const risky = nonAscii.filter((c) => RISKY_GLYPHS.has(c));
  console.log(
    '=== NO-ASCII: ' +
      JSON.stringify(nonAscii.map((c) => c + ' U+' + c.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')))
  );
  if (risky.length) {
    console.log(`⚠️  GLIFOS RIESGOSOS ENCONTRADOS: ${risky.join(' ')} — reemplázalos en el HTML por texto plano.`);
  } else {
    console.log('✅ Sin glifos riesgosos conocidos.');
  }
}

const [, , cmd, a, b] = process.argv;
if (cmd === 'render' && a && b) {
  render(a, b).catch((e) => {
    console.error(e);
    process.exit(1);
  });
} else if (cmd === 'check' && a) {
  check(a).catch((e) => {
    console.error(e);
    process.exit(1);
  });
} else {
  console.log('Uso:');
  console.log('  node cv-tools.js render mi-cv.html mi-cv.pdf');
  console.log('  node cv-tools.js check  mi-cv.pdf');
  process.exit(1);
}
