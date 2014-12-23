// source: http://callmenick.com/2014/02/18/create-an-animated-resizing-header-on-scroll/



window.onload = function() {
	var nav = document.getElementById("nav");
	var previousScreenY;

	window.addEventListener('scroll', function() {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop;
		if (distanceY > 300) {
			classie.add(nav,"smaller");
		} else {
			classie.remove(nav,"smaller");
		}
	});


	function onMouseMove(e) {

		// if cursor moved up and make nav big
		if (e.screenY < previousScreenY - 10) {

			classie.remove(nav,"smaller");

			// don't check again for a second
			previousScreenY = e.screenY;
			window.removeEventListener('mousemove', onMouseMove);
			setTimeout(function() {window.addEventListener('mousemove', onMouseMove);}, 1000);


		} else {

			var distanceY = window.pageYOffset || document.documentElement.scrollTop;
			if (e.screenY > 300 && distanceY > 300) {
				classie.add(nav,"smaller");
			}

			// keep checking
			previousScreenY = e.screenY;
			window.addEventListener('mousemove', onMouseMove);
		}
	}

	window.addEventListener('mousemove', onMouseMove);


	/*document.getElementById("nav").addEventListener('click', function() {
		if (classie.has(this,"smaller")) {
			classie.remove(this,"smaller");
		}
	});*/
};
