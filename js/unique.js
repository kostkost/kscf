
	$(document).ready(function(){
		$(".u-header").sticky({topSpacing:0});
	});
	$(document).ready(function() {
		
		setTimeout(function(){
			$('body').addClass('loaded');
			$('h1').css('color','#F9F9F9 ');
		}, 3000);
		
	});

$('[data-toggle="tooltip"]').tooltip({'placement': 'bottom'});

//refresh page on browser resize
/* $(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false);
  }, 200);
});
*/
/*----------------------------- Navigation --------------------------*/
jQuery(window).on('scroll', function (){
    "use strict";

 

    // Scroll to top
    if ($(this).scrollTop() > 200) {
        $('#scroll-to-top').fadeIn('slow');
      } else {
        $('#scroll-to-top').fadeOut('slow');
      }

});



jQuery(document).ready(function( $ ) {
	
	
	
	

  /*------------- Scroll to Top -----------------*/
  $('#scroll-to-top').click(function(){
    $("html,body").animate({ scrollTop: 0 }, 1000);
    return false;
  });


 /*----------- Scroll to Feature Section ----------*/ 
  $('#go-to-next').click(function() {
    $('html,body').animate({scrollTop:$('#about').offset().top - 150}, 1000);
  });


	/* newsletter script */
	jQuery("#newslettersubmit").click(function() {
			jQuery(".error").hide();
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			var emailaddressVal = jQuery("#email-address").val();
			
			if(emailaddressVal == 'Enter your email address') { 
				emailaddressVal = ''; 
			}
			
			//alert(emailaddressVal);
			
			if(emailaddressVal == '') {
				jQuery(".newsletter-message").html('<div class="newsletter-note n-err fade in"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter an email address before submitting.</div>');
				return false; 
			}
			else if(!emailReg.test(emailaddressVal)) {
				jQuery(".newsletter-message").html('<div class="newsletter-note n-err fade in"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter a valid email address.</div>');
				return false; 
			} 
			else {
				emailEntered = escape(jQuery('#email-address').val());
			}

	});
	
	jQuery('#newsletterform').submit(function() {
		jQuery(".newsletter-message").html('<div class="newsletter-note n-conf fade in"><button type="button" class="close" data-dismiss="alert">&times;</button>Adding your email address...</div>');
		jQuery.ajax({
			url: 'includes/store-address.php', // proper url to your "store-address.php" file
			data: 'ajax=true&email=' + emailEntered,
			success: function() {
				jQuery('.newsletter-message').html('<div class="newsletter-note n-conf fade in"><button type="button" class="close" data-dismiss="alert">&times;</button>Congratulations! Check your email for confirmation of your subscription.</div>');
			}
		});
		return false;
	});

	  $('.selectpicker').selectpicker();

/********* Owl single slider *************/


        $('.counter').counterUp({
            delay: 10,
            time: 2000,
        });


	    /*----------- wow animation with support of wow.js and animation.css ----------------*/
	var wow = new WOW(
		  {
		    boxClass:     'wow',      // animated element css class (default is wow)
		    animateClass: 'animated', // animation css class (default is animated)
		    offset:       0,          // distance to the element when triggering the animation (default is 0)
		    mobile:       false       // trigger animations on mobile devices (true is default)
		  }
		);
		wow.init(); 
		

 

  $(".owl_single").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      singleItem:true,
	  pagination:true,
	navigationText : false
	
  });
  
  
  
  $(".owl_single").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      singleItem:true,
	  pagination:false,
	navigationText : false
	
  });

  
  
 var iddiv;
 

 $('.entry').click(function(){
	$('.entry').removeClass('highlight');	
	iddiv = $(this).attr('data-id');
	if($('#'+iddiv).css('display') != 'block' ){
	$('.myentry').hide("slow");
 	$('#'+iddiv).show("slow");
	$(this).removeClass('highlight');	
	$(this).addClass('highlight');
	} else {
	$('#'+iddiv).hide("slow");
	$(this).removeClass('highlight');

 }
 });


 
 $('.timeline .entry:eq(0)').addClass('highlight');
 $('.myprojects .myentry:first-child').css('display','block');

 
 //plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
 
 
 
 
});


$(document).ready(function() {


    var owl = $(".timeline");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 2],
    [600, 3],
    [700, 3],
    [1000, 4],
    [1200, 4],
    [1400, 4],
    [1600, 4]
    ],
	pagination:false,
	addClassActive:true,
    });
	
	
	
$(".timeline-next").click(function(){
    owl.trigger('owl.next');
})
$(".timeline-prev").click(function(){
 owl.trigger('owl.prev');
})
	
	
});

$( document ).ready(function() {

/****** Pie chart ********/

		jQuery(".percentage-light").easyPieChart({
                barColor: "#00a99d",
                trackColor: "rgba(230, 230, 230, 0.5)",
                scaleColor: false,
                lineCap: "round",
                rotate: -90,
                lineWidth: 4,
                size: 140
				});
							
		$(".percentage-light").each(function(){
			var v = $(this).find('canvas').attr('width');
			$(this).parent().css('width',v);
			$(this).parent().find('span').css('line-height', v+'px');
		
		});




		jQuery(".percentage-dark").easyPieChart({
                barColor: "#00a99d",
                trackColor: "rgba(250, 250, 250, 1)",
                scaleColor: false,
                lineCap: "round",
                rotate: -90,
                lineWidth: 4,
                size: 140
				});
							
		$(".percentage-dark").each(function(){
			var v = $(this).find('canvas').attr('width');
			$(this).parent().css('width',v);
			$(this).parent().find('span').css('line-height', v+'px');
		
		});






  // menu toggle
   $( "ul.sub-menu").parent().prepend("<span class='toggle_nav_button'>+</span>");
	
	
/* 	$('.navbar-toggle').click(function(){

$('.navbar.fhmm').slideToggle();

});
 */
	
	
	$('.navbar-toggle').click(function(){
	$('.navbar-header .uh-search').css('height','0');
	$('.uh-search form').css('opacity','0');
	$('.uh-search form').css('visibility','hidden');

	});
	
	
	    // menu toggle
    $( "ul.sub-menu").parent().append("<span class='toggle_nav_button'>+</span>");
    $(".toggle_nav_button").click(
      function(){
        var link = $(this);
        $(this).parent().find("ul.sub-menu").slideToggle('fast', function(){
		$(this).parent().find("ul.sub-menu").find("ul.sub-menu").slideToggle('fast');
          if ($(this).is(':visible')){
            link.text('-');
          } else {
            link.text('+');
          }
        });
      });
	
	


	if ($(window).width() > 1000) {
 var $container = $('.masenory');	
	$container.masonry({
	itemSelector: '.item'
	});
	}  
	
	
	

$(window).resize(function() {

		
		$container.masonry('reloadItems')
	if (jQuery(window).width() > 1000) {

//$('.navbar.fhmm').show();


        $(".toggle_nav_button").parent().find("ul.sub-menu").removeAttr('style');
		$container.masonry({
		itemSelector: '.item'
		});
		$container.masonry('reloadItems')
		} else {
		$container.masonry('destroy')
		//$('.navbar.fhmm').hide();

		}
	

});




 
});



$(document).ready(function(){
var clicked=true;
$(".uh-search span,.search_icon span").on('click', function(){
    if(clicked)
    {
        clicked=true;
		
        $(".uh-search form").css({"opacity": "1"});
        $(".uh-search form").css({"width": "210px"});
        $(".uh-search span").css({"visibility": "hidden"});

        $(".navbar-header .uh-search").css({"height": "auto"});
		$(".uh-search form").css({"visibility": "visible"});
		$(".uh-search form").css({"height": "38px"});
        $(this).css({"color": "#00a99d"});		
		$('.navbar-collapse').removeClass('in');

    }
});
});




$(document).ready(function(){
var clicked=true;
$(".uh-search span,.search_icon span").on('click', function(){
    if(clicked)
    {
        clicked=true;
    }
});
});

$(document).ready(function(){
var clicked=true;
$(".uh-search span,.search_icon span").on('click', function(){
    if(clicked)
    {
        clicked=true;
    }
});
});

(function() {
  $(".s-close").click(function(e) {
    e.preventDefault();
        $(".uh-search form").css({"opacity": "0"});
        $(".uh-search form").css({"height": "0"});
        $(".uh-search form").css({"width": "0"});
		$(".navbar-header .uh-search").css({"height": "0"});
        $(".uh-search span").css({"visibility": "visible"});
  });
})(jQuery);

(function() {
  $(".s-close").click(function(e) {
    e.preventDefault();
        $(".uh-search form").css({"visibility": "hidden"});
  });
})(jQuery);

(function() {
  $(".s-close").click(function(e) {
    e.preventDefault();
        $(".uh-search span").css({"color": "#6E6E6E"});
  });
})(jQuery);

$(document).ready(function(){
var clicked=true;
$(".uh-search-dark span").on('click', function(){
    if(clicked)
    {
        clicked=true;
        $(this).css({"color": "#119087"});
    }
});
});

(function() {
  $(".s-close").click(function(e) {
    e.preventDefault();
        $(".uh-search-dark span").css({"color": "#4fafa7"});
  });
})(jQuery);


$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});


/******** Portfolio Full width ***************/

$(window).load(function(){
    var $container = $('.portfolio_full_width');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});

/****** Clients light ************/

$(document).ready(function() {
    var owl = $(".client_light");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 2],
    [600, 3],
    [700, 3],
    [1000, 5],
    [1200, 6],
    [1400, 6],
    [1600, 6]
    ],
	pagination:false
    });
	
	
	
$(".c-next").click(function(){
    owl.trigger('owl.next');
})
$(".c-prev").click(function(){
 owl.trigger('owl.prev');
})
	
	
});

/****** Clients Dark ************/

$(document).ready(function() {
    var owl = $(".clients_dark");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 2],
    [600, 3],
    [700, 3],
    [1000, 5],
    [1200, 5],
    [1400, 5],
    [1600, 5]
    ],
	pagination:false
    });
	
	
	
$(".cl-next").click(function(){
    owl.trigger('owl.next');
})
$(".cl-prev").click(function(){
 owl.trigger('owl.prev');
})
	
	
});



$(document).ready(function() {
    var owl = $(".shots_dark");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 2],
    [600, 3],
    [700, 3],
    [1000, 4],
    [1200, 4],
    [1400, 4],
    [1600, 4]
    ],
	pagination:false
    });
	
	
	
$(".cl-next").click(function(){
    owl.trigger('owl.next');
})
$(".cl-prev").click(function(){
 owl.trigger('owl.prev');
})
	
	
});



$(document).ready(function() {
    var owl = $(".shots_lite");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 2],
    [600, 3],
    [700, 3],
    [1000, 4],
    [1200, 4],
    [1400, 4],
    [1600, 4]
    ],
	pagination:false
    });
	
		
	
	
$(".timeline-next").click(function(){
    owl.trigger('owl.next');
})
$(".timeline-prev").click(function(){
 owl.trigger('owl.prev');
})
	
	

	
});


/****** Blog Carousel ************/

$(document).ready(function() {

    var owl = $(".owl-blog");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 2],
    [600, 3],
    [700, 3],
    [1000, 3],
    [1200, 3],
    [1400, 3],
    [1600, 3]
    ],
	pagination:false
    });
	
	
	
$(".blog-next").click(function(){
    owl.trigger('owl.next');
})
$(".blog-prev").click(function(){
 owl.trigger('owl.prev');
})
	
	
});

/****** Product Carousel ************/

$(document).ready(function() {
    var owl = $(".recent_product_slider");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 1],
    [700, 2],
    [1000, 3],
    [1200, 4],
    [1400, 4],
    [1600, 4]
    ],
	pagination:false
    });
	
	
	
$(".product-next").click(function(){
    owl.trigger('owl.next');
})
$(".product-prev").click(function(){
 owl.trigger('owl.prev');
})
	
	
});




/****** Product Carousel 3 col ************/

$(document).ready(function() {
    var owl = $(".product_slider_3col");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 1],
    [700, 2],
    [1000, 2],
    [1200, 3],
    [1400, 3],
    [1600, 3]
    ],
	pagination:false
    });
	
	
	
$(".product-next").click(function(){
    owl.trigger('owl.next');
})
$(".product-prev").click(function(){
 owl.trigger('owl.prev');
})
	
	
});



/****** Clients light ************/

$(document).ready(function() {
    var owl = $(".owl_clients");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 2],
    [600, 3],
    [700, 3],
    [1000, 4],
    [1200, 6],
    [1400, 6],
    [1600, 6]
    ],
	pagination:false
    });
	
	
	
$(".owl-next").click(function(){
    owl.trigger('owl.next');
})
$(".owl-prev").click(function(){
 owl.trigger('owl.prev');
})
	
	
});



$(document).ready(function() {
    var owl = $("#owl-work");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 2],
    [700, 2],
    [1000, 3],
    [1200, 4],
    [1400, 4],
    [1600, 4]
    ],
	pagination:false
    });
	
	
$(".work-next").click(function(){
    owl.trigger('owl.next');
})
$(".work-prev").click(function(){
 owl.trigger('owl.prev');
})

});

/********* Testimonial one column */

$(document).ready(function() {

 var owl = $(".testimonial_one");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 2],
    [700, 2],
    [1000, 2],
    [1200, 3],
    [1400, 3],
    [1600, 3]
    ],
	pagination:false,
    });
	
	$(".next2").click(function(){
    owl.trigger('owl.next');
})
$(".prev2").click(function(){
 owl.trigger('owl.prev');
})

});


/********* Testimonial Single */

$(document).ready(function() {

 var owl = $(".testimonial_single");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 2],
    [700, 2],
    [1000, 1],
    [1200, 1],
    [1400, 1],
    [1600, 1]
    ],
	pagination:false,
    });
	
	$(".next2").click(function(){
    owl.trigger('owl.next');
})
$(".prev2").click(function(){
 owl.trigger('owl.prev');
})

});


/***** Testimonial 3 column ******/

$(document).ready(function() {

 var owl = $(".testimonial_three");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 2],
    [700, 2],
    [1000, 2],
    [1200, 3],
    [1400, 3],
    [1600, 3]
    ],
	pagination:false
    });
	
	$(".test-next").click(function(){
    owl.trigger('owl.next');
})
$(".test-prev").click(function(){
 owl.trigger('owl.prev');
})

});

$(document).ready(function() {

 var owl = $(".testimonial_four");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 2],
    [700, 2],
    [1000, 2],
    [1200, 4],
    [1400, 4],
    [1600, 4]
    ],
	pagination:false
    });
	
	$(".test-next").click(function(){
    owl.trigger('owl.next');
})
$(".test-prev").click(function(){
 owl.trigger('owl.prev');
})

});

$(document).ready(function() {

 var owl = $(".testimonial_five");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 2],
    [700, 2],
    [1000, 3],
    [1200, 4],
    [1400, 4],
    [1600, 4]
    ],
	pagination:false
    });
	
	$(".test-next").click(function(){
    owl.trigger('owl.next');
})
$(".test-prev").click(function(){
 owl.trigger('owl.prev');
})

});


/************* Our blog carousel **********/

$(document).ready(function() {


$(".diamondswrap").diamonds({
    size: 260, // Size of the squares
    gap: 0 // Pixels between squares
});

	 var owl = $(".owl_blog");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 1],
    [700, 2],
    [1000, 3],
    [1200, 3],
    [1400, 3],
    [1600, 3]
    ],
	pagination:false
    });
	$(".blog-next").click(function(){
    owl.trigger('owl.next');
	})
	$(".blog-prev").click(function(){
	owl.trigger('owl.prev');
	})
});
/************* Our blog carousel2(index2.html)**********/

$(document).ready(function() {
	 var owl = $(".owl-blog2");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 1],
    [700, 1],
    [1000, 2],
    [1200, 2],
    [1400, 2],
    [1600, 2]
    ],
	pagination:false
    });
	$(".b-next").click(function(){
    owl.trigger('owl.next');
	})
	$(".b-prev").click(function(){
	owl.trigger('owl.prev');
	})
});




/********** Blog two section *************/

$(document).ready(function() {	

	 var owl = $(".blog2");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 1],
    [700, 1],
    [1000, 1],
    [1200, 1],
    [1400, 1],
    [1600, 1]
    ],
    navigation : true,
	pagination:false
    });
	
		$(".owl-next").click(function(){
    owl.trigger('owl.next');
})
$(".owl-prev").click(function(){
 owl.trigger('owl.prev');
})
	
});


$(document).ready(function() {	
		 var owl = $("#owl-team");
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 2],
    [600, 2],
    [700, 2],
    [1000, 3],
    [1200, 4],
    [1400, 4],
    [1600, 4]
    ],
	pagination:false
    });
	
		$(".team-next").click(function(){
    owl.trigger('owl.next');
})
$(".team-prev").click(function(){
 owl.trigger('owl.prev');
})
	
});	


$(document).ready(function() {
 $( ".accordion" ).accordion();
 $( ".accordion2" ).accordion({collapsible: true , active: false });
 
 $( ".accordiontwo" ).accordion({ header: "h3" });
 
 
});

$(document).ready(function() {	
	 $(".owl-slider").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
	});
	
	
	
});


    $(document).ready(function() {
     
    var owl = $(".owl-slider1");
     
    owl.owlCarousel({
    navigation : false,
    singleItem : true,
    transitionStyle : "fade"
    });
     
    });
	


$(document).ready(function() {

$('.upio-inner a:nth-child(2),a.magpopup').magnificPopup({ 
  type: 'image',
    gallery: { enabled:true
    }, // other options
});

$('.product a.zoom').magnificPopup({ 
  type: 'image',
    gallery: { enabled:true
    }, // other option
});

$('.magnific-portfolio a.zoom').magnificPopup({ 
  type: 'image',
    gallery: { enabled:true
    }, // other option
});

$('.shots-wrap a.zoom').magnificPopup({ 
  type: 'image',
    gallery: { enabled:true
    }, // other option
});


$('#owl-blog .upio-inner a').magnificPopup({ 
  type: 'image',
    gallery: { enabled:true
    }, // other option
});

$('#owl-blog2 .upio-inner a').magnificPopup({ 
  type: 'image',
    gallery: { enabled:true
    }, // other option
});


  $("#owl-quotation").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
	  pagination:false,
      singleItem:true,
	  autoHeight : true,
 
  });

  
  $( "#tabs" ).tabs();
  
  

   /*------------  Skill Progress bar  ---------------*/
   
    $(window).bind('scroll', function() {
	
  $( '.skill' ).each(function() { 
     var $this   = $(this);
    if(!$this.data('counted') && $(window).scrollTop() + $(window).height() >= $this.offset().top) {
      $this.data('counted', true);
    var  barWidth = $(this).data('percentage');
    $(this).find('.value').animate({
      width: barWidth +'%',
    },1500);
	}
	
  });
  
  }).triggerHandler('scroll');
  
  
  
 jQuery(".video-container").fitVids();
 
  
  
});



(function() {
  $(".uh-cart-remove1").click(function(e) {
    e.preventDefault();
    $(".uh-cart-content1").parent().hide();
  });
})(jQuery);


(function() {
  $(".uh-cart-remove2").click(function(e) {
    e.preventDefault();
    $(".uh-cart-content2").parent().hide();
  });
})(jQuery);

$( "#uh-cart-trigger" ).click(function() {
$( "#uh-cart-wrapper" ).slideToggle( "fast", function() {
});
});



jQuery(document).ready(function($) {
	"use strict";
	$('#about-skills').appear(function() {
		$(".skills-bar").addClass("active");
	},{accX: 0, accY: -200});
});



 jQuery(document).ready(function( $ ) {
 
 if (typeof (window.innerWidth) == 'number') {
    myWidth = window.innerWidth;
	if(myWidth >= 1000) {
	$('.dropdown-toggle').addClass('pc');
	$('.dropdown-toggle').dropdownHover().dropdown();
	}
}
	
		$('.dropdown-toggle').dropdownHover().dropdown();
		$(document).on('click', '.fhmm .dropdown-menu', function(e) {
		})
			
	});	


$(document).ready(function() {
$('.tweet').tweet({
username: "envato",
modpath: '../php/twitter/',
count: 2,
loading_text: 'loading twitter feed...',
});
});


$.stellar({
  horizontalOffset: 40,
  responsive: true,
  verticalOffset: 150
});
