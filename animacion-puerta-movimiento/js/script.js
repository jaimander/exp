let puertaIzquierda = document.getElementById("puerta-izquierda");


puertaIzquierda.onclick = function() {
    if(puertaIzquierda.classList.contains("abrir")){
        puertaIzquierda.classList.remove("abrir");
        puertaIzquierda.classList.add("cerrar");
    }
    else{
        puertaIzquierda.classList.remove("cerrar");
        puertaIzquierda.classList.add("abrir");
    }   
    
}