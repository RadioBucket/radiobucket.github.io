

jQuery(document).ready(function() {
	jQuery("body").append("<div class='demo-settings'></div>");
	jQuery(".demo-settings").append("<a href='#show-settings' class='demo-button'><span class='icon-text'>&#9881;</span>Settings</a>");
	jQuery(".demo-settings").append("<div class='demo-options'>"+
										"<div class='title'>Demo Settings</div>"+
										"<a href='#demo' rel='font-options' class='option'><img src='images/demo/image-1.png' class='demo-icon' alt='' /><span>Font Settings</span><font>Change Fonts</font></a>"+
										"<div class='option-box' rel='font-options'>"+
											"<div alt='font-options'>"+
												"<b class='sub-title'>Article Titles Font</b>"+
												"<a href='#' class='font-bulb active' style='font-family:\"News Cycle\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Titillium Web\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Exo\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Quicksand\", serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Josefin Sans\", sans-serif;'>Aa</a>"+
											"</div>"+
										"</div>"+
										"<div class='option-box sequal' rel='font-options'>"+
											"<div alt='font-menu'>"+
												"<b class='sub-title'>Menu &amp; Panel Titles Font</b>"+
												"<a href='#' class='font-bulb active' style='font-family:\"Montserrat\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Titillium Web\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Rosario\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Cabin\", sans-serif;'>Aa</a>"+
											"</div>"+
										"</div>"+
										"<a href='#demo' rel='color-options' class='option'><img src='images/demo/image-2.png' class='demo-icon' alt='' /><span>Color Options</span><font>Color schemes</font></a>"+
										"<div class='option-box' rel='color-options'>"+
											"<div alt='color-options'>"+
												"<b class='sub-title'>Main Color Scheme</b>"+
												"<a href='#' class='color-bulb active' style='background: #a31a1a;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #2582bd;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #75c025;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #8725c0;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #d86c0d;'>&nbsp;</a>"+
											"</div>"+
										"</div>"+
										"<div class='option-box sequal' rel='color-options'>"+
											"<div alt='star-colors'>"+
												"<b class='sub-title'>Star Rating Color</b>"+
												"<a href='#' class='color-bulb active' style='background: #eec210;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #78ee10;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #108dee;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #ad10ee;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #ee4410;'>&nbsp;</a>"+
											"</div>"+
										"</div>"+
										"<a href='#demo' rel='background' class='option'><img src='images/demo/image-3.png' class='demo-icon' alt='' /><span>Background</span><font>Backgorund textures</font></a>"+
										"<div class='option-box' rel='background'>"+
											"<div alt='background'>"+
												"<b class='sub-title'>Background Texture</b>"+
												"<a href='#' class='color-bulb active' style='background: url(images/background-1.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-3.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-1.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-2.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-5.jpg);'>&nbsp;</a>"+
											"</div>"+
										"</div>"+
										"<a href='#demo' rel='page-width' class='option'><img src='images/demo/image-4.png' class='demo-icon' alt='' /><span>Change Width</span><font>Boxed or Full-Width</font></a>"+
										"<div class='option-box' rel='page-width'>"+
											"<div alt='option-box'>"+
												"<b class='sub-title'>Switch Page Width</b>"+
												"<a href='#' class='option-bulb active' rel='full'>Full-Width</a>"+
												"<a href='#' class='option-bulb' rel='boxed'>Boxed-Width</a>"+
											"</div>"+
										"</div>"+
									"</div>");
	
	jQuery(".demo-settings a[href=#demo]").click(function(){
		var thiselem = jQuery(this);
		thiselem.parent().find("div[rel="+thiselem.attr("rel")+"]").toggle();
		return false;
	});
	
	jQuery(".option-box div .color-bulb").click(function(){
		var thiselem = jQuery(this);
		var newcolor = thiselem.css("background-color");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "color-options"){
			jQuery(".panel-title, .header .main-menu li > .sub-menu, .sorting-bar a.active, .dragscroll-scrollbar, .slider-arrows .arrow-left, .slider-arrows .arrow-right, .slider-play, #calendar_wrap table td#today").css("background-color", newcolor);
			// jQuery(".gallery-thumbs a.active img").css("border", "2px solid "+newcolor);
			jQuery(".photo-gallery-single .large-photo .photo-nav-left, .photo-gallery-single .large-photo .photo-nav-right").css("background-color", newcolor).css("border", "7px solid "+newcolor);
		}else
		if(thiselem.parent().attr("alt") == "star-colors"){
			jQuery(".stars-block .star-inline").css("background-color", newcolor);
		}

		return false;
	});
	
	jQuery(".option-box div .color-bulb").click(function(){
		var thiselem = jQuery(this);
		var newcolor = thiselem.css("background");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "background"){
			jQuery("body").css("background", newcolor);
		}

		return false;
	});
	
	jQuery(".option-box div .font-bulb").click(function(){
		var thiselem = jQuery(this);
		var newfont = thiselem.css("font-family");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "font-options"){
			jQuery(".panel-content h1, .panel-content h2, .panel-content h3, .panel-content h4, .panel-content h5, .panel-content h6").css("font-family", newfont);
		}else
		if(thiselem.parent().attr("alt") == "font-menu"){
			jQuery(".header .main-menu ul li a, .content .panel-block .panel-title h2, .footer .footer-explore > h2").css("font-family", newfont);
		}

		return false;
	});
	
	jQuery(".option-box div .option-bulb").click(function(){
		var thiselem = jQuery(this);
		var newsize = thiselem.attr("rel");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "option-box"){
			if(newsize == "boxed"){
				jQuery(".boxed").addClass("active");
			}else
			if(newsize == "full"){
				jQuery(".boxed").removeClass("active");
			}
		}

		return false;
	});
	
	jQuery(".demo-settings").mouseleave(function(){
		var thiselem = jQuery(this);
		thiselem.removeClass("active");
		return false;
	});
	
	jQuery(".demo-settings .demo-button").click(function(){
		jQuery(".demo-settings").addClass("active");
		return false;
	});
});

