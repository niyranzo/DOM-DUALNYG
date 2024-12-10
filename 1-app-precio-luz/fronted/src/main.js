import { createCardPrices } from "./components/cardPrice/cardPrice.js";
import { createDivCards } from "./components/divCards/divCards.js";
import { createGrafic } from "./components/grafic/grafic.js";
import { createLoadButton } from "./components/loadButton/loadButton";
import { createSelectHours } from "./components/selectHour/selectHour";
import { createSpinner, hideSpinner, showSpinner } from "./components/spinner/spinner";
import { getData } from "./helpers/getDataPrice.js";
import { getDataRange } from "./helpers/getDataPriceDay.js";

// declaracion de variables

let grafica = null;
let divCard = createDivCards();

// declaracion de funciones

const handleClick = async (select) => {
    try {
        // pa deabilitar el boton
        // loadPriceBtn.disabled = true;        
        if(grafica){
            hours = [];
            much = [];
            grafica.destroy();
            divCard.innerHTML = "";
        }

        // crear el spinner y mostrarlo
        const spinner = createSpinner();
        divCard.appendChild(spinner);
        showSpinner();
        const data = await getDataRange(select);
        // borrar spinner
        hideSpinner();

        data.forEach((value, key) => {
            value.forEach(( { time, price } ) => {
                hours.push(time);
                much.push(price);
                const priceCard = createCardPrices(key, time, price);
                divCard.appendChild(priceCard);
            });
            
        });
        grafica = createGrafic(data);
        app.appendChild(grafica);

    } catch (error) {
        console.error('error', error);
    }
}
// para poder deshabilitar el boton
let loadPriceBtn;
let divPrinc;
let hours = [];
let much = [];

// cuando cargue el html: 
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    app.style = "display:flex; flex-direction:column; align-items:center; text-align: center;"
    divPrinc = document.createElement("div");
    app.append(divPrinc, divCard);
    loadPriceBtn = createLoadButton();
    divPrinc.appendChild(loadPriceBtn);
    const selectHours = createSelectHours();
    divPrinc.appendChild(selectHours);

    loadPriceBtn.addEventListener("click", () => handleClick(selectHours.value));
    //.........
    // <canvas id="myChart" width="400" height="200"></canvas>
    
    
});

//crear un componente 
/*
    MOSTRAR SPINNER
    const app = document.getElementById("app"); //div#app del index.html
    const spinner = createSpinner(); //creamos el spinner (div)
    app.appendChild(spinner); //agregamos el spinner como hijo al div de app
*/