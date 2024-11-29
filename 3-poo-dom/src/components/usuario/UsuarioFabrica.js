export function UsuarioFabrica(nombre, email, password) {
    let _password = password; //variable privada
    return {
        nombre,
        // nombre:nombre -> si no se llaman igual el nom de la variable con la que esta en parametro
        email,
        login(emailIntroducido, passwordIntroducido){
            // comprobar el email y el password
            if(this.email === emailIntroducido && _password === passwordIntroducido){
                return `Bienvenido ${this.nombre}`;
            }else{
                return `Error en las credenciales`;
            }
        },
        updateEmail(newEmail){
            this.email = newEmail;
            return `Email actualizado ${this.email}`;
        },
        getInfo(){
            return `Usuario: ${this.nombre} - Email: ${this.email}`;
        }
    }
}

