var fs = require('fs');
//module.exports = function(filePath){
//exports.most_popular_products = function(){

	var linesInfile = fs.readFileSync('Nelisa Sales History.csv', 'utf8');
	var rows = linesInfile.split('\n');
	console.log(rows.length);

	var listOfProducts = [];
	var itemMap = {};

	rows.forEach(function(row) {
		var columns = row.split(';');
		var currentItem = columns[2],
		numberSold = columns[3]

		if(itemMap[currentItem] === undefined){
			itemMap[currentItem] =0;
		}

		itemMap[currentItem]=itemMap[currentItem]+ Number(numberSold);
	});
	//console.log(itemMap);

//}

	var leastPopularProdct = {};
	var min = 172;
	for(var prop in itemMap){
		var value = itemMap[prop];
		if(itemMap[prop] < min){
			min = itemMap[prop];
			leastPopularProdct = {
				name: prop,
				amt: min
			}
		}
	}

	console.log(itemMap);
	console.log(leastPopularProdct);
//}