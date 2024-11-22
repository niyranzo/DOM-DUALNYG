/*
    Spinner con 3 estados:
    -Crear el spinner
    -Mostrar el Spinner
    -Ocultar el Spinner
*/

export const createSpinner = () => {
    //crear spinner en el DOM
    const spinner = document.createElement("div");
    // le damos un id
    spinner.id = "spinner";
    // añadimos clases
    spinner.classList.add("hidden", "spinner");
    // darle texto al spinner
    spinner.textContent = "Cargando...";
    return spinner;
}

export const showSpinner = () => {
    // mostrar el spinner
    const spinner = document.getElementById("spinner");
    // borramos la clase hidden para que se muestre el spinner
    spinner.classList.remove("hidden");
}

export const hideSpinner = () => {
    // ocultar el spinner
    const spinner = document.getElementById("spinner");
    // volvemos a agregar el hidden para que se oculte el spinner
    spinner.classList.add("hidden");
}


