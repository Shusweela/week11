
var unirest = require("unirest");

var req = unirest("GET", "http://api.openweathermap.org/data/2.5/weather");

req.query({
    "q": "London",
    "unit": "imperial",
    "mode": "html",
    "appid": "INSERT KEY"	
});

req.headers({
	"x-rapidapi-host": "openweathermap.org/data/2.5/weather",
    "x-rapidapi-key": "INSERT KEY",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});