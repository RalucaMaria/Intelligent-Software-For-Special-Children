/* function playToba()
{
   var audioToba = document.getElementById("audioToba");
   audioToba.play();
}*/
/*
function playFoarfeca(){

   var audioFoarfeca = document.getElementById("audioFoarfeca");
   audioFoarfeca.play();
}
*/
/*
function playMar(){
   var audioMar = document.getElementById("audioMar");
   audioMar.play();
   }*/
/*function checkIfCorrect()
{
var mar = document.getElementById("marImg");
mar.onclick = function(e) {
window.alert( "BRAVO ! AI RĂSPUNS CORECT! ");
window.location.href = "set101.html";

}
var foarfeca = document.getElementById("foarfecaImg");
foarfeca.onclick = function(e)
{
    window.alert( "MAI ÎNCEARCĂ! " );
}

var toba = document.getElementById("tobaImg");
toba.onclick = function(e)
{
    window.alert( "MAI ÎNCEARCĂ! " );
}

}*/
$(document).ready(function(){
$('#marImg').on('click',function(){
window.alert( "BRAVO ! AI RĂSPUNS CORECT! ");
window.location.href = "set101.html";
});

$('#foarfecaImg').on('click',function(){
window.alert( "MAI ÎNCEARCĂ! " );
});
$('#tobaImg').on('click',function(){
window.alert( "MAI ÎNCEARCĂ! " );
});

$('#imgT').on('click',function(){
var audioToba = $('#audioToba')[0];
  audioToba.play();
});


$('#imgF').on('click',function(){
var audioFoarfeca = $('#audioFoarfeca')[0];
 audioFoarfeca.play();
});

$('#imgM').on('click',function(){
var audioMar = $('#audioMar')[0];
 audioMar.play();
});

});