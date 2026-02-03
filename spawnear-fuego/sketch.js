let imagenLlama;
let llamas = [];
let botonReleased = true;

function preload() {
  imagenLlama = loadImage("assets/fuego.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  if (botonReleased && mouseIsPressed) {
    botonReleased = false;
    let llama = new Llama(mouseX, mouseY);
    append(llamas, llama);
  }

  print(llamas.length);

  actualizarLlamas();
}

class Llama {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.escala = 0.5;
  }

  dibujar() {
    imageMode(CENTER);
    image(
      imagenLlama,
      this.x,
      this.y,
      imagenLlama.width * this.escala,
      imagenLlama.height * this.escala
    );
  }
}

function mouseReleased() {
  botonReleased = true;
}

function actualizarLlamas() {
  for (let i = 0; i < llamas.length; i++) {
    llamas[i].dibujar();
  }
}
