
let productos = [

    {
        id: 1,
     nombre: "celular",
     descripcion: "es un celular",
     precio: 30,
     cantidad: 5,
     categoria: "telefonia",
   },
   {
    id: 2,
     nombre: "notebook",
     descripcion: "es una computadora",
     precio: 50,
     cantidad: 10,
     categoria: "computacion"
   },
   {
    id: 3,
     nombre: "zapatilla",
     descripcion: "es una zapatilla",
     precio: 20,
     cantidad: 2,
     categoria: "indumentaria"
   },
   {
    id: 4,
     nombre: "Macbook",
     descripcion: "es una computadora Mac",
     precio: 100,
     cantidad: 5,
     categoria: "computacion"
   },
   {
    id: 5,
     nombre: "samsung",
     descripcion: "es una computadora Mac",
     precio: 222,
     cantidad: 5,
     categoria: "telefonia"
   },
   {
    id: 6,
     nombre: "motorola",
     descripcion: "es una computadora Mac",
     precio: 100,
     cantidad: 5,
     categoria: "telefonia"
   },
   
]

// function binary (arr, buscado){

// }

// let numeros = [1, encontrado, buscado ] 


// const binarySearch = ( arr, buscado )=>{
//     // 4 variables
//     let min = 0
//     let max = arr.length - 1 
//     let posicionMedio = undefined
//     let encontrado = undefined

//     while( min <= max ){

//         posicionMedio = Math.floor((min + max) / 2) // 2
//         encontrado = arr[posicionMedio]

//         if( encontrado.id === buscado ){
//             return encontrado
//         }

//         if( encontrado.id > buscado ){

//             max = posicionMedio - 1

//         }else{

//             min = posicionMedio + 1

//         }



//     }
    
//     return "Lo siento, no encontre el elemento!"

// }

// let elementoEncontrado = binarySearch(productos, 4)

// console.log( elementoEncontrado )

let elementoEncontrado = productos.find( elemento => elemento.id === 2 )

console.log( elementoEncontrado  ? elementoEncontrado : "Lo siento No lo encontre")

// CALLBACK ---> Es una funcion que se pasa como argumento a otra funcion 

// const restar = ( x )=>{

//     x == 2

// }

// const sumar = ( a, b )=>{

//     b( a )

// }

// sumar( 2, restar ) // ---> restar es un Callback


let arr = [ "hola", "chau" ]

let num = [1, 2, 3]

arr.push( "perro" ) // --> recibe un dato

arr.pop() // ---> no recibe nada

arr.includes( "h" ) //--> recibe un dato
 
arr.indexOf( 1 )  //--> recibe un dato

// arr.funcion( function restar2 (){ } ) // ---> funcion 


let productos2 = [

    {
        id: 1,
     nombre: "celular",
     descripcion: "es un celular",
     precio: 30,
     cantidad: 5,
     categoria: "telefonia",
   },
   {
    id: 2,
     nombre: "notebook",
     descripcion: "es una computadora",
     precio: 50,
     cantidad: 10,
     categoria: "computacion"
   },
   {
    id: 3,
     nombre: "zapatilla",
     descripcion: "es una zapatilla",
     precio: 20,
     cantidad: 2,
     categoria: "indumentaria"
   },
   {
    id: 4,
     nombre: "Macbook",
     descripcion: "es una computadora Mac",
     precio: 100,
     cantidad: 5,
     categoria: "computacion"
   },
   {
    id: 5,
     nombre: "samsung",
     descripcion: "es una computadora Mac",
     precio: 222,
     cantidad: 5,
     categoria: "telefonia"
   },
   {
    id: 6,
     nombre: "motorola",
     descripcion: "es una computadora Mac",
     precio: 100,
     cantidad: 5,
     categoria: "telefonia"
   },
   
]

let productosFiltrados = productos2.filter( (elemento)=> elemento.precio >= 50 )

console.log("-------")
console.log("-------")
console.log("-------")
console.log( productosFiltrados )