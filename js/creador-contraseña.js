function generarContraseña() {
    const longitud = document.getElementById("longitud").value;
        const minusculas = "abcdefghijklmnopqrstuvwxyz";
        const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numeros = "0123456789";
        const simbolos = "!@#$%^&*()-_=+";
        const todosLosCaracteres = minusculas + mayusculas + numeros + simbolos;

        let contraseña = "";

        if (longitud < 12 || longitud > 50) {
            document.getElementById("resultadoContraseña").innerHTML = "Por favor, ingresa un número de caracteres válido entre 12 y 50.";
            return;
        }

        for(let i = 0; i < longitud; i++) {
            const contraseñaAleatoria = Math.floor(Math.random() * todosLosCaracteres.length);
            contraseña += todosLosCaracteres[contraseñaAleatoria];
        }

        document.getElementById("resultadoContraseña").innerHTML = contraseña;
}
