


let nombre = "pepito"
let apellido = "perez"
let edad = 12 

// let personas = [ 
//     {
//         nombre: "pepito",
//         apellido : "perez",
//         edad : 12 
//     },
//     {
//         nombre: "pepito",
//         apellido : "perez",
//         edad : 12 
//     } 
// ]


console.log( 'Hola mi nombre es ' + nombre + ", mi apellido es " + apellido + " y tengo " + edad + " años" )

// TEMPLATE LITERASL ---> BACKSTICKS 

console.log( `Hola mi nombre es ${nombre} , mi apellido es ${apellido} y tengo ${edad} años ` )


//TODO Elaborar un programa que permita ingresar un número entero del 1 al 10 
// y muestre la tabla de multiplicar de dicho número.

//ANCHOR Solo debemos permitir el ingreso de numeros ENTEROS del 1 al 10

// let num = 2
// let i = 3

// console.log( ` ${num} * ${i} = ${num * i}`)

console.log("---------------")

const enteros = ( num )=>{

    if( num >= 1 && num <= 10 && (num % 1 === 0) ){

        for( let i = 1 ; i <= 10 ; i++ ){
    
            console.log( `${num} * ${i} = ${num * i} ` )
    
        }
    }else{
        console.log( "lo siento el numero no es valido ")
    }

}

enteros(2)
// enteros(5)



//  2 * 1 = 4
//  2 * 3 = 6






console.log("---------")

let num = 7
console.log( num % 1 === 0 )


// SUMAR TODOS LOS MULTIPLOS DE X desde  y hasta z (inclusive)
// Y DEVOLVER EL RESULTADO

// MULTIPLOS DE 6
// num % 6 === 0

const devolverSuma = ( num1, y, z )=>{

    let sumatoria = 0

    for( let i = y ; i <= z ; i++ ){

        if( i % num1 === 0 ){
            sumatoria += i
        }

    }

    return sumatoria

}

let resultado2 = devolverSuma(6, 1, 40)
let resultado3 = devolverSuma(6, 1, 20)

console.log(resultado2)
console.log(resultado3)