// source: http://callmenick.com/2014/02/18/create-an-animated-resizing-header-on-scroll/

function init() {


	window.addEventListener('scroll', function(e){
			var nav = document.getElementById("nav");
			var distanceY = window.pageYOffset || document.documentElement.scrollTop;
			var shrinkOn = 300;
			if (distanceY > shrinkOn) {
					classie.add(nav,"smaller");
			} else {
					if (classie.has(nav,"smaller")) {
							classie.remove(nav,"smaller");
					}
			}
	});

	document.getElementById("nav").addEventListener("mouseover", function(e) {
		var nav = document.getElementById("nav");
		if (classie.has(document.getElementById("nav"),"smaller")) {
			classie.remove(document.getElementById("nav"),"smaller");
		}
	});

	document.getElementById("nav").addEventListener("click", function(e) {
		alert("debugz!");
	});
}
window.onload = init();
