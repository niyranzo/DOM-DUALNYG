//crear una clase en js que permita gestionar una lista de 
// de productos obtenida de una api.

import { ProductList } from "./components/productList";

// metodos privados, publicos, getter y setters
// retricciones : 

const lista = new ProductList("http://localhost:3500/products");
lista.init();

