

var beforeMouseoverCSS;
$(document).ready(function() {


	$('#calendar').fullCalendar({
		googleCalendarApiKey: 'AIzaSyC1T8SMnMGA8ADvm397BX-kgj65OK1XQ3M',

		eventSources: [{
			googleCalendarId: '224q5o8nkur7aqmf7jv0b0tk1o@group.calendar.google.com',
			color: '#DDDDDD',
			textColor: 'black',
			borderColor: 'white'
		}, {
			googleCalendarId: '9scv30k1kj4ji40cvp81mjrjj0@group.calendar.google.com',
			color: '#CCCCCC',
			textColor: 'black',
			borderColor: 'white'
		}],

		eventMouseover: function(calEvent, jsEvent, view) {
			beforeMouseoverCSS = $(this).css(["z-index","min-height","left","right","margin-right","opacity"]);
			$(this).css({
				"z-index": "100",
				"min-height": "50px",
				"left": "-5",
				"right": "-5",
				"margin-right": "0px",
				"opacity": ".9"
			})
			return false;
		},

		eventMouseout: function(calEvent, jsEvent, view) {
			$(this).css(beforeMouseoverCSS)
			return false;
		},

		eventClick: function(calEvent, jsEvent, view) {
		},

		loading: function(bool) {
			$('#loading').toggle(bool);
		},

		defaultView: 'agendaWeek',
		minTime: "10:00",
		maxTime: "23:00",
		allDaySlot: false,
		contentHeight: "auto",
		slotDuration: "01:00:00",
		/*slotEventOverlap: false*/

	});

});