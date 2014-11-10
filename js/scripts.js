$(document).ready(function(){
	smoothScroll.init({
		speed: 2000,
		easing: 'easeInOutCubic',
		offset: 0,
		updateURL: false,
		callbackBefore: function ( toggle, anchor ) {},
		callbackAfter: function ( toggle, anchor ) {}
	});
  $('.autoplay').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    fade: true,
    infinite: true,
    cssEase: 'linear',
  });
});