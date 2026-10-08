# Reglas del repositorio — Job Search Skills Kit (open source, interno)

Este archivo es para **todas las personas y agentes de IA** que trabajan en el Job Search Skills Kit (Claude Code, Codex, Cursor, Copilot u otros). Si usas Claude Code, se carga solo a través de `CLAUDE.md`.

- Cómo colaborar paso a paso: [`CONTRIBUTING.md`](CONTRIBUTING.md).
- Si es tu primer día: [`docs/ONBOARDING.md`](docs/ONBOARDING.md).
- El estándar común de los repos de Marbust (referencia): `MarbustTechnologyCompany/.github` → `ESTANDAR-REPOSITORIOS.md`.

**Clase del repo: interno** (`.github/marbust.json`). Es un repo **personal/open-source** de Marco Antonio (MarAntBQ), licencia **MIT**: **no publica novedades** al exterior vía el newsroom de Marbust; en los PRs solo va la línea *interna* de Novedad.

**Qué es:** un **kit de dos skills de Claude Code** para automatizar la búsqueda de trabajo de punta a punta:
- **`tailored-resume-ats/`** — convierte una oferta en un CV de 1 página, honesto y verificado contra parsers ATS reales.
- **`smtp-job-application-sender/`** — script Node.js + Nodemailer para enviar ese CV por correo desde el propio dominio, con la regla "prueba primero, real después".

> Es un repo **personal y autogestionado** (cuenta `MarAntBQ`): Marco es el dueño. Flujo ligero (tarjeta → issue → rama → PR → squash), sin el circuito de "la empresa abre el issue y aprueba".

## Stack

| Pieza | Elección |
|---|---|
| Skills | Markdown (`SKILL.md`) + scripts **Node.js** (`cv-tools.js`, `send-application.js`) + plantillas HTML |
| Correo | **Nodemailer** (envío del CV desde el propio dominio) |
| Licencia | **MIT** (`LICENSE`) |

## Reglas duras

1. **Flujo:** tarjeta → issue → rama (nunca push directo a la base) → PR en borrador → revisión/QA → squash. Detalle en [`CONTRIBUTING.md`](CONTRIBUTING.md).
2. **El issue se autocontiene** (alcance, exclusiones, criterios de aceptación, verificación). Skill `escribir-un-issue`.
3. **Revisión obligatoria.** Antes del PR, corre `revisar-codigo`. **Codex participa** cuando aplica.
4. **Prueba primero, real después:** el envío de correos se prueba a una dirección propia antes de un envío real. Nunca se gasta un relay/ESP en pruebas.
5. **Sin secretos ni datos personales en el repo.** Credenciales SMTP y datos de postulaciones viven fuera del repo (variables de entorno / archivos locales ignorados). Es público: cualquier secreto en el diff es una fuga.
6. **Commits** con tipo (`feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `perf`) y en español. **Prohibido** co-autoría de IA en commits y en PRs.
7. **Nada de estado escrito a mano** en el README que dependa de secretos.

## Seguridad (regla dura)

- **Es público:** nada de credenciales SMTP, tokens ni datos personales reales en el repo. Solo ejemplos/placeholders.
- Una vulnerabilidad se reporta en privado: ver [`SECURITY.md`](SECURITY.md).

## Skills

Es un repo **autogestionado**: se usan las skills del **directorio oficial** (`MarbustTechnologyCompany/ClaudeSkills`, en `~/.claude/skills`). No se sincroniza una copia en `.claude/skills/` aquí (además, las skills que **contiene** este repo son su propio producto, no una copia del directorio oficial).

| Skill | Cuándo |
|---|---|
| `escribir-un-issue` | Al crear o corregir un issue |
| `trabajar-un-issue` | Al tomar un issue, de principio a fin |
| `revisar-codigo` | **Obligatoria** antes del PR y al revisar el de otro |
