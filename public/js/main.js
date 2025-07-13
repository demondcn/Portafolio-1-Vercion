/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 

/* El código crea una expresión de función invocada inmediatamente (IIFE) que toma el objeto jQuery
como parámetro ($). Esto se hace para garantizar que el símbolo $ se pueda utilizar como abreviatura
del objeto jQuery dentro de la función. */
(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})


	/*----------------------------------------------------*/
	/*	Sticky Navigation
	------------------------------------------------------*/
/* El código agrega un detector de eventos de desplazamiento al objeto de ventana. Cuando el usuario se
desplaza, se ejecuta la función dentro del detector de eventos. */
   $(window).on('scroll', function() {

		var y = $(window).scrollTop(),
		    topBar = $('header');
     
	   if (y > 1) {
	      topBar.addClass('sticky');
	   }
      else {
         topBar.removeClass('sticky');
      }
    
	});
	

	/*-----------------------------------------------------*/
  	/* Mobile Menu
   ------------------------------------------------------ */  
/* El código es responsable de crear una funcionalidad de menú móvil. */
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   toggleButton.on('click', function(event){
		event.preventDefault();

		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
	});

  	if (toggleButton.is(':visible')) nav.addClass('mobile');

  	$(window).resize(function() {
   	if (toggleButton.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('#main-nav-wrap li a').on("click", function() {   

   	if (nav.hasClass('mobile')) {   		
   		toggleButton.toggleClass('is-clicked'); 
   		nav.fadeOut();   		
   	}     
  	});


   /*----------------------------------------------------*/
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------*/
/* El código crea un punto de referencia para cada sección de la página. Los waypoints se activan
cuando el usuario se desplaza hasta un determinado punto de la página. */
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'

	});


	/*----------------------------------------------------*/
  	/* Flexslider
  	/*----------------------------------------------------*/
/* Este código inicializa el complemento Flexslider en el elemento con la identificación
"testimonial-slider". El complemento Flexslider es un complemento deslizante jQuery responsivo que
le permite crear una presentación de diapositivas con varias opciones de personalización. */
  	$(window).load(function() {

	   $('#testimonial-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: "",
	      animation: 'slide',
	      controlNav: true,
	      directionNav: true,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false,
	      touch: true,
	   });

   });


	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------*/
/* El fragmento de código agrega un efecto de desplazamiento suave a los elementos con la clase
"smoothscroll". Cuando se hace clic en uno de estos elementos, se evita el comportamiento
predeterminado del evento de clic (e.preventDefault()). */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  

   /*----------------------------------------------------*/
	/*  Placeholder Plugin Settings
	------------------------------------------------------*/ 

/* El código `$('input, textarea, select').placeholder()` utiliza la biblioteca jQuery para aplicar un
texto de marcador de posición a los elementos de entrada, textarea y select. El texto del marcador
de posición es un texto temporal que se muestra dentro del campo de entrada o área de texto antes de
que el usuario ingrese cualquier valor. Esto ayuda a proporcionar una pista o ejemplo de la entrada
esperada al usuario. */
	$('input, textarea, select').placeholder()  


	/*---------------------------------------------------- */
   /* ajaxchimp
	------------------------------------------------------ */

	// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
/* Este código utiliza el complemento jQuery ajaxChimp para enviar un formulario a una lista de
suscripción de MailChimp. */
	var mailChimpURL = 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d'

	$('#mc-form').ajaxChimp({

		language: 'es',
	   url: mailChimpURL

	});

	// Mailchimp translation
	//
	//  Defaults:
	//	 'submit': 'Submitting...',
	//  0: 'We have sent you a confirmation email',
	//  1: 'Please enter a value',
	//  2: 'An email address must contain a single @',
	//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
	//  4: 'The username portion of the email address is invalid (the portion before the @: )',
	//  5: 'This email address looks fake or invalid. Please enter a real email address'

/* El código `$.ajaxChimp.translations.es` configura las traducciones de los mensajes que se mostrarán
al utilizar el complemento ajaxChimp para los formularios de suscripción de MailChimp. */
	$.ajaxChimp.translations.es = {
	  'submit': 'Submitting...',
	  0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
	  1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
	  2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
	}


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
/* El código `$(".fluid-video-wrapper").fitVids();` utiliza el complemento FitVids para hacer que los
videos respondan. Se dirige a elementos con la clase "fluid-video-wrapper" y les aplica la
funcionalidad FitVids. Este complemento ajusta el tamaño de los videos para que se ajusten al ancho
de su contenedor, asegurando que se muestren correctamente en diferentes tamaños de pantalla y
dispositivos. */
  	$(".fluid-video-wrapper").fitVids();

 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */ 
/* El fragmento de código define variables que controlan el comportamiento de un botón "volver al
principio". */
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
/* Este código agrega un detector de eventos de desplazamiento al objeto de ventana. Cuando el usuario
se desplaza, se ejecuta la función dentro del detector de eventos. */
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

	});		

})(jQuery);


// sonido del video
/* El código se encarga de controlar el sonido de un elemento de vídeo en una página web. */
let video = document.getElementById('video-background'); // Obtiene el elemento de video con el id 'video-background' y lo almacena en la variable 'video'.

let soundToggle = document.getElementById('sound-toggle'); // Obtiene el elemento de alternancia de sonido con el id 'sound-toggle' y lo almacena en la variable 'soundToggle'.

soundToggle.addEventListener('click', function() { // Agrega un event listener al elemento 'soundToggle' para que se active cuando se hace clic en él.
    if (video.muted) { // Comprueba si el video está en modo silencio (muted).
        video.muted = false; // Si el video está en modo silencio, lo desactiva (no silencio).
        soundToggle.classList.remove('sound-off'); // Remueve la clase 'sound-off' del botón de alternancia de sonido.
        soundToggle.classList.add('sound-on'); // Agrega la clase 'sound-on' al botón de alternancia de sonido.
    } else { // Si el video no está en modo silencio.
        video.muted = true; // Establece el video en modo silencio.
        soundToggle.classList.remove('sound-on'); // Remueve la clase 'sound-on' del botón de alternancia de sonido.
        soundToggle.classList.add('sound-off'); // Agrega la clase 'sound-off' al botón de alternancia de sonido.
    }
});