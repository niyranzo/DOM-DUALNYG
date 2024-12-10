export class ProductList{
    #products;
    #apiUrl;
    constructor(api){
        this.#products = [];
        this.#apiUrl = api;
        // donde renderizar
        this.appContainer = document.getElementById("app");
    }

    // metodo priv para obt prod
    async #fetchProducts(){
        try {
            const response = await fetch(this.#apiUrl);
            if(!response.ok){
                throw new Error("Error al obtener los productos");
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetch data", error);
        }
    }

    async init(){
        try {
            const data = await this.#fetchProducts();
            this.#products = data;
            this.#renderProducts();

           
        } catch (error) {
            this.renderError(error);
        }
    }

    // mostar error en el dom
    renderError(message){
        this.appContainer.innerHTML = `
            <div class="error" style="color:red;">
                <p>${message}</p>
            </div>
        `;
    }
    // metodo publico para obt prod
    #renderProducts(){
        if(this.#products.length === 0){
            this.renderError("No hay productos que pintar");
        }
        const productosHTML = this.#products.map((product, index) => {
            return `
                <div class="productClass" data-id="${index}">
                    <h3>${product.name}</h3>
                    <p>Precio: ${product.price}</p>
                    <p>Descripcion: ${product.description}</p>
                    <p data-id="${index}">Categoria: ${product.category}</p>
                </div>
            `
        }).join("");
        //   const myDiv = document.createElement("div");
        //   myDiv.className = "product-list";
        //   myDiv.innerHTML = productsHtml;
        //   this.appContainer.appendChild(myDiv)
        this.appContainer.innerHTML = `
            <div class="product-list">
            ${productosHTML}
            </div>
        `;
        const listaProducto = document.querySelector(".product-list");
        listaProducto.addEventListener("click", (event) => {
            if(event.target.dataset.id){
                const product = this.#products[event.target.dataset.id]
                const productCard =  document.querySelector(`[data-id="${event.target.dataset.id}"]`);
                console.log(productCard)
                productCard.style.background = 
                    productCard.style.background === "blue" ? "green" : "blue"
                // if(productCar.classList.contains("green")){
                //     productCar.classList.remove("green")
                //     productCar.style="background-color:blue;"
                // }else{
                //     productCar.style = "background-color:green;"
                //     productCar.classList.add("green")
                // }
            }
        });

        // listaProducto.querySelectorAll(".productClass");

        console.log(listaProducto)

    }

    get apiurl(){
        return this.#apiUrl;
    }

    #validarData(product){
        const { name, price, description, category } = product;
        if(!name, !price, !description, !category){
            return false;
        }
        return true;
    }

    set addProduct(product){
        if(this.#validarData(product)){

        }else{
            throw new Error("Datos del producto incorrecto");
            
        }
    }

    async #opFetchProductData(product, method){
        try {
            switch (method) {
                case "post":
                    const resposePost = await fetch(dataCategoria, {
                    method: 'POST', 
                    headers: {
                    'Content-Type': 'aplication/json'
                    },
                    body: JSON.stringify()});

                    
                break;
                case "delete":
                    const id = product.id;
                    const responseDelete =  await fetch(`${this.#apiUrl}/${id}`, {
                        method: 'DELETE', 
                    });
                break;
                case "patch":
                
                break;
                case "get":
            
                break;
                case "put":
                    const resposePut = await fetch(`${this.#apiUrl}/${id}`, {
                    method: 'PUT', 
                    headers: {
                    'Content-Type': 'aplication/json'
                    },
                    body: JSON.stringify(product)});
                break;
                default:
                    break;
            }
        } catch (error) {
            
        }
    }


}