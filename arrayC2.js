
// ANCHOR: 
    // ARRAY, ARREGLOS, LISTAS, COLECCIONES, ETC, ETC, ETC.

    let num = 2
    let nombre = "pepitoi"
    let numerosDeLaSuerte = [ 12, 3, 2, 5, 1, 14, 15 ]
    let mascotas = [ "jack", "lola", "rojo" ]

    // let num1DeLaSuerte = 12
    // let num2DeLaSuerte = 3
    // let num3DeLaSuerte = 2
    // let num4DeLaSuerte = 5
    // let num5DeLaSuerte = 1

//    nombre = "maria"

   mascotas[1] = "lula"

   mascotas[3] = "otra mascota"

   console.log( mascotas )

   console.log(nombre[0])

   console.log( numerosDeLaSuerte[ numerosDeLaSuerte.length - 1 ] )

   console.log("-------------")

   console.log(nombre.indexOf("i"))
   console.log(nombre.lastIndexOf("i"))

   // validar si tiene un caracter .
   if( nombre.indexOf(".") !== -1 ){
    console.log("esta permitido")
   }


   console.log( mascotas.indexOf("lula") )


   console.log( nombre.includes("z") )


   numerosDeLaSuerte.push(29)
   numerosDeLaSuerte.push(32)

   console.log(numerosDeLaSuerte)

    
   let numeros = [ 1, 4, 2]

   let eliminado = numeros.pop()

   console.log(numeros)
   console.log(eliminado)

   let palabras = ["estas", "como", "hola"]

   let nuevoArr = []
   nuevoArr.push( palabras.pop() )
   nuevoArr.push( palabras.pop() )
   nuevoArr.push( palabras.pop() )

   console.log(palabras)
   console.log(nuevoArr)


console.log("-----------")
console.log("-----------")
console.log("-----------")

   let notas = [ 9, 10, 5, 8 ]
//    let notas2 = [ 5, 6, 10]

//    console.log( notas[0] )
//    console.log( notas[1] )
//    console.log( notas[2] )
//    console.log( notas[3] )

const calcularPromedio = ( arr )=>{

    let sumatoria = 0 // 9 // 19 // 24 // 32

    for(let i = 0; i < arr.length; i++){

        sumatoria = sumatoria + arr[i]

    }

    let resultado = sumatoria / arr.length

    return resultado

}

let promedio = calcularPromedio(notas)
console.log(promedio)
//    calcularPromedio(notas2)

let alumno2 = [ 10, 8 ]

let promedio2 = calcularPromedio(alumno2)
console.log(promedio2)









/* TODO :
    A partir de un array de correos, recorrerlo para corroborar si son válidos. 
    Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y 
    agregar aquellos que lo tengan al array de correos admitidos.
    En caso de no encontrar el carácter, se deberá agregar al array de correos descartados.
    Desarrollar una función que realice la verificación de cada elemento del array 
    de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. Caso contrario, 
    agregar al arrayCorreoDescartados (vaciar el array de correos pendientes).
    Mostrar por pantalla la cantidad y los elementos de cada array.
*/

// PARA SER VALIDO DEBE CONTENER UN @
let arrayCorreosPendientes = [
    "iroman@digitalhouse.com",
    "loki%digitalhouse.com",
    "loki@digitalhouse.com",
    "thanosdigitalhouse.com",
    "thanos@digitalhouse.com",
];

// array de correos admitidos
let arrayCorreosAdmitidos = [
   
];

// array de correos descartados

let arrayCorreosDescartados = [
    
];