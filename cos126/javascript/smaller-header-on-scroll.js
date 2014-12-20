// source: http://callmenick.com/2014/02/18/create-an-animated-resizing-header-on-scroll/


window.onload = function() {
	window.addEventListener('scroll', function() {
		var nav = document.getElementById("nav");
		var distanceY = window.pageYOffset || document.documentElement.scrollTop;
		if (distanceY > 300) {
			classie.add(nav,"smaller");
		} else {
			if (classie.has(nav,"smaller")) {
				classie.remove(nav,"smaller");
			}
		}
	});

	/*
	window.addEventListener('mousemove', function(e) {
		if (e.screenY < 300) {
			var nav = document.getElementById("nav");
			if (classie.has(nav,"smaller")) {
				classie.remove(nav,"smaller");
			}
		} else {
			var distanceY = window.pageYOffset || document.documentElement.scrollTop;
			if (distanceY > 300) {
				classie.add(document.getElementById("nav"),"smaller");
			}
		}
	});

	document.getElementById("nav").addEventListener('click', function() {
		if (classie.has(this,"smaller")) {
			classie.remove(this,"smaller");
		}
	});*/
};
