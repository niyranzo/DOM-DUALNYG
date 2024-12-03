import "./cardPrice.css";
// tarjeta con los precios de la luz
export const createCardPrices = (day, hour, price) => {
    const div = document.createElement("div");
    div.id = "PriceCard";
    div.innerHTML = `
        <p id='dayPrice'> Día : ${day}/01/2024</p>
        <p id='hourPrice'> Hora : ${hour}:00</p>
        <p id='price'> Precio : ${price}€ </p>
    `;
    
    //fecha hora y precio
    // const card = document.createElement("div");
    // card.id = "PriceCard";
    return div;

}