// En funcion a los pedidos que haya en e carro los sumo para obtener el total.

//Los num son los prodcutos

function sumar(num1, num2, num3) {
    return num1+num2+num3
}

function calculos(operacion, num1, num2, num3) {
let resultado = operacion(num1, num2, num3)
console.log(resultado)
return resultado
}

// En funcion a los pedidos que haya en e carro los sumo para obtener el total.

const { $dataMetaSchema } = require("ajv")

//Los num son los prodcutos

function sumar(num1, num2, num3) {
    return num1 + num2 + num3
}

function calculos(operacion, num1, num2, num3) {
    let resultado = operacion(num1, num2, num3)
    console.log(resultado)
    return resultado
}


const productos = [
    {
        id: 1,
        nombre: "Pizzas",
        precio: 600,
        sabores: "cebolla,jamon,muzza",

    },

    {
        id: 2,
        nombre: "Empanadas",
        precio: 250,
        sabores: "cebolla, carne, jamon y queso",
    },
    {
        id: 3,
        nombre: "Cervezas",
        precio: 1200,
        sabores: "stella, heineken, schneider, imperial, quilmes",
    },
]

let storage = []

function carritoproducts(id, insertBox) {
    let producto = productos[id - 1]
    const { nombre, precio, sabores } = producto

    insertBox.innerHTML = <div>
        <div class="cerrarcarro">Cerrar</div>
            <div class="click">
                <span class="menos">-</span>
                <span class="resultado">0</span>
                <span class="mas">+</span>
            </div>
            <div class="botonCarrito">AGREGAR</div>
    
        </div>

    


    //Intento sumar pedidos a mi carrito
const cerrarcarro = document.querySelector(".cerrarcarro")
    const less = document.querySelector(".menos")
    const more = document.querySelector(".mas")
    const resultado = document.querySelector(".resultado")
    const agregarCarrito = document.querySelector(".botonCarrito")
    let cuenta = 0

    more.onclick = () => {
        cuenta ++
        cuenta += 1
        resultado.innerText = cuenta
    }

    less.onclick= () => {
        cuenta --
        cuenta -= 1
        resultado.innerText = cuenta
    }
    agregarCarrito.onclick = () => {
        if(cuenta !=0){
            producto.sumacarro = cuenta
            storage.push(producto)
            sessionStorage.setItem("carrito", JSON.stringify(storage))
sweetAlert({
    title: "Agregaste $(producto.agregarCarrito) ${nombre} a tu carrito!",
    icon: "success",
confirmButtonText: "Enharoabuena",
})
        }
        else{
            sweetAlert({
                title: "Error",
                text: "No podes dejar vacio",
                icon: "error",
                confirmButtonText: "Mal",
            })
        }
    } 
}

const cajaprincipal = document.querySelector(".main")
for (producto of productos){
    const {id, nombre, precio, sabores} = producto

    cajaprincipal.innerHTML += <article class="product">
        <div class="descripcion">
            <h3></h3>
            <div class="boton">AGREGAR</div>
        </div>
        </article>
  
}

const BotonMirar = document.querySelector(".boton")