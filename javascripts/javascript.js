/* BARRA DE NAVEGACION RESPONSIVE*/
function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "myTopnav") {
      x.className += " responsive";
    } else {
      x.className = "myTopnav";
    }
  }