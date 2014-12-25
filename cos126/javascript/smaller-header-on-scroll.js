// source: http://callmenick.com/2014/02/18/create-an-animated-resizing-header-on-scroll/



window.onload = function() {
	var nav = document.getElementById("nav");
	var previousClientY;

	window.addEventListener('scroll', function() {
		var scrollY = window.pageYOffset || document.documentElement.scrollTop;
		if (scrollY > 300) {
			classie.add(nav,"smaller");
		} else {
			classie.remove(nav,"smaller");
		}
	});

	function onMouseMove(e) {

		// if cursor moved up and make nav big
		if (e.clientY < 100 || (e.clientY < 300 && e.clientY < previousClientY - 15)) {
			classie.remove(nav,"smaller");

			// don't check again for a second
			previousClientY = e.clientY;
			window.removeEventListener('mousemove', onMouseMove);
			setTimeout(function() {window.addEventListener('mousemove', onMouseMove);}, 1000);


		} else {

			var scrollY = window.pageYOffset || document.documentElement.scrollTop;
			if (e.clientY > 300 && scrollY > 300) {
				classie.add(nav,"smaller");
			}

			// keep checking
			previousClientY = e.clientY;
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
