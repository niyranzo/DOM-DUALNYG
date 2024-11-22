export default function formContent(){
    const divFormLogin = document.createElement("div");
    divFormLogin.classList.add("form-container-login");
    divFormLogin.id = "form-container-login";
    // crear un formulario
    const formEmail = document.createElement("form");
    formEmail.id = "form-login";
    // label username 
    const labelUsername = document.createElement("label");
    labelUsername.textContent = "username";
    // input username
    const inputUsername = document.createElement("input");
    inputUsername.id="username"
    inputUsername.type="text"
    inputUsername.name="username"
    inputUsername.placeholder="Escribe tu username"
    // label password
    const labelPassword = document.createElement("label");
    labelPassword.textContent = "password";
    // input password 
    const inputPassword = document.createElement("input");
    inputPassword.id="password"
    inputPassword.type="password"
    inputPassword.name="password"
    inputPassword.placeholder= "escribe tu password"

    // button
    const button = docuemnt.createElement("button");
    button.id="button-lgin"
    button.type="submit"
    button.textContent = "Enviar";

    formEmail.append(labelUsername, inputUsername, labelPassword, inputPassword, buttonr);

}