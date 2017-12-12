
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/*dropdown menu reference: https://www.w3schools.com/howto/howto_js_dropdown.asp*/
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// end of dropdown js code


// slideshow! - resources page - academics pages
//credit to https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
       for (i = 0; i < dots.length; i++) {
           dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    // changes displayed image every x amount of seconds
    setTimeout(showSlides, 8000); 
}



// text change - resources - health services - on mouse hover
//  credit to http://jsfiddle.net/UWy4f/
 function changeText(text) {
    var display = document.getElementById('text-display');
    display.innerHTML = "";
    display.innerHTML = text;
}
  function changeback(text) {
    var display = document.getElementById('text-display');
    display.innerHTML = "";
    display.innerHTML = text;
}









//I DID SOME SECRET STUFF AND I'M PROUD OF IT. - Elijah
// This code took me way took long to get fully operational.
// But it is my first real moment of pride in JavaScript.
// So that makes it worth it.
document.getElementById("secrect-button").addEventListener("click", revealSecrect);
  function revealSecrect() {
    document.getElementById("secrect-button").innerHTML = "Join the Hampshire Seceret Samurai Society. For more information please contact sikOP@hampshire.edu. HSSS is waiting for you.";
document.getElementById("secrect-button").id = "secrect-button3";
}
  document.getElementById("secrect-button2").addEventListener("click", revealSecrect2);
function revealSecrect2() {
    document.getElementById("secrect-button3").innerHTML = "I made it all up. Sorry. AND I FNALLY GOT THIS TO WORK! YES.";
  }
   document.getElementById("returnSecretClick").addEventListener("click", returnSecret);
function returnSecret() {
    document.getElementById("secrect-button3").innerHTML = "Outdoor Programs, Recreation, and Athletics";
document.getElementById("secrect-button3").id = "secrect-button";
  }

  