

// ANCHOR: 
    // ARRAY, ARREGLOS, LISTAS, COLECCIONES, ETC, ETC, ETC.

    let nombre = "pepitoi"
    let edad = 12
    let nombresDeMascotas = [ "jack", 12 , "rojo", true, false]
    let numeros = [ 12, 112, 212 ]
    
        // let numDeLaSuerte1 = 12
        // let numDeLaSuerte2 = 112
        // let numDeLaSuerte3 = 212



    console.log( numeros[2] )
    console.log( nombre[0] )

    console.log(numeros.length)

    console.log( nombresDeMascotas[ nombresDeMascotas.length - 1 ] )


    console.log( nombre.indexOf("z") !== -1 )
    console.log( nombre.lastIndexOf("i") )
    console.log( nombre.lastIndexOf("z") )

    console.log( nombresDeMascotas.indexOf("juancito") )

    console.log( nombresDeMascotas.includes("juancito"))
    console.log( nombre.includes("p"))


    let frase = "jorge@gmail.com, pepito@dasd.com"
    
    let fraseComoArreglo = frase.split(", ")
    
    console.log(fraseComoArreglo)
    
    
    
    console.log(numeros)
    
    numeros.push( 54 )
    console.log(numeros[3])
    numeros[3] = 54
    
    console.log(numeros)

    console.log("----------")
    console.log("----------")
    console.log("----------")
    
    let notasPepito = [10, 10, 9, 8]
    // let notasJuancito = [ 12, 4]
    // console.log( notasPepito[0] )
    // console.log( notasPepito[1] )
    // console.log( notasPepito[2] )
    // console.log( notasPepito[3] )
    
    const calcularPromedio = ( arreglo )=>{

        let sumatoria = 0 // 10 // 20 // 29 // 37
        
        for( let i = 0; i < arreglo.length; i++){
            //    sumatoria +=  arreglo[i] 
            sumatoria = sumatoria + arreglo[i] 
        }
        
        let resultado = sumatoria / (arreglo.length)
        
        return resultado        
        
    }
    let promedioPepito = calcularPromedio( notasPepito )
    console.log(promedioPepito)
    // calcularPromedio( notasJuancito )


























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