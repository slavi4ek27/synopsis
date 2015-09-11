
var main = function() { 
	$('.imen').click(function() { 
		$('.menu_top').animate({ 
			left: '0%' 
		}, 200); 


	});


	
	$('.m_t_close_ico').click(function() { 
		$('.menu_top').animate({ 
			left: '-100%' 
		}, 200);         

	});
};

$(document).ready(main); 



var mainV = function() { 
	$('.pl_tr').click(function() { 
		$('.video_top').animate({ 
			right: '0%' 
		}, 200); 


	});


	
	$('.v_t_close_ico').click(function() { 
		$('.video_top').animate({ 
			right: '-100%' 
		}, 200);         

	});
};

$(document).ready(mainV); 


var mainG = function() { 
	$('.gt1').click(function() { 
		$('.menu_gal').animate({ 
			bottom: '0%' 
		}, 200); 


	});


	
	$('.m_g_close_ico').click(function() { 
		$('.menu_gal').animate({ 
			bottom: '-100%' 
		}, 200);         

	});
};

$(document).ready(mainG);



$(document).ready(function(){
	$('.bx-slider').bxSlider({
		startSlide: 5,
		pagerCustom: '#bx-pager'
	});
});
