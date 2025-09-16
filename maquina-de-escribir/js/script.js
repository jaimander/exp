// Obtiene la referencia al elemento con id="contenedor-maquina" (será el botón o disparador del efecto)
let maquina = document.getElementById("contenedor-maquina");

// Obtiene la referencia al elemento con id="texto-hoja" (donde se escribirá el texto con el efecto máquina)
let campoDeTexto = document.getElementById("texto-hoja");

// Bandera para saber si ya se mostró el texto (evita que se ejecute varias veces)
let mostrado = false;

// Guarda el texto original que tiene el elemento
let textoParaEscribir = campoDeTexto.textContent;

// Limpia el contenido del elemento para que empiece vacío antes de escribir
campoDeTexto.textContent = "";

// Agrega un evento de clic al "maquina" (cuando se hace clic empieza la escritura)
maquina.addEventListener("click", () => {
  // Si aún no se ha mostrado el texto...
  if (mostrado == false) {
    // Llama a la función "escribir" con el elemento y el texto original
    escribir(campoDeTexto, textoParaEscribir);

    // Cambia la bandera a true para que no vuelva a ejecutarse
    mostrado = true;
  }
});

// Función que escribe el texto de manera animada (efecto máquina de escribir)
function escribir(elemento, texto) {
  // Índice para recorrer el texto letra por letra
  let i = 0;

  // Usa setInterval para ejecutar repetidamente cada 100ms
  let intervalo = setInterval(() => {
    // Mientras queden letras por escribir...
    if (i < texto.length) {
      // Agrega la siguiente letra al contenido actual del elemento
      elemento.textContent += texto.charAt(i);

      // Avanza el índice a la siguiente letra
      i++;
    } else {
      // Cuando ya no hay más letras, detiene el intervalo
      clearInterval(intervalo);
    }
  }, 100); // Cada 100 milisegundos (0.1 segundos) escribe una letra
}
