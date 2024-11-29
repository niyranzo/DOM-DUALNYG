export class ProductoClase{
    constructor(nombre, precio, stock, img){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }

    getInfo(){
        return `Nombre: ${this.nombre} - Precio: ${this.precio} - Stock: ${this.stock} - Url Img: ${this.img}`;
    }

    updateStock(newStock){
        if(this.stock<=0 && newStock<0 || typeof newStock!="number" || this.stock+newStock<0){
            return `No se puede quitar`
        }
        this.stock+=newStock;
        return `Stock actualizado ${this.stock}`;
    }
}