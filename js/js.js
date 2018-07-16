$(window).load(function(){
	$('.parallax').parallax({offsetY:-200});
	$('#loading').css('transform','scale(1.4)');
	$('#loading').fadeOut('slow', function(){
		$('section').removeClass('in');
	});
});
	
$(document).ready(function(){
	//INNER SLIDER
			$('.roundabout_box ul').roundabout({
				duration: 500,
				minScale: 0.8,
				autoplay: true,
				autoplayDuration: 3000,
				minOpacity: 0,
				maxOpacity: 1,
				reflect: true,
				startingChild: 1,
				autoplayInitialDelay: 5000,
				autoplayPauseOnHover: true,
				enableDrag: true
			});
	//MENU
    $('.btnMenu').click(function(){
        var clase = $(this).attr('class');
		if(clase == 'btnMenu'){
			$(this).addClass('open');
			$('nav').fadeIn('fast');
			var elem = $('nav .botonera')
			centrarV(elem);	
		}else{
			$(this).removeClass('open');
			$('nav').fadeOut('fast');	
		}
    });
	//BTNMENUHOME
	$('.btnMenuHome').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		$('.btnMenu').removeClass('open');
		$('nav').fadeOut('fast');	
		});
	//BTNMENUABOUTUS
	$('.btnMenuAboutUs').click(function(){
		$('.btnMenu').removeClass('open');
		$('nav').fadeOut('fast');	
		$("html, body").animate({ scrollTop: $('#main').height() }, 1000);
		});
	//BTNMENUSERVICE
	$('.btnMenuServices').click(function(){
		$("html, body").animate({ scrollTop: $('#about_us').height()+$('#main').height()+260 }, 1000);
		$('.btnMenu').removeClass('open');
		$('nav').fadeOut('fast');	
		});
	//BTNMENUPORTFOLIO
	$('.btnMenuPortfolio').click(function(){
		$("html, body").animate({ scrollTop: $('#portfolio').height()+$('#about_us').height()+$('#main').height()+260 }, 1000);
		$('.btnMenu').removeClass('open');
		$('nav').fadeOut('fast');	
		});
	//BTNMENUCONTACT
	$('.btnMenuContact').click(function(){
		$("html, body").animate({ scrollTop: $('#services').height()+$('#portfolio').height()+$('#about_us').height()+$('#main').height()+260 }, 1000);
		$('.btnMenu').removeClass('open');
		$('nav').fadeOut('fast');	
		});
	//BLUR
	$('.botonera li').hover(
         function () {
			$('.botonera li').addClass('blur');
            $(this).removeClass('blur');
         }, 
         function () {
			$('.botonera li').removeClass('blur');
         }
     );
	//INICIO
	var ex = $('.centered').length;
	for(var i=0; i < ex; i++){
		var elem = $('.centered:eq('+i+')');
		centrarV(elem);		
	}
	function resize(){
	  for(var i=0; i < ex; i++){
		var elem = $('.centered:eq('+i+')');
		centrarV(elem);		
	  }	
	}
	var Resize;
	$(window).resize(function() {
		clearTimeout(Resize);	
		Resize = setTimeout(resize, 200);	
	});
	//ARROWDOWN	
    $('.arrowDown').click(function(){
	$("html, body").animate({ scrollTop: $('#main').height() }, 1000);
    });
});
//Centrar vertical
function centrarV(e){
	var altoCont = $(window).height();
	var altoE = e.height();
	var margen = (altoCont - altoE) / 2;
	e.css('margin-top', margen+'px')
}