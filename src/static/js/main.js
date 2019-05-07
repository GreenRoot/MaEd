var eventName = 'click';
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
		arrows: true,
				nextArrow: '<div id="pages__next_teach" class="pages__next">следующий</div>',
		prevArrow: '<div id="pages__pre_teach" class="pages__pre">предыдущий</div>'
	});
		$('#pages__next_teach').on('click',function(){
				var num = $('#outcome-num').html();      	
				if(num == 8){
					num = 1;
				}else{
					num++;
				}
			$('#outcome-num').html(num);
		});
 	 $('#pages__pre_teach').on('click',function(){
				var num = $('#outcome-num').html();      	
				if(num == 1){
					num = 8;
				}else{
					num--;
				}
			$('#outcome-num').html(num);
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

	//Новый код
	
		//SVG Rotaiting
		$('#points, .features__title-custom, .features__title-custom:after, .features__title-custom:before, .features__text-custom').mouseover(function(){
				$('#path-id').css('transition','all 20s linear');        
				var lo = $('#path-id').css('stroke-dashoffset');
				console.log(lo + ': получил');
				lo = parseFloat(lo, 10);
				console.log(lo + ': преобразовал');
				lo -= 2000;
				console.log(lo + ': отправил');
				$('#path-id').css('stroke-dashoffset', (lo + "px"));
		});
		$('#points, .features__title-custom, .features__title-custom:after, .features__title-custom:before, .features__text-custom').mouseout(function(){
			var ak = $('#path-id').css('stroke-dashoffset');
			$('#path-id').css('stroke-dashoffset', ak);
			$('#path-id').css('transition','all .1s linear');
		});
	
		$('a[href^="#"]').click(function(){
				var el = $(this).attr('href');
				$('html,body').animate({
						scrollTop: $(el).offset().top-130}, 1000);
				return false;
	});
	
		//макси на тел
		var phoneMask = IMask(
		document.getElementById('phone-mask'), {
			mask: '+{7} (000) 000-00-00'
		});
	
		var phoneMask1 = IMask(
		document.getElementById('phone-mask1'), {
			mask: '+{7} (000) 000-00-00'
		});
	
		var phoneMask2 = IMask(
		document.getElementById('phone-mask2'), {
			mask: '+{7} (000) 000-00-00'
		});
	
	
		//Отправка формы
		$( "form" ).on( "submit", function( event ) {
			event.preventDefault();
			console.log( $(this).serializeArray() );
			var data = $(this).serializeArray();
			$.ajax({
						type: 'POST',
						url: "mailpost.php",
						data: $.param(data),
						contentType: "application/x-www-form-urlencoded;charset=UTF-8",
						beforeSend: function(){
						},
						success: function(s){              	
								console.log(s);
								$('input:checked').prop('checked', false);
								$('input').val("");
								$.fancybox.open({src  : '#thenks', type : 'inline',});
						}
			});
		});	

	
	//слайлер с видосами 
	var testimonialsCount = $('.testimonial-item').length;
		var testimonialsCountPrev = testimonialsCount-1;
		$('.testimonials-wrap').each(function(){
				var currentActiveTestimonial = $('.testimonial-item__active').data('review-count');

				currentActiveTestimonial++;
				$('.testimonial-item[data-review-count="'+ currentActiveTestimonial +'"]').addClass('testimonial-item__second');
				currentActiveTestimonial++;
				$('.testimonial-item[data-review-count="'+ currentActiveTestimonial +'"]').addClass('testimonial-item__third');
		});
		$('.testimonials-paggination__page').on(eventName, function(){
				if (!$(this).hasClass('active')) {
						$('.testimonials-paggination__page').removeClass('active');
						$(this).addClass('active');
						var currentTestimonal = $(this).data('testimonials-page');
						if (currentTestimonal == testimonialsCount) {
								$('.testimonials-paggination__next').addClass('next-end');
								$('.testimonials-paggination__prev').removeClass('prev-end');
						} else if (currentTestimonal == 1) {
								$('.testimonials-paggination__prev').addClass('prev-end');
								$('.testimonials-paggination__next').removeClass('next-end');
						}

						$('.testimonial-item__second').removeClass('testimonial-item__second');
						$('.testimonial-item__third').removeClass('testimonial-item__third');
						$('.testimonial-item[data-review-count="'+currentTestimonal+'"]').addClass('testimonial-item__second');

						if (currentTestimonal == testimonialsCountPrev) {
								currentTestimonal++;
								$('.testimonial-item[data-review-count="' + currentTestimonal + '"]').addClass('testimonial-item__third');
								currentTestimonal = 1;
								$('.testimonial-item[data-review-count="' + currentTestimonal + '"]').addClass('testimonial-item__four');
						} else if ((currentTestimonal + 1) > testimonialsCount) {
								currentTestimonal = 1;
								$('.testimonial-item[data-review-count="' + currentTestimonal + '"]').addClass('testimonial-item__third');
								currentTestimonal++
								$('.testimonial-item[data-review-count="' + currentTestimonal + '"]').addClass('testimonial-item__four');
						} else {
								currentTestimonal++;
								$('.testimonial-item[data-review-count="'+currentTestimonal+'"]').addClass('testimonial-item__third');
								currentTestimonal++;
								$('.testimonial-item[data-review-count="'+currentTestimonal+'"]').addClass('testimonial-item__four');
						}

						$('.testimonial-item__active').addClass('testimonial-item__hide');
						setTimeout(function(){
								$('.testimonial-item__active').removeClass('testimonial-item__hide');
								$('.testimonial-item__active').removeClass('testimonial-item__active');
								$('.testimonial-item__second').removeClass('testimonial-item__second').addClass('testimonial-item__active');
								$('.testimonial-item__third').removeClass('testimonial-item__third').addClass('testimonial-item__second');
								$('.testimonial-item__four').removeClass('testimonial-item__four').addClass('testimonial-item__third');
						}, 120)
				}
		});
		$('.testimonials-paggination__next').on(eventName, function(){
				if ($(this).hasClass('next-end')) {
						$('.testimonials-paggination__page[data-testimonials-page="1"]').trigger(eventName);
						$('.testimonials-paggination__next').removeClass('next-end');
				} else {
						$('.testimonials-paggination__page.active').parents().next('li').find('a').trigger(eventName);
				}
		});
		$('.testimonials-paggination__prev').on(eventName, function(){
				if ($(this).hasClass('prev-end')) {
						$('.testimonials-paggination__page[data-testimonials-page="'+testimonialsCount+'"]').trigger(eventName);
						$('.testimonials-paggination__prev').removeClass('prev-end');
				} else {
						$('.testimonials-paggination__page.active').parents().prev('li').find('a').trigger(eventName);
				}
		});
		$('body').on(eventName, '.testimonial-item__second', function(){
				var secondCount = $(this).data('review-count');
				$('.testimonials-paggination__page[data-review-count="'+secondCount+'"]').trigger(eventName);
		})
		$(".testimonials-wrap").on("touchstart", function(event){
				var xClick = event.originalEvent.touches[0].pageX;
				$(this).one("touchmove", function(event){
						var xMove = event.originalEvent.touches[0].pageX;
						if( Math.floor(xClick - xMove) > 8 ){
								$('.testimonials-paggination__next').trigger(eventName);
						}
						else if( Math.floor(xClick - xMove) < -8 ){
								$('.testimonials-paggination__prev').trigger(eventName);
						}
				});
				$(".testimonials-wrap").on("touchend", function(){
						$('.testimonial-block').off("touchmove");
				});
		});

// паралаксы
	var droid = document.getElementById('droid');
	var tabletBlue = document.getElementById('tabletBlue');
	var tabletRed = document.getElementById('tabletRed');
	var droidParallaxInstance = new Parallax(droid, {relativeInput: true});
	var tabletBlueParallaxInstance = new Parallax(tabletBlue, {relativeInput: true});
	var tabletRedParallaxInstance = new Parallax(tabletRed, {relativeInput: true});
});
