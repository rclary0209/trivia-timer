window.onload = function() {

function startquiz() {
  alert ("You've started!")
  runTimer (displayTimer)}
$("#start").on("click", startquiz);



// var timeLeft = 0;
// var increment;
// function runTimer() {
//     increment = setInterval(decrement, 30000);
// };

function countDown(secs,elem) {
  var element = document.getElementById(elem);
  element.innerHTML = secs; 
if (secs < 1) {
  clearTimeout(timer);
  element.innerHTML= '<h2>Times Up!</h2>';
  element.innerHTML += '<a href = "#">Check Answers</a>';
}
  
  secs--;

  var timer = setTimeout ('countDown ('+secs+',"'+elem+'")',1000);
}
countDown(30, "status")

}




jQuery('#auto_renew_true1').click(function(){
  jQuery('#auto_renew_true1').attr('checked', true);    
});   

jQuery('#auto_renew_true2').click(function(){
  jQuery('#auto_renew_true2').attr('checked', true);    
});   

jQuery('#auto_renew_true3').click(function(){
  jQuery('#auto_renew_true3').attr('checked', true);    
});   
jQuery('#auto_renew_true4').click(function(){
  jQuery('#auto_renew_true4').attr('checked', true);    
});   
jQuery('#auto_renew_true5').click(function(){
  jQuery('#auto_renew_true5').attr('checked', true);    
});   










function checkAnswers(){				
  if(document.getElementById("auto_renew_true").checked)
    alert("You have selected True.");
  else
    alert("You have selected False.");
}

var start
var startTimer = 0
var counter = 0;


  var timer = select('#timer');
  timer.html(counter);

  function timeIt() {
    counter++;
    timer.html(counter);
  }