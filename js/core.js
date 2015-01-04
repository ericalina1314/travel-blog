$(document).ready(function(){
	$('.bg-slider').slick({
	  autoplay: true,
	  autoplaySpeed: 1000,
	  arrows: false,
	  pauseOnHover: false,
	  fade: true,
	  cssEase: 'linear',
	  speed: 3000
	});
	new WOW().init();
});

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 2000);
});