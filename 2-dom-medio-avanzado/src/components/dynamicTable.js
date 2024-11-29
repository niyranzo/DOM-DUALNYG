const dynamicTable = ({data, headers}) => {
    // creamos una tabla
    const table = document.createElement("table");
    table.id = "table-data-users";
    table.style.border = 1;
    // creamos el thead
    const thead = document.createElement("thead");
    // creamos el tr
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        // si quiero q al hacer click en el header odene la tabla 
        // aqui iria la logica de ordenacion
        // añadimos cada th al tr
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    // creamos el tbody
    const tbody = document.createElement("tbody");
    tbody.innerHTML = "";
    // recorremos los datos
    data.forEach(user => {
        const trUser = document.createElement("tr");
        trUser.innerHTML = `
        <td>${user.nombre}</td>
        <td>${user.edad}</td>
        <td>${user.email}</td>
        `;
        // otra forma si quiero utilizar un bucle para recorrer las propiedases de cada objeto
        // inyectamos las tr al tbody
        tbody.appendChild(trUser);
    });
    // añadimos el thread a la tabla y el tbody a la tabla
    table.append(thead, tbody);
    return table;
}

export default dynamicTable;