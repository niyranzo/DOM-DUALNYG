import dynamicTable from "./components/dynamicTable";
import personas from "./data/personas.js";


document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");
    const headers = ["nombre", "edad", "correo"];
    const table = dynamicTable(personas, headers);
    app.appendChild(table);
});