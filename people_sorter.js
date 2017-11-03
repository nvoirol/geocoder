var fs = require('fs');

var dataTotal = [];

fs.readFile("./people1.json",'utf8', function(err,data){
	if (err) throw err;
	var data1 = data;
	console.log(data1)
});
	//dataTotal.push(data1.val);
	for(var i = 0; i < dataTotal.length; i++){
		dataTotal.push(data1);
	
};

fs.readFile("./people2.json",'utf8', function(err,data){
	if (err) throw err;
	var data2 = data;
	dataTotal.push(data2);
	console.log(data2)
});
	//console.log(dataTotal);

//var dataTotal = data1 + data2;
//console.log(dataTotal)

fs.writeFile('./peopleComplete.txt',"dataTotal", function(err,data){
	if (err) throw err;
	console.log('saved!');
});

//fs.writeFile('./peopleComplete.txt', data2, function(err,data){
	//if (err) throw err;
	//console.log('saved!');


//var mammals = [];
//for(var i = 0; i < animals.length; i++){
	//if(animals[i].type === "mammal"){
		//mammals.push(animals[i]);