let puertaIzq = document.getElementById("puertaIzq");
let puertaDer = document.getElementById("puertaDer");
let chapaIzq = document.getElementById("chapaIzq");
let chapaDer = document.getElementById("chapaDer");

chapaIzq.onclick = function () {
  if (puertaIzq.classList.contains("abrir")) {
    puertaIzq.classList.remove("abrir");
    puertaIzq.classList.add("cerrar");
  } else {
    puertaIzq.classList.remove("cerrar");
    puertaIzq.classList.add("abrir");
  }
};

chapaDer.onclick = function () {
  if (puertaDer.classList.contains("abrir")) {
    puertaDer.classList.remove("abrir");
    puertaDer.classList.add("cerrar");
  } else {
    puertaDer.classList.remove("cerrar");
    puertaDer.classList.add("abrir");
  }
};
