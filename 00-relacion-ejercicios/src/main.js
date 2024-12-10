import dynamicTable from "./components/ej4/dynamicTable.js";
import { createFormLista } from "./components/ej6/form.js";
import personas from "./data/personas.js";

//ejercicio 4
/*
document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");
    const headers = ["nombre", "edad", "correo"];
    const table = dynamicTable(personas, headers);
    app.appendChild(table);
});
*/
//ejercicio 6
/*
. Creación de un Carrito de Compras Dinámico
Enunciado: Implementa una lista de productos con un botón de "Agregar
al carrito" en cada producto. Muestra un carrito que se actualiza en tiempo
real con los productos seleccionados y el precio total. Permite eliminar
productos del carrito.
Conceptos clave: createElement , appendChild , querySelector ,
addEventListener , sincronización del DOM.
Ejemplo: Un carrito de compras que muestra "Laptop - $1000" y "Teléfono
- $500", con un total de "$1500". Los productos pueden agregarse o
eliminarse dinámicamente.
*/
let lista = [];
// if(localStorage.hasOwnProperty("carrito")){
//     lista = JSON.parse(localStorage.getItem("carrito"));
// }

function mostrarCarrito(){
    const ul = document.getElementById("ul-carrito");
    ul.innerHTML = "";
    lista.forEach((li) => {
        ul.innerHTML+= `
        <li id="li-product">${li.name} - ${li.price} </li>`;
    });
    const total = document.getElementById("total-carrito");
    const totalCarro = lista.reduce((i, { price }) => i+=Number(price), 0);
    total.innerHTML = `Total:  ${totalCarro}`;
}

function aggCarrito(event, nameProduct, priceProduct){
    event.preventDefault();  
    lista.push({
        name:nameProduct,
        price:priceProduct
    });
    // event.target.reset(); 
    mostrarCarrito();
}


function init(){
    const app = document.getElementById("app");
    const form = createFormLista();
    app.appendChild(form);
    const button = document.getElementById("button-lista");
    const name = document.getElementById("input-name");
    const price = document.getElementById("input-price");
    const ul = document.createElement("ul");
    ul.id = "ul-carrito";
    app.appendChild(ul);
    const total = document.createElement("p");
    total.id = "total-carrito";
    app.appendChild(total);

    button.addEventListener("click", (event) => aggCarrito(event, name.value, price.value));
}

init();