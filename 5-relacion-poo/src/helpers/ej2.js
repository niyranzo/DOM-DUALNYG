export function Empleado(nombre, edad, puesto){
    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;

    // calcular el salario (metodo estatico)
    Empleado.prototype.calcularSalario = function (){
        const salarioBase =  {
            junior: 1500 ,
            senior: 2500 ,
            master: 5000,
        }
        return salarioBase[this.puesto] || 0;
    }

    Empleado.prototype.info = function(){
        console.log(`
            ${this.nombre} ${this.edad} -${this.puesto}- ${calcularSalario()}
            `);
    }
}

// hijo
export function EmpleadoFreelance(nombre, edad, preciohora){
    Empleado.call(this, nombre, edad, "freelance");
    this.preciohora = preciohora;
    // tengo que heredar los metodos de la funcion constructora padre
    EmpleadoFreelance.prototype = Object.create(Empleado.prototype);
    // y que el constructor sea el del padre
    EmpleadoFreelance.prototype.constructor = EmpleadoFreelance;

    EmpleadoFreelance.prototype.info = function() {
        console.log(
            `
                
            `
        )
    }

}