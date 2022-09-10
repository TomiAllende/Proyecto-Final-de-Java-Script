//Armo datos de la persona con un constructor

function Persona(nombre,mail,mensaje) {
    this.name= nombre
    this.email = mail
    this.message = mensaje
    this.bienvenida = function(recibir){console.log ("Hola"+ this.name)}
}

const persona1 = new Persona ("Belen", "belenallende@hotmail.com", "gracias x su servicio")
const persona2 =new Persona ("Inaki", "inakiallende@gmail.com", "feo servicio el suyo")

//Armo JSON con mis datos de arriba

const formatoJSON = JSON.stringify (persona1)
console.log(typeof(formatoJSON))
console.log(typeof(persona1))



//Armo para valdar el submit en mi forms

let formulario = document.querySelector(".formulario")
let falladeformulario = document.querySelector(".fallaformu")

formulario.addEventListener ("submit", aceptar)

function aceptar (e) {
    e.preventDefault ()
    console.log(e)
    let formArray = e.target 
    console.log(e)
let nombre = formArray[0]
let mail = formArray[1]
}

