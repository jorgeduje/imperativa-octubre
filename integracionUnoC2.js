// CREAR UNA FUNCION QUE RECIBA 2 NUMEROS POR PARAMETROS
// SI LOS 2 NUMEROS SON PARES
// RETORNAR SU DIVISION
// SI UNO O MAS NUMEROS SON IMPARES , RETORNAR LA SUMA DE AMBOS

const parImpar = ( a, b )=>{

    if( a % 2 === 0 && b % 2 === 0 && b > 0 ){
        return a / b
    }else{
        return a + b
    }

} 

let resultado = parImpar(0, 2)
console.log(resultado)


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
]

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function( nombre ){

        for( let i = 0; i < this.clientes.length; i++ ){
            if( nombre === this.clientes[i].titularCuenta ){
                return this.clientes[i]
            }
        }

        return "Lo siento no se encontro ese cliente"

    },
    deposito: function(nombre, cantidad){

        let clienteEncontrado = this.consultarCliente(nombre)
        clienteEncontrado.saldoEnPesos += cantidad
        console.log( `Deposito realizado con exito, su nuevo saldo es ${clienteEncontrado.saldoEnPesos} `)
    },
    extraccion: function(nombre, cantidad){

        let clienteEncontrado = this.consultarCliente(nombre)

        if(typeof clienteEncontrado === "string"){
            console.log("el cliente no existe")
            return
        }

        if(clienteEncontrado.saldoEnPesos >= cantidad){
            clienteEncontrado.saldoEnPesos -= cantidad
            console.log(`Extraccion realizada con exito, su nuevo saldo es ${clienteEncontrado.saldoEnPesos}`)
        }else{
            console.log("Saldo insuficiente")
        }
    }
}

let clienteEncontrado = banco.consultarCliente("Jacki Shurmer")
console.log(clienteEncontrado)


banco.extraccion("pepito", 10000)

let clienteEncontrado2 = banco.consultarCliente("Jacki Shurmer")
console.log(clienteEncontrado2)


let algo = true

console.log(typeof algo)