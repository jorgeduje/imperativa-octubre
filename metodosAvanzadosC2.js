
// PROGRAMACION FUNCIONAL ---> QUE QUEREMOS o QUE NECESITAMOS


// METODOS DE ARREGLOS 

let numeros = [1, 5, 2, 4]

// numeros.push( "hola" )
// numeros.indexOf( 5 )

// numeros.map( funcion --> callback )
// numeros.filter( funcion )

// Una funcion que retorne un nuevo array con los mismos numeros multiplicados por 10

// const crearNuevoArr = (arr)=>{

//     let nuevo = []

//     for (let i = 0; i < arr.length; i++) {

//         if(arr[i] >= 4){
//             nuevo.push( arr[i] )

//         }
        
//     }

//     return nuevo

// }

// console.log( crearNuevoArr(numeros))
// MAP --> devuelve un nuevo arreglo de la misma longitud que el array original
// tengo acceso a cada elemento y lo puedo agregar a mi arreglo pero modificado  

let numeros2 = [1, 5, 2, 4] // [ 0, 5, 4, 12 ]

let personas = [ 
    {
        nombre: "pepito",
        edad: 18
    },
    {
        nombre: "maria",
        edad: 22
    },
    {
        nombre: "juancito",
        edad: 14
    }
]


let nuevo = numeros2.map( ( elemento, indice )=>{ 
    return elemento * indice
})

console.log(nuevo)

// FILTER
// DEVUELVE UN ARREGLO PERO CON LOS ELEMENTOS QUE CUMPLAN LA CONDICION 

let filtrados = personas.filter( persona => persona.edad >= 18 )
console.log( filtrados )

// FIND ---> retorna el elemento

let elementoSeleccionado = "juancito"

let elementoEncontrado = personas.find( (persona)=> persona.nombre === elementoSeleccionado )
console.log(elementoEncontrado)

// FOREACH
// REDUCE
// SORT


let productos = [
    {
        id: 1,
        nombre: "cochecito",
        precio: 200,
        cantidad: 2,
        categoria: "juguetes"
    },
    {
        id: 2,
        nombre: "jueguete",
        precio: 4000,
        cantidad: 2,
        categoria: "juguetes"
    },
    {
        id: 3,
        nombre: "algo",
        precio: 300,
        cantidad: 2,
        categoria: "juguetes"
    },

]

let min = 100
let max = 5000

//  productos o filtrados

let productosFiltrados = productos.filter( producto => producto.precio >= min && producto.precio <= max)
console.log(productosFiltrados)

// {
//     productosFiltrados.map( producto => {
//         <div>
//             <h2>producto.nombre</h2>
//             <h2>precio</h2>
//         </div>
//     })
// }


let palabras = ["hola", "chau", "algo mas"]


let nuevoArr= []

palabras.forEach( (elemento, indice)=>{
   nuevoArr.push(elemento)
})

console.log(nuevoArr)

// REDUCE

let num = [ 1, 2, 3] // 

let total = productos.reduce( ( acc, elemento )=>{
    return acc + (elemento.precio * elemento.cantidad)
}, 0 )

console.log(total)

// SORT


let numerosMil = [ 2, 5, 1, 6, 12, 3]

numerosMil.sort( ( a, b )=> b - a  )

productos.sort( (a, b)=>{
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

console.log(productos)