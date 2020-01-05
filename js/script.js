(function($, undefined){
    $(function(){

    	// menu
    	var checkbox = $('.checkbox');
    	var daMenu = $('#daMenu');

		checkbox.on('click', function(){
	    	daMenu.slideToggle();
		});

		//banner-sliders 
		$('.banner-sliders').slick({
	      dots: false,
	      arrows: false,
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 5000,
		  fade: true,
		  
		});

		//novosti 
		$('.novosti-sliders').slick({
	      dots: true,
	      arrows: true,
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: false,
		  autoplaySpeed: 5000,
		  fade: true,
		  dotsClass: 'novosti-dots',
		  nextArrow: '<button class="da-next-novosti" aria-hidden="true"><img src="images/right.png"></button>',
          prevArrow: '<button class="da-prev-novosti" aria-hidden="true"><img src="images/right.png"></button>',
		});

		//reviews 
		$('.reviews-sliders').slick({
	      dots: false,
	      arrows: true,
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: false,
		  autoplaySpeed: 5000,
		  fade: false,
		  dotsClass: 'reviews-dots',
		  nextArrow: '<button class="da-next-reviews" aria-hidden="true"><img src="images/reviews/reviews-left.png"></button>',
          prevArrow: '<button class="da-prev-reviews" aria-hidden="true"><img src="images/reviews/reviews-right.png"></button>',
		  responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },

		  ]

		});


		//lichnyy-kabinet
		$('.lichnyy-kabinet').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalKabinet')
						.css('display', 'block')
						.animate({opacity: 1, top: '40%'}, 400);
			});
		});

		// Консультация
		$('.link-konsultatsiya').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalKonsultatsiya')
						.css('display', 'block')
						.animate({opacity: 1, top: '40%'}, 400);
			});
		});
	
		// Кредит «Премьер»
		$('.link-kredit-premyer').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalKreditPremyer')
						.css('display', 'block')
						.animate({opacity: 1, top: '40%'}, 400);
			});
		});

		// Кредит «Пора действовать»
		$('.link-kredit-pora-deystvovat').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalKreditPoraDeystvovat')
						.css('display', 'block')
						.animate({opacity: 1, top: '40%'}, 400);
			});
		});

		// Кредит «Семейный»
		$('.link-kredit-semeyny').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalKreditSemeyny')
						.css('display', 'block')
						.animate({opacity: 1, top: '40%'}, 400);
			});
		});

		// Вклад «Максимальный доход 7.8%»
		$('.link-vklad-maksimalny-dokhod').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalVkladMaksimalnyDokhod')
						.css('display', 'block')
						.animate({opacity: 1, top: '40%'}, 400);
			});
		});

		// Вклад «Инвестиционный» 
		$('.link-vklad-investitsionny').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalVkladInvestitsionny')
						.css('display', 'block')
						.animate({opacity: 1, top: '40%'}, 400);
			});
		});

		// Вклад «Капитальный» 
		$('.link-vklad-kapitalny').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalVkladKapitalny')
						.css('display', 'block')
						.animate({opacity: 1, top: '40%'}, 400);
			});
		});

		// Капитальная карта
		$('.link-karta-kapitalnaya').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalKartaKapitalnaya')
						.css('display', 'block')
						.animate({opacity: 1, top: '40%'}, 400);
			});
		});

		// Кредитная карта
		$('.link-karta-kreditnaya').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalKartaKreditnaya')
						.css('display', 'block')
						.animate({opacity: 1, top: '40%'}, 400);
			});
		});

		// Пенсионная карта
		$('.link-karta-pensionnaya').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalKartaPensionnaya')
						.css('display', 'block')
						.animate({opacity: 1, top: '40%'}, 400);
			});
		});

		// Страхование «Оптима»
		$('.link-strakhovaniye').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalStrakhovaniye')
						.css('display', 'block')
						.animate({opacity: 1, top: '40%'}, 400);
			});
		});


		//close
		$('.modal-close, .overlay').click( function(){
			$('#thanks, #kontakty, #modalKabinet, #modalKonsultatsiya, #modalKreditPremyer, #modalKreditPoraDeystvovat, #modalKreditSemeyny, #modalVkladMaksimalnyDokhod, #modalVkladInvestitsionny, #modalVkladKapitalny, #modalKartaKapitalnaya, #modalKartaKreditnaya, #modalKartaPensionnaya, #modalStrakhovaniye').animate({opacity: 0, top: '40%'}, 400,
					function(){
						$(this).css('display', 'none');
						$('.overlay').fadeOut(200);
					}
			);
		});

		//mail
	    $('#form, #formKonsultatsiya, #formlKreditPremyer, #formKreditPoraDeystvovat, #formKreditSemeyny, #formVkladMaksimalnyDokhod, #formVkladInvestitsionny, #formVkladKapitalny, #formKartaKapitalnaya, #formKartaKreditnaya, #formKartaPensionnaya, #formStrakhovaniye').submit(function() {
	    $.ajax({
	      type: "POST",
	      url: "mail.php",
	      data: $(this).serialize()
	    }).done(function() {
	      $(this).find("input").val("");

	      $('#modalKonsultatsiya, #modalKreditPremyer, #modalKreditPoraDeystvovat, #modalKreditSemeyny, #modalVkladMaksimalnyDokhod, #modalVkladInvestitsionny, #modalVkladKapitalny, #modalKartaKapitalnaya, #modalKartaKreditnaya, #modalKartaPensionnaya, #modalStrakhovaniye').css('display', 'none');
	      $('#thanks')
				.css('display', 'block')
				.animate({opacity: 1, top: '50%'}, 400);

	      $('#form, #formKonsultatsiya, #formlKreditPremyer, #formKreditPoraDeystvovat, #formKreditSemeyny, #formVkladMaksimalnyDokhod, #formVkladInvestitsionny, #formVkladKapitalny, #formKartaKapitalnaya, #formKartaKreditnaya, #formKartaPensionnaya, #formStrakhovaniye').trigger("reset");

	    });
	    return false;
	    });

	    //maskedinput
	    var maskedinput = $('.maskedinput');  
	    maskedinput.mask('+7(999) 999-9999');

	    // tabs
	    $('.da-tabs__tab').on('click', 'p:not(.active)', function() {
	     $(this)
	      .addClass('active').siblings().removeClass('active')
	      .closest('.da-tabs__wrap').find('.da-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	    });	

	    // menuKontakty
		var menuLink = $('#menuKontakty');
		menuLink.on("click", function(event) {

		        event.preventDefault();

		        $('#kontakty')
					.css('display', 'block')
					.animate({opacity: 1}, 100);

		        var currentBlock = $(this).attr("href"),
		            currentBlockOffset = $(currentBlock).offset().top;

		        $("html, body").animate({
		            scrollTop: currentBlockOffset - 20
		        }, 500);

		});

		// menuListin
		var menuLink = $('#menuListin');
		menuLink.on("click", function(event) {

		        event.preventDefault();

		        var currentBlock = $(this).attr("href"),
		            currentBlockOffset = $(currentBlock).offset().top;

		        $("html, body").animate({
		            scrollTop: currentBlockOffset - 20
		        }, 500);

		});

		
    });
})(jQuery);
