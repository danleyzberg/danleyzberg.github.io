$(document).ready(function() {
	var nav = $("#nav");
	var nav2 = $("#nav2");


	nav.on("grow", function() {
        setTimeout(function() {
            nav2.css("top", nav.outerHeight(true));
        },200);
    });
    
    nav.on("shrink", function() {
        //nav2.css("top", nav.outerHeight(true)-nav2.outerHeight(true));
        nav2.css("top", 0-nav2.outerHeight(true));
    });
    
    nav2.css("top", nav.outerHeight(true));
});
