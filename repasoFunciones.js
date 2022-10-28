
// El anterior de un numero
// El triple de un numero
// El anterior del triple de un numero ( usando las 2 funciones anteriores )

// const anterior2 = ( num )=>{

//     return num - 1

// }

const anterior = num => num - 1

let resultadoAnterio = anterior(10)

console.log( resultadoAnterio )


const triple = num => num * 3

let resultadoTriple = triple(5)

console.log( resultadoTriple )

// const anteriorDelTriple = numero => anterior( triple(numero) ) 

const anteriorDelTriple = numero => {

    let multiplicado = triple(numero)
    let resultadoFinal = anterior(multiplicado)
    return resultadoFinal
}

let y = anteriorDelTriple(5)
console.log( y )


// Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
// de 3 números, que serán ingresados por parámetro.
// Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
// previamente creadas de nuestra calculadora.

// CREAR FUNCION SUMA
// CREAR FUNCION DIVIDIR

console.log("------------")
console.log("------------")
console.log("------------")

function suma ( a, b ){

    return a + b

}


const dividir = function( a , b ){

    return a / b

}

const promedioDeTresNumeros = ( num1, num2, num3 )=>{

    let resultadoSuma = suma(num1, num2)
    let resultadoSumaOficial = suma(resultadoSuma, num3)
    let promedio = dividir( resultadoSumaOficial, 3 )
    return promedio

}

let promedioFinal = promedioDeTresNumeros(7,8,9)

console.log(promedioFinal)

// CREAR UNA FUNCION PARA SALUDAR A UN USUARIO CUANDO SE LOGEE A MI APP


let nombreUsuario = "pepito"
let apellido = "fulanito"

const saludarUsuario = nom => {
    // return 'Hola ' + nom + "como estas?" // CONCATENACION
    return `Hola ${nom} ${apellido} como estas?` // INTERPOLACION 
}

let saludo = saludarUsuario( nombreUsuario )

console.log( saludo )

