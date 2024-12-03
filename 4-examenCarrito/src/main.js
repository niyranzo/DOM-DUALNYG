/*
se pretende realizar una aplicación que ejemplifique un carrito de la compra disponemos de las siguientes opciones:
    a) Agregar productos (Nombre,cantidad,precio)
    b)Editar Productos (Editas la cantidad)
    c)Eliminar productos
    d)Actualizar el total del carrito de forma dinámica
    e)Usar clases
    f)Usar funciones constructoras/funciones 
    g) Partimos de un divv llamado app y todo se genera dinámicamente.

Ampliación:
Guardaremos en el local storage nuestro carrito de la compra
*/

import Carrito from "./components/Carrito";


//3 input box 1 texto 2 num --> añadir al carrito (boton)
//cuando lo añade aparecera en una lista con los 2 botones de editar y eliminar
//contador con cantidad a pagar

// crear instancia de carrito (cargar el carrito del localstorage
// crear h1 -- carrito (create element)
// resto con innerhtml
// crear un contenedor <form>   
// crear inputs nombre, cantidad, precio
// crear boton de añadir al carrito

// añadir div para colocar los productos de mi carrito 

/*
// NICOLE
const app = document.getElementById("app");
const h1 = document.createElement("h1");
h1.textContent = "Carrito";
h1.style = "text-align:center;"
app.appendChild(h1);
const carrito = new Carrito();
app.innerHTML+= `
    <form id="formProduct">
        <input type="text" name="nombre" id="nombreProducto" placeholder="Nombre producto"><br>
        <input type="number" name="cantidad" id="cantidadProducto" placeholder="Cantidad producto"><br>
        <input type="number" name="precio" id="precioProducto" placeholder="Precio producto"><br>
        <input type="submit" value="Enviar" id="enviarProducto">
    </form>
`;
const div = document.createElement("div");
div.innerHTML+= `
    <ul id="listaProducto">
    </ul>
`;
app.appendChild(div);


const ul = document.getElementById("listaProducto");
carrito.cargarLocalStorage().forEach((producto,i) => {
    const li = document.createElement("li");
    li.id = `producto${i}`;
    li.textContent = producto.info();
    ul.appendChild(li);
})

document.getElementById("enviarProducto").addEventListener("click", () => 
    carrito.aggProducto(document.getElementById("nombreProducto").value,
    Number(document.getElementById("cantidadProducto").value),
    Number(document.getElementById("precioProducto").value)));

    const p = document.createElement("p");
p.textContent = `Total : ${carrito.calcularTotal()}`
div.appendChild(p);



*/

const carrito = new Carrito();

//declaracion de funciones

const renderListaCarrito = () => {
    const lista = document.getElementById("lista-productos");
    const totalCarrito = document.getElementById("total-carrito");
    lista.innerHTML+= carrito.productos.map((producto,i) => `
        <li data-id="${i}">
        ${producto.info()}
        <button class="btn-editar" data-id="${i}">Editar</button>
        <button class="btn-borrar" data-id="${i}">Borrar</button>
        </li>
    `).join("");
    // pongo el total del carrito 
    totalCarrito.textContent = carrito.calcularTotal();

    

}


const agregarProductoHandler = (event) =>{
    //no recargar pagina EN LA PRIMERA LINEA
    event.preventDefault();
    const nombre = document.getElementById("nombre-producto").value.trim();
    const cantidad =Number(document.getElementById("cantidad-producto").value);
    const precio = Number(document.getElementById("precio-producto").value);

    if(nombre && cantidad>=0 && precio>=0){
        carrito.aggProducto(nombre, cantidad, precio);

        //pintar el producto en el UL
        renderListaCarrito();
        console.log(carrito);   
    }else{
        alert("Error al introducir los valores");
    }
    event.target.reset();
}

function renderCarrito() {
    const app = document.getElementById("app");
    const tituloH1 = document.createElement("h1");
    tituloH1.textContent="Carrito Productos";

    app.appendChild(tituloH1);
    app.innerHTML += `
        <form id="form-producto">
            <input type="text" placeholder="Nombre del producto" id="nombre-producto">
            <input type="number" placeholder="Cantidad" id="cantidad-producto">
            <input type="number" placeholder="Precio" id="precio-producto">
            <button type="submit" >Añadir al carrito </button>
        </form>
        <div id="container-productos">
            <ul id="lista-productos"></ul>
        </div>
        <footer>
            <p>Total del carrito: <strong id="total-carrito">0</strong><p>
        </footer>
    `;

    document.getElementById("form-producto").addEventListener("submit", agregarProductoHandler); //desde el form y no desde el button por si hacemos enter

}
renderCarrito();
