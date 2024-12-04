//Funcion para establecer la hora actual y que se vaya actualizando en pantalla cada segundo
function actualizarHora() {
    let hora = new Date().toLocaleTimeString();
    document.getElementById("hora").innerHTML = hora;
}

setInterval(actualizarHora, 1000);

actualizarHora();

//Funcion para establecer la fecha actual y que se vaya actualizando en pantalla cada dia
function actualizarFecha() {
    let fecha = new Date().toLocaleDateString();
    document.getElementById("fecha").innerHTML = fecha;
}

setInterval(actualizarFecha, 86400000);

actualizarFecha();

//Funcion para que aparezca una frase en funcion de la hora
function mostrarFrases() {
    let hora = new Date().getHours();
    let frase;

    if (hora >= 0 && hora < 7) {
        frase = "¡Buenas noches! Es hora de ir a dormir"
    } else if (hora >= 7 && hora < 8) {
        frase = "¡Buenos días! Preparate un buen desayuno"
    } else if (hora >= 8 && hora < 14) {
        frase = "Es hora de darle duro al código"
    } else if (hora >= 14 && hora < 15) {
        frase = "¡Hora de la comida! ¡Que aproveche!"
    } else if (hora >= 15 && hora < 17) {
        frase = "Vamos a darle un poco más al código"
    } else if (hora >= 17 && hora < 21) {
        frase = "¡Eres libre! sal con tus amigos, haz ejercicio, mira alguna serie"
    } else if (hora >= 21 && hora < 22) {
        frase = "¡Hora de la cena! ¿Que te vas a preparar?"
    } else {
        frase = "Elige una buena pelicula y disfruta"
    }

    document.getElementById("frases").innerHTML = frase;
}

mostrarFrases();

setInterval(mostrarFrases, 1000);