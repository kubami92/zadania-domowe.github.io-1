"use strict";

$(document).ready(function() {
$(document.body).append("<button>Pobierz dane programisty</button>");

$("button").click(function(){
  $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data) {
      $(document.body).append("<div></div>");
      $("div").attr("id","dane-programisty");
    $("div").html(data.imie + "<br>" + data.nazwisko + "<br>" + data.zawod + "<br>" + data.firma);
  });
});






});