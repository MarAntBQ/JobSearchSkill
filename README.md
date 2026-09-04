# Job Search Skills Kit

Autor: Marco Antonio Bustillos Quiroz (MarAntBQ) — https://marantbq.dev

Licencia: MIT (ver [LICENSE](./LICENSE)).

Dos skills de Claude Code para automatizar tu búsqueda de trabajo de punta a punta: armar un CV tailored y ATS-safe por cada vacante, y enviarlo por correo desde tu propio dominio.

## Qué incluye

- **`tailored-resume-ats/`** — convierte una oferta de trabajo en un CV de 1 página, honesto y verificado contra parsers ATS reales (no folklore).
- **`smtp-job-application-sender/`** — script Node.js + Nodemailer para mandar ese CV por correo desde tu propio dominio, con la regla de "prueba primero, real después".

## Instalación (una vez)

Copia las 2 carpetas de skills a la carpeta de skills de Claude Code en tu usuario:

- **Windows:** `%USERPROFILE%\.claude\skills\`
- **Mac/Linux:** `~/.claude/skills/`

Así:
```
~/.claude/skills/tailored-resume-ats/SKILL.md
~/.claude/skills/tailored-resume-ats/cv-tools.js
~/.claude/skills/tailored-resume-ats/template.html
~/.claude/skills/smtp-job-application-sender/SKILL.md
~/.claude/skills/smtp-job-application-sender/send-application.js
~/.claude/skills/smtp-job-application-sender/cuerpo-ejemplo.html
```

Claude Code los detecta automáticamente en tu próxima sesión.

## Orden de uso recomendado

1. **Una sola vez:** crea tu carpeta `CV/` con `Resume.md`, `Skills.md` y `Certifications.md` — tu experiencia real, honesta, con métricas verdaderas (ver §0 de `tailored-resume-ats/SKILL.md`).
2. **Una sola vez:** consigue un correo con tu propio dominio (necesitas un hosting con correo) y las credenciales SMTP — eso alimenta `smtp-job-application-sender/.env`.
3. **Por cada vacante:** pídele a Claude que use el skill `tailored-resume-ats` con la vacante + tus 3 archivos fuente → obtienes un PDF de 1 página, medido y verificado.
4. **Por cada vacante:** pídele a Claude que use el skill `smtp-job-application-sender` para mandar ese PDF — SIEMPRE con una prueba a tu propio correo primero, y solo mandar a la empresa real después de que confirmes que se ve bien.

## Nota

Este kit está pensado para compartirse y para eventualmente publicarse como repositorio abierto — no cambies la atribución de autoría al adaptarlo, pero sí siéntete libre de ajustar la plantilla, el CSS o el script a tu gusto.
