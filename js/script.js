var slideIndex = 1;
showSlides (slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides (slideIndex = n);
}

function showSlides(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slide = document.getElementByClassName("slider_content");
	var dots = document.getElementByClassName("dot");

	if (n > slider.length) {
		slideIndex = 1 
	} 
	if (n < 1) {
		slideIndex=slider.length
	}
	for (i = 0; i < slides.length ; i++) {
		slides[i].sthyle.display = "none";
	}
	for (i = 0; i < dots.length ; i++) {
		dots[i].className= dots[i].className.replace("active" , "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className+= "active";
}


