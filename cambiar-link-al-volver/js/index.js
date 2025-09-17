// ---------------------------
// FUNCIÓN: resetear
// ---------------------------
// Restablece el estado de todas las cajas en localStorage.
// - "no" significa que la caja está cerrada o nunca se ha abierto.
// - Al llamar esta función, la próxima vez que se cargue la página,
//   ambas cajas volverán a mostrarse cerradas.

function resetear() {
  localStorage.setItem("seAbrioLaCaja1", "no"); // Caja 1 vuelve a cerrada
  localStorage.setItem("seAbrioLaCaja2", "no"); // Caja 2 vuelve a cerrada
}


function resetear() {
  localStorage.setItem("seAbrioLaCaja1", "no");
  localStorage.setItem("seAbrioLaCaja2", "no");
}
