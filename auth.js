function iniciarSesion(codigo, password) {

    const usuarios = [

        ...db.administradores,
        ...db.docentes,
        ...db.alumnos

    ];

    const usuario = usuarios.find(u =>
        u.codigo === codigo &&
        u.password === password
    );

    if (!usuario)
        return null;

    if (!usuario.activo)
        return null;

    return usuario;
}

function login() {

    const codigo =
        document.getElementById("loginUser").value.trim();

    const password =
        document.getElementById("loginPassword").value.trim();

    const usuario =
        iniciarSesion(codigo, password);

    const mensaje =
        document.getElementById("loginMessage");

    if (!usuario) {

        mensaje.textContent =
            "Usuario o contraseña incorrectos";

        return;
    }

    localStorage.setItem(
        "usuarioActual",
        JSON.stringify(usuario)
    );

    document.getElementById(
        "loginScreen"
    ).style.display = "none";

    document.getElementById(
        "mainSystem"
    ).style.display = "flex";

    cargarDashboard(usuario);
}

function cerrarSesion() {

    localStorage.removeItem(
        "usuarioActual"
    );

    location.reload();
}