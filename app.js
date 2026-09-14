const STORAGE_KEY = "sapia-ucss-sources-v1";

const originalSources = [
  {
    id: "calendario-2026",
    name: "Calendario académico 2026",
    url: "https://www.ucss.edu.pe/asuntos-academicos/calendario-academico",
    category: "Calendario",
    active: true,
    locked: true,
    content: "Calendario Académico 2026 para Lima y filiales. Semestre 2026-II: el examen de admisión fue el sábado 8 de agosto de 2026; el inicio de clases es el lunes 17 de agosto de 2026; el fin del ciclo, incluyendo exámenes finales, es el sábado 19 de diciembre de 2026.",
    keywords: ["calendario", "clases", "inicio", "fin", "ciclo", "semestre", "2026", "examen", "admision", "agosto", "diciembre"]
  },
  {
    id: "campus-virtual",
    name: "Campus Virtual UCSS",
    url: "https://campusvirtual.ucss.edu.pe/",
    category: "Servicios digitales",
    active: true,
    locked: true,
    content: "El Aula Digital ofrece foro, chat, videoconferencia y evaluaciones en línea para apoyar la enseñanza y el aprendizaje. La Intranet permite gestionar y consultar notas, asistencias y avance silábico. El Campus Virtual también enlaza el correo institucional, la bolsa de trabajo y la biblioteca virtual. La mesa de ayuda atiende consultas técnicas de lunes a sábado de 7:00 a. m. a 7:00 p. m. y usa el correo mesadeayuda@ucss.edu.pe.",
    keywords: ["campus", "virtual", "aula", "digital", "intranet", "notas", "asistencia", "asistencias", "silabo", "correo", "mesa", "ayuda", "tecnica", "foro", "videoconferencia", "evaluaciones"]
  },
  {
    id: "biblioteca",
    name: "Sistema de Bibliotecas UCSS",
    url: "https://biblioteca.ucss.edu.pe/",
    category: "Biblioteca",
    active: true,
    locked: true,
    content: "La biblioteca facilita el acceso a recursos de información para el estudio y la investigación. Ofrece préstamo y consulta de materiales físicos, colecciones digitales, formación en uso ético de la información, herramientas de referencias bibliográficas, equipos para trabajo académico y apoyo a la investigación. En Lima, la Biblioteca Central atiende de lunes a viernes de 8:00 a 21:30 y los sábados de 8:00 a 20:00. La Biblioteca Aziani atiende de lunes a viernes de 8:00 a 21:30.",
    keywords: ["biblioteca", "libros", "prestamo", "recursos", "investigacion", "horario", "lima", "central", "aziani", "colecciones", "digitales", "referencias"]
  },
  {
    id: "admision",
    name: "Admisión UCSS",
    url: "https://admision.ucss.edu.pe/",
    category: "Admisión",
    active: true,
    locked: true,
    content: "La UCSS presenta distintas modalidades de admisión. En la modalidad de Examen de Admisión, el postulante rinde una prueba de aptitud académica que evalúa su preparación para los estudios universitarios. La inscripción debe realizarse de acuerdo con el cronograma oficial publicado por Admisión UCSS.",
    keywords: ["admision", "postular", "postulante", "ingreso", "inscripcion", "examen", "modalidades", "prueba", "aptitud", "cronograma"]
  },
  {
    id: "carreras",
    name: "Carreras profesionales UCSS",
    url: "https://www.ucss.edu.pe/carreras-profesionales",
    category: "Pregrado",
    active: true,
    locked: true,
    content: "La oferta profesional de la UCSS se organiza por sedes y filiales. En la sede Lima figuran, entre otras, Administración, Contabilidad, Economía, Derecho, Enfermería, Psicología, Nutrición y Dietética, Ingeniería Informática, Ingeniería Industrial, Ingeniería Civil, Ingeniería de Sistemas, Ingeniería Ambiental, Agronomía y programas de Educación. También existen ofertas específicas en Atalaya, Huaura-Santa María, Morropón-Chulucanas, Rioja-Nueva Cajamarca y Tarma; se debe verificar cada carrera en la página oficial.",
    keywords: ["carreras", "carrera", "pregrado", "ingenieria", "sistemas", "informatica", "industrial", "civil", "ambiental", "administracion", "contabilidad", "derecho", "psicologia", "enfermeria", "educacion", "lima", "filiales"]
  },
  {
    id: "servicios",
    name: "Servicios al estudiante",
    url: "https://www.ucss.edu.pe/mas-servicios/",
    category: "Bienestar",
    active: true,
    locked: true,
    content: "Los servicios para estudiantes incluyen Asuntos Académicos, Asuntos Económicos, Becas y Ayudas Económicas, Biblioteca, Grados y Títulos, Tutoría, Tópico UCSS, Servicio Psicopedagógico y Defensoría Universitaria. La información pública señala que las becas y ayudas económicas buscan facilitar la continuidad de estudios de estudiantes con buen desempeño académico. Tutoría brinda acompañamiento académico; el Servicio Psicopedagógico ofrece orientación y consejería académica, emocional y personal; y la Defensoría protege los derechos de la comunidad universitaria.",
    keywords: ["servicios", "estudiante", "beca", "becas", "ayuda", "economica", "requisito", "beneficio", "tutoria", "topico", "psicopedagogico", "defensoria", "grados", "titulos", "bienestar", "emocional"]
  }
];

const careerCatalog = {
  "Lima": [
    "Gestión de Operaciones y Logística Internacional", "Administración", "Contabilidad", "Economía",
    "Educación Inicial", "Educación Primaria", "Educación Especial", "Educación Secundaria: Filosofía y Religión",
    "Educación Secundaria: Lengua Inglesa", "Archivística y Gestión Documental", "Turismo y Patrimonio Cultural",
    "Derecho", "Enfermería", "Psicología", "Tecnología Médica: Terapia Física y Rehabilitación",
    "Nutrición y Dietética", "Ingeniería Informática", "Ingeniería Industrial", "Ingeniería Civil",
    "Ingeniería de Sistemas", "Ingeniería Ambiental" , "Agronomía"
  ],
  "Atalaya": [
    "Administración", "Contabilidad", "Educación Intercultural Bilingüe: Educación Inicial y Educación Primaria",
    "Ingeniería Agraria con mención Forestal"
  ],
  "Huaura–Santa María": [
    "Gestión de Operaciones y Logística Internacional", "Administración y Negocios Internacionales",
    "Contabilidad y Finanzas", "Agronomía", "Ingeniería Ambiental", "Derecho", "Educación Inicial",
    "Enfermería", "Psicología"
  ],
  "Morropón–Chulucanas": [
    "Administración y Negocios Internacionales", "Contabilidad", "Nutrición y Dietética",
    "Tecnología Médica: Terapia Física y Rehabilitación", "Ingeniería Ambiental",
    "Ingeniería Agroindustrial y de Biocomercio", "Agronomía", "Ingeniería Civil"
  ],
  "Rioja–Nueva Cajamarca": [
    "Administración y Negocios Internacionales", "Contabilidad y Finanzas", "Derecho", "Enfermería",
    "Psicología", "Ingeniería Civil", "Ingeniería Agraria con mención Forestal", "Ingeniería Ambiental",
    "Ingeniería de Sistemas", "Educación Inicial"
  ],
  "Tarma": [
    "Psicología", "Tecnología Médica: Terapia Física y Rehabilitación", "Ingeniería Industrial",
    "Ingeniería Civil", "Ingeniería de Sistemas", "Ingeniería Informática", "Ingeniería Ambiental"
  ]
};

const gradingWeights = { EP1: 0.10, EP2: 0.20, EP3: 0.20, EF: 0.30, EC: 0.20 };

const stopWords = new Set(["a", "al", "algo", "como", "con", "cual", "cuando", "de", "del", "donde", "el", "en", "es", "esta", "hay", "la", "las", "lo", "los", "me", "mi", "para", "por", "puedo", "que", "se", "si", "sobre", "su", "sus", "un", "una", "y"]);

let sources = loadSources();
let toastTimer;

const elements = {
  chat: document.getElementById("chat"),
  messages: document.getElementById("messages"),
  welcome: document.getElementById("welcomeCard"),
  form: document.getElementById("chatForm"),
  input: document.getElementById("questionInput"),
  sourceCount: document.getElementById("sourceCount"),
  sourceMiniList: document.getElementById("sourceMiniList"),
  dialog: document.getElementById("sourceDialog"),
  adminSourceList: document.getElementById("adminSourceList"),
  sourceForm: document.getElementById("sourceForm"),
  sourceFeedback: document.getElementById("sourceFeedback"),
  sidebar: document.getElementById("sidebar"),
  mobileOverlay: document.getElementById("mobileOverlay"),
  toast: document.getElementById("toast")
};

function cloneOriginalSources() {
  return originalSources.map(source => ({ ...source, keywords: [...source.keywords] }));
}

function loadSources() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(stored) && stored.length) return stored;
  } catch (error) {
    console.warn("No se pudieron recuperar las fuentes guardadas", error);
  }
  return cloneOriginalSources();
}

function saveSources() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sources));
  renderSources();
}

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value) {
  return [...new Set(normalize(value).split(" ").filter(word => word.length > 2 && !stopWords.has(word)))];
}

function getHostname(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return url || "Dato proporcionado"; }
}

function calculationSource(name) {
  return { name, category: "Cálculo local", url: "" };
}

function extractGrades(question) {
  const grades = {};
  const pattern = /\b(EP\s*1|EP\s*2|EP\s*3|EF|EC)\s*(?::|=|ES|TENGO|SAQUE|OBTUVE)?\s*(\d{1,2}(?:[.,]\d+)?)/gi;
  let match;
  while ((match = pattern.exec(question)) !== null) {
    const code = match[1].replace(/\s+/g, "").toUpperCase();
    grades[code] = Number(match[2].replace(",", "."));
  }
  return grades;
}

function getGradeAnswer(question) {
  const query = normalize(question);
  const grades = extractGrades(question);
  const mentionsAverage = /(promedio|nota final|calcula.*nota|calcular.*nota)/.test(query);
  if (!mentionsAverage && Object.keys(grades).length < 3) return null;

  const invalid = Object.entries(grades).find(([, value]) => !Number.isFinite(value) || value < 0 || value > 20);
  if (invalid) {
    return {
      answer: `La nota de <strong>${invalid[0]}</strong> debe estar entre 0 y 20. Corrige ese valor para realizar el cálculo.`,
      source: calculationSource("Fórmula de promedio proporcionada")
    };
  }

  const required = Object.keys(gradingWeights);
  const missing = required.filter(code => grades[code] === undefined);
  if (missing.length) {
    const example = "EP1 15, EP2 14, EP3 16, EF 13, EC 18";
    return {
      answer: Object.keys(grades).length
        ? `Para calcular el promedio todavía necesito: <strong>${missing.join(", ")}</strong>. Escríbelas junto con las demás notas.`
        : `Escribe tus cinco notas de esta forma: <strong>${example}</strong>. Aplicaré EP1 10 %, EP2 20 %, EP3 20 %, EF 30 % y EC 20 %.`,
      source: calculationSource("Fórmula de promedio proporcionada")
    };
  }

  const average = required.reduce((total, code) => total + grades[code] * gradingWeights[code], 0);
  const rounded = Math.round((average + Number.EPSILON) * 100) / 100;
  const detail = required.map(code => `${code}: ${grades[code]} × ${Math.round(gradingWeights[code] * 100)} %`).join(" · ");
  return {
    answer: `Tu promedio ponderado es:<div class="calculation-card"><p class="calculation-result">${rounded.toFixed(2)}</p><p class="calculation-detail">${detail}</p></div>`,
    source: calculationSource("Fórmula de evaluación: EP1, EP2, EP3, EF y EC")
  };
}

function getAttendanceAnswer(question) {
  const query = normalize(question);
  if (!/(asistencia|asisti|faltas|inasistencia)/.test(query)) return null;

  let attended;
  let total;
  let match = query.match(/(?:asisti|asistencia)\s+(?:a\s+)?(\d+)\s+(?:de|sobre)\s+(\d+)/);
  if (match) {
    attended = Number(match[1]);
    total = Number(match[2]);
  } else {
    match = query.match(/(\d+)\s+(?:clases|sesiones).*?(\d+)\s+(?:faltas|inasistencias)/);
    if (match) {
      total = Number(match[1]);
      attended = total - Number(match[2]);
    }
  }

  if (attended === undefined || total === undefined) {
    return {
      answer: "Para calcularla, escribe por ejemplo: <strong>Asistí a 26 de 30 clases</strong> o <strong>Tuve 30 clases y 4 faltas</strong>.",
      source: calculationSource("Cálculo de asistencia")
    };
  }

  if (total <= 0 || attended < 0 || attended > total) {
    return {
      answer: "Los datos de asistencia no son válidos. El total debe ser mayor que cero y las asistencias no pueden superar el total de clases.",
      source: calculationSource("Cálculo de asistencia")
    };
  }

  const attendance = attended / total * 100;
  const absences = 100 - attendance;
  return {
    answer: `Tu porcentaje de asistencia es:<div class="calculation-card"><p class="calculation-result">${attendance.toFixed(2)} %</p><p class="calculation-detail">${attended} asistencias de ${total} clases · Inasistencia: ${absences.toFixed(2)} %</p></div>`,
    source: calculationSource("Datos de asistencia ingresados por el estudiante")
  };
}

function detectCampus(query) {
  if (/nueva cajamarca|rioja/.test(query)) return "Rioja–Nueva Cajamarca";
  if (/chulucanas|morropon/.test(query)) return "Morropón–Chulucanas";
  if (/santa maria|huaura|huacho/.test(query)) return "Huaura–Santa María";
  if (/atalaya|nopoki/.test(query)) return "Atalaya";
  if (/tarma/.test(query)) return "Tarma";
  if (/lima|los olivos|gonzales prada/.test(query)) return "Lima";
  return null;
}

function getCareerAnswer(question) {
  const query = normalize(question);
  const talksAboutCareers = /(carrera|carreras|programa|pregrado|ingenieria|psicologia|derecho|enfermeria|administracion|contabilidad|agronomia)/.test(query);
  if (!talksAboutCareers) return null;
  const campus = detectCampus(query);
  const source = sources.find(item => item.id === "carreras" && item.active);
  if (!source) return null;

  if (!campus) {
    const locations = Object.keys(careerCatalog).join(", ");
    return {
      answer: `La oferta está organizada en <strong>${locations}</strong>. Incluye programas de Educación, Ciencias Económicas, Derecho, Salud, Ingeniería y Ciencias Agrarias. Indica una sede o filial para mostrar la lista exacta.`,
      source
    };
  }

  const careers = careerCatalog[campus];
  const namedCareer = careers.find(career => {
    const normalizedCareer = normalize(career);
    const meaningful = tokenize(career).filter(token => !["ingenieria", "educacion", "tecnologia"].includes(token));
    return meaningful.length && meaningful.every(token => query.includes(token)) && !query.includes("carreras");
  });

  if (namedCareer) {
    return {
      answer: `Sí. <strong>${escapeHtml(namedCareer)}</strong> figura en la oferta académica publicada para ${escapeHtml(campus)}.`,
      source
    };
  }

  const list = careers.map(career => escapeHtml(career)).join(", ");
  return {
    answer: `En <strong>${escapeHtml(campus)}</strong> se publican las siguientes carreras: ${list}.`,
    source
  };
}

function sourceIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5" /></svg>';
}

function renderSources() {
  const active = sources.filter(source => source.active);
  elements.sourceCount.textContent = String(active.length);
  elements.sourceMiniList.innerHTML = active.length
    ? active.slice(0, 6).map(source => `
      <div class="mini-source">
        <span class="mini-source-icon">${sourceIcon()}</span>
        <div><p>${escapeHtml(source.name)}</p><small>${escapeHtml(getHostname(source.url))}</small></div>
        <span class="mini-source-status" title="Activa"></span>
      </div>`).join("")
    : '<p style="color:#8793b2;font-size:11px;line-height:1.5">No hay fuentes activas. Abre el panel para activar una.</p>';

  elements.adminSourceList.innerHTML = sources.map(source => `
    <article class="admin-source">
      <div><p>${escapeHtml(source.name)}</p><small>${escapeHtml(getHostname(source.url))} · ${escapeHtml(source.category || "Fuente")}</small></div>
      <label class="switch" title="${source.active ? "Desactivar" : "Activar"}">
        <input type="checkbox" data-action="toggle" data-id="${escapeHtml(source.id)}" ${source.active ? "checked" : ""} />
        <span class="switch-track"></span>
      </label>
      <button class="delete-source" type="button" data-action="delete" data-id="${escapeHtml(source.id)}" ${source.locked ? "disabled title=\"Fuente inicial protegida\"" : "title=\"Eliminar fuente\""}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m-8 0 1 13h8l1-13M10 11v5M14 11v5" /></svg>
      </button>
    </article>`).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function findAnswer(question) {
  const gradeAnswer = getGradeAnswer(question);
  if (gradeAnswer) return gradeAnswer;

  const attendanceAnswer = getAttendanceAnswer(question);
  if (attendanceAnswer) return attendanceAnswer;

  const careerAnswer = getCareerAnswer(question);
  if (careerAnswer) return careerAnswer;

  const query = normalize(question);
  const tokens = tokenize(question);
  const active = sources.filter(source => source.active);

  if (!active.length) return null;

  const ranked = active.map(source => {
    const searchable = normalize(`${source.name} ${source.category || ""} ${source.content}`);
    const keywordSet = new Set((source.keywords || []).map(normalize));
    let score = 0;
    tokens.forEach(token => {
      if (keywordSet.has(token)) score += 4;
      if (normalize(source.name).includes(token)) score += 3;
      if (searchable.includes(token)) score += 1;
    });

    const intents = [
      ["inicio de clases", "calendario-2026", 12],
      ["empiezan las clases", "calendario-2026", 12],
      ["terminan las clases", "calendario-2026", 12],
      ["fin del ciclo", "calendario-2026", 12],
      ["mis notas", "campus-virtual", 12],
      ["mi asistencia", "campus-virtual", 12],
      ["aula virtual", "campus-virtual", 10],
      ["mesa de ayuda", "campus-virtual", 10],
      ["horario biblioteca", "biblioteca", 12],
      ["servicios biblioteca", "biblioteca", 10],
      ["que carreras", "carreras", 10],
      ["ingenieria de sistemas", "carreras", 10],
      ["apoyo emocional", "servicios", 12],
      ["como postulo", "admision", 12]
    ];
    intents.forEach(([phrase, id, boost]) => {
      if (source.id === id && query.includes(phrase)) score += boost;
    });
    return { source, score };
  }).sort((a, b) => b.score - a.score);

  if (!ranked[0] || ranked[0].score < 4 || tokens.length === 0) return null;
  return buildResponse(question, ranked[0].source);
}

function buildResponse(question, source) {
  const query = normalize(question);
  let answer = source.content;

  if (source.id === "calendario-2026") {
    if (/(inicio|empiez|comienz)/.test(query)) answer = "Según el calendario académico oficial, las clases del semestre <strong>2026-II empiezan el lunes 17 de agosto de 2026</strong>.";
    else if (/(fin|termin|acaba)/.test(query)) answer = "El semestre <strong>2026-II finaliza el sábado 19 de diciembre de 2026</strong>, incluyendo los exámenes finales.";
    else answer = "Para el semestre <strong>2026-II</strong>, el calendario indica: examen de admisión el 8 de agosto, inicio de clases el 17 de agosto y fin del ciclo el 19 de diciembre de 2026.";
  }

  if (source.id === "campus-virtual") {
    if (/(nota|asistencia|silab)/.test(query)) answer = "Puedes revisar <strong>notas, asistencias y avance silábico en la Intranet</strong>, accesible desde el Campus Virtual UCSS.";
    else if (/(mesa|ayuda|soporte|problema)/.test(query)) answer = "La Mesa de Ayuda atiende consultas técnicas <strong>de lunes a sábado, de 7:00 a. m. a 7:00 p. m.</strong> También puedes escribir a mesadeayuda@ucss.edu.pe.";
    else answer = "El Campus Virtual reúne el Aula Digital, la Intranet, el correo institucional, la bolsa de trabajo y la biblioteca virtual. El Aula Digital incluye foros, chat, videoconferencia y evaluaciones en línea.";
  }

  if (source.id === "biblioteca") {
    if (/(horario|atiende|abierto)/.test(query)) answer = "En Lima, la <strong>Biblioteca Central</strong> atiende de lunes a viernes de 8:00 a 21:30 y sábados de 8:00 a 20:00. La Biblioteca Aziani atiende de lunes a viernes de 8:00 a 21:30.";
    else answer = "La Biblioteca UCSS ofrece préstamo y consulta de materiales, colecciones digitales, formación para usar información de manera ética, apoyo con referencias bibliográficas, equipos de cómputo y orientación para la investigación.";
  }

  if (source.id === "admision") answer = "La UCSS ofrece distintas modalidades de ingreso. Para el <strong>Examen de Admisión</strong> se rinde una prueba de aptitud académica; la inscripción debe seguir el cronograma oficial de Admisión UCSS.";

  if (source.id === "carreras") {
    if (/(sistemas|informatica)/.test(query)) answer = "Sí. La oferta publicada para la sede Lima incluye <strong>Ingeniería de Sistemas e Ingeniería Informática</strong>. La disponibilidad también varía entre filiales, por lo que conviene verificarla en la página oficial.";
    else answer = "La UCSS ofrece programas de Educación, Ciencias Económicas, Derecho, Salud, Ingeniería y Ciencias Agrarias y Ambientales. La oferta exacta cambia según la sede o filial; el enlace oficial permite revisarla por ubicación.";
  }

  if (source.id === "servicios") {
    if (/(beca|ayuda economica|beneficio)/.test(query)) answer = "La información pública de la UCSS presenta <strong>Becas y Ayudas Económicas</strong> como programas de apoyo para facilitar la continuidad de estudios de estudiantes con buen desempeño académico. Los requisitos específicos deben verificarse en la convocatoria vigente; esta versión no determina automáticamente si una persona recibe una beca.";
    else if (/(emocional|psicolog|salud mental)/.test(query)) answer = "El <strong>Servicio Psicopedagógico</strong> brinda orientación y consejería en aspectos académicos, emocionales y personales. La UCSS también presenta Tutoría y el Tópico UCSS entre sus servicios.";
    else answer = "Entre los servicios disponibles figuran Asuntos Académicos y Económicos, becas y ayudas, biblioteca, grados y títulos, tutoría, Tópico UCSS, Servicio Psicopedagógico y Defensoría Universitaria.";
  }

  if (!source.locked) answer = escapeHtml(source.content);
  return { answer, source };
}

function appendUserMessage(text) {
  const wrapper = document.createElement("div");
  wrapper.className = "message user";
  wrapper.innerHTML = `<div class="message-content">${escapeHtml(text)}</div>`;
  elements.messages.appendChild(wrapper);
}

function appendThinking() {
  const wrapper = document.createElement("div");
  wrapper.className = "message assistant";
  wrapper.id = "thinkingMessage";
  wrapper.innerHTML = '<div class="message-avatar">S</div><div class="message-content"><div class="thinking"><span></span><span></span><span></span></div></div>';
  elements.messages.appendChild(wrapper);
}

function appendAnswer(result) {
  document.getElementById("thinkingMessage")?.remove();
  const wrapper = document.createElement("div");
  wrapper.className = "message assistant";

  if (!result) {
    wrapper.innerHTML = `
      <div class="message-avatar">S</div>
      <div class="message-content answer-bubble no-answer">
        <p class="no-answer-title"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 17h.01"/></svg>No encontré esa información</p>
        <p>No aparece en las fuentes activas. Puedes reformular la pregunta o agregar un enlace oficial desde <strong>Administrar fuentes</strong>.</p>
      </div>`;
  } else {
    const { answer, source } = result;
    wrapper.innerHTML = `
      <div class="message-avatar">S</div>
      <div class="message-content answer-bubble">
        <p>${answer}</p>
        <div class="source-citation">
          <div class="source-citation-label">
            <span class="source-citation-icon">${sourceIcon()}</span>
            <div><p>Información utilizada: ${escapeHtml(source.name)}</p><small>${escapeHtml(source.category || getHostname(source.url))}</small></div>
          </div>
        </div>
      </div>`;
  }
  elements.messages.appendChild(wrapper);
  scrollToBottom();
}

function ask(question) {
  const text = question.trim();
  if (!text) return;
  elements.welcome.style.display = "none";
  appendUserMessage(text);
  appendThinking();
  elements.input.value = "";
  resizeInput();
  scrollToBottom();
  const result = findAnswer(text);
  window.setTimeout(() => appendAnswer(result), 620);
}

function scrollToBottom() {
  requestAnimationFrame(() => { elements.chat.scrollTop = elements.chat.scrollHeight; });
}

function resizeInput() {
  elements.input.style.height = "auto";
  elements.input.style.height = `${Math.min(elements.input.scrollHeight, 112)}px`;
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("visible"), 2200);
}

function openDialog() {
  renderSources();
  elements.dialog.showModal();
  closeMobileMenu();
}

function closeMobileMenu() {
  elements.sidebar.classList.remove("open");
  elements.mobileOverlay.classList.remove("visible");
}

elements.form.addEventListener("submit", event => {
  event.preventDefault();
  ask(elements.input.value);
});

elements.input.addEventListener("input", resizeInput);
elements.input.addEventListener("keydown", event => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    elements.form.requestSubmit();
  }
});

document.querySelectorAll("[data-prompt]").forEach(button => {
  button.addEventListener("click", () => ask(button.dataset.prompt));
});

document.getElementById("manageSourcesButton").addEventListener("click", openDialog);
document.getElementById("closeDialogButton").addEventListener("click", () => elements.dialog.close());
elements.dialog.addEventListener("click", event => {
  if (event.target === elements.dialog) elements.dialog.close();
});

elements.adminSourceList.addEventListener("change", event => {
  const control = event.target.closest('[data-action="toggle"]');
  if (!control) return;
  const source = sources.find(item => item.id === control.dataset.id);
  if (source) {
    source.active = control.checked;
    saveSources();
    showToast(control.checked ? "Fuente activada" : "Fuente desactivada");
  }
});

elements.adminSourceList.addEventListener("click", event => {
  const button = event.target.closest('[data-action="delete"]');
  if (!button || button.disabled) return;
  sources = sources.filter(source => source.id !== button.dataset.id);
  saveSources();
  showToast("Fuente eliminada");
});

document.getElementById("resetSourcesButton").addEventListener("click", () => {
  sources = cloneOriginalSources();
  saveSources();
  showToast("Fuentes originales restauradas");
});

elements.sourceForm.addEventListener("submit", event => {
  event.preventDefault();
  elements.sourceFeedback.textContent = "";
  const name = document.getElementById("sourceName").value.trim();
  const url = document.getElementById("sourceUrl").value.trim();
  const content = document.getElementById("sourceContent").value.trim();

  let parsed;
  try { parsed = new URL(url); }
  catch { elements.sourceFeedback.textContent = "Ingresa una URL válida."; return; }

  const isOfficial = parsed.protocol === "https:" && (parsed.hostname === "ucss.edu.pe" || parsed.hostname.endsWith(".ucss.edu.pe"));
  if (!isOfficial) {
    elements.sourceFeedback.textContent = "Usa un enlace HTTPS del dominio ucss.edu.pe.";
    return;
  }

  sources.push({
    id: `custom-${Date.now()}`,
    name,
    url,
    category: "Personalizada",
    active: true,
    locked: false,
    content,
    keywords: tokenize(`${name} ${content}`)
  });
  saveSources();
  elements.sourceForm.reset();
  showToast("Fuente guardada e indexada");
});

document.getElementById("clearChatButton").addEventListener("click", () => {
  elements.messages.innerHTML = "";
  elements.welcome.style.display = "block";
  elements.input.focus();
  showToast("Conversación reiniciada");
});

document.getElementById("menuButton").addEventListener("click", () => {
  elements.sidebar.classList.add("open");
  elements.mobileOverlay.classList.add("visible");
});
elements.mobileOverlay.addEventListener("click", closeMobileMenu);

renderSources();
resizeInput();
document.addEventListener("DOMContentLoaded", () => {

    const boton =
        document.getElementById("loginButton");

    if (boton) {
        boton.addEventListener("click", login);
    }

});
document
.getElementById("logoutButton")
?.addEventListener(
    "click",
    cerrarSesion
);
document
.getElementById("btnNuevoAlumno")
?.addEventListener(
   "click",
   crearAlumno
);

document
.getElementById("btnNuevoDocente")
?.addEventListener(
   "click",
   crearDocente
);
// =========================
// LOGIN Y DASHBOARD
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const usuarioGuardado =
        JSON.parse(
            localStorage.getItem("usuarioActual")
        );

    if (usuarioGuardado) {

        const loginScreen =
            document.getElementById("loginScreen");

        const mainSystem =
            document.getElementById("mainSystem");

        if (loginScreen)
            loginScreen.style.display = "none";

        if (mainSystem)
            mainSystem.style.display = "flex";

        if (typeof cargarDashboard === "function")
            cargarDashboard(usuarioGuardado);

    }

    const loginBtn =
        document.getElementById("loginButton");

    if (loginBtn) {

        loginBtn.addEventListener(
            "click",
            login
        );
    }

    const logoutBtn =
        document.getElementById("logoutButton");

    if (logoutBtn) {

        logoutBtn.addEventListener(
            "click",
            cerrarSesion
        );
    }

});
const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeToggle.innerHTML = "☀️";
    }else{
        themeToggle.innerHTML = "🌙";
    }

});