


// Falsy - Truthy
//  console.log( true && "hola" && true ) // "dsa" / 21 / true
//  console.log( "" || "hola" || 0 ) // "dsa" / 21 / true

//  console.log( false | 3 > 5)



//TODO Elaborar un programa que permita ingresar un número entero del 1 al 10 
// y muestre la tabla de multiplicar de dicho número.

//ANCHOR Solo debemos permitir el ingreso de numeros ENTEROS del 1 al 10


// numero

//  numero * 1 = 2
//  numero * 2 = 4
//  numero * 3 = 6

//  (4)
// console.log( `${2} * ${1} = ${ 2 * 1}  ` )
// console.log( `${2} * ${2} = ${ 2 * 2}  ` )

const multiplicar = numero =>{

    if( numero % 1 !== 0 ){
        return
    }
    
    if( numero > 0 && numero <= 10){
        
        for( let i = 1 ; i <= 10 ; i++  ){
            
            console.log(`${numero} * ${i} = ${numero * i}`)
            
        }
    }

    console.log("hola")

}

multiplicar(2.2)

// SUMAR TODOS LOS MULTIPLOS DE un numero DESDE y hasta x
// Y DEVOLVER EL RESULTADO


const multiplos = ( numero, final, inicio ) => {

    let sumatoria = 0
    
    for(let i = inicio ; i <= final ; i++){
        if( i % numero === 0 ){
            sumatoria += i
        }
    }

    return sumatoria

}

let resul =  multiplos(6, 40, 1)
console.log(resul)




