var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function () {
	
var time = new Date().getHours();
var lolcat = document.getElementById("lolcat");	
var message = document.getElementById("timeEvent");
var messageText;
var image =  "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
} else if (time == napTime) {
    messageText = "IZ NAP TIME...";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";
} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/lunchTime.jpg";
} else if (time == wakeupTime) {
    messageText = "IZ TIME TO GETTUP.";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
} else if (time < noon) {
    messageText = "Good morning!";
} else if (time > evening) {
    messageText = "Good Evening!";
} else {
    messageText = "Good afternoon!";
}

message.innerText = messageText;
lolcat.src = image;
	
showCurrentTime();
	
};

var showCurrentTime = function() {
	var clock = document.getElementById("clock");
	
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";
	
	if (hours >= noon) {
		meridian = "PM";
     }
 
     if (hours > noon) {
          hours = hours - 12;
     }
 
     if (minutes < 10) {
          minutes = 0 + minutes;
     }
 
     if (seconds < 10) {
          seconds = 0 + seconds;
     }
 
     var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
     clock.innerText = clockTime;
};
 
updateClock();
 
var oneSecond = 1000;
 
setInterval( updateClock, oneSecond);
var partyTimeButton = document.getElementById("partyTimeButton");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");											  
var isPartyTime = false;

var partyEvent = function() {
	
	if (isPartyTime === false) {
		isPartyTIme = true;
		time = partyTime;
		partyTimeButton.innertext = "PARTY TIME!";
		partyTimeButton.style.backgroundColor = "#222";
	} else {
		isPartyTime = false;
		time = new Date().getHours;
		partyTimeButton.innerText = "PARTY OVER";
		partyTimeButton.style.backgroundcolour = "#0A8DAB";
	}
};

var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;
};

var wakeUpTimeEvent = function() {
	wakeUpTime = wakeUpTimeSelector.value;
};

var napEvent = function() {
	napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener("click", partyEvent);
napTimeSelector.addEventListener("change", napEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpTimeEvent);