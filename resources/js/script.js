
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


// slideshow! -resources page 
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
    // changes images every x amount of seconds
    setTimeout(showSlides, 8000); 
}



// text change - resources - health services - on mouse hover
//  credit to http://jsfiddle.net/UWy4f/
 function changeText(text)
        {
            var display = document.getElementById('text-display');
            display.innerHTML = "";
            display.innerHTML = text;
        }
          function changeback(text)
        {
            var display = document.getElementById('text-display');
            display.innerHTML = "";
            display.innerHTML = text;
        }







