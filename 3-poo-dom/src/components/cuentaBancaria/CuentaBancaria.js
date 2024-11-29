export function CuentaBancaria(numCuenta, saldo){
    this.numCuenta = numCuenta;
    let _saldo = saldo; //variable privada q se modifica solo en el obj

    this.getNumCuenta = function(){
        return this.numCuenta;
    }

    this.retirar = function(cantidad){
        if(cantidad < 0 || cantidad > _saldo || typeof cantidad !== 'number'){
            return `No se puede retirar`
        }
        _saldo-=cantidad;
        return `Dinero Retirado`;
    }

    this.insertar = function(cantidad){
        if(cantidad < 0 || typeof cantidad !== 'number'){
            return `No se puede insertar`
        }
        _saldo+=cantidad;
        return `Dinero Retirado`;
    }

}