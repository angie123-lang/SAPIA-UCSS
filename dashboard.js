function cargarDashboard(usuario) {

    const titulo =
        document.getElementById("welcomeUser");

    if (titulo) {

        titulo.textContent =
            `Bienvenido ${usuario.nombre}`;
    }

    const panelAdmin =
        document.getElementById("adminPanel");

    if (panelAdmin) {

        panelAdmin.style.display =
            usuario.tipo === "administrador"
                ? "block"
                : "none";
    }
}

function crearAlumno() {

    const codigo =
        prompt("Código");

    const nombre =
        prompt("Nombre");

    const carrera =
        prompt("Carrera");

    if (!codigo || !nombre)
        return;

    db.alumnos.push({

        codigo,
        nombre,
        carrera,
        ciclo: "I",
        password: "123456",
        tipo: "alumno",
        activo: true

    });

    guardarDB();

    alert("Alumno creado");
}

function crearDocente() {

    const codigo =
        prompt("Código");

    const nombre =
        prompt("Nombre");

    if (!codigo || !nombre)
        return;

    db.docentes.push({

        codigo,
        nombre,
        password: "123456",
        tipo: "docente",
        activo: true

    });

    guardarDB();

    alert("Docente creado");
}