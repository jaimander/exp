/* http://www.javascriptkit.com/javatutors/detect-user-scroll-amount.shtml */

var winheight = window.innerHeight;

function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight,
    D.documentElement.scrollHeight,
    D.body.offsetHeight,
    D.documentElement.offsetHeight,
    D.body.clientHeight,
    D.documentElement.clientHeight
  );
}
var pctScrolled;
var scrollTop;
var winheight;

function amountscrolled() {
  winheight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;

  var docheight = getDocHeight();
  //console.log("clientheight: " + winheight)
  //console.log("docheight: " + docheight);

  scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  var trackLength = docheight - winheight;
  pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
  //console.log(pctScrolled + "% scrolled");
  console.log("scrollTop: " + scrollTop);
  changeImage();
}

/* según porcentaje */
/*
function changeImage() {
  if (pctScrolled < 30) {
    document.getElementById("img").src =
      "https://cdn.glitch.global/879b5985-0f78-4453-9040-f715dd5c4c82/perro.jpg?v=1677684242342";
  } 
  else if (pctScrolled > 30 && pctScrolled < 60) {
    document.getElementById("img").src =
      "https://cdn.glitch.global/67955b05-8dad-4355-8026-3159db7fff9f/pato.jpg?v=1678119802466";
  } 
  else {
    document.getElementById("img").src =
      "https://cdn.glitch.global/879b5985-0f78-4453-9040-f715dd5c4c82/gato.jpg?v=1677684242796";
  }
}*/

/* según pixeles */
/*
function changeImage() {
  if(scrollTop < 410){
     document.getElementById("img").style.opacity = 0;
  }
  else{
    document.getElementById("img").style.opacity = 1;
  }
  
  if (scrollTop < 410) {
   
  } else if (scrollTop > 410 && scrollTop < 880) {
    document.getElementById("img").src =
      "https://cdn.glitch.global/879b5985-0f78-4453-9040-f715dd5c4c82/gato.jpg?v=1677684242796";
  } else if (scrollTop > 880 && scrollTop < 1300) {
    document.getElementById("img").src =
      "https://cdn.glitch.global/879b5985-0f78-4453-9040-f715dd5c4c82/perro.jpg?v=1677684242342";
  } else {
    document.getElementById("img").src =
      "https://cdn.glitch.global/67955b05-8dad-4355-8026-3159db7fff9f/pato.jpg?v=1678119802466";
  }
}
*/

function changeImage() {
  var offset = document.getElementById("espacio-arriba").clientHeight;
  console.log("offset (espacio-arriba): " + offset);

  console.log("scrollTop: " + scrollTop);
  console.log("clientheight: " + winheight);

  if (scrollTop < 10) {
    document.getElementById("img").style.opacity = 0;
  }

  if (scrollTop > 10) {
    document.getElementById("img").style.opacity = 1;
    document.getElementById("img").src =
      "https://cdn.glitch.global/879b5985-0f78-4453-9040-f715dd5c4c82/gato.jpg?v=1677684242796";
  }

  if (scrollTop > 10 + winheight) {
    document.getElementById("img").style.opacity = 1;
    document.getElementById("img").src =
      "https://cdn.glitch.global/879b5985-0f78-4453-9040-f715dd5c4c82/perro.jpg?v=1677684242342";
  }

  if (scrollTop > 10 + winheight * 2) {
    document.getElementById("img").style.opacity = 1;
    document.getElementById("img").src =
      "https://cdn.glitch.global/67955b05-8dad-4355-8026-3159db7fff9f/pato.jpg?v=1678119802466";
  }
}
