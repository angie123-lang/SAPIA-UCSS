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
        },
        {
            codigo: "ADM002",
            nombre: "María Fernández",
            password: "admin2026",
            tipo: "administrador",
            activo: true
        },
        {
            codigo: "ADM003",
            nombre: "José Ramírez",
            password: "admin2026",
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
        },
        {
            codigo: "DOC002",
            nombre: "Ana Rodríguez",
            password: "docente2026",
            tipo: "docente",
            activo: true
        },
        {
            codigo: "DOC003",
            nombre: "Luis Mendoza",
            password: "docente2026",
            tipo: "docente",
            activo: true
        },
        {
            codigo: "DOC004",
            nombre: "Patricia Salazar",
            password: "docente2026",
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
        },
        {
            codigo: "20241002",
            nombre: "Juan Pérez",
            password: "alumno2026",
            tipo: "alumno",
            carrera: "Ingeniería Civil",
            ciclo: "IV",
            activo: true
        },
        {
            codigo: "20241003",
            nombre: "María López",
            password: "alumno2026",
            tipo: "alumno",
            carrera: "Contabilidad",
            ciclo: "VIII",
            activo: true
        },
        {
            codigo: "20241004",
            nombre: "Carlos Sánchez",
            password: "alumno2026",
            tipo: "alumno",
            carrera: "Administración",
            ciclo: "III",
            activo: true
        },
        {
            codigo: "20241005",
            nombre: "Lucía Huamán",
            password: "alumno2026",
            tipo: "alumno",
            carrera: "Ingeniería de Sistemas",
            ciclo: "V",
            activo: true
        },
        {
            codigo: "20241006",
            nombre: "Pedro García",
            password: "alumno2026",
            tipo: "alumno",
            carrera: "Derecho",
            ciclo: "VII",
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