//DOM
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
  console.log(link);
});
*/

// obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

// Recorrelos

links.forEach(function(link){

    // Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
       ev.preventDefault();
       let content = document.querySelector('.content');

       // Quitar las clases de animacion que ya tiene
       content.classList.remove("fadeInDown")
       content.classList.remove("animated")
       
       // Agregar clases para animar su salida fadeOutUp
       content.classList.add("fadeOutUp")
       content.classList.add("animated")
       
       setTimeout(function(){
          location.href = "/boletines";
       },600);
       

       return false;
    });
});




