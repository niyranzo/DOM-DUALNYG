export function Producto(nombre, precio, stock, img){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img;

    this.getInfo = function(){
        return `Nombre: ${this.nombre} - Precio: ${this.precio} - Stock: ${this.stock} - Url Img: ${this.img}`;
    }

    this.updateStock = function(newStock){

        if(this.stock<=0 && newStock<0 || typeof newStock!="number" || this.stock+newStock<0){

            return `No se puede quitar`
        }
        this.stock+=newStock;
        return `Stock actualizado ${this.stock}`;
    }
}