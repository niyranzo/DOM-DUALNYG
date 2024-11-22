     
const divForm = () => {
    // crear un contenedor para mi formulario
    const divForm = document.createElement("div");
    divForm.classList.add("form-container");
    // crear un formulario
    const formEmail = document.createElement("form");
    formEmail.classList.add("form");
    // crear el label 
    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Email";
    // <input type="email" name="email" id="email" rrequired>
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("name", "email");
    inputEmail.id = "email";
    inputEmail.setAttribute("placeholder", "email");
    formEmail.appendChild(inputEmail); //input inyectado
    // añadimos el formulario al contenedor
    divForm.appendChild(formEmail); //form inyectado
    // creo label de verificacion de email
    const pEmailCheck = document.createElement("p"); 
    pEmailCheck.id = "email-check";
    pEmailCheck.style.color ="red";
    pEmailCheck.textContent = "Email no valido";
    divForm.appendChild(pEmailCheck); //`pemailchech inyectado

    //lógica de validacion del email
    //necesito una expresión regular de validación de email
    const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    inputEmail.addEventListener("input" , () => {
        // si el email es valido
        const isValidEmail = emailRegex.test(inputEmail.value);
         pEmailCheck.style.display = isValidEmail ? "none" : "block";
    });

    return divForm;
}     

export default divForm;
    