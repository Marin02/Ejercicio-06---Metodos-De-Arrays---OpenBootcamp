// Ejercicio 06

const arrayCompras = ["Lechuga", "Arepas", "Frijoles", "Sopa instantanea", "Mantequilla"];

arrayCompras.push("Aceite de Girasol")
console.log(arrayCompras)

arrayCompras.pop()
console.log(arrayCompras)

const peliculasFavs = [
    {
        titulo: "Siempre a tu lado",
        director: "Lasse Hallstrom",
        fecha: 2009
    },
    {
        titulo: "Rapidos y furiosos 5",
        director: "Justin Lin",
        fecha: 2011
    },
    {
        titulo: "El conjuro",
        director:"James Wan",
        fecha: 2013
    }
]

const peliculasPosteriores = peliculasFavs.filter(pelicula => pelicula.fecha >= 2010)
console.log(peliculasPosteriores)

const peliculasTitulos = peliculasFavs.map(pelicula => pelicula.titulo)
console.log(peliculasTitulos)

const peliculasDirectores = peliculasFavs.map(pelicula => pelicula.director)
console.log(peliculasDirectores)

const nuevaListaConcat = peliculasTitulos.concat(peliculasDirectores)
console.log(nuevaListaConcat)

const nuevaListaPropagacion = [...peliculasTitulos, ...peliculasDirectores]
console.log(nuevaListaPropagacion)

