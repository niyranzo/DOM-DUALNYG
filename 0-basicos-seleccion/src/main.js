// # Ejercicios básicos de selección del DOM

// Ejercicio 1:
// Selecciona el elemento `h1` por su ID.

const titleH1 = document.getElementById("contenedorPrincipal").querySelector("h1");
console.log(titleH1); 
titleH1.style.color = "red"; // para cambiar el estilo de la linea
titleH1.textContent = "Hola mundo" //cont del elem (solo se usa cuando quieras respettar el estilo de la etiqueta)


// Ejercicio 2:
// Selecciona todos los párrafos con la clase "parrafo" dentro del `contenedorPrincipal`.
const elementsParrafo = document.getElementById("contenedorPrincipal").querySelectorAll("p"); //todos los p
const elementsParrafo2 = document.querySelectorAll("#contenedorPrincipal .parrafo"); //solo los de la clase "parrafo"
// console.log(elementsParrafo);

// Ejercicio 3:
// Selecciona el elemento `img` por su atributo `src`.

const img = document.querySelector("img").getAttribute("src"); //devuelve solo la imagen imagen.png
const img2 = document.querySelector("img[src='imagen.png']"); //devuelve el src especifico
// console.log(img2)

// Ejercicio 4:
// Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.

// const spans = document.getElementById("contenedorSecundario").querySelectorAll("span");
const spans2 = document.querySelectorAll("#contenedorSecundario span");
// console.log(spans2)

// Ejercicio 5:
// Selecciona el primer párrafo con la clase "importante".

const primerParrafo = document.querySelector(".parrafo.importante");
// console.log(primerParrafo);

// Ejercicio 6:
// Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".

// const parrafos = document.querySelectorAll("#contenedorPrincipal p");
// console.log(parrafos);

// Ejercicio 7:
// Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".

const dataValor = document.querySelectorAll("[data-atributo='valor1']"); // devuelve un NODELIST
// console.log(dataValor);

// Ejercicio 8:
// Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".

// const parrafosImportantes = document.querySelectorAll(".parrafo.importante"); //se podria poner aca el [1] pero la app podria caer
// const segundoParrafoImportante = parrafosImportantes.length > 1 ? parrafosImportantes[1] : null; //para que no caiga la aplicacion
// console.log(segundoParrafoImportante)

// Ejercicio 9:
// Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".

// const spans = document.querySelectorAll(".contenedor span"); //no va 


// Ejercicio 10:
// Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".

// const parrafosImportantes = document.querySelectorAll("#contenedorPrincipal .parrafo"); //se podria poner aca el [1] pero la app podria caer
// const tercerParrafoImportante = parrafosImportantes.length > 1 ? parrafosImportantes[1] : null; //para que no caiga la aplicacion

//RELACION 2 
//  Ejercicio 1:
// Añade un evento de clic a todos los elementos `<span>` dentro del `contenedorSecundario`. Cuando se haga clic, cambia el color de fondo del elemento al azar.

// const spans = document.querySelectorAll("#contenedorSecundario span");
// spans.forEach((span) => {
//     span.addEventListener("click", function (event) {
//         const span = event.target; 
//         const r = Math.floor(Math.random() * 256); 
//         const g = Math.floor(Math.random() * 256); 
//         const b = Math.floor(Math.random() * 256);
//         span.style.color = `rgb(${r}, ${g}, ${b})`; 
//     });
// })

//  Ejercicio 2:
// Crea una función que muestre una alerta con el contenido de cualquier párrafo que tenga la clase "parrafo" cuando se haga doble clic en él.
// const parrafos = document.querySelectorAll("#contenedorPrincipal .parrafo"); //solo los de la clase "parrafo"
const parrafos = document.querySelectorAll("#contenedorPrincipal .parrafo"); //solo los de la clase "parrafo"

function texto () {
    const random = Math.floor(Math.random() * parrafos.length);
    alert(`Contenido del parrafo : ", ${parrafos[random].textContent}`); 
}
parrafos.forEach(parrafo => {
    parrafo.addEventListener("click", texto);
});


//  Ejercicio 3:
// Añade un evento de cambio a un `<select>` que está fuera del `contenedorPrincipal`. Cuando se cambie el valor, actualiza el texto del elemento `h1` al nuevo valor seleccionado.
// const select = document.querySelector("#selects");
// select.addEventListener('change', (event) => {
//     const valor = event.target.value;
//     titleH1.textContent=valor;
// })

//  Ejercicio 4:
// Crea una función que cambie el contenido de todos los párrafos dentro del `contenedorSecundario` cuando se presione la tecla "Enter". El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").
const boton = document.getElementById("enter");
function cambiaContenido () {
    const parrafos = document.querySelectorAll("#contenedorSecundario p");
    parrafos.forEach(parrafo => {
        parrafo.textContent = "Nuevo contenido";
    });
}
boton.addEventListener("click", cambiaContenido);

//  Ejercicio 5:
// Añade un evento de clic a cualquier elemento con la clase "etiqueta". Cuando se haga clic, elimina el elemento del DOM.

// const etiquetas = document.querySelectorAll(".etiqueta");
// etiquetas.forEach(etiqueta => {
//     etiqueta.addEventListener("click" , function (event) {
//         const etiq = event.target;
//         etiq.remove()
//     });
// });

//  Ejercicio 6:
// Crea una función que cambie el color de todos los elementos `<span>` dentro del `contenedorSecundario` cuando se mueva el mouse sobre ellos. El nuevo color debe ser azul.

const spans = document.querySelectorAll(".etiqueta");
spans.forEach(span => {
    span.addEventListener("mouseenter", function (event) { 
        const sp = event.target;
        sp.style.color = "blue"; 
    });
});

//  Ejercicio 7:
// Añade un evento de carga a la página. Cuando la página se cargue, muestra una alerta con el texto "Página cargada".

// Ejercicio 8:
// Crea una función que cambie el tamaño del texto de todos los párrafos dentro del `contenedorPrincipal` cuando se haga clic en el elemento `img`. El nuevo tamaño debe ser el doble del tamaño actual.

//  Ejercicio 9:
// Añade un evento de teclado a la página. Cuando se presione cualquier tecla, muestra una alerta con el código de la tecla presionada.

// Ejercicio 10:
// Crea una función que cambie el color de fondo del `contenedorPrincipal` cuando se haga clic en cualquier elemento dentro de él. El nuevo color debe ser verde.
