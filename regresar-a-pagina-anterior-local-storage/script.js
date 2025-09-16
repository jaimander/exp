function guardarPagina(url){
  localStorage.setItem("pagina", url);
  //console.log(localStorage.getItem("pagina"));
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('pagina2')) {
    document.getElementById("pagina-guardada").innerHTML = localStorage.getItem("pagina");
    document.getElementById("atras").href = localStorage.getItem("pagina");
  }
})