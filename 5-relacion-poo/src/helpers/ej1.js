function Tarea(nombre) {
    // propiedades estaticas
    Tarea.c
    // propiedades privadas
    // propiedades publicas
    this.id = ++Tarea.contador;
    this.nombre = nombre;
    this.completada = false;

    this.toggleCompletada = function () {
        this.completada = !this.completada; //true
    }

    // metodo privado
    function logEstado () {
        console.log(`La tarea ${this.nombre} esta: ${this.completada ? "completada":"pendiente"} `)
    }
    
    // crear un metodo estatico del objeto
    // que lo tenga todas las instancias
    Tarea.prototype.info = function () {
        console.log(`
            La tarea ${this.nombre} esta: ${this.completada ? "completada":"pendiente"}
            `);
    }

}

export class TareaClass {
    // variables de clase
    static contador = 1;
    // propiedad privada
    #completada;
    // constructor
    constructor(nombre){
        this.id = TareaClass.contador++;
        this.nombre = nombre;
        this.#completada = false;
    }

    toggleCompletada() {
        this.#completada = !this.#completada; //true
    }

    info(){
        console.log(`
            La tarea ${this.nombre} esta: ${this.#completada ? "completada":"pendiente"}
            `);
    }
}