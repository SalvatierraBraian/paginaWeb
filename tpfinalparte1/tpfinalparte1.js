// salvatierra braian y zapata rocio
// cuento "casa tomada"
// comision 1
// https://www.youtube.com/watch?v=xX3R516WHZU

let imagenes = [];
let textos = [];
let estado = 0; // controlar las imagenes
let indiceTexto = 0; // control del texto
let yPos = 450;


function preload() {
  // cargar las imagenes
  for (let i = 0; i < 16; i++) {
    imagenes[i] = loadImage('data/pantalla' + i + '.jpg');
  }
  textos = loadStrings("data/texto.txt");
  
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 16; i++) {
    imagenes[i].resize(640, 480);
  }
  textSize(15);
}

function draw() {
  dibujarPantallas();
}
