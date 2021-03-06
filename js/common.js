$(document).ready(function() {
	

	$('.menu-toggle').on('click', function() {
		$(this).toggleClass('menu-toggle_close');
		$('.wrapper').toggleClass('wrapper_moved');
		$('body').toggleClass('no-scroll');
	});


	var acc = $('.accordeon__item > .accordeon__title');

	$('.accordeon__item_active>.accordeon__info').slideDown(300);

	acc.on('click', function() {
		if ($(this).parent('.accordeon__item').hasClass('accordeon__item_active')) {
			$(this).next('.accordeon__info').slideUp(300);
			$(this).parent('.accordeon__item').removeClass('accordeon__item_active');
			
		} else {
			$('.accordeon__item').removeClass('accordeon__item_active');
			$('.accordeon__info').slideUp(300);
			$(this).next('.accordeon__info').slideDown(300)
			$(this).parent('.accordeon__item').toggleClass('accordeon__item_active');
			;
		}
	});


	var formInit = $('.price__modal-init');
	var priceModal = $('.price-modal');
	var priceModalClose = $('.price-modal__close');

	

	formInit.on('click', function(e) {
		e.preventDefault();
		priceModal.toggleClass('price-modal_active');
	});

	priceModalClose.on('click',  function(e) {
		e.preventDefault();
		priceModal.removeClass('price-modal_active');	
	});

	$('.certificate__carousel').slick({
		slidesToShow: 3,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
			}
		},{
			breakpoint: 420,
			settings: {
				slidesToShow: 1
			}
		}]
	});


	$('.banner-image').slick({
		slidesToShow: 1,
		asNavFor: $('.banner-text__carousel'),
	});
	$('.banner-text__carousel').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		arrows: false,
		fade: true,
		asNavFor: $('.banner-image'),
	});

	$('.certificate__link').magnificPopup({
	  type: 'image'
	});

	$('.calc-open').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('calc-open_active');
		$('.calc').toggleClass('calc_visible-mobile');
	});
	

	$('.header-categories').waypoint(function() {
		$('.calc').toggleClass('calc_visible');
	});

	$('.contacts').waypoint(function() {
		if($('.calc').hasClass('calc_visible')){
			$('.calc').removeClass('calc_visible');
		} else {
			$('.calc').toggleClass('calc_visible');
		}
		
	}, { offset: '50%' });

		
	$(".phone-num-input").inputmask("+7 (999) 999 99 99");

		
	var rooms = $('#rooms-num');
	var bath = $('#bath-num');

	$('.rooms-minus').on('click', function(e) {
		e.preventDefault();
		if (rooms.val() > 1) {
			rooms.val(Number(rooms.val()) - 1);
			$('.rooms').val(rooms.val()  + '-комнатная');
		} 
				
	});

	$('.rooms-plus').on('click', function(e) {
		e.preventDefault();
		if (rooms.val() < 5) {
			rooms.val(Number(rooms.val()) + 1);
			$('.rooms').val(rooms.val()  + '-комнатная');
		}				
	});

	$('.bathroom-minus').on('click', function(e) {
		e.preventDefault();
		if (bath.val() > 1) {
			bath.val(Number(bath.val()) - 1);
			if (bath.val() == 1) {
				$('.bathroom').val(bath.val()  + ' санузел');
			} else {
				$('.bathroom').val(bath.val()  + ' санузла');
			}
			
		} 
				
	});

	$('.bathroom-plus').on('click', function(e) {
		e.preventDefault();
		if (bath.val() < 3) {
			bath.val(Number(bath.val()) + 1);
			if (bath.val() == 1) {
				$('.bathroom').val(bath.val()  + ' санузел');
			} else {
				$('.bathroom').val(bath.val()  + ' санузла');
			}
		}				
	});

	//********************* New **************************/

	
	$('.page-banner__slider').slick({
		slidesToShow: 1,
		autoplay: true
	});
	

	$('.cleaner-team__more').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('no-scroll');
		$('.include-modal').fadeIn(300);
	});

	$('.include-modal__close').on('click', function(e) {
		e.preventDefault();
		$('.include-modal').fadeOut(300);
		$('body').removeClass('no-scroll');
	});

	$(document).mouseup(function (e) {
	    var container = $(".include-modal");
	    if (container.has(e.target).length === 0){
	        container.fadeOut(300);
	    }
	});
		
	
	
		

});