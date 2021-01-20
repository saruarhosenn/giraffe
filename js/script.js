$(document).ready(function(){
	// HEADER-SECTION
	$(".search-icon").click(function(){
		
		$(".search-box").fadeToggle();
		
	})
	
    // STICKY MENU
    $(".js-sticky-menu-show").waypoint(function(direction){
        
        if (direction == "down"){
                $("nav").addClass("sticky-menu");
            } else {
                $("nav").removeClass("sticky-menu");
            }
    });
	
	// POPUP IMG
	$(document).ready(function() {
  		
		$('.image').magnificPopup({
			type:'image',
			 gallery:{
    			enabled:true
  			}
		
		});
		
	});
	
	// COUNT UP
	 $(".counter").counterUp({
            delay: 10,
            time: 3000
        });
	
	// SCROLL UP BTN 
	$(window).scroll(function(){
		
		if($(this).scrollTop() > 200) {
			$("a.scroll-up-btn").fadeIn();
		} else {
			$("a.scroll-up-btn").fadeOut();
		}
		
	});
    
});