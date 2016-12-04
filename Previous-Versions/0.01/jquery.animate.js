/// <reference path="jquery.js" />
/*
jQuery extra animations Plugin
Version 0.01 - 12/2/2016
© 2016 Safayat Jamil
safjammed.tk
Licensed under MIT License
*/




(function($, undefined) {

	console.log(' Using jQuery extra animation plugin\n by Safayat Jamil \n Facebook: http://www.facebook.com/saf.jammed ');

	$.fn.doAnim = function(options){
		
		var settings = {
			'animation' : null,
			'times' : 1,
			'duration' : null,
			'delay' : null,
		};
		console.log($.isPlainObject(options));

		if(options && $.isPlainObject(options) == true) {
			$.extend(settings, options);
			

			var animationName = settings['animation'];

			$.trim(animationName);
			animationName = 'animated '+animationName;

			var classify = animationName;
			if (settings['times']== 'infinite'){
				classify = animationName + ' infinite';
			}
			if(settings['duration']){
				$.trim(settings['duration']);
				var secs= settings['duration']+'s';
				
				this.css({'-webkit-animation-duration': secs,
						  '-moz-animation-duration': secs,
						  '-o-animation-duration': secs,
						  '-MS-animation-duration':secs,
						  'animation-duration': secs
						});
			}
			if(settings['delay']){
				$.trim(settings['delay']);
				var secs= settings['delay']+'s';
				this.css({'-webkit-animation-delay': secs,
						  '-moz-animation-delay': secs,
						  '-o-animation-delay': secs,
						  '-MS-animation-delay':secs,
						  'animation-delay': secs
						});
			}if(settings['times']){
				$.trim(settings['times']);
				var secs= settings['times'];
				this.css({'-webkit-animation-iteration-count': secs,
						  '-moz-animation-iteration-count': secs,
						  '-o-animation-iteration-count': secs,
						  '-MS-animation-iteration-count':secs,
						  'animation-iteration-count': secs
						});
			}
			$(this).addClass(classify).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		      $(this).removeClass(classify);
		      
		    });
	    
	}
	if(options && $.isPlainObject(options) == false){
		$(this).addClass('animated '+options).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		      $(this).removeClass(options);		      
		    });
	}
}


})(jQuery);
