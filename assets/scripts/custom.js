"use strict";
console.log("JSs");

$(document).ready(function(){
        $('.burger').click(function(){
          $('.nav').toggleClass('show');
        });
      });


// Funkcija pakelianti langą į viršų
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("iVirsu").style.display = "block";
  } else {
    document.getElementById("iVirsu").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}








// Funkcija rūšiuojanti nuo A iki Z 
function sortListA_Z() {
  var list, i, switching, shouldSwitch;
  list = document.getElementsByClassName("picture");
  switching = true;
  while (switching) { 
    switching = false;
    for (i = 0; i < (list.length - 1); i++) { 
      shouldSwitch = false;
      if (list[i].getElementsByTagName("h2")[0].innerHTML.toLowerCase() > list[i + 1].getElementsByTagName("h2")[0].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      list[i].parentNode.insertBefore(list[i + 1], list[i]);
      switching = true;
    }
  }
}




// Funkcija rūšiuojanti nuo Z iki A
function sortListZ_A() {
  var list, i, switching, shouldSwitch;
  list = document.getElementsByClassName("picture");
  switching = true;
    while (switching) {
      switching = false;
      for (i = 0; i < (list.length - 1); i++) {
        shouldSwitch = false;
        if (list[i].getElementsByTagName("h2")[0].innerHTML.toLowerCase() < list[i + 1].getElementsByTagName("h2")[0].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      list[i].parentNode.insertBefore(list[i + 1], list[i]);
      switching = true;
    }
  }
}



// Funkcija rūšiuojanti nuo pagal IMDB rating'ą.
function sortListImdb(){ 
  var list, switching, b, i, shouldSwitch, b1;
  switching = true;
  list = document.getElementsByClassName("picture");
  while (switching) {
    switching = false;
    for ( i = 0; i < (list.length - 1); i++) { 
      b = parseFloat(list[i].dataset.rating); 
      b1 = parseFloat(list[i + 1].dataset.rating);

      shouldSwitch = false; 
      if (b < b1){ 
        shouldSwitch = true;
        break;
      }
    }
    if(shouldSwitch){
      list[i].parentNode.insertBefore(list[i + 1], list[i]);
      switching = true;
    }
  }
}





//funkcija pridedanti fadein anmaciją, schrolinimo metu
  ;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));
  $(".testavimas").inViewport(function(px){
    if(px) $(this).addClass($(this).data("animation-classes")) ; console.log($(this).data("animation-classes"));
});







