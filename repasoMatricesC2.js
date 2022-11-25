
let gastos = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 31 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];



//ANCHOR
// CREANDO UNA FUNCION REUTILIZABLE...
// CALCULAR GASTO TOTAL DE LA TERCER SEMANA


const calcularGastoSemanal = ( mat, numSemana )=>{

    let posicionSemana = numSemana - 1

    let acc = 0

    for(let i = 0; i < mat[posicionSemana].length; i++ ){

       acc += mat[posicionSemana][i]

    }

    return acc

}

let totalSemanaTres = calcularGastoSemanal(gastos, 3)
console.log(totalSemanaTres)




//ANCHOR
// CREANDO UNA FUNCION REUTILIZABLE...
// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TOD´OS LOS DIAS SABADOS
// ¿COMO LO HARIAS?
// let gastos = [
//     // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
//     // EL MES ES FEBRERO QUE TIENE 28 DIAS
//     [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
//     [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
//     [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
//     [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
//   ];


const totalDia = (mat, numDeDia)=>{

    let posicionDia = numDeDia - 1
    let acc = 0

    for(let i = 0; i < mat.length ;i++){

        if( mat[i][posicionDia] !== undefined ){

            acc += mat[i][posicionDia]

        }

    }

    return acc

}

let totalSabados = totalDia(gastos, 6)
console.log(totalSabados)


//ANCHOR
// CALCULAR EL TOTAL GASTADO DEL MES

let gastos2 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 31 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
  ];

const gastoMensual = (mat)=>{

    let acc = 0

    for(let i = 0; i < mat.length; i++ ){

        for( let j = 0; j < mat[i].length; j++){
            
            acc += mat[i][j]
            
        }
        
    }
    
    return acc

}

let gastoTotalFebrero = gastoMensual(gastos2)
console.log(gastoTotalFebrero)


// let arreglo = [ 2, 11, 4, 12 ]

// let mayor = arreglo[0] // 2

// for (let i = 0; i < arreglo.length; i++) {
    
//     if(mayor < arreglo[i] ){

//         mayor = arreglo[i]

//     }
// }


const mayorGastoDiario = (mat)=>{

    let mayor = mat[0][0]

    let semana = undefined
    let dia = undefined

    for (let i = 0; i < mat.length; i++) { // i maneja las semanas 
 
        for (let j = 0; j < mat[i].length; j++) { // j maneja los dias

            if(mayor < mat[i][j] ){
                mayor = mat[i][j]
                semana = i
                dia = j
            }
            
        }
        
    }

    let semanaFinal = semana + 1
    let diaFinal = dia + 1

    console.log(`el gasto mas grande esta en la semana ${semanaFinal} en el dia ${diaFinal}`)

    return mayor
}

let mayorDia = mayorGastoDiario(gastos2)
console.log( mayorDia )

// DIAGONAL PRINCIPAL

let matrix = [
    [1, 5, 2, 1],
    [2, 6, 3, 2],
    [6, 4, 1, 7],
    [6, 4, 1, 5]
]

// console.log( matrix[0][0] )
// console.log( matrix[1][1] )
// console.log( matrix[2][2] )

const recorrerPrincipal = (mat)=>{

    let acc = 0
    
    for (let i = 0; i < mat.length; i++) {
        
        console.log( mat[i][i] )

    }
}

recorrerPrincipal(matrix)

// 14
let matrix2 = [
    [1, 5, 2, 1],
    [2, 6, 3, 2],
    [6, 4, 1, 7],
    [6, 4, 1, 5]
]

// console.log( matrix2[0][3] )
// console.log( matrix2[1][2] )
// console.log( matrix2[2][1] )
// console.log( matrix2[3][0] )

console.log("-------")

const recorrerSec = (mat)=>{

    for (let i = 0; i < mat.length; i++) {

        console.log( mat[i][ mat.length - 1 - i ] )
        
    }

}

recorrerSec(matrix2)