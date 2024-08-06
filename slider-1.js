const imagen = document.getElementById("img-slider");

let numImagen = 0;

const imagenes = [];
imagenes[0] = "./src/slider1/1.jpg";
imagenes[1] = "./src/slider1/2.jpg";
imagenes[2] = "./src/slider1/3.jpg";
imagenes[3] = "./src/slider1/4.jpg";
imagenes[4] = "./src/slider1/5.jpg";
imagenes[5] = "./src/slider1/6.jpg";
imagenes[6] = "./src/slider1/7.jpg";


setInterval(() => {
    imagen.src = imagenes [numImagen];
    if (numImagen < imagenes.length - 1){
        numImagen++;
    } else {
        numImagen = 0;
    }
}, 3000);