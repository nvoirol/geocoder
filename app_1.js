var apiKey = 'AIzaSyB9-0wFsPs6CO3svlId5qLFH7G-jeqAKcE';
var geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';


var request = require('request');
var inquirer = require('inquirer');

inquirer.prompt([{
		
			type: "input",
			message: "Please enter an address?",
			name: "userInput"
	
		}]).then(function(response){

		 var loc = response.userInput.split(" ").join("+");
		 request(`${geocodeUrl}${loc}&key=${apiKey}`, function(error, response, body) {
		 	if (!error && response.statusCode === 200) {
				var myResults = JSON.parse(body);
				var firstData = myResults.results[0].address_components[2]
				var secondData = myResults.results[0].geometry
				console.log(myResults.results[0].address_components[2])
				console.log(myResults.results[0].geometry)	
 				
		 	}
		
		 })

})

