import { Producto } from "./Producto.js";

export default class Carrito{
    constructor(){
        this.productos = [];
    }

    // agg 1 prod carrito

    aggProducto(nombre, cantidad, precio){
        this.productos.push(new Producto(nombre, cantidad, precio));
        // guardar en el localstorage
        localStorage.setItem("carrito", JSON.stringify(this.productos));
    }

    borrarProducto(index){
        this.productos.splice(index, 1);
        // guardar en el localstorage
    }

    editarProducto(index, nuevaCantidad){
        if(nuevaCantidad > 0){
            this.productos[index].cantidad = nuevaCantidad;
            // guardar en el localstorage
        }
    }

    calcularTotal(){
        return this.productos.reduce((total, producto) => {
            return total+=producto.calcularTotal();
        }, 0);
    }

    // extra 
    guardarLocalStorage(){
        localStorage.setItem("carrito", JSON.stringify(this.productos));
    }

    cargarLocalStorage(){
        const carrito = JSON.parse(localStorage.getItem("carrito"));
        if(localStorage.hasOwnProperty('carrito')){
            this.productos = carrito.map((producto) => {
                return new Producto(producto.nombre, producto.cantidad, producto.precio);
            })
        }
        return this.productos;
    }

    // ordenar por nombre, y ordenar por precio

}