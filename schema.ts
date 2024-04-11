interface Pelicula {
    _id: string,
    nombre: string,
    director: string,
    actores: string[],
    imagenUrl: string,
    rating: number,
    generos: [
        {
            id_genero: string
        }
    ]
}

interface Genero {
    _id: string,
    nombre: string
}

interface Comentario {
    _id: string,
    id_usuario: string,
    id_pelicula: string,
    texto: string,
}

interface Usuario {
    _id: string,
    username: string,
    password: string,
    rol: "admin" | "user",
    ratings: [
        {
            id_pelicula: string,
            rate: number
        }
    ]
}


