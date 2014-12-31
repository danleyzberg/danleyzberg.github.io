/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
|*                                                             *|
|*    NAV-SHRINK.js  v1.0                                      *|
|*                                                             *|
|*    Author: Dan Leyzberg, early 2015                         *|
|*    Description: Shrinks and grows the navigation bar.       *|
|*    Dependencies: jQuery 1.11                                *|
|*    Inspiration: http://callmenick.com/2014/02/18/           *|
|*                 create-an-animated-resizing-header          *|
|*                 -on-scroll/                                 *|
|*                                                             *|
\* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


$(document).ready(function() {
	var nav = $("#nav");
    
    function shrinkNav() { nav.trigger("shrink"); nav.addClass("smaller"); }
    function growNav() { nav.trigger("grow"); nav.removeClass("smaller"); }
    
	$(window).scroll(function() {
		if ($(window).scrollTop() > 300)
            shrinkNav();
		else
            growNav();
	});

	var prevY; // to determine mousemove direction
	$(window).mousemove(function(event) {
        var currY = event.clientY;
		if (currY < 100 || (currY < 400 && currY < prevY - 10)) {
			growNav();
			prevY = currY;
			window.removeEventListener('mousemove', onMouseMove);
			setTimeout(function() {window.addEventListener('mousemove', onMouseMove);}, 1000);
		} else {
			if (currY > 300 && $(window).scrollTop() > 300) {
                shrinkNav();
			}
			prevY = currY;
		}
	});
});