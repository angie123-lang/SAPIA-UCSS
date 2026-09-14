/* ============================================================
   SAPIA - ASISTENTE ACADEMICO UCSS
   app.js
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ============================================================
       1. FUENTES OFICIALES
       ============================================================ */

    const originalSources = [
        {
            id: "calendario",
            name: "Calendario académico UCSS",
            category: "Calendario",
            url: "https://www.ucss.edu.pe/asuntos-academicos/calendario-academico",
            content: `
                Calendario académico oficial de la UCSS.
                El semestre académico 2026-II inicia el lunes 17 de agosto de 2026.
                El semestre académico 2026-II termina el sábado 19 de diciembre de 2026.
            `,
            active: true
        },
        {
            id: "campus",
            name: "Campus Virtual UCSS",
            category: "Campus Virtual",
            url: "https://campusvirtual.ucss.edu.pe/",
            content: `
                Campus Virtual UCSS.
                Desde este portal se puede acceder al Aula Virtual,
                Intranet, correo y otros servicios institucionales.
            `,
            active: true
        },
        {
            id: "biblioteca",
            name: "Biblioteca UCSS",
            category: "Biblioteca",
            url: "https://biblioteca.ucss.edu.pe/",
            content: `
                Biblioteca de la Universidad Católica Sedes Sapientiae.
                Permite consultar los servicios y recursos de biblioteca.
            `,
            active: true
        },
        {
            id: "repositorio",
            name: "Repositorio Institucional Digital UCSS",
            category: "Tesis y proyectos",
            url: "https://repositorio.ucss.edu.pe/",
            content: `
                Repositorio Institucional Digital de la UCSS.
                Permite consultar tesis, trabajos académicos,
                investigaciones y otros documentos institucionales.
            `,
            active: true
        },
        {
            id: "admision",
            name: "Admisión UCSS",
            category: "Admisión",
            url: "https://admision.ucss.edu.pe/",
            content: `
                Información relacionada con admisión de la UCSS.
            `,
            active: true
        },
        {
            id: "carreras",
            name: "Portal UCSS",
            category: "Carreras",
            url: "https://www.ucss.edu.pe/",
            content: `
                Portal oficial de la Universidad Católica Sedes Sapientiae.
                Contiene información institucional y académica.
            `,
            active: true
        },
        {
            id: "servicios",
            name: "Servicios UCSS",
            category: "Servicios",
            url: "https://www.ucss.edu.pe/",
            content: `
                Información general de servicios institucionales UCSS.
            `,
            active: true
        },
        {
            id: "transparencia",
            name: "Transparencia UCSS",
            category: "Transparencia",
            url: "https://www.ucss.edu.pe/nosotros/transparencia/",
            content: `
                Portal de transparencia institucional de la UCSS.
            `,
            active: true
        },
        {
            id: "intranet",
            name: "Intranet UCSS",
            category: "Intranet",
            url: "https://intranet.ucss.edu.pe/",
            content: `
                Portal oficial de Intranet UCSS.
            `,
            active: true
        },
        {
            id: "obae",
            name: "Oficina de Becas y Ayudas Económicas OBAE",
            category: "Becas",
            url: "https://www.ucss.edu.pe/beca-ayuda-economica/informativo-daia",
            content: `
                Información de la Oficina de Becas y Ayudas Económicas.
                Aquí se puede consultar información relacionada con becas
                y ayudas económicas de la UCSS.
            `,
            active: true
        }
    ];


    /* ============================================================
       2. REFERENCIAS DOM
       ============================================================ */

    const loginScreen = document.getElementById("loginScreen");
    const mainSystem = document.getElementById("mainSystem");

    const loginUser = document.getElementById("loginUser");
    const loginPassword = document.getElementById("loginPassword");
    const loginButton = document.getElementById("loginButton");
    const loginMessage = document.getElementById("loginMessage");

    const welcomeUser = document.getElementById("welcomeUser");

    const chat = document.getElementById("chat");
    const messages = document.getElementById("messages");
    const welcomeCard = document.getElementById("welcomeCard");

    const chatForm = document.getElementById("chatForm");
    const questionInput = document.getElementById("questionInput");
    const sendButton = document.getElementById("sendButton");

    const clearChatButton = document.getElementById("clearChatButton");
    const logoutButton = document.getElementById("logoutButton");

    const menuButton = document.getElementById("menuButton");
    const sidebar = document.getElementById("sidebar");
    const mobileOverlay = document.getElementById("mobileOverlay");

    const sourceDialog = document.getElementById("sourceDialog");
    const closeDialogButton = document.getElementById("closeDialogButton");
    const manageSourcesButton = document.getElementById("manageSourcesButton");

    const sourceTitle = document.getElementById("sourceTitle");
    const sourceCount = document.getElementById("sourceCount");
    const sourceMiniList = document.getElementById("sourceMiniList");

    const adminSourceList = document.getElementById("adminSourceList");
    const resetSourcesButton = document.getElementById("resetSourcesButton");

    const sourceForm = document.getElementById("sourceForm");
    const sourceName = document.getElementById("sourceName");
    const sourceUrl = document.getElementById("sourceUrl");
    const sourceContent = document.getElementById("sourceContent");
    const sourceFeedback = document.getElementById("sourceFeedback");

    const toast = document.getElementById("toast");

    const adminPanel = document.getElementById("adminPanel");
    const btnNuevoAlumno = document.getElementById("btnNuevoAlumno");
    const btnNuevoDocente = document.getElementById("btnNuevoDocente");
    const btnVerUsuarios = document.getElementById("btnVerUsuarios");
    const usuariosPanel = document.getElementById("usuariosPanel");


    /* ============================================================
       3. ESTADO
       ============================================================ */

    let sources = loadSources();

    const conversationContext = {
        lastIntent: null,
        lastTopic: null,
        waitingForGrades: false,
        waitingForAttendance: false,
        waitingForStudentCode: false,
        waitingForProjectTopic: false,
        currentStudentCode: null,
        lastImage: null
    };


    /* ============================================================
       4. INTENCIONES
       ============================================================ */

    const intents = [

        {
            id: "calendario",
            keywords: [
                "calendario",
                "semestre",
                "inicio de clases",
                "terminan las clases",
                "cuando empiezan",
                "cuando terminan",
                "2026 ii",
                "2026-ii"
            ]
        },

        {
            id: "campus",
            keywords: [
                "campus",
                "aula virtual",
                "aula",
                "virtual",
                "entrar al campus",
                "ingresar al campus",
                "clases virtuales"
            ]
        },

        {
            id: "biblioteca",
            keywords: [
                "biblioteca",
                "libros",
                "recursos bibliograficos",
                "buscar libro",
                "buscar libros",
                "servicios de biblioteca"
            ]
        },

        {
            id: "repositorio",
            keywords: [
                "tesis",
                "proyecto",
                "proyectos",
                "trabajo de investigacion",
                "investigacion",
                "trabajos academicos",
                "trabajo academico",
                "repositorio",
                "monografia",
                "monografias"
            ]
        },

        {
            id: "becas",
            keywords: [
                "beca",
                "becas",
                "ayuda economica",
                "ayudas economicas",
                "oba",
                "obae",
                "beneficio economico",
                "postular a una beca"
            ]
        },

        {
            id: "transparencia",
            keywords: [
                "transparencia",
                "portal de transparencia",
                "informacion institucional"
            ]
        },

        {
            id: "intranet",
            keywords: [
                "intranet",
                "correo institucional",
                "correo ucss"
            ]
        },

        {
            id: "admision",
            keywords: [
                "admision",
                "admisiones",
                "ingresar a la universidad",
                "postular",
                "postulacion"
            ]
        },

        {
            id: "servicios",
            keywords: [
                "servicios al estudiante",
                "servicios",
                "bienestar",
                "estudiante"
            ]
        },

        {
            id: "promedio",
            keywords: [
                "promedio",
                "promedio final",
                "nota final",
                "calcular promedio",
                "calcula mi promedio",
                "como saco mi promedio",
                "como calcular mi promedio"
            ]
        },

        {
            id: "asistencia",
            keywords: [
                "asistencia",
                "asistencias",
                "faltas",
                "falta",
                "inasistencia",
                "inasistencias",
                "porcentaje de asistencia",
                "porcentaje de faltas",
                "puedo dar mi final",
                "puedo tomar mi final",
                "puedo rendir mi final",
                "examen final"
            ]
        },

        {
            id: "carreras",
            keywords: [
                "carrera",
                "carreras",
                "ingenieria",
                "ingenieria de sistemas",
                "administracion",
                "contabilidad",
                "educacion"
            ]
        },

        {
            id: "general",
            keywords: [
                "hola",
                "buenas",
                "buenos dias",
                "buenas tardes",
                "buenas noches",
                "ayuda",
                "que puedes hacer",
                "que haces"
            ]
        }
    ];


    /* ============================================================
       5. NORMALIZACION
       ============================================================ */

    function normalize(text) {
        return String(text || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[¿?¡!]/g, "")
            .replace(/\s+/g, " ")
            .trim();
    }


    function escapeHTML(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }


    /* ============================================================
       6. FUENTES
       ============================================================ */

    function loadSources() {
        try {
            const saved = localStorage.getItem("sapiaSources");

            if (!saved) {
                return [...originalSources];
            }

            const parsed = JSON.parse(saved);

            if (!Array.isArray(parsed) || parsed.length === 0) {
                return [...originalSources];
            }

            return parsed;

        } catch (error) {
            console.error("Error cargando fuentes:", error);
            return [...originalSources];
        }
    }


    function saveSources() {
        localStorage.setItem("sapiaSources", JSON.stringify(sources));
        renderSourceSummary();
        renderAdminSources();
    }


    function getSource(id) {
        return sources.find(source => source.id === id && source.active);
    }


    function renderSourceSummary() {

        if (sourceCount) {
            const activeSources = sources.filter(source => source.active);
            sourceCount.textContent = `${activeSources.length} fuentes activas`;
        }

        if (sourceTitle) {
            sourceTitle.textContent = "Fuentes activas";
        }

        if (!sourceMiniList) {
            return;
        }

        sourceMiniList.innerHTML = "";

        sources
            .filter(source => source.active)
            .slice(0, 5)
            .forEach(source => {

                const item = document.createElement("div");
                item.className = "mini-source";

                item.innerHTML = `
                    <span class="mini-source-icon">S</span>
                    <div>
                        <strong>${escapeHTML(source.name)}</strong>
                        <small>${escapeHTML(source.category)}</small>
                    </div>
                `;

                sourceMiniList.appendChild(item);
            });
    }


    function renderAdminSources() {

        if (!adminSourceList) {
            return;
        }

        adminSourceList.innerHTML = "";

        sources.forEach(source => {

            const item = document.createElement("div");
            item.className = "admin-source-item";

            item.innerHTML = `
                <div class="admin-source-info">
                    <strong>${escapeHTML(source.name)}</strong>
                    <small>${escapeHTML(source.category)}</small>
                    <a href="${escapeHTML(source.url)}"
                       target="_blank"
                       rel="noopener noreferrer">
                       ${escapeHTML(source.url)}
                    </a>
                </div>

                <div class="admin-source-actions">
                    <button type="button"
                            class="source-toggle"
                            data-id="${source.id}">
                        ${source.active ? "Desactivar" : "Activar"}
                    </button>

                    <button type="button"
                            class="delete-source"
                            data-id="${source.id}">
                        Eliminar
                    </button>
                </div>
            `;

            adminSourceList.appendChild(item);
        });
    }


    /* ============================================================
       7. RESPUESTAS CON ENLACES
       ============================================================ */

    function sourceButton(id, text = "Abrir fuente oficial") {

        const source = getSource(id);

        if (!source) {
            return "";
        }

        return `
            <div class="sapia-source-action">
                <a class="sapia-source-link"
                   href="${escapeHTML(source.url)}"
                   target="_blank"
                   rel="noopener noreferrer">
                   ${escapeHTML(text)} ↗
                </a>
            </div>
        `;
    }


    function sourceInfo(id) {

        const source = getSource(id);

        if (!source) {
            return "";
        }

        return `
            <div class="source-citation">
                <span class="source-citation-icon">✓</span>
                <div>
                    <strong>Informacion utilizada</strong>
                    <span>${escapeHTML(source.name)}</span>
                </div>
            </div>
        `;
    }


    /* ============================================================
       8. LOGIN
       ============================================================ */

    function recoverLoggedUser() {

        try {

            const saved = localStorage.getItem("usuarioActual");

            if (!saved) {
                return null;
            }

            const user = JSON.parse(saved);

            if (!user) {
                return null;
            }

            return user;

        } catch (error) {
            return null;
        }
    }


    function showSystem(user) {

        if (loginScreen) {
            loginScreen.style.display = "none";
        }

        if (mainSystem) {
            mainSystem.style.display = "flex";
        }

        const displayName =
            user?.nombre ||
            user?.name ||
            user?.usuario ||
            user?.email ||
            "Estudiante";

        if (welcomeUser) {
            welcomeUser.textContent = displayName;
        }

        renderSourceSummary();
        renderAdminSources();

        if (user?.rol === "admin" || user?.role === "admin") {

            if (adminPanel) {
                adminPanel.style.display = "block";
            }

        } else {

            if (adminPanel) {
                adminPanel.style.display = "none";
            }
        }
    }


    function login() {

        const username = loginUser?.value.trim() || "";
        const password = loginPassword?.value || "";

        if (!username || !password) {

            if (loginMessage) {
                loginMessage.textContent =
                    "Ingresa tu usuario y contraseña para continuar.";
            }

            return;
        }

        const user = {
            usuario: username,
            nombre: username,
            rol: "estudiante"
        };

        localStorage.setItem("usuarioActual", JSON.stringify(user));

        if (loginMessage) {
            loginMessage.textContent = "";
        }

        showSystem(user);
    }


    function logout() {

        localStorage.removeItem("usuarioActual");

        if (mainSystem) {
            mainSystem.style.display = "none";
        }

        if (loginScreen) {
            loginScreen.style.display = "flex";
        }

        if (loginPassword) {
            loginPassword.value = "";
        }

        clearConversation();

        showToast("Sesion cerrada");
    }


    /* ============================================================
       9. DETECCION DE INTENCIONES
       ============================================================ */

    function detectIntent(text) {

        const normalized = normalize(text);

        let bestIntent = "general";
        let bestScore = 0;

        intents.forEach(intent => {

            let score = 0;

            intent.keywords.forEach(keyword => {

                const key = normalize(keyword);

                if (normalized.includes(key)) {
                    score += key.length >= 8 ? 4 : 2;
                }
            });

            if (score > bestScore) {
                bestScore = score;
                bestIntent = intent.id;
            }
        });

        return bestIntent;
    }


    /* ============================================================
       10. NUMEROS / NOTAS
       ============================================================ */

    function extraerNumeros(text) {

        const matches = String(text || "").match(
            /(?:\d+(?:[.,]\d+)?)/g
        );

        if (!matches) {
            return [];
        }

        return matches
            .map(value => Number(value.replace(",", ".")))
            .filter(value => Number.isFinite(value));
    }


    function sonNotasValidas(numbers) {

        return (
            numbers.length === 5 &&
            numbers.every(number => number >= 0 && number <= 20)
        );
    }


    function generarRespuestaPromedio(numbers) {

        const [EP1, EP2, EP3, EF, EC] = numbers;

        const pesos = {
            EP1: 0.10,
            EP2: 0.20,
            EP3: 0.20,
            EF: 0.30,
            EC: 0.20
        };

        const aporteEP1 = EP1 * pesos.EP1;
        const aporteEP2 = EP2 * pesos.EP2;
        const aporteEP3 = EP3 * pesos.EP3;
        const aporteEF = EF * pesos.EF;
        const aporteEC = EC * pesos.EC;

        const promedio =
            aporteEP1 +
            aporteEP2 +
            aporteEP3 +
            aporteEF +
            aporteEC;

        conversationContext.waitingForGrades = false;
        conversationContext.lastIntent = "promedio";

        return `
            <p>Claro. Ya tengo tus cinco notas.</p>

            <div class="calculation-card">

                <div class="calculation-header">
                    <strong>Calculo del promedio final</strong>
                </div>

                <div class="calculation-body">

                    <div class="calculation-row">
                        <span>EP1 - 10%</span>
                        <strong>${EP1.toFixed(2)}</strong>
                    </div>

                    <div class="calculation-row">
                        <span>EP2 - 20%</span>
                        <strong>${EP2.toFixed(2)}</strong>
                    </div>

                    <div class="calculation-row">
                        <span>EP3 - 20%</span>
                        <strong>${EP3.toFixed(2)}</strong>
                    </div>

                    <div class="calculation-row">
                        <span>EF - 30%</span>
                        <strong>${EF.toFixed(2)}</strong>
                    </div>

                    <div class="calculation-row">
                        <span>EC - 20%</span>
                        <strong>${EC.toFixed(2)}</strong>
                    </div>

                    <div class="calculation-result">
                        <span>Promedio final</span>
                        <strong>${promedio.toFixed(2)}</strong>
                    </div>

                </div>

            </div>

            <p>
                Si quieres, tambien puedo explicarte cuanto aporta
                cada evaluacion a tu promedio.
            </p>
        `;
    }


    /* ============================================================
       11. ASISTENCIAS
       ============================================================ */

    function generarAnalisisAsistencia(faltas, totalClases, studentCode = null) {

        if (totalClases <= 0) {
            return `
                <p>
                    Necesito saber cuantas clases se han realizado
                    para poder calcular tu porcentaje.
                </p>
            `;
        }

        const porcentajeFaltas =
            (faltas / totalClases) * 100;

        const porcentajeAsistencia =
            100 - porcentajeFaltas;

        let estado = "";
        let clase = "";

        if (porcentajeFaltas > 30) {

            estado = `
                <strong>
                    Has superado el 30% de inasistencias.
                </strong>

                <p>
                    En el prototipo de Sapia, esto significa que
                    el estudiante no estaria habilitado para rendir
                    el examen final.
                </p>
            `;

            clase = "attendance-danger";

        } else if (porcentajeFaltas === 30) {

            estado = `
                <strong>
                    Estas exactamente en el limite del 30%.
                </strong>

                <p>
                    No debes acumular mas faltas sin verificar
                    la condicion de tu curso.
                </p>
            `;

            clase = "attendance-warning";

        } else {

            estado = `
                <strong>
                    Actualmente estas por debajo del 30% de faltas.
                </strong>

                <p>
                    Segun la regla configurada en Sapia,
                    no habrias superado el limite de inasistencias.
                </p>
            `;

            clase = "attendance-good";
        }

        return `
            <p>
                ${studentCode
                    ? `Codigo de estudiante: <strong>${escapeHTML(studentCode)}</strong>`
                    : ""}
            </p>

            <div class="calculation-card ${clase}">

                <div class="calculation-header">
                    <strong>Analisis de asistencia</strong>
                </div>

                <div class="calculation-body">

                    <div class="calculation-row">
                        <span>Clases realizadas</span>
                        <strong>${totalClases}</strong>
                    </div>

                    <div class="calculation-row">
                        <span>Faltas</span>
                        <strong>${faltas}</strong>
                    </div>

                    <div class="calculation-row">
                        <span>Asistencias</span>
                        <strong>${Math.max(totalClases - faltas, 0)}</strong>
                    </div>

                    <div class="calculation-row">
                        <span>Porcentaje de faltas</span>
                        <strong>${porcentajeFaltas.toFixed(2)}%</strong>
                    </div>

                    <div class="calculation-row">
                        <span>Porcentaje de asistencia</span>
                        <strong>${porcentajeAsistencia.toFixed(2)}%</strong>
                    </div>

                    <div class="calculation-result">
                        <span>Resultado</span>
                        <strong>
                            ${porcentajeFaltas > 30
                                ? "SUPERASTE EL LIMITE"
                                : "DENTRO DEL LIMITE"}
                        </strong>
                    </div>

                </div>

            </div>

            ${estado}

            <p>
                <strong>Importante:</strong>
                Sapia te orienta con base en la regla configurada.
                Para confirmar oficialmente tu situacion academica,
                revisa tu informacion institucional o consulta con
                tu facultad/docente.
            </p>

            ${sourceButton("campus", "Revisar Campus Virtual")}
            ${sourceButton("intranet", "Abrir Intranet UCSS")}
        `;
    }


    /* ============================================================
       12. DETECCION DE ASISTENCIAS DESDE TEXTO
       ============================================================ */

    function procesarAsistenciaNumerica(text) {

        const numbers = extraerNumeros(text);

        if (numbers.length < 2) {
            return null;
        }

        /*
            Formato esperado:

            faltas total

            Ejemplo:
            3 20

            significa:
            3 faltas de 20 clases realizadas.
        */

        const faltas = numbers[0];
        const totalClases = numbers[1];

        if (
            faltas < 0 ||
            totalClases <= 0 ||
            faltas > totalClases
        ) {
            return null;
        }

        return generarAnalisisAsistencia(
            faltas,
            totalClases,
            conversationContext.currentStudentCode
        );
    }


    /* ============================================================
       13. ASISTENCIAS DESDE UNA FOTO
       ============================================================ */

    function agregarBotonImagen() {

        if (!chatForm || document.getElementById("sapiaImageButton")) {
            return;
        }

        const input = document.createElement("input");

        input.type = "file";
        input.accept = "image/*";
        input.id = "sapiaImageInput";
        input.style.display = "none";

        const button = document.createElement("button");

        button.type = "button";
        button.id = "sapiaImageButton";
        button.className = "image-upload-button";
        button.title = "Subir captura de asistencia";
        button.textContent = "Foto";

        button.addEventListener("click", () => {
            input.click();
        });

        input.addEventListener("change", event => {

            const file = event.target.files?.[0];

            if (file) {
                procesarImagenAsistencia(file);
            }
        });

        chatForm.insertBefore(input, chatForm.firstChild);
        chatForm.insertBefore(button, chatForm.firstChild);
    }


    async function cargarTesseract() {

        if (window.Tesseract) {
            return window.Tesseract;
        }

        return new Promise((resolve, reject) => {

            const existing =
                document.querySelector(
                    'script[data-sapia-tesseract="true"]'
                );

            if (existing) {

                existing.addEventListener(
                    "load",
                    () => resolve(window.Tesseract)
                );

                existing.addEventListener(
                    "error",
                    reject
                );

                return;
            }

            const script = document.createElement("script");

            script.src =
                "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";

            script.async = true;
            script.dataset.sapiaTesseract = "true";

            script.onload = () => {

                if (window.Tesseract) {
                    resolve(window.Tesseract);
                } else {
                    reject(
                        new Error("No se pudo cargar OCR")
                    );
                }
            };

            script.onerror = reject;

            document.head.appendChild(script);
        });
    }


    async function procesarImagenAsistencia(file) {

        if (!file.type.startsWith("image/")) {

            showToast("Selecciona una imagen valida");

            return;
        }

        conversationContext.lastImage = file;

        addUserMessage(
            `
                <p>He recibido tu captura de asistencia.</p>
                <p><strong>Procesando imagen...</strong></p>
            `
        );

        const thinkingId = showThinking();

        try {

            const Tesseract = await cargarTesseract();

            const result = await Tesseract.recognize(
                file,
                "spa+eng",
                {
                    logger: message => {

                        if (
                            message.status === "recognizing text" &&
                            message.progress
                        ) {
                            updateThinking(
                                thinkingId,
                                `Analizando captura ${Math.round(message.progress * 100)}%`
                            );
                        }
                    }
                }
            );

            removeThinking(thinkingId);

            const text = result?.data?.text || "";

            const numbers = extraerNumeros(text);

            /*
                Intentamos detectar patrones de asistencia.

                Ejemplos que podria encontrar:
                Faltas: 3
                Total: 20
                Inasistencias 3
                3 / 20
            */

            let faltas = null;
            let total = null;

            const normalizedText = normalize(text);

            const faltaMatch = normalizedText.match(
                /(?:faltas?|inasistencias?)\s*[:\-]?\s*(\d+(?:[.,]\d+)?)/i
            );

            const totalMatch = normalizedText.match(
                /(?:total|clases|sesiones)\s*(?:de|realizadas)?\s*[:\-]?\s*(\d+(?:[.,]\d+)?)/i
            );

            if (faltaMatch) {
                faltas = Number(
                    faltaMatch[1].replace(",", ".")
                );
            }

            if (totalMatch) {
                total = Number(
                    totalMatch[1].replace(",", ".")
                );
            }

            if (
                faltas === null &&
                total === null &&
                numbers.length >= 2
            ) {
                /*
                    Si no reconoce etiquetas, toma los dos primeros
                    numeros como una aproximacion.
                */
                faltas = numbers[0];
                total = numbers[1];
            }

            if (
                Number.isFinite(faltas) &&
                Number.isFinite(total) &&
                total > 0 &&
                faltas >= 0 &&
                faltas <= total
            ) {

                addBotMessage(
                    generarAnalisisAsistencia(
                        faltas,
                        total,
                        conversationContext.currentStudentCode
                    )
                );

                return;
            }

            addBotMessage(`
                <p>
                    Pude leer parte de la imagen, pero no logre
                    identificar con seguridad las faltas y el total
                    de clases.
                </p>

                <p>
                    Para evitar darte un resultado incorrecto,
                    puedes escribir los datos de esta forma:
                </p>

                <div class="calculation-card">
                    <div class="calculation-body">
                        <strong>Ejemplo</strong>
                        <p>3 faltas de 20 clases</p>
                        <p>o simplemente:</p>
                        <p><strong>3 20</strong></p>
                    </div>
                </div>

                ${sourceButton("campus", "Revisar Campus Virtual")}
            `);

        } catch (error) {

            console.error("OCR:", error);

            removeThinking(thinkingId);

            addBotMessage(`
                <p>
                    No pude analizar automaticamente esta imagen.
                </p>

                <p>
                    Puedes escribir tus datos directamente.
                    Por ejemplo:
                    <strong>3 faltas de 20 clases</strong>.
                </p>
            `);
        }
    }


    /* ============================================================
       14. PEGAR IMAGEN CON CTRL + V
       ============================================================ */

    function configurarPegadoDeImagen() {

        document.addEventListener("paste", event => {

            const items = event.clipboardData?.items;

            if (!items) {
                return;
            }

            for (const item of items) {

                if (item.type.startsWith("image/")) {

                    const file = item.getAsFile();

                    if (file) {
                        procesarImagenAsistencia(file);
                    }

                    break;
                }
            }
        });
    }


    /* ============================================================
       15. RESPUESTAS DE TEMAS UCSS
       ============================================================ */

    function respuestaCalendario() {

        conversationContext.lastIntent = "calendario";
        conversationContext.lastTopic = "calendario";

        return `
            <p>
                El semestre academico 2026-II inicia el
                <strong>lunes 17 de agosto de 2026</strong>
                y finaliza el
                <strong>sabado 19 de diciembre de 2026</strong>.
            </p>

            <p>
                Puedes consultar las fechas oficiales directamente
                en el calendario academico de la UCSS.
            </p>

            ${sourceButton("calendario", "Abrir calendario UCSS")}
            ${sourceInfo("calendario")}
        `;
    }


    function respuestaCampus() {

        conversationContext.lastIntent = "campus";
        conversationContext.lastTopic = "campus";

        return `
            <p>
                Para ingresar a tus clases y servicios virtuales
                puedes utilizar el Campus Virtual UCSS.
            </p>

            <div class="calculation-card">
                <div class="calculation-body">

                    <p>
                        <strong>Desde el Campus Virtual puedes acceder a:</strong>
                    </p>

                    <p>• Aula Virtual</p>
                    <p>• Intranet</p>
                    <p>• Correo institucional</p>
                    <p>• Servicios virtuales</p>

                </div>
            </div>

            <p>
                Por seguridad, Sapia no necesita que escribas tu
                contraseña aqui. Ingresa tus credenciales directamente
                en la pagina oficial.
            </p>

            ${sourceButton("campus", "Ingresar al Campus Virtual")}
            ${sourceButton("intranet", "Ingresar a Intranet")}
            ${sourceInfo("campus")}
        `;
    }


    function respuestaBiblioteca() {

        conversationContext.lastIntent = "biblioteca";
        conversationContext.lastTopic = "biblioteca";

        return `
            <p>
                Claro. Puedes acceder directamente a la Biblioteca
                UCSS para consultar sus recursos y servicios.
            </p>

            <div class="calculation-card">
                <div class="calculation-body">
                    <strong>Que puedes hacer</strong>
                    <p>
                        Consultar recursos bibliograficos,
                        servicios y herramientas de biblioteca.
                    </p>
                </div>
            </div>

            ${sourceButton("biblioteca", "Abrir Biblioteca UCSS")}
            ${sourceInfo("biblioteca")}
        `;
    }


    function respuestaRepositorio() {

        conversationContext.lastIntent = "repositorio";
        conversationContext.lastTopic = "repositorio";

        conversationContext.waitingForProjectTopic = true;

        return `
            <p>
                Si quieres buscar un proyecto o una tesis para
                utilizarla como referencia, el lugar mas apropiado
                es el <strong>Repositorio Institucional Digital UCSS</strong>.
            </p>

            <div class="calculation-card">
                <div class="calculation-body">

                    <strong>Como te puedo ayudar</strong>

                    <p>
                        1. Entra al repositorio.
                    </p>

                    <p>
                        2. Busca por palabras relacionadas con tu tema.
                    </p>

                    <p>
                        3. Revisa tesis similares.
                    </p>

                    <p>
                        4. Observa problema, objetivos, metodologia,
                        variables y resultados.
                    </p>

                    <p>
                        5. Utiliza esos trabajos solamente como
                        referencia para desarrollar tu propio proyecto.
                    </p>

                </div>
            </div>

            ${sourceButton(
                "repositorio",
                "Buscar tesis y proyectos UCSS"
            )}

            ${sourceInfo("repositorio")}

            <p>
                Si me dices el tema de tu proyecto, puedo ayudarte
                a identificar que palabras deberias buscar y como
                estructurar tu investigacion.
            </p>
        `;
    }


    function respuestaBecas() {

        conversationContext.lastIntent = "becas";
        conversationContext.lastTopic = "becas";

        return `
            <p>
                Para consultar informacion sobre becas y ayudas
                economicas de la UCSS debes revisar la informacion
                de la <strong>Oficina de Becas y Ayudas Economicas OBAE</strong>.
            </p>

            <div class="calculation-card">
                <div class="calculation-body">

                    <strong>Recomendacion</strong>

                    <p>
                        Revisa los requisitos, fechas, condiciones
                        y procedimiento indicado por la universidad.
                    </p>

                    <p>
                        No ingreses tu contraseña de estudiante
                        dentro del chatbot.
                    </p>

                </div>
            </div>

            ${sourceButton(
                "obae",
                "Consultar becas y ayudas economicas"
            )}

            ${sourceInfo("obae")}
        `;
    }


    function respuestaTransparencia() {

        conversationContext.lastIntent = "transparencia";
        conversationContext.lastTopic = "transparencia";

        return `
            <p>
                Puedes consultar directamente el Portal de
                Transparencia de la UCSS para revisar la informacion
                institucional publicada por la universidad.
            </p>

            ${sourceButton(
                "transparencia",
                "Abrir Transparencia UCSS"
            )}

            ${sourceInfo("transparencia")}
        `;
    }


    function respuestaIntranet() {

        conversationContext.lastIntent = "intranet";
        conversationContext.lastTopic = "intranet";

        return `
            <p>
                La Intranet UCSS es el portal institucional donde
                puedes realizar diferentes consultas y acceder a
                servicios internos.
            </p>

            <p>
                Ingresa tu contraseña directamente en el portal oficial.
                Sapia no debe recibir ni almacenar tu contraseña.
            </p>

            ${sourceButton("intranet", "Ingresar a Intranet UCSS")}
            ${sourceInfo("intranet")}
        `;
    }


    function respuestaAdmision() {

        conversationContext.lastIntent = "admision";
        conversationContext.lastTopic = "admision";

        return `
            <p>
                Para conocer los procesos de admision, requisitos
                y modalidades puedes ingresar al portal oficial
                de Admisión UCSS.
            </p>

            ${sourceButton("admision", "Ir a Admisión UCSS")}
            ${sourceInfo("admision")}
        `;
    }


    function respuestaServicios() {

        conversationContext.lastIntent = "servicios";
        conversationContext.lastTopic = "servicios";

        return `
            <p>
                Sapia puede orientarte sobre los principales
                servicios institucionales para estudiantes.
            </p>

            <div class="calculation-card">
                <div class="calculation-body">

                    <p>• Campus Virtual</p>
                    <p>• Biblioteca</p>
                    <p>• Intranet</p>
                    <p>• Becas y ayudas economicas</p>
                    <p>• Informacion academica</p>

                </div>
            </div>

            ${sourceButton("campus", "Abrir Campus Virtual")}
            ${sourceButton("biblioteca", "Abrir Biblioteca")}
            ${sourceButton("obae", "Consultar OBAE")}
        `;
    }


    function respuestaCarreras() {

        conversationContext.lastIntent = "carreras";
        conversationContext.lastTopic = "carreras";

        return `
            <p>
                Para consultar informacion institucional sobre
                las carreras profesionales puedes revisar el
                portal oficial de la UCSS.
            </p>

            ${sourceButton("carreras", "Abrir portal UCSS")}
            ${sourceInfo("carreras")}
        `;
    }


    function respuestaPromedio(text) {

        const numbers = extraerNumeros(text);

        if (sonNotasValidas(numbers)) {
            return generarRespuestaPromedio(numbers);
        }

        conversationContext.waitingForGrades = true;
        conversationContext.lastIntent = "promedio";
        conversationContext.lastTopic = "promedio";

        if (numbers.length > 0 && numbers.length < 5) {

            return `
                <p>
                    Recibi <strong>${numbers.length}</strong>
                    nota${numbers.length === 1 ? "" : "s"}.
                </p>

                <p>
                    Para calcular tu promedio final necesito
                    exactamente <strong>5 notas</strong>:
                </p>

                <div class="calculation-card">
                    <div class="calculation-body">
                        <p>EP1</p>
                        <p>EP2</p>
                        <p>EP3</p>
                        <p>EF</p>
                        <p>EC</p>
                    </div>
                </div>

                <p>
                    Puedes escribirlas juntas, por ejemplo:
                    <strong>12 14 17 20 10</strong>
                </p>
            `;
        }

        if (numbers.length > 5) {

            return `
                <p>
                    Recibi <strong>${numbers.length} valores</strong>.
                </p>

                <p>
                    Para realizar el calculo necesito solamente
                    estas cinco notas:
                    <strong>EP1, EP2, EP3, EF y EC</strong>.
                </p>

                <p>
                    Escribelas nuevamente en este orden.
                </p>
            `;
        }

        return `
            <p>
                Claro. Puedo calcular tu promedio final.
            </p>

            <p>
                Necesito estas cinco notas:
            </p>

            <div class="calculation-card">
                <div class="calculation-body">

                    <p><strong>EP1</strong> - 10%</p>
                    <p><strong>EP2</strong> - 20%</p>
                    <p><strong>EP3</strong> - 20%</p>
                    <p><strong>EF</strong> - 30%</p>
                    <p><strong>EC</strong> - 20%</p>

                </div>
            </div>

            <p>
                Ejemplo:
                <strong>12 14 17 20 10</strong>
            </p>
        `;
    }


    function respuestaAsistencia(text) {

        conversationContext.lastIntent = "asistencia";
        conversationContext.lastTopic = "asistencia";

        const numbers = extraerNumeros(text);

        if (numbers.length >= 2) {

            const result = procesarAsistenciaNumerica(text);

            if (result) {
                conversationContext.waitingForAttendance = false;
                return result;
            }
        }

        conversationContext.waitingForAttendance = true;
        conversationContext.waitingForStudentCode = true;

        return `
            <p>
                Si quieres saber si tus faltas pueden afectar tu
                examen final, puedo hacer un analisis de tu porcentaje
                de inasistencias.
            </p>

            <div class="calculation-card">
                <div class="calculation-body">

                    <strong>Primero</strong>

                    <p>
                        Puedes indicarme tu codigo de estudiante
                        si quieres identificar la consulta.
                    </p>

                    <p>
                        No escribas tu contraseña aqui.
                    </p>

                    <strong>Despues</strong>

                    <p>
                        Puedes pegar una captura de tus asistencias
                        directamente en el chat con
                        <strong>Ctrl + V</strong>.
                    </p>

                    <p>
                        Tambien puedes usar el boton
                        <strong>Foto</strong> para subir una imagen.
                    </p>

                    <strong>Tambien puedes escribirlo</strong>

                    <p>
                        Ejemplo:
                        <strong>3 20</strong>
                    </p>

                    <p>
                        Eso significa 3 faltas de 20 clases realizadas.
                    </p>

                </div>
            </div>
        `;
    }


    function respuestaGeneral() {

        conversationContext.lastIntent = "general";

        return `
            <p>
                Hola. Soy <strong>Sapia</strong>, tu asistente
                academico UCSS.
            </p>

            <p>
                Puedo ayudarte con consultas como:
            </p>

            <div class="calculation-card">
                <div class="calculation-body">

                    <p>• Asistencias y porcentaje de faltas</p>
                    <p>• Promedio final</p>
                    <p>• Calendario academico</p>
                    <p>• Campus Virtual</p>
                    <p>• Biblioteca</p>
                    <p>• Tesis y proyectos</p>
                    <p>• Becas y ayudas economicas</p>
                    <p>• Transparencia</p>
                    <p>• Intranet</p>
                    <p>• Admisión y carreras</p>

                </div>
            </div>

            <p>
                Tambien puedo analizar una captura de tus
                asistencias si la pegas directamente en el chat.
            </p>
        `;
    }


    /* ============================================================
       16. PROCESAMIENTO PRINCIPAL
       ============================================================ */

    async function processQuestion(text) {

        const normalized = normalize(text);

        /* ------------------------------------------
           A. CODIGO DE ESTUDIANTE
        ------------------------------------------ */

        if (
            conversationContext.waitingForStudentCode &&
            /^[0-9]{5,15}$/.test(normalized)
        ) {

            conversationContext.currentStudentCode = normalized;
            conversationContext.waitingForStudentCode = false;

            return `
                <p>
                    Codigo de estudiante registrado para esta consulta:
                    <strong>${escapeHTML(normalized)}</strong>.
                </p>

                <p>
                    Ahora puedes pegar una captura de tus asistencias
                    con <strong>Ctrl + V</strong>, subir una foto o
                    escribir tus datos.
                </p>

                <p>
                    Ejemplo:
                    <strong>3 20</strong>
                    si tienes 3 faltas de 20 clases.
                </p>
            `;
        }


        /* ------------------------------------------
           B. CINCO NUMEROS = PROMEDIO
        ------------------------------------------ */

        const numbers = extraerNumeros(text);

        if (
            conversationContext.waitingForGrades &&
            sonNotasValidas(numbers)
        ) {

            return generarRespuestaPromedio(numbers);
        }


        /* ------------------------------------------
           C. RESPUESTA DE PROMEDIO
        ------------------------------------------ */

        if (
            detectIntent(text) === "promedio" ||
            conversationContext.lastIntent === "promedio"
        ) {

            return respuestaPromedio(text);
        }


        /* ------------------------------------------
           D. ASISTENCIAS
        ------------------------------------------ */

        if (
            detectIntent(text) === "asistencia" ||
            conversationContext.lastIntent === "asistencia"
        ) {

            if (numbers.length >= 2) {

                const result =
                    procesarAsistenciaNumerica(text);

                if (result) {
                    return result;
                }
            }

            return respuestaAsistencia(text);
        }


        /* ------------------------------------------
           E. TEMAS
        ------------------------------------------ */

        const intent = detectIntent(text);

        switch (intent) {

            case "calendario":
                return respuestaCalendario();

            case "campus":
                return respuestaCampus();

            case "biblioteca":
                return respuestaBiblioteca();

            case "repositorio":
                return respuestaRepositorio();

            case "becas":
                return respuestaBecas();

            case "transparencia":
                return respuestaTransparencia();

            case "intranet":
                return respuestaIntranet();

            case "admision":
                return respuestaAdmision();

            case "servicios":
                return respuestaServicios();

            case "carreras":
                return respuestaCarreras();

            default:
                return respuestaGeneral();
        }
    }


    /* ============================================================
       17. MENSAJES
       ============================================================ */

    function addUserMessage(text) {

        if (!messages) {
            return;
        }

        const message = document.createElement("div");

        message.className = "message user-message";

        message.innerHTML = `
            <div class="message-avatar">T</div>
            <div class="message-body">
                <div class="message-content">
                    ${escapeHTML(text)}
                </div>
            </div>
        `;

        messages.appendChild(message);

        scrollChat();
    }


    function addBotMessage(html) {

        if (!messages) {
            return;
        }

        const message = document.createElement("div");

        message.className = "message assistant-message";

        message.innerHTML = `
            <div class="message-avatar">S</div>

            <div class="message-body">
                <div class="message-content">
                    ${html}
                </div>
            </div>
        `;

        messages.appendChild(message);

        scrollChat();
    }


    function showThinking() {

        if (!messages) {
            return null;
        }

        const id =
            "thinking-" +
            Date.now();

        const message = document.createElement("div");

        message.className =
            "message assistant-message thinking-message";

        message.id = id;

        message.innerHTML = `
            <div class="message-avatar">S</div>

            <div class="message-body">
                <div class="thinking-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                    <strong>Analizando...</strong>
                </div>
            </div>
        `;

        messages.appendChild(message);

        scrollChat();

        return id;
    }


    function updateThinking(id, text) {

        const element = document.getElementById(id);

        if (!element) {
            return;
        }

        const strong =
            element.querySelector("strong");

        if (strong) {
            strong.textContent = text;
        }
    }


    function removeThinking(id) {

        if (!id) {
            return;
        }

        document.getElementById(id)?.remove();
    }


    function scrollChat() {

        if (!chat) {
            return;
        }

        setTimeout(() => {
            chat.scrollTop = chat.scrollHeight;
        }, 50);
    }


    /* ============================================================
       18. ENVIO DEL CHAT
       ============================================================ */

    async function handleSubmit(event) {

        event.preventDefault();

        if (!questionInput) {
            return;
        }

        const text = questionInput.value.trim();

        if (!text) {
            return;
        }

        addUserMessage(text);

        questionInput.value = "";

        if (welcomeCard) {
            welcomeCard.style.display = "none";
        }

        if (sendButton) {
            sendButton.disabled = true;
        }

        const thinkingId = showThinking();

        try {

            await new Promise(resolve =>
                setTimeout(resolve, 450)
            );

            removeThinking(thinkingId);

            const response =
                await processQuestion(text);

            addBotMessage(response);

        } catch (error) {

            console.error(error);

            removeThinking(thinkingId);

            addBotMessage(`
                <p>
                    Ocurrio un problema procesando tu consulta.
                </p>

                <p>
                    Intenta nuevamente.
                </p>
            `);

        } finally {

            if (sendButton) {
                sendButton.disabled = false;
            }

            questionInput.focus();
        }
    }


    /* ============================================================
       19. LIMPIAR CONVERSACION
       ============================================================ */

    function clearConversation() {

        if (messages) {
            messages.innerHTML = "";
        }

        conversationContext.lastIntent = null;
        conversationContext.lastTopic = null;
        conversationContext.waitingForGrades = false;
        conversationContext.waitingForAttendance = false;
        conversationContext.waitingForStudentCode = false;
        conversationContext.waitingForProjectTopic = false;
        conversationContext.currentStudentCode = null;
        conversationContext.lastImage = null;

        if (welcomeCard) {
            welcomeCard.style.display = "";
        }

        addBotMessage(`
            <p>
                Conversacion reiniciada.
            </p>

            <p>
                Hola, soy Sapia. Que deseas consultar?
            </p>
        `);
    }


    /* ============================================================
       20. PROMPTS INICIALES
       ============================================================ */

    function configurarPrompts() {

        const buttons =
            document.querySelectorAll("[data-prompt]");

        buttons.forEach(button => {

            button.addEventListener("click", () => {

                const prompt =
                    button.getAttribute("data-prompt");

                if (!prompt || !questionInput) {
                    return;
                }

                questionInput.value = prompt;

                questionInput.focus();
            });
        });
    }


    /* ============================================================
       21. FUENTES ADMIN
       ============================================================ */

    function openSourceDialog() {

        if (!sourceDialog) {
            return;
        }

        if (typeof sourceDialog.showModal === "function") {
            sourceDialog.showModal();
        } else {
            sourceDialog.setAttribute("open", "");
        }
    }


    function closeSourceDialog() {

        if (!sourceDialog) {
            return;
        }

        if (typeof sourceDialog.close === "function") {
            sourceDialog.close();
        } else {
            sourceDialog.removeAttribute("open");
        }
    }


    function handleSourceAdmin(event) {

        const target = event.target;

        if (!target) {
            return;
        }

        const id = target.dataset.id;

        if (!id) {
            return;
        }

        if (target.classList.contains("source-toggle")) {

            const source = sources.find(
                item => item.id === id
            );

            if (source) {
                source.active = !source.active;
                saveSources();

                showToast(
                    source.active
                        ? "Fuente activada"
                        : "Fuente desactivada"
                );
            }
        }


        if (target.classList.contains("delete-source")) {

            sources =
                sources.filter(
                    item => item.id !== id
                );

            saveSources();

            showToast("Fuente eliminada");
        }
    }


    function resetSources() {

        sources = [...originalSources];

        saveSources();

        showToast("Fuentes restauradas");
    }


    function addCustomSource(event) {

        event.preventDefault();

        const name =
            sourceName?.value.trim() || "";

        const url =
            sourceUrl?.value.trim() || "";

        const content =
            sourceContent?.value.trim() || "";

        if (!name || !url) {

            if (sourceFeedback) {
                sourceFeedback.textContent =
                    "Completa el nombre y la URL.";
            }

            return;
        }

        try {

            const parsedURL =
                new URL(url);

            if (parsedURL.protocol !== "https:") {

                if (sourceFeedback) {
                    sourceFeedback.textContent =
                        "Solo se permiten enlaces HTTPS.";
                }

                return;
            }

        } catch (error) {

            if (sourceFeedback) {
                sourceFeedback.textContent =
                    "La URL no es valida.";
            }

            return;
        }

        const newSource = {

            id:
                "custom-" +
                Date.now(),

            name,

            category:
                "Fuente personalizada",

            url,

            content:
                content ||
                "Fuente agregada por el administrador.",

            active: true
        };

        sources.push(newSource);

        saveSources();

        if (sourceFeedback) {
            sourceFeedback.textContent =
                "Fuente agregada correctamente.";
        }

        sourceForm?.reset();

        showToast("Fuente agregada");
    }


    /* ============================================================
       22. MENU MOVIL
       ============================================================ */

    function toggleMobileMenu() {

        sidebar?.classList.toggle("open");
        mobileOverlay?.classList.toggle("show");
    }


    function closeMobileMenu() {

        sidebar?.classList.remove("open");
        mobileOverlay?.classList.remove("show");
    }


    /* ============================================================
       23. TOAST
       ============================================================ */

    function showToast(message) {

        if (!toast) {
            return;
        }

        toast.textContent = message;
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }


    /* ============================================================
       24. USUARIOS ADMIN
       ============================================================ */

    function mostrarUsuarioActual() {

        if (!usuariosPanel) {
            return;
        }

        const user = recoverLoggedUser();

        if (!user) {
            usuariosPanel.innerHTML =
                "<p>No hay usuario activo.</p>";

            return;
        }

        usuariosPanel.innerHTML = `
            <div>
                <strong>Usuario actual</strong>
            </div>

            <p>
                Usuario:
                ${escapeHTML(
                    user.usuario ||
                    user.email ||
                    "Sin datos"
                )}
            </p>

            <p>
                Rol:
                ${escapeHTML(
                    user.rol ||
                    user.role ||
                    "estudiante"
                )}
            </p>
        `;
    }


    function crearRegistroSimulado(tipo) {

        showToast(
            `Modulo de ${tipo} preparado para integrar con la base de datos.`
        );
    }


    /* ============================================================
       25. EVENTOS
       ============================================================ */

    if (loginButton) {
        loginButton.addEventListener(
            "click",
            login
        );
    }


    if (loginPassword) {
        loginPassword.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {
                    login();
                }
            }
        );
    }


    if (loginUser) {
        loginUser.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {
                    login();
                }
            }
        );
    }


    if (chatForm) {
        chatForm.addEventListener(
            "submit",
            handleSubmit
        );
    }


    if (clearChatButton) {
        clearChatButton.addEventListener(
            "click",
            clearConversation
        );
    }


    if (logoutButton) {
        logoutButton.addEventListener(
            "click",
            logout
        );
    }


    if (manageSourcesButton) {
        manageSourcesButton.addEventListener(
            "click",
            openSourceDialog
        );
    }


    if (closeDialogButton) {
        closeDialogButton.addEventListener(
            "click",
            closeSourceDialog
        );
    }


    if (resetSourcesButton) {
        resetSourcesButton.addEventListener(
            "click",
            resetSources
        );
    }


    if (sourceForm) {
        sourceForm.addEventListener(
            "submit",
            addCustomSource
        );
    }


    if (adminSourceList) {
        adminSourceList.addEventListener(
            "click",
            handleSourceAdmin
        );
    }


    if (menuButton) {
        menuButton.addEventListener(
            "click",
            toggleMobileMenu
        );
    }


    if (mobileOverlay) {
        mobileOverlay.addEventListener(
            "click",
            closeMobileMenu
        );
    }


    if (btnNuevoAlumno) {
        btnNuevoAlumno.addEventListener(
            "click",
            () => crearRegistroSimulado("registro de alumno")
        );
    }


    if (btnNuevoDocente) {
        btnNuevoDocente.addEventListener(
            "click",
            () => crearRegistroSimulado("registro de docente")
        );
    }


    if (btnVerUsuarios) {
        btnVerUsuarios.addEventListener(
            "click",
            mostrarUsuarioActual
        );
    }


    /* ============================================================
       26. INICIALIZACION
       ============================================================ */

    configurarPrompts();

    agregarBotonImagen();

    configurarPegadoDeImagen();

    renderSourceSummary();

    renderAdminSources();

    const loggedUser =
        recoverLoggedUser();

    if (loggedUser) {
        showSystem(loggedUser);
    } else {

        if (loginScreen) {
            loginScreen.style.display = "flex";
        }

        if (mainSystem) {
            mainSystem.style.display = "none";
        }
    }


    console.log(
        "Sapia iniciado correctamente."
    );

});