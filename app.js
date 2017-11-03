var apiKey = 'AIzaSyB9-0wFsPs6CO3svlId5qLFH7G-jeqAKcE';
var geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + "&key=" + apiKey;

let address = userInput

var request = require('request');
var inquirer = require('inquirer');

inquirer.prompt([
		{
			type: "input",
			message: "Please enter an address?",
			name: "userInput"
	
		},
	]).then(function(answer){
		var loc = answer.location.split(" ").join("+");
		request(`${geocodeUrl}${loc}`, function(error, response, body) {
			if (!error && response.statusCode === 200) {
				var results = JSON.parse(body);
				console.log(results)

				//console.log("Description: " + results.weather[0].description)
				//console.log("Temperature: " + results.main.temp);
				//console.log("Wind Speed: " + results.wind.speed + "mph")
			}
		})
});

