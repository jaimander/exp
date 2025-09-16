let caja = document.getElementById("caja1");
let urlAntes = "caja1-antes.html";
let urlDespues = "caja1-despues.html";

caja.addEventListener("click", function () {
  let seAbrioLaCaja1 = localStorage.getItem("seAbrioLaCaja1");

  if (seAbrioLaCaja1 === "true") {
    // Ya se abrió antes → ir a la página "después"
    window.location.href = urlDespues;
  } else {
    // Primera vez → guardar estado y redirigir a "antes"
    localStorage.setItem("seAbrioLaCaja1", "true");
    window.location.href = urlAntes;
  }
});
