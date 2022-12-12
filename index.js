
console.log("hola desde javascript")

// ID, CLASS, ETIQUETA
// document
let nombre = "pepito"
// document.getElementsByClassName()
let contenedor = document.getElementById( "container" )

let titulo = document.querySelector( "h1" )

let subtitulo = document.querySelector("h2")

titulo.style.color = "red"

subtitulo.textContent = "este es el subtitulo 1 cambiado desde javascript "

// contenedor.innerHTML = `<h1>${nombre}</h1>`

let parrafos = document.querySelectorAll("p")



let botonParrafos = document.getElementById("btn-parrafos")

// EVENTOS


botonParrafos.addEventListener( "click" , ()=>{

    for (let i = 0; i < parrafos.length; i++) {

        parrafos[i].textContent =  `Este es el parrafo ${i + 1}`
        
    }

} )

let botonRojo = document.getElementById("btn-red")
// let botonAzul = document.getElementById("btn-blue")

const cambiarColorRojo = ()=>{
    contenedor.style.backgroundColor = "red"
}
const cambiarColorAzul = ()=>{
    contenedor.style.backgroundColor = "blue"
}


botonRojo.addEventListener("mouseenter", cambiarColorRojo )
botonRojo.addEventListener("mouseleave", cambiarColorAzul )
// botonAzul.addEventListener("mouseenter", cambiarColorAzul )

let contenedorNumeros = document.getElementById("container-numbers")

let numeros = [ 12, 15, 22]

const agregarNumeros = ()=>{

    let arrayNumeros = []

    for (let i = 0; i < numeros.length; i++) {
       
        arrayNumeros.push( `<h3>${numeros[i]}</h3>` )
        
    }

    contenedorNumeros.innerHTML = arrayNumeros

}

let agregar = document.getElementById("add")

agregar.addEventListener("click", agregarNumeros )

// FILTER , REDUCE , MAP , FIND , SORT 