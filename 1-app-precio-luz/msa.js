import { getData } from "./helpers/getDataPrice";



function mostrarData(){
    async function init() {
        try {
            const data = await getData();
            const { included } = data;
            console.log(included);
        } catch (error) {
            console.error('error', error);
        }
    }
        init();
}

const app = document.getElementById("app");
const button = document.createElement("button");
button.textContent = "Cargar datos de la luz";
button.id = "cargarLuz";
button.style = "background-color: #4CAF50; color: white; border: none; padding: 10px 20px; text-align: center; font-size: 16px; border-radius: 5px; cursor: pointer";
app.appendChild(button);

button.addEventListener("click", mostrarData);