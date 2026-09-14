let db = JSON.parse(
    localStorage.getItem("db")
) || {

    administradores: [
        {
            codigo: "ADM001",
            nombre: "Administrador General",
            password: "123456",
            tipo: "administrador",
            activo: true
        }
    ],

    docentes: [
        {
            codigo: "DOC001",
            nombre: "Carlos Torres",
            password: "123456",
            tipo: "docente",
            activo: true
        }
    ],

    alumnos: [
        {
            codigo: "20241001",
            nombre: "Angie Arellano",
            password: "123456",
            tipo: "alumno",
            carrera: "Ingeniería de Sistemas",
            ciclo: "VI",
            activo: true
        }
    ]
};

function guardarDB() {

    localStorage.setItem(
        "db",
        JSON.stringify(db)
    );
}