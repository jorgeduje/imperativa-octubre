
// CREAR UNA FUNCION QUE RECIBA 2 NUMEROS POR PARAMETROS
// SI LOS 2 NUMEROS SON PARES Y MAYORES QUE CERO
// RETORNAR SU DIVISION
// SI UNO O MAS NUMEROS SON IMPARES , RETORNAR LA SUMA DE AMBOS

const sumarOdividir = ( a, b )=>{

    if( a % 2 === 0 && b % 2 === 0 && a > 0 && b > 0 ){
        return a / b
    }else {
        return a + b
    }

}

let resultado = sumarOdividir(4, 4)
console.log(resultado)

let alicia = [10, 80, 75]
let bob = [90, 20, 25]

const encontrarGanador = ( participante1, participante2 )=>{

    // let longitud = participante1.length

    let p1 = 0
    let p2 = 0

    let etapas = []

    for(let i = 0; i < participante1.length; i++){

        if(participante1[i] > participante2[i]){
            p1 += 1
            etapas.push("p1")
        }else if(participante1[i] < participante2[i]){
            p2 += 1
            etapas.push("p2")
        }else{
            etapas.push("empate")
        }
        

    }

    console.log(etapas)

    if(p1 > p2){
        return "ganador participante uno"
    }else if(p1 < p2){
        return "ganador participante dos"
    }

    return "Los participantes empataron"


}

let resultadoCompetencia = encontrarGanador(alicia, bob)
console.log(resultadoCompetencia)


console.log("-----------")
console.log("-----------")
console.log("-----------")


let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

  let banco = {
    clientes: arrayCuentas,
    consultarCliente: function( nombre ){

        for(let i = 0 ; i < this.clientes.length; i++){
            
            if( this.clientes[i].titularCuenta === nombre ){
                return this.clientes[i]
            }
        }

    },
    deposito: function(nombre, cantidad){

        let clienteEncontrado = this.consultarCliente(nombre)
        clienteEncontrado.saldoEnPesos += cantidad
        // console.log("el deposito fue realizado su nuevo saldo es " +  clienteEncontrado.saldoEnPesos )
        console.log( `El deposito fue realizado con exito, su nuevo saldo es ${clienteEncontrado.saldoEnPesos}`)
    }


  }

  let clienteAntes = banco.consultarCliente("Ramon Connell")
  console.log(clienteAntes)

  banco.deposito("Ramon Connell", 10000)

  let clienteDespues = banco.consultarCliente("Ramon Connell")
  console.log(clienteDespues)

  