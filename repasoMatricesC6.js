
let gastos = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];


//ANCHOR
// CREANDO UNA FUNCION REUTILIZABLE...
// CALCULAR GASTO TOTAL DE LA TERCER SEMANA

const totalSemanal = ( mat, numSemana )=>{

  let posicionSemana = numSemana - 1

  let acc = 0

  for(let i = 0; i < mat[posicionSemana].length ; i++){

    acc += mat[posicionSemana][i]

  }

  return acc

}

let totalSemanaTres = totalSemanal(gastos, 3 )
console.log( totalSemanaTres )

//ANCHOR
// CREANDO UNA FUNCION REUTILIZABLE...
// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TOD´OS LOS DIAS SABADOS
// ¿COMO LO HARIAS?

let gastos2 = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

const totalDiario = (mat, numDia)=>{

  let posicionDia = numDia - 1

  let acc = 0

  for(let i = 0; i < mat.length; i++){

    acc += mat[i][posicionDia]

  }

  return acc

}

let totalSabados = totalDiario(gastos2, 6)
console.log(totalSabados)




//ANCHOR
// CALCULAR EL TOTAL GASTADO DEL MES

let gastos3 = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

// ENCONTAR EL VALOR DEL DIA QUE MAS SE GASTO
// posicionSemana 2, posicionDia 5

const totalMensual = (mat)=>{

  let acc = 0

  for(let i = 0 ; i < mat.length; i ++){ // MANEJA LAS FILAS

    for(let j = 0; j < mat[i].length; j++){ // MANEJA LAS COLUMNAS

     acc += mat[i][j]

    }

  }

  return acc

}

let totalFebrero = totalMensual(gastos3)
console.log(totalFebrero)


let gastos4 = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

// ENCONTAR EL VALOR DEL DIA QUE MAS SE GASTO
// posicionSemana 2, posicionDia 5

let encontrarDiaMayor = mat => {

  let mayor = mat[0][0]

  let semana = 0
  let dia = 0

  for (let i = 0; i < mat.length; i++) {

    for (let j = 0; j < mat[i].length; j++) {
      
      if( mayor < mat[i][j] ){
        mayor = mat[i][j]
        semana = i
        dia = j
      }

    }
    
  }

  let semanaFinal = semana + 1
  let diaFinal = dia + 1

  let datosDiaMayor = {
    semana: semanaFinal,
    dia: diaFinal,
    total: mayor
  }
  
  return datosDiaMayor

}

let diaMayor = encontrarDiaMayor(gastos4)
console.log(diaMayor)

console.log(`El dia que mas se gasto fue el de la semana ${diaMayor.semana}, 
en el dia ${diaMayor.dia} con un total de $${diaMayor.total}
`)

// MATRIZ

let matrix = [ 
  [5,4,3],
  [1,2,3],
  [5,3,1]

]

// console.log( matrix[0][0] )
// console.log( matrix[1][1] )
// console.log( matrix[2][2] )

const recorrerPrincipal = mat =>{

  for (let i = 0; i < mat.length; i++) {

    console.log( mat[i][i] )

  }

}

recorrerPrincipal(matrix)

let matrix2 = [ 
  [5,4,3],
  [1,2,3],
  [5,3,1]
]
console.log("-----------")
// console.log( matrix2[0][2] )
// console.log( matrix2[1][1] )
// console.log( matrix2[2][0] )


const recorrerSec = mat =>{

  for (let i = 0; i < mat.length; i++) {
    
    acc += mat[i][mat.length - 1 - i] 

  }

}

recorrerSec(matrix2)