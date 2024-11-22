import { createLoadButton } from "./components/loadButton/loadButton";
import { createSpinner } from "./components/spinner/spinner";

// declaracion de variables

// declaracion de funciones

const handleClick = () => {
    alert("Boton pulsado");
}

// cuando cargue el html: 
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const loadPriceBtn = createLoadButton();
    app.appendChild(loadPriceBtn);
    loadPriceBtn.addEventListener("click", handleClick);
    //loadPriceBtn.addEventListener("click", () => handleClick(parametro)); --> si tiene parametro

});

//crear un componente 
/*
    MOSTRAR SPINNER
    const app = document.getElementById("app"); //div#app del index.html
    const spinner = createSpinner(); //creamos el spinner (div)
    app.appendChild(spinner); //agregamos el spinner como hijo al div de app
*/