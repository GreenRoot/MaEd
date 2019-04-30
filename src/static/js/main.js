$(document).ready(function () {
	function checkVP () {
		let vp = $('meta[name="viewport"]');
		if (screen.width <= 600) {
		vp.attr('content', 'width=425, user-scalable=no');
		} else {
		vp.attr('content', 'width=device-width, user-scalable=no');
		};
		}
		$(window).on('resize', checkVP);
		$(window).trigger('resize')
	$('#sliderCourse').slick({
		dots: false,
		arrows: true,
		fade:true,
		nextArrow: '<div class="pages__next">следующий</div>',
		prevArrow: '<div class="pages__pre">предыдущий</div>',
	});
	$('#slider01').slick({
		dots: false,
		arrows: false,
		fade:true
	});
	$('#outcomesSlider').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 200000
	});
	$('#trainingSlider').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 200000
	});
	$('#modulsWr').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 200000,
	});
	$('#companies').slick({
		dots: false,
		arrows: false,
		arrows: true,
		fade:true,
		nextArrow: '<div class="pages__next">следующий</div>',
		prevArrow: '<div class="pages__pre">предыдущий</div>',
	});
	if (screen.width >=1023) {
		$('#modulsWr').slick('unslick');
	}
});
