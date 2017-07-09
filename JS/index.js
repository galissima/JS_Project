
var temp =0;

//document.getElementById("sound").play(); 
 $(document).ready(function(){
 	 $("h1").fadeIn(2000);
   	 $("#story1").fadeIn(13000);
   setTimeout(function(){
      $("#story1").fadeOut(3000);
      },17000);
 });

setTimeout(function(){
   	 $("h2").fadeIn(2000);
        $("h2").fadeOut(2000);
 },21000);

setTimeout(function(){
   	 $("#story2").fadeIn(3000);
        $("#story2").fadeOut(3000);
 },26000);

setTimeout(function(){
   	 $("#story3").fadeIn(3000);
        $("#story3").fadeOut(3000);
 },33000);

setTimeout(function(){
   	 $("#story4").fadeIn(4000);
        $("#story4").fadeOut(4000);
 },40000);
	
setTimeout(function(){
   	 $("#story5").fadeIn(3000);
        $("#story5").fadeOut(3000);
 },48000);
setTimeout(function(){
   	 $("#story6").fadeIn(4000);
        $("#story6").fadeOut(4000);
 },57000);
setTimeout(function(){
   	 $("h3").fadeIn(10000);
        $("h3").fadeOut(18000);
 },66000);
setTimeout(function(){
window.location.href="game.html";
 },103000);
