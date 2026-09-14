# Sapia UCSS

Asistente universitario privado que responde exclusivamente con contenido indexado desde enlaces oficiales de la Universidad Católica Sedes Sapientiae (UCSS).

## Funciones incluidas

- Chat con búsqueda por intención y palabras clave.
- Respuesta completa dentro del chat, sin enviar al usuario a otro enlace.
- Indicación del nombre de la fuente utilizada, sin convertirla en enlace.
- Respuesta explícita cuando la base activa no contiene información suficiente.
- Administración de fuentes: agregar, activar, desactivar, eliminar y restaurar.
- Validación de enlaces HTTPS bajo el dominio `ucss.edu.pe`.
- Persistencia local de fuentes personalizadas en el navegador.
- Consulta de carreras por sede o filial: Lima, Atalaya, Huaura–Santa María, Morropón–Chulucanas, Rioja–Nueva Cajamarca y Tarma.
- Cálculo de promedio ponderado con EP1 10 %, EP2 20 %, EP3 20 %, EF 30 % y EC 20 %.
- Cálculo de asistencia a partir de clases asistidas, total de clases o faltas.
- Diseño adaptable para computadora y celular.

## Estructura

```text
.
├── .openai/
│   └── hosting.json   # Configuración del despliegue privado
├── dist/
│   ├── index.html     # Interfaz y panel de fuentes
│   ├── styles.css     # Diseño responsive
│   └── app.js         # Motor de consulta y almacenamiento local
└── README.md
```

## Ejecución local

Abre `dist/index.html` en el navegador o sirve la carpeta con cualquier servidor HTTP estático.

## Siguiente evolución recomendada

La versión actual usa recuperación local y exige pegar el texto relevante al añadir un enlace. No solicita acceso a la Intranet ni guarda contraseñas. Para convertirla en un RAG completo: crear un backend que descargue contenido público permitido, lo divida en fragmentos, genere embeddings, almacene los fragmentos y solicite al modelo responder únicamente con la información recuperada.

## Ejemplos para el chat

- `¿Qué carreras hay en la filial Rioja?`
- `¿Hay Ingeniería de Sistemas en Lima?`
- `EP1 15, EP2 14, EP3 16, EF 13, EC 18`
- `Asistí a 26 de 30 clases`
- `Tuve 30 clases y 4 faltas`
- `¿Qué información hay sobre becas?`
