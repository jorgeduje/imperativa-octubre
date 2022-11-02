
//ANCHOR Estructuras de repeticion ---> for / while / do while

// FOR : INICIALIZACION / CONDICION / MODIFICADOR

const cicloFor = ()=>{

    for( let i = 5 ; i >= 1 ; i-- ){
        // BLOQUE DE CODIGO
        console.log("estoy en la vuelta, " + i)
    }

}

// cicloFor()


const cicloWhile = ()=>{

  let i = 6

  while( i <= 5 ){

    console.log("estoy en la vuelta, " + i)
    i++

  }

}

// cicloWhile()


const cicloDoWhile = ()=>{

    let i = 6

    do{
  
        console.log("estoy en la vuelta, " + i)
        i++
        
    }while( i <= 5 )
  
  }
  
//   cicloDoWhile()



// EJERCICIOS
// 1) Hacer un código que nos muestre los números del 10 al 1.

const mostrarNumeros = ()=>{

    for( let i = 10; i >= 1; i-- ){

        console.log(i)

    }

}

// mostrarNumeros()



// 2) Hacer un código en el cual se visualice una
// cuenta de 1 a 10, y a la vez, una cuenta inversa de 10 a 1.



const irYvenir = ()=>{

    for( let i = 1 ; i <= 10 ; i++ ){

        console.log( i + " " + (11 - i) )

    }
   

}

irYvenir()






// 3) crear una funcion que reciba un numero por parametros y que muestre por consola
// todos los impares que hay en entre el 0 y ese numero.

const mostrarImpares = ( num )=>{

    let cantidadImpares = 0

    for(let i = 0 ; i <= num ; i++ ){

        if( i % 2 !== 0 ){

           cantidadImpares += 1

        }


    }

    return cantidadImpares

}

let cantImp = mostrarImpares(10)
console.log(cantImp)