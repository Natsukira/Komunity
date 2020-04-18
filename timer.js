
var countDownDate = new Date("Feb 22, 2220 13:44:15").getTime();


var x = setInterval(function() {

  
  var now = new Date().getTime();
    
  
  var distance = countDownDate - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo").style.fontFamily = "Blueprint";

  document.getElementById("demo").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds + "";
    

  if (distance < 0) {
    location.replace("https://twitter.com/KerbalFrench")

    clearInterval(x);
    demo.parentNode.removeChild(demo);

  }
}, 1000);