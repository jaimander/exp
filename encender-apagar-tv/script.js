// Selecciona el elemento con id "tv" 
let tv = document.getElementById("tv");

// Selecciona el elemento de audio con id "audio"
let sonido = document.getElementById("audio");

// Selecciona el elemento visual con id "ruido-visual" (el .gif que muestra el efecto de ruido de TV)
let ruidoVisual = document.getElementById("ruido-visual");

// Variable para rastrear si el sonido está en reproducción o no
let reproduciendo = false;

// Asigna una función al evento de clic en el elemento "tv"
tv.onclick = function () {
  // Verifica si el sonido no se está reproduciendo
  if (reproduciendo == false) {
    sonido.play(); // Reproduce el audio
    ruidoVisual.style.opacity = 1; // Hace visible el ruido visual
    reproduciendo = true; // Actualiza el estado a "reproduciendo"
  } else {
    sonido.pause(); // Pausa el audio
    ruidoVisual.style.opacity = 0; // Oculta el ruido visual
    reproduciendo = false; // Actualiza el estado a "no reproduciendo"
  }
};
