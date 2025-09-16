var cuadrado = document.getElementById("cuadrado");
var estado = 0;
var cambio = false;
var color = "";

try {
  cuadrado.onclick = function () {
    var azul = "rgb(0, 0, 255)";
    var rojo = "rgb(255, 0, 0)";

    if (estado == 0 && cambio == false) {
      color = rojo;
      cuadrado.style.backgroundColor = color;
      cambio = true;
      estado = 1;
    }

    if (estado == 1 && cambio == false) {
      color = azul;
      cuadrado.style.backgroundColor = color;
      cambio = true;
      estado = 0;
    }

    console.log(estado);
    console.log(cambio);
    localStorage.setItem("color", color);
  };

  cuadrado.onmouseup = function () {
    cambio = false;
  };
} catch (error) {}
