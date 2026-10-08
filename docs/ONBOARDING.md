# Primer día — Job Search Skills Kit

Bienvenida/o. Este es un **kit open-source (MIT)** de dos skills de Claude Code para automatizar la búsqueda de trabajo: armar un CV *tailored* y ATS-safe por vacante, y enviarlo por correo desde tu propio dominio. Es un repo **personal/interno** de Marco Antonio (MarAntBQ).

## Qué leer, en este orden

1. [`README.md`](../README.md) — qué incluye el kit y cómo se usa.
2. [`AGENTS.md`](../AGENTS.md) — las reglas (clase interno, prueba-primero, sin secretos, seguridad).
3. [`CONTRIBUTING.md`](../CONTRIBUTING.md) — el flujo de cada cambio.

## Las dos skills

- **`tailored-resume-ats/`** — `SKILL.md` + `cv-tools.js` + `template.html`: convierte una oferta en un CV de 1 página verificado contra ATS.
- **`smtp-job-application-sender/`** — `SKILL.md` + `send-application.js` + `cuerpo-ejemplo.html`: envía el CV con Nodemailer desde tu dominio.

## Lo que no se hace

- No se commitean credenciales SMTP, tokens ni datos personales reales: es un repo **público**.
- Prueba de correo primero a una dirección propia; el envío real, después.
- No se hace push directo a la rama base: todo entra por PR (ver [`CONTRIBUTING.md`](../CONTRIBUTING.md)).
- No se agrega co-autoría de IA en commits ni en PRs.

## Dudas

Abre el tema en el issue correspondiente. Si algo de estas guías quedó desactualizado, corrígelo en el mismo PR en que lo descubriste.
