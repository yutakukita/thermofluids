// JavaScript Document


//--- GO TO TOP --//
if(!navigator.userAgent.match(/(iPhone|iPad)/)){
	jQuery(function($) {
		var appear = false;
		var pagetop = $('#page_top');
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
				if (appear == false) {
					appear = true;
					pagetop.stop().animate({
						'bottom': '0' //下から50pxの位置に
					}, 300); //0.3秒かけて現れる
				}
			} else {
				if (appear) {
					appear = false;
					pagetop.stop().animate({
						'bottom': '-60px' //下から-60pxの位置に
					}, 300); //0.3秒かけて隠れる
				}
			}
		});
		pagetop.click(function () {
			$('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
			return false;
		});
	});
}

//--- GO TO LINK --//
jQuery(function($){
	// execute when clicking on a link starting with #
    $('a[href^="#"]').click(function() {
		var speed = 500; // scrolling speed in milisecond
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
    });
});

//--- FADE-IN FROM LEFT ---//
if(!navigator.userAgent.match(/(iPhone|iPad)/)){
	jQuery(function($){
		// execute when scrolling and loading
		$(window).on('scroll load', function(){
			$('.fade-left').each( function() {
				var this_pos = $(this).offset().top;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if ( scroll > this_pos - windowHeight ) {
					$(this).css({
						opacity: 1,
						transform: 'translate(0)'
					});
				}
			});
		});
	});
}else{
	jQuery(function($){
		$(window).on('load', function(){
			$('.fade-left').each( function() {
				$(this).removeClass('fade-left');
				$(this).addClass('fade-in');
			});
		});
	});
}
//--- FADE-IN FROM RIGHT ---//
if(!navigator.userAgent.match(/(iPhone|iPad)/)){
	jQuery(function($){
		// execute when scrolling and loading
		$(window).on('scroll load', function(){
			$('.fade-right').each( function() {
				var this_pos = $(this).offset().top;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if ( scroll > this_pos - windowHeight ) {
					$(this).css({
						opacity: 1,
						transform: 'translate(0)'
					});
				}
			});
		});
	});
}else{
	jQuery(function($){
		$(window).on('load', function(){
			$('.fade-right').each( function() {
				$(this).removeClass('fade-right');
				$(this).addClass('fade-in');
			});
		});
	});
}