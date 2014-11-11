$(document).ready(function(){
	smoothScroll.init({
		speed: 2000,
		easing: 'easeInOutCubic',
		offset: 0,
		updateURL: false,
		callbackBefore: function ( toggle, anchor ) {},
		callbackAfter: function ( toggle, anchor ) {}
	});
	$('#devices').parallax("0", 0.4);
	$('#second').parallax("50%", 0.1);
	$('.bg').parallax("50%", 0.4);
	$('#third').parallax("50%", 0.3);
});
