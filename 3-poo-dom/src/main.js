import { CuentaBancaria } from "./components/cuentaBancaria/CuentaBancaria.js";
import { Producto } from "./components/producto/Producto.js";
import { Usuario } from "./components/usuario/Usuario.js";
import { UsuarioClase } from "./components/usuario/UsuarioClase.js";
import { UsuarioFabrica } from "./components/usuario/UsuarioFabrica.js";

/*
Ejercicio 1: 
implementar el uso de programacion orientada a objt un sistema
para iniciar sesion (login) y para actualizar un perfil
Objetivo: crear una clase u objeto para moderar el inicio de sesion/perfil
*/


// creo una instancia de usuario
// const usuario = new Usuario("Ana", "ana@gmail.com", "12345");
// const usuario2 = new UsuarioClase("sara", "sara@gmail.com", "12345");

/*
const usuario3 = UsuarioFabrica("niki", "niki@gmail.com", "12345")
const app = document.getElementById("app");
app.innerHTML = `
    <h2>Gestión de Usuarios</h2>
    <p>${usuario3.getInfo()} </p>
    <button id='btn-login'>Iniciar sesion</button>
    <button id='btn-actualizar-email'>Actualizar email</button>
    <div id='form-container'></div>
`;
const btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click", mostrarFormularioLogin);
const btnActualizar = document.querySelector("#btn-actualizar-email");
btnActualizar.addEventListener("click", mostrarFormularioUpdateEmail);

function mostrarFormularioLogin(){
    const div = document.getElementById("form-container");
    div.innerHTML = `
        <input type='email' id='email-login' placeholder='Introduce tu email'>
        <input type='password' id='password-login' placeholder='Introduce tu contraseña'>
        <button id='enviar-login'>Enviar</button>
    `;
    const btnEnviarLogin = document.getElementById("enviar-login");
    btnEnviarLogin.addEventListener("click", () => {
        const email = document.getElementById("email-login").value.trim(); //el trim es para quitar los espacios de los lados
        const password = document.getElementById("password-login").value.trim(); //el trim es para quitar los espacios de los lados
        alert(usuario3.login(email, password));
    });

}

function mostrarFormularioUpdateEmail(){
    const div = document.getElementById("form-container");
    div.innerHTML = `
        <input type='email' id='email-login-nuevo' placeholder='Introduce tu nuevo email'>
        <button id='enviar-mail-nuevo'>Enviar</button>
    `;
    const btnEnviarLoginNuevo = document.getElementById("enviar-mail-nuevo");
    btnEnviarLoginNuevo.addEventListener("click", () => {
        const email = document.getElementById("email-login-nuevo").value.trim(); //el trim es para quitar los espacios de los lados
        alert(usuario3.updateEmail(email));
    });
}
*/

/*
Ejercicio 2:
Gestion de producto:
implementar una funcion constructora que modele un producto
del prod quiero saber el nom, precio, stock, img (url).
los metodos: obt info del producto y act stock pasando como param una cantidad (mas o menos)
siempre que haya stoc suficiente.
genera un array de productos , renderizalos en el DOM (pintar), añade un btn a cada
producto que permita actualizar el stock (ul,li);
aplicar dos de las 3 formas de obj
*/

/*
const app = document.getElementById("app");
const arrProd = [new Producto("Sara", 1000, 10, "sara.jpge"), 
    new Producto("Raul", 100, 40, "Raul.jpge"), 
    new Producto("Armando", 10, 70, "Armando.jpge")];
const ul = document.createElement("ul");
app.appendChild(ul);

arrProd.forEach((producto, i) => {
    i+=0
    const li = document.createElement("li");
    li.innerHTML =`${producto.getInfo()} <button id="actualizar${i}" >Actualizar stock</button>`
    ul.appendChild(li);
    document.getElementById(`actualizar${i}`).addEventListener("click" , () => {
        const div = document.createElement("div");
        div.innerHTML = 
            `<input type='number' id="cantidad${i}" placeholder="cantidad">
            <button id="actualizarStock${i}">Enviar</button>`
        ;
        li.appendChild(div);
        document.getElementById(`actualizarStock${i}`).addEventListener("click" , () => {
            alert(producto.updateStock(Number(document.getElementById(`cantidad${i}`).value)));
        }); 
    });
});
*/
/*
Ejercicio 3: 
Sistema bancario:
implementar una clase llamada "cuenta bancaria" que tenga
una propiedad privada llamada "saldo" y que me permita 
depositar una cantidad, retirar una cantidad (siempre que se pueda).
genera en el DOM dos contenedores, uno para ingresar y otro para
retirar a traves de un radio button y otro mostrar info de mi cuenta
(n de cuenta (16 num) con un desplegable) con clase y algun otro
*/

const app = document.getElementById("app");
const cuentas = [
    new CuentaBancaria(1234567891234567, 2000), 
    new CuentaBancaria(9876543219876543, 5000),
    new CuentaBancaria(1111222233334444, 750),  
    new CuentaBancaria(4444333322221111, 1200), 
    new CuentaBancaria(5555666677778888, 10000) 
];

const divRetirar = document.createElement("div");
divRetirar.id = "retirar";
const divIngresar = document.createElement("div");
divIngresar.id = "ingresar";



