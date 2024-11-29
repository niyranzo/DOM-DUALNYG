export class UsuarioClase {
    #password; //propiedad privada
    constructor(nombre, email, password){
        this.nombre = nombre;
        this.email = email;
        this.#password = password;
    }

      // metodos publicos{}
    login(emailIntroducido, passwordIntroducido){
        // comprobar el email y el password
        if(this.email === emailIntroducido && this.#password === passwordIntroducido){
            return `Bienvenido ${this.nombre}`;
        }else{
            return `Error en las credenciales`;
        }
    }
    // actualizar
    updateEmail(newEmail){
        this.email = newEmail;
        return `Email actualizado ${this.email}`;
    }
    
    // obtener toda la informacion del usuario
    getInfo(){
        return `Usuario: ${this.nombre} - Email: ${this.email}`;
    }
}