import "./divCards.css";
// tarjeta con los precios de la luz
export const createDivCards = () => {
    const div = document.createElement("div");
    div.id = "divCards";
    return div;
}