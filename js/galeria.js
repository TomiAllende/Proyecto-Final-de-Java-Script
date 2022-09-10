//Busco que me indique su ubicacion para indicar el local mas cercano

const { firebrick } = require("color-name")

let ubicacion
ubicacion = prompt("Donde estas ubicado?")
console.log(ubicacion)

if (ubicacion !=" "){
alert("El local mas cercano es" + ubicacion)}
else{
    console.log("La ubicacion que indica no es correcta")}

//Hago un session storage para guardar la ubicacion del usuario

sessionStorage.setItem("ubicacion", "Pilar")
let ubicadoSession = sessionStorage.getItem("ubicacion")
console.log(ubicadoSession)

for(let i= 0; i<sessionStorage.length; i++){
    let clave = sessionStorage.key(i);
    console.log("clave: "+ clave);
    console.log("valor: "+ sessionStorage.getItem(clave))
}