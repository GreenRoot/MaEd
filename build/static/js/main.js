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


	//Для кого курс

	$('.chubaka-mini').click(function(){
		$('.maxi-block-chubaka').show();
		$('.maxi-block-c3po').hide();
		$('.maxi-block-r2d2').hide();
		$('.maxi-block-vader').hide();
	});
	$('.c3po-mini').click(function(){
		$('.maxi-block-chubaka').hide();
		$('.maxi-block-c3po').show();
		$('.maxi-block-r2d2').hide();
		$('.maxi-block-vader').hide();
	});
	$('.r2d2-mini').click(function(){
		$('.maxi-block-chubaka').hide();
		$('.maxi-block-c3po').hide();
		$('.maxi-block-r2d2').show();
		$('.maxi-block-vader').hide();
	});
	$('.vader-mini').click(function(){
		$('.maxi-block-chubaka').hide();
		$('.maxi-block-c3po').hide();
		$('.maxi-block-r2d2').hide();
		$('.maxi-block-vader').show();
	});

// Слайдер "8 причин"

	$('.tog-img1').click(function(){
		$('.tog-big-img1').show();
		$('.tog-big-img2').hide();
		$('.tog-big-img3').hide();
		$('.tog-big-img4').hide();
		$('.tog-big-img5').hide();
		$('.tog-big-img6').hide();
		$('.tog-big-img7').hide();
		$('.tog-big-img8').hide();
	});

	$('.tog-img2').click(function(){
		$('.tog-big-img1').hide();
		$('.tog-big-img2').show();
		$('.tog-big-img3').hide();
		$('.tog-big-img4').hide();
		$('.tog-big-img5').hide();
		$('.tog-big-img6').hide();
		$('.tog-big-img7').hide();
		$('.tog-big-img8').hide();
	});

	$('.tog-img3').click(function(){
		$('.tog-big-img1').hide();
		$('.tog-big-img2').hide();
		$('.tog-big-img3').show();
		$('.tog-big-img4').hide();
		$('.tog-big-img5').hide();
		$('.tog-big-img6').hide();
		$('.tog-big-img7').hide();
		$('.tog-big-img8').hide();
	});

	$('.tog-img4').click(function(){
		$('.tog-big-img1').hide();
		$('.tog-big-img2').hide();
		$('.tog-big-img3').hide();
		$('.tog-big-img4').show();
		$('.tog-big-img5').hide();
		$('.tog-big-img6').hide();
		$('.tog-big-img7').hide();
		$('.tog-big-img8').hide();
	});

	$('.tog-img5').click(function(){
		$('.tog-big-img1').hide();
		$('.tog-big-img2').hide();
		$('.tog-big-img3').hide();
		$('.tog-big-img4').hide();
		$('.tog-big-img5').show();
		$('.tog-big-img6').hide();
		$('.tog-big-img7').hide();
		$('.tog-big-img8').hide();
	});

	$('.tog-img6').click(function(){
		$('.tog-big-img1').hide();
		$('.tog-big-img2').hide();
		$('.tog-big-img3').hide();
		$('.tog-big-img4').hide();
		$('.tog-big-img5').hide();
		$('.tog-big-img6').show();
		$('.tog-big-img7').hide();
		$('.tog-big-img8').hide();
	});

	$('.tog-img7').click(function(){
		$('.tog-big-img1').hide();
		$('.tog-big-img2').hide();
		$('.tog-big-img3').hide();
		$('.tog-big-img4').hide();
		$('.tog-big-img5').hide();
		$('.tog-big-img6').hide();
		$('.tog-big-img7').show();
		$('.tog-big-img8').hide();
	});

	$('.tog-img8').click(function(){
		$('.tog-big-img1').hide();
		$('.tog-big-img2').hide();
		$('.tog-big-img3').hide();
		$('.tog-big-img4').hide();
		$('.tog-big-img5').hide();
		$('.tog-big-img6').hide();
		$('.tog-big-img7').hide();
		$('.tog-big-img8').show();
	});
// паралаксы
	var droid = document.getElementById('droid');
	var tabletBlue = document.getElementById('tabletBlue');
	var tabletRed = document.getElementById('tabletRed');
	var droidParallaxInstance = new Parallax(droid, {relativeInput: true});
	var tabletBlueParallaxInstance = new Parallax(tabletBlue, {relativeInput: true});
	var tabletRedParallaxInstance = new Parallax(tabletRed, {relativeInput: true});
});
