export function Usuario(nombre, email, password){
    this.nombre = nombre; //variables publicas
    this.email = email;
    let _password = password; //variable privada q se modifica solo en el obj
    
    // metodos publicos
    this.login = function(emailIntroducido, passwordIntroducido){
        // comprobar el email y el password
        if(this.email === emailIntroducido && _password === passwordIntroducido){
            return `Bienvenido ${this.nombre}`;
        }else{
            return `Error en las credenciales`;
        }
    }
    // actualizar
    this.updateEmail = function(newEmail){
        this.email = newEmail;
        return `Email actualizado ${this.email}`;
    }
    
    // obtener toda la informacion del usuario
    this.getInfo = function(){
        return `Usuario: ${this.nombre} - Email: ${this.email}`;
    }
    
}
