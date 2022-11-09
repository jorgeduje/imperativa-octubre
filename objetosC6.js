

let arr = [12, 43, 54]

console.log( arr[1] )

// let nombrePerro = "pepito"
// let edadPerro = 2
// let colorPerro = "blanco"


// PROPIEDADES O METODOS
// PARES DE CLAVE : VALOR

let perro = {

    nombre: "jack",
    apellido: "perez",
    edad: 2,
    color: "marron",
    ladrar: function(){
        return "Estoy saltando"
    },
    decirNombreCompleto: function(){
        return `Hola soy ${this.nombre} ${this.apellido}`
    }

}

console.log( perro.nombre )
console.log( perro["nombre"])

console.log( perro.ladrar() )
console.log( perro.decirNombreCompleto() )


// MANIPULAR OBJETOS
// AGREGAR Y MODIFICAR PROPIEDADES

let numero = 15
    numero = 12

perro.nombre = "firulais"
perro.raza = "Callejero"

console.log(perro.decirNombreCompleto())

console.log(perro)

// [1, 2, 3  ]

// ["das", "das"]

// [{},{},{}]

// [ { nombre: "televisor", precio: 2, stock: 12}, { nombre: "tablet", precio: 2, stock: 12} ]

let productos = [
    {
       nombre: "televisor",
       stock: 10,
       precio: 100,
       descontarStock: function( cantidad ){

        // this.stock =  this.stock - cantidad
        this.stock -= cantidad
        
       },
       aumentarStock : function(cantidad){
        this.stock += cantidad
       }
    },
    {
        nombre: "celular",
        stock: 5,
        precio: 50,
        descontarStock: function( cantidad ){

            this.stock -= cantidad

        },
        aumentarStock : function(cantidad){
            this.stock += cantidad
        } 
    },
    {
        nombre: "tablet",
        stock: 12,
        precio: 40,
        descontarStock: function( cantidad ){

            this.stock -= cantidad

        },
        aumentarStock : function(cantidad){
           this.stock += cantidad 
        } 
    }
]

console.log( productos[0] )

productos[0].descontarStock(5)

console.log( productos[0] )

// productos[0].aumentarStock(20)

// console.log( productos[0] )


let recorrerArr = ( arreglo )=>{

    for( let i = 0; i < arreglo.length; i++ ){

        arreglo[i].aumentarStock(30)

    }

    // return "Ya se aumento el stock"

}

recorrerArr(productos)


console.log( productos )

console.log("--------------------")



// productos[0].aumentarPrecio = function( porcentaje ){
//     this.precio = this.precio * porcentaje
// }

// productos[1].aumentarPrecio = function( porcentaje ){
//     this.precio = this.precio * porcentaje
// }

// productos[2].aumentarPrecio = function( porcentaje ){
//     this.precio = this.precio * porcentaje
// }

const agregarMetodos = (arr) => {

    for(let i = 0 ; i < arr.length; i++){

        arr[i].aumentarPrecio = function( porcentaje ){
            this.precio = this.precio * porcentaje
        }

    }

    for(let i = 0 ; i < arr.length; i++){

        arr[i].aumentarPrecio(1.50)
    
    }



}

agregarMetodos( productos )

console.log( productos )

// console.log(productos[0].precio)

// productos[0].aumentarPrecio(1.50)

// console.log(productos[0].precio )

