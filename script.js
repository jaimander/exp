// Seleccionamos todos los enlaces de la lista
const links = document.querySelectorAll("ul li a");
const preview = document.getElementById("previsualizacion");


// Creamos un mapa de href → imagen
const previews = {
  "cambiar-link-al-volver/index.html": "assets/cambiar.png",
  "encender-apagar-tv/index.html": "assets/tv.png",
  "local-storage-entrar-en-el-color/index.html": "assets/color.png",
  "maquina-de-escribir/index.html": "assets/maquina.png",
  "plano-habitacion/index.html": "assets/plano.png",
  "puertas-corredizas/index.html": "assets/puerta.png",
  "regresar-a-pagina-anterior-local-storage/index.html": "assets/regresar.png",
  "scroll-cambiar-img/index.html": "assets/scroll.png"
};

// Para cada link, agregamos eventos
links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    let imgSrc = previews[link.getAttribute("href")];
    if (imgSrc) {
      preview.innerHTML = `<img src="${imgSrc}" alt="preview">`;
      preview.style.display = "block";
    }
  });

  link.addEventListener("mouseleave", () => {
    preview.innerHTML = ""; // limpia la previsualización
    preview.style.display = "none";
  });
});
