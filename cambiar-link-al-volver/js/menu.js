// variables CAJA 1
let caja1 = document.getElementById("caja1");
let urlCaja1Antes = "caja1-antes.html";
let urlCaja1Despues = "caja1-despues.html";
let imagenCaja1Antes = "assets/caja-cerrada.png";
let imagenCaja1Despues = "assets/caja-abierta.png";

// variables CAJA 2
let caja2 = document.getElementById("caja2");
let urlCaja2Antes = "caja2-antes.html";
let urlCaja2Despues = "caja2-despues.html";
let imagenCaja2Antes = "assets/caja-cerrada.png";
let imagenCaja2Despues = "assets/caja-abierta.png";

// TODAS LAS CASA / Leer estado de localStorage
let seAbrioLaCaja1 = localStorage.getItem("seAbrioLaCaja1");
let seAbrioLaCaja2 = localStorage.getItem("seAbrioLaCaja2");

// CAJA 1 / Al cargar la página, mostrar imagen según estado
if (seAbrioLaCaja1 === null || seAbrioLaCaja1 === "no") {
  caja1.src = imagenCaja1Antes; // cerrada
} else {
  caja1.src = imagenCaja1Despues; // abierta
}

// CAJA 2 / Al cargar la página, mostrar imagen según estado
if (seAbrioLaCaja2 === null || seAbrioLaCaja2 === "no") {
  caja2.src = imagenCaja2Antes; // cerrada
} else {
  caja2.src = imagenCaja2Despues; // abierta
}

// CAJA 1 / Click en la caja
caja1.addEventListener("click", function () {
  let seAbrioLaCaja1 = localStorage.getItem("seAbrioLaCaja1");

  if (seAbrioLaCaja1 === null || seAbrioLaCaja1 === "no") {
    localStorage.setItem("seAbrioLaCaja1", "si");
    window.location.href = urlCaja1Antes;
  } else {
    window.location.href = urlCaja1Despues;
  }
});

// CAJA 2 / Click en la caja
caja2.addEventListener("click", function () {
  let seAbrioLaCaja2 = localStorage.getItem("seAbrioLaCaja2");

  if (seAbrioLaCaja2 === null || seAbrioLaCaja2 === "no") {
    localStorage.setItem("seAbrioLaCaja2", "si");
    window.location.href = urlCaja2Antes;
  } else {
    window.location.href = urlCaja2Despues;
  }
});

