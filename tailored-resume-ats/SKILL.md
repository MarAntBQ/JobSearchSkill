---
name: tailored-resume-ats
description: Convertir una oferta de trabajo en un CV de 1 página, ATS-safe, 95-100% lleno y 100% verdadero, a partir de tus propias fuentes de verdad.
---

# Tailored Resume + ATS

> Autor: Marco Antonio Bustillos Quiroz (MarAntBQ) — https://marantbq.dev

Objetivo: para cada vacante que te interese, generar **un CV de 1 página, ATS-safe, 95-100% lleno, y 100% verdadero**.

> **Regla número uno: cero invención.** Cada número, tecnología, fecha y credencial del CV debe rastrearse a un archivo fuente tuyo. Si no está en tus fuentes, **no va** — aunque la vacante lo pida. Un reclutador o una entrevista técnica pueden preguntar por cualquier línea del CV; si no puedes defenderla con detalle real, no la escribas.

---

## 0. Antes de usar este skill: crea tus fuentes de verdad

Este skill NO inventa tu experiencia — la organiza y la adapta. Antes de la primera vacante, crea (una sola vez, se reutiliza siempre) una carpeta `CV/` con:

| Archivo | Qué contiene |
|---|---|
| `Resume.md` | **Tu fuente maestra.** Toda tu experiencia laboral real, en bullets, con métricas reales (%, cantidades, fechas exactas). Escribe cada bullet con el verbo y el alcance REAL — no lo que suena mejor. |
| `Skills.md` | Tus skills por categoría, con matices honestos (ej. "Docker: lo opero en producción, pero no he escrito un Dockerfile desde cero"). |
| `Certifications.md` | Lista de certificaciones reales, con institución y fecha exacta — nunca de memoria. |

Si algo no está en estos archivos, este skill no debe usarlo. Cuando surja un dato nuevo real, agrégalo aquí primero, con su fuente (captura, certificado, commit, etc.), y luego a los CVs.

---

## 1. Reglas duras de contenido (no negociables)

### 1.1 Trampas de embellecimiento (el modo de fallo más común)

La invención descarada es fácil de evitar. Lo que de verdad se cuela es **subirle un punto a una frase verdadera**. Por cada bullet que escribas, localiza la frase fuente en tu `Resume.md` y pregúntate: *¿estoy usando un verbo más fuerte, un rol más alto, o uniendo dos oraciones que la fuente tenía separadas?*

| Patrón de fuga | Ejemplo |
|---|---|
| Ejecutar → liderar | La fuente dice "participé en"; el CV dice "lideré". |
| Fusionar dos hechos separados | La fuente tiene dos oraciones con un punto y coma; el CV las junta y crea un hecho que no existía. |
| Invertir quién aprende | La fuente dice "me capacitaron en X"; el CV dice "capacité al equipo en X". |
| Beneficiario ≠ fuente de requisitos | "El proyecto beneficiaba al área de finanzas" ≠ "reportaba directamente a finanzas". |
| Inferir audiencia/alcance sin evidencia | "Cursos técnicos" no autoriza "para audiencias no técnicas" si ninguna fuente lo dice. |

Si la vacante pide justo eso que no puedes afirmar con evidencia, la salida honesta es una construcción más débil pero real, no una más fuerte pero falsa.

### 1.2 Certificaciones y credenciales
Nunca mezcles el emisor real con un nivel que ese emisor no otorga (ej.: un examen de conversación no es lo mismo que un examen de nivel CEFR — si tienes ambos, cita cada uno con su alcance real, no fusiones el resultado más favorable).

### 1.3 Cosas que no tienes
Si la vacante pide una certificación, herramienta o tecnología que no está en tus fuentes: **no la agregues** para rellenar el hueco. Dilo explícitamente en tu respuesta a quien te está ayudando con el CV (o en tu propia nota), no en el CV mismo — un hueco real no se tapa, se declara con honestidad donde corresponda (ver §1.5) o simplemente se omite si no aporta.

### 1.4 Años de experiencia
Solo cuenta como "experiencia profesional" el tiempo en el que tuviste una relación laboral/contractual real. Proyectos personales, pasatiempos o autoestudio son narrativa de motivación, nunca años de experiencia — aunque sean genuinos y valgan la pena mencionar en la entrevista.

### 1.5 Huecos honestos — declararlos no significa CV corto
Cuando una vacante pide algo que no tienes, puedes declararlo con una línea corta ("Huecos honestos: ...") en el resumen o en habilidades. **Pero la honestidad no es sinónimo de un CV de media página.** Si el CV queda corto, la solución es **agregar más contenido real que sí tienes** (otro proyecto, otra responsabilidad, otra métrica de tu `Resume.md` que no habías usado aún) — nunca dejarlo corto "porque fuiste honesto". Con años reales de trayectoria siempre hay material genuino sin usar.

### 1.6 Tu propio negocio/freelance (si aplica)
Si tienes un negocio propio o trabajo freelance en paralelo a lo que buscas, decide con la persona a la que ayudas cómo lo va a enmarcar (como empresa formal con rol de ejecutor, o mencionado tal cual) — pero sea la decisión que sea, sé consistente en todos los CVs y nunca le pongas fecha de "Presente" a dos cosas que compiten por su atención si eso genera dudas sobre disponibilidad.

---

## 2. Idioma

Sigue el idioma de la oferta: vacante en inglés → CV en inglés; vacante en español → CV en español. Si la vacante exige un idioma con nivel específico, usa la palabra literal de la vacante (ej. "Fluent"/"Fluido") junto al código de nivel (ej. "C1") y cita el examen/certificado real que lo respalda.

Si la vacante usa una sigla o término técnico expandido (ej. "Software Development Life Cycle (SDLC)"), usa también la forma expandida al menos una vez — ayuda tanto a lectores humanos como a sistemas de búsqueda por palabra clave.

---

## 3. Proceso

### Paso 1 — Mapear la vacante contra tus fuentes
Antes de escribir, por cada requisito (obligatorio y deseable) de la vacante, identifica qué evidencia real de tus fuentes lo cubre y dónde va a ir en el CV. Busca el **ángulo ganador**: la cosa poco obvia que sí tienes y que esa vacante valora mucho — va en el resumen y con línea propia en Habilidades.

### Paso 2 — Escribir el HTML
Usa `template.html` (en esta misma carpeta) como base. Estructura fija:

```
nombre → título del puesto → contacto → idiomas → línea divisoria
Resumen (justificado, 4-7 líneas)
Habilidades            ← encabezado literal "Habilidades"/"Skills"
Experiencia Laboral     ← encabezado literal "Experiencia Laboral"/"Work Experience"
  [2-4 entradas completas con bullets, más reciente primero]
  Experiencia Adicional: (línea condensada con el resto, si aplica)
Educación               ← encabezado literal "Educación"/"Education"
```

### Paso 3 — Renderizar a PDF y medir el llenado
No asumas que "cabe en 1 página" significa que está bien lleno. Usa el script `cv-tools.js` (en esta carpeta):

```bash
npm install puppeteer pdf-parse --no-audit --no-fund
node cv-tools.js render mi-cv.html mi-cv.pdf
```

Esto imprime el PDF **y** el porcentaje de llenado real (calculado contra el área de contenido de una A4 con márgenes 9mm/14mm, que es lo que trae `template.html`). Objetivo: **95-100%**. Si cambias los márgenes del `@page` en tu HTML, ajusta las constantes al inicio de `cv-tools.js` (están comentadas).

**Perillas de ajuste, en este orden** (de menor a mayor impacto en la lectura humana):
1. `margin-bottom` de cada bullet (`li`)
2. `margin` de los encabezados de sección (`h2`)
3. `margin-bottom` de cada bloque de experiencia (`.job`)
4. `line-height` del body
5. `font-size` del body (no bajar de ~8.8pt — se vuelve incómodo de leer)

Si queda corto (<95%): agrega contenido real (ver §1.5), no solo aflojes el CSS. Si se pasa de 100% (2 páginas): aprieta el CSS en ese orden, y si no basta, condensa la entrada de trabajo menos relevante a una línea de "Experiencia Adicional".

### Paso 4 — Verificar ATS de verdad
Extrae el texto exacto que un parser vería:

```bash
node cv-tools.js check mi-cv.pdf
```

Revisa la salida:
- **Orden de lectura correcto** (empresa/ubicación y título/fechas en la línea correcta).
- **Páginas: 1.**
- **Glifos riesgosos** — el script marca con ⚠️ cualquier carácter fuera de la lista segura (ver §4). Si aparece uno, vuelve al HTML y reemplázalo.
- **Nada perdido** comparado con el HTML.

---

## 4. Reglas ATS verificadas

✅ **Seguro:** `display:flex` + `justify-content:space-between` en encabezados de trabajo (no rompe el orden de lectura), fuente Helvetica/Arial con texto real seleccionable, `·` `–` `—` como separadores, `<ul>/<li>` estándar, `%` `~` `&` `+` `/`.

⚠️ **Evitar:**
- Flechas (`→`) dentro de un título de puesto — si tuviste una promoción, sepárala en dos entradas de trabajo (título viejo con sus fechas, título nuevo con las suyas).
- Símbolos decorativos como estrellas (`★`) — reemplázalos por texto (ej. "4.8/5" en vez de "★★★★★").
- Encabezados de sección inventados — usa el vocabulario estándar ("Skills"/"Habilidades", "Work Experience"/"Experiencia Laboral", "Education"/"Educación"). Si quieres agrupar dentro de Habilidades, usa etiquetas en negrita por línea, no cambies el encabezado.
- Header/footer que el navegador agrega al imprimir a PDF (fecha, URL) — desactívalo (ver `cv-tools.js`, ya viene desactivado).

❌ **Prohibido:** tablas, columnas múltiples, cajas de texto, texto dentro de imágenes, iconos como glifos de fuente, información de contacto que solo exista en un header/footer de PDF.

---

## 5. Buenas prácticas al pedirle esto a Claude

- Comparte primero tus 3 archivos de fuentes (`Resume.md`, `Skills.md`, `Certifications.md`) y la vacante completa (texto o captura).
- Pide explícitamente: *"Antes de escribir nada, dime si hay algún requisito de la vacante que no cubro con evidencia real, para decidir juntos si aplico igual y cómo lo declaro."* — así el CV nunca te toma por sorpresa en una entrevista.
- Pide que te muestre el % de llenado y el resultado de `cv-tools.js check` antes de darlo por terminado — no aceptes un CV que no pasó por esa verificación.
