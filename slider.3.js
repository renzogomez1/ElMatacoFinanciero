const imagen = document.getElementById("img-slider2");

let numImagen = 0;

const imagenes = [];
imagenes[0] = "./src/images/1.jpg";
imagenes[1] = "./src/images/2.jpg";

setInterval(() => {
    imagen.src = imagenes [numImagen];
    if (numImagen < imagenes.length - 1){
        numImagen++;
    } else {
        numImagen = 0;
    }
}, 3000);