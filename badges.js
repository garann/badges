// setup:
// 1. get your signed URL by..
//		- getting your API key here: http://www.meetup.com/meetup_api/key/
//		- pasting this into your browser: http://api.meetup.com/events.json/?group_urlname=[YOUR_GROUP_NAME]&key=[YOUR_API_KEY]&sign=true&callback=[YOUR_FUNCTION_NAME]
// 2. find the signed_url property in the results and paste it into the src of a script tag loaded after your function
// 3. change this function name to the name you specified:
function loadMeetupBadge (resp) {
	if (resp) {
		var dt = Date.parse(resp.results[0].time);
		var daysLeft = Math.ceil(dt-new Date().getTime());
		document.getElementById("next-meetup-days").innerHTML = parseInt(daysLeft/(1000*60*60*24));
		document.getElementById("next-meetup-hours").innerHTML = Math.round((daysLeft/(1000*60*60)) % 24);
	}	
}