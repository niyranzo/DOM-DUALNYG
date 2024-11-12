// seleccion de elementos del DOM

const appDiv = document.getElementById('app');

appDiv.innerText = "Hola mundo"; //texto plano
appDiv.innerHTML = "<h1> hola mundo </h1>" //interpreta codigo html 

// añadir clase a un elemento
appDiv.classList.add("Clase1", "Clase2");

// seleccion de className
const items = document.getElementsByClassName("items");
// items.length // 3
let n = 0;

for ( const i of items) {
    // i.textContent = `Hola amigo ${++n}`
    i.innerText = `Hola amigo ${++n}`
}

// seleccion por clase
const saludop = document.querySelector(".saludo");
// traer a todos por clase
const saludos = document.querySelectorAll(".saludo");

saludos.forEach((saludo,index) => {
    saludo.innerText = `Hola mundo${index}`;
});

// añadimos atributos a una etiqueta

const miGit = document.getElementById("github");
// añadir atributo
miGit.setAttribute("target", "_blank");
// borrar atributo
// miGit.removeAttribute("target");

miGit.innerText = "ir a mi github";