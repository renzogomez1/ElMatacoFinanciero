const imagen = document.getElementById("img-slider1");

let numImagen = 0;

const imagenes = [];
imagenes[0] = "./src/slider2/1.jpg";
imagenes[1] = "./src/slider2/2.jpg";
imagenes[2] = "./src/slider2/3.jpg";
imagenes[3] = "./src/slider2/4.jpg";
imagenes[4] = "./src/slider2/5.jpg";
imagenes[5] = "./src/slider2/6.jpg";
imagenes[6] = "./src/slider2/7.jpg";
imagenes[7] = "./src/slider2/8.jpg";
imagenes[8] = "./src/slider2/9.jpg";
imagenes[9] = "./src/slider2/10.jpg";
imagenes[10] = "./src/slider2/11.jpg";
imagenes[11] = "./src/slider2/12.jpg";
imagenes[12] = "./src/slider2/13.jpg";
imagenes[13] = "./src/slider2/14.jpg";


setInterval(() => {
    imagen.src = imagenes [numImagen];
    if (numImagen < imagenes.length - 1){
        numImagen++;
    } else {
        numImagen = 0;
    }
}, 3000);