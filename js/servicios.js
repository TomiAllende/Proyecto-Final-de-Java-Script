//Busco que el cliente decida que comidas consumira

mensajeordenes.innerHTML = "<h2>Ingrese que productos desea consumir</h2>"
let serviciocliente= pedidos (mensajeordenes)

function pedidos (mensajeordenes) {
   let resultado = "Usted ha seleccionado" + mensajeordenes
    console.log(resultado)

    return resultado
}

console.log(serviciocliente)




const sweetAlert = document.querySelector ("#sweetAlert")

sweetAlert.onclick = (e) => {
swal({
    title: "Aqui esta su orden!",
    text: "Usted ha elegido consumir nuestros prductos ",
    icon: "success",
    button: "Aww yiss!",
  });
}

//Hago Fetch

let url= "https://pokeapi.co/docs/v2#pokemon"

fetch(url)
.then((response) => {
  return response.json ()
})

.then((json) => {
  console.log(json)

  let pokemones = json

  pokemones.forEach(pokemones => {

    const {nombre, imagen, color} = pokemones
    
  });
}

)