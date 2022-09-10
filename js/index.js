let formulario = document.querySelector("#user")
let errorusuario = document.querySelector("#errorMensaje")
formulario.addEventListener(submit, afirmar)

function afirmar (e){
    e.preventDefault()
    letformArray = e.target
    let nombre= formArray[0]
    let apellido = formArray[1]
    mensajealusuario.innerHTML =("Hola"+ nombre + apellido)

console.log(errorusuario)

if(!nombre.value){
    errorusuario.style.display = "block"
    errorusuario.innerText= "*Error! Debe agregar su nombre al forms"
}
else{
    errorusuario.style.display = "none"
}
}



//Armo Storage para traer de la base de datos la info del usuario

localStorage.setItem("Nombre", "Tomi")
console.log(LaBaseDeDatos)
localStorage.setItem("Apellido", "Allende")

letrecuperoStorage = localStorage.getItem("Nombre")
console.log(typeof(recuperoStorage))





//Armo regla de que los menores de edad no pueden realizar pedidos
let edad = 6
if (edad >= 18) {
    console.log("Podes pedir comida")
}
if (edad < 18) {
    console.log("No podes pedir comida")
}

//Armo pregunta para ver cuanto quiere pedir el cliente
let numeroPedidos = prompt("Ingrese la cantidad de pedidos que desea realizar")

for(i=0; i<8; i++) {
    console.log(numeroPedidos)
}