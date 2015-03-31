var fs = require('fs');

//module.exports =function(filePath){
//this.productNames = function(callback){	
	exports.most_popular_products = function(filePath){

		var linesInfile = fs.readFileSync('Nelisa Sales History.csv', 'utf8');

		var rows = linesInfile.split('\n');
		//console.log(rows.length);

		var listOfProduct = [];
        
        rows.forEach(function(row) {
		var columns = row.split(';');
		var currentItem = columns[2],
			numberSold = columns[3]

		var SalesObj = {}
		  currentItem =

	
			itemMap[currentItem]=itemMap[currentItem]+ Number(numberSold);
		});
	    if(itemMap[currentItem]=== undefined){
				itemMap[currentItem]=0;
			}

		var itemMap = {};

		
	  return itemMap;
	}

	exports.most_popular_products= function(itemMap){
		var mostPopularProdct = {};
		var max = 0;
		for(var prop in itemMap){
			var value = itemMap[prop];
			if(itemMap[prop] > max){
				max = itemMap[prop]
				mostPopularProdct = {
					name: prop,
					amt: max
				}
			}
		}
	
		return mostPopularProdct;
	}

 //}
//}