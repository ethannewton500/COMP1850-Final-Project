var slideIndex1 = 0;
var slideIndex2 = 0;

showSlides1();
showSlides2();

function showSlides1() {
    var i;
    var slides = document.getElementsByClassName("my-slides1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {
        slideIndex1 = 1
    }
    slides[slideIndex1 - 1].style.display = "block";
    setTimeout(showSlides1, 3000); // Change image every 4 seconds
}

function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("my-slides2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {
        slideIndex2 = 1
    }
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides2, 3000); // Change image every 4 seconds
}