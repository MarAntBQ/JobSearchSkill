# Seguridad — Job Search Skills Kit

Es un repo **público** (MIT) con un script que envía correos (SMTP) y maneja datos de postulaciones. El riesgo principal es filtrar credenciales o datos personales en un commit.

## Reportar una vulnerabilidad

Repórtala **en privado**, nunca en un issue público ni en un PR. Escribe a **supportcenter@marbust.com** con lo que encontraste y cómo reproducirlo. Se responde y se corrige antes de divulgar nada.

## Reglas del repo

- **Nada de secretos en el repo.** Credenciales SMTP, contraseñas de aplicación y tokens viven **fuera del repo** (variables de entorno / archivos locales ignorados). En el repo solo van ejemplos/placeholders. Como es público, cualquier secreto en el diff queda expuesto a todo el mundo: rotarlo de inmediato si ocurre.
- **Datos personales.** El CV y las postulaciones contienen datos personales reales (de quien usa el kit): no se commitean. El repo trae plantillas y herramientas, no datos.
- **Prueba primero, real después.** El envío de correos se prueba contra una dirección propia antes de un envío real; no se gasta relay/ESP en pruebas.
- **Dependencias.** Antes de subir una dependencia nueva, revisa que tenga mantenimiento y sin vulnerabilidades conocidas.
