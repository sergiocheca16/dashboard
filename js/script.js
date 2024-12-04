const body = document.body
const fotos = [
    "img/apples.jpg",
    "img/city.jpg",
    "img/flowers.jpg",
    "img/switzerland.jpg",
    "img/elephant.jpg",
    "img/hummingbird.jpg",
    "img/milky-way.jpg",
    "img/landscapes.jpg",
    "img/switzerlands.jpg",
    "img/sunset.jpg",
]

const imagenFondo = () => {
    const imagenRandom = Math.floor(Math.random() * fotos.length);
    nuevaImagenFondo = fotos[imagenRandom]
    body.style.backgroundImage = `url(${nuevaImagenFondo})`;
}

setInterval(() => {
    imagenFondo()
}, 15000)

imagenFondo()