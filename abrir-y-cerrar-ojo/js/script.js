let ojo = document.getElementById("ojo");
let estaAbierto = true;
let body = document.body;


ojo.onclick = function (){
    if(estaAbierto == true){
        ojo.src = "assets/ojo-cerrado.jpg";
        estaAbierto = false;
        body.style.backgroundColor = "black";
    }
    else{
        ojo.src = "assets/ojo-abierto.jpg";
        estaAbierto = true;
        body.style.backgroundColor = "white";
    }

}