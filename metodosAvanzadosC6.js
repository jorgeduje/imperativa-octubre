
// ANCHOR METODOS AVANZADOS DE ARRAY´S

// Array.push( "hola", 2 )

// Array.includes( "casa" )

// Array.indexOf( 12 )

// MAP: 
    // devuelve un nuevo array de la misma longitud que el original

let numeros = [3, 2, 5, 1] // [30, 20, 50 , 10]

let nuevoArr = numeros.map(  (elemento) => elemento * 10 )

console.log(nuevoArr)

// const crearArr = (arr)=>{

//     let nuevoArr = []
//     for (let i = 0; i < arr.length; i++) {
        
//         nuevoArr.push(arr[i] * 10)
        
//     }

//     return nuevoArr
// }

    


// FOREACH:
    // no devuelve nada, simplemente itera el arreglo ( podemos ejecutar instrucciones )

let arr = [ ]

numeros.forEach( (elemento, indice) =>{
    arr.push( elemento * indice)
})

console.log("---------")
console.log("ForEach")
console.log(arr)


// REDUCE:
    // devuelve un unico elemento ( sirve para reducir un arreglo en un solo elemento )

// let numeros = [3, 2, 5, 1]

let productos = [ // 2, 4, 1, 3
    {
        id: 1,
        nombre: "nike",
        categoria: "indumentaria",
        precio: 10,
        cantidad: 2
    },
    {
        id: 2,
        nombre: "iphone",
        categoria: "celulares",
        precio: 20,
        cantidad: 1
    },
    {
        id: 3,
        nombre: "remera",
        categoria: "indumentaria",
        precio: 30,
        cantidad: 4
    },
    {
        id: 4,
        nombre: "motorola",
        categoria: "celulares",
        precio: 15,
        cantidad: 2
    }
]

// FILTER:
    // devuelve un nuevo array con los elementos que cumplan la condicion

    let min = 100
    let max = 400

let arrayFiltrado = productos.filter( (elemento, indice)=> (elemento.precio >= min && elemento.precio <= max))
console.log(arrayFiltrado)

// const arrFiltrado = (arr)=>{

//     let nuevoArr = []

//     for (let i = 0; i < arr.length; i++) {

//         if( arr[i].precio >= min && arr[i].precio <= max ){
//             nuevoArr.push( arr[i] )
//         }
        
//     }

//     return nuevoArr
// }

// let filtrados = arrFiltrado(productos)
// console.log(filtrados)


// FIND:
    // devuelve el PRIMER elemento que cumpla la condicion

    console.log("----------------")
let id = 2

let elementoEncontrado = productos.find( (elemento, indice)=> elemento.id === id )

console.log( elementoEncontrado )



// SORT: 
    // ordena un array ( de forma asc o desc) y ( tambien puede ordenarlo en base a una propiedad )

let numeros2 = [ 4, 2, 1, 15, 7 ]

numeros2.sort( ( a, b )=> b - a ) // asc o desc

console.log( numeros2 )

// 2, 4, 1, 3

productos.sort( (a, b)=>{

    if(a.nombre > b.nombre){
        return 1
    }

    if( a.nombre < b.nombre){
        return -1
    }

    return 0
})

console.log(productos)



// REDUCE:
    // devuelve un unico elemento ( sirve para reducir un arreglo en un solo elemento )

let nums = [ 5, 1, 5 ]

let sumatoria = nums.reduce( ( acc , elemento )=>{
    return acc * elemento
}, 1)

console.log(sumatoria)

let totalVendido = productos.reduce( (acc, elemento)=>{
    return acc + (elemento.precio * elemento.cantidad)
}, 0)
// 190 
console.log(totalVendido)