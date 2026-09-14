# Sapia UCSS — guía para VS Code

## Abrir el proyecto

1. Descomprime el archivo ZIP.
2. En Visual Studio Code selecciona **Archivo > Abrir carpeta**.
3. Elige la carpeta `sapia-ucss-vscode`.

## Ejecutar la página

La opción recomendada es instalar la extensión **Live Server**:

1. Abre `index.html`.
2. Presiona **Go Live** en la barra inferior de VS Code.
3. El sitio se abrirá en el navegador.

También puedes abrir `index.html` directamente con un navegador, aunque Live Server facilita los cambios durante el desarrollo.

## Archivos principales

- `index.html`: estructura de la interfaz.
- `styles.css`: diseño moderno y adaptación para celulares.
- `app.js`: fuentes, respuestas, chat, carreras y calculadoras académicas.

## Consideraciones

- No requiere instalar paquetes ni configurar una base de datos.
- Cada navegador guarda sus fuentes personalizadas de forma independiente mediante `localStorage`.
- Las fuentes iniciales están en `app.js` dentro de `originalSources`.
- Para incorporar una fuente desde el panel se debe registrar su URL oficial y pegar la información relevante que el chatbot podrá consultar.
- Esta versión no usa una API de inteligencia artificial; aplica búsqueda local controlada para no responder fuera de las fuentes.
- Las respuestas se muestran completas en el chat. Solo aparece el nombre de la fuente usada, sin enlace.
- El promedio usa: EP1 10 %, EP2 20 %, EP3 20 %, EF 30 % y EC 20 %.
- Ejemplo: `EP1 15, EP2 14, EP3 16, EF 13, EC 18`.
- Para asistencia: `Asistí a 26 de 30 clases` o `Tuve 30 clases y 4 faltas`.
