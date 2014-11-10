$(document).ready(function(){
	smoothScroll.init({
		speed: 2000,
		easing: 'easeInOutCubic',
		offset: 0,
		updateURL: false,
		callbackBefore: function ( toggle, anchor ) {},
		callbackAfter: function ( toggle, anchor ) {}
	});
});