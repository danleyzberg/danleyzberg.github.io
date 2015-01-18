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

  var lastGrowNavTime = 0;
  function growNav() {
    nav.trigger("grow");
    nav.removeClass("smaller");
    lastGrowNavTime = Date.now();
  }
  
  function shrinkNav() {
    if (Date.now() - lastGrowNavTime > 1000) {
      nav.trigger("shrink");
      nav.addClass("smaller");
    }
  }
  

  $(window).scroll(function() {
    if ($(window).scrollTop() > 250)
      shrinkNav();
    else
      growNav();
  });

  var prevY; // to determine mousemove direction
  function mouseMover(event) {
    var currY = event.clientY;
    if (currY < 100 || (currY < 250 && currY < prevY - 5)) {
      growNav();
    } else if (currY >= 100 && $(window).scrollTop() > 250) {
      shrinkNav();
    }
    prevY = currY;
  }

  $(window).on("mousemove", mouseMover);
});