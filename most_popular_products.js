var fs = require('fs');

module.exports =function(){
this.productNames = function(filePath){	
//exports.most_popular_products = function(){

		var linesInfile = fs.readFileSync(filePath, 'utf8');

		var rows = linesInfile.split('\n');
		//console.log(rows.length);

		var listOfProduct = [];
        
        rows.forEach(function(row) {
		var columns = row.split(';');
		var currentItem = columns[2];
			numberSold = columns[3];

		var salesObj = {
		  itemName: columns[2],
		  soldItem: Number(columns[3])
       };
       listOfProduct.push(salesObj);
	});
        return listOfProduct;
    }

    this.groupItems = function(products){
    	var itemMap = {};

    	products.forEach(function(products){
    		var currentItem = products.itemName;
    		var numberSold = products.soldItem;

    		 if(itemMap[currentItem]=== undefined){
				itemMap[currentItem]=0;
			}

			itemMap[currentItem]=itemMap[currentItem]+ Number(numberSold);

    	});
    	return itemMap;
    }; 

	
	this.mostpopularproducts= function(itemMap){
		var mostPopularProdct = {};
		var max = 0;
		for(var prop in itemMap){
			var value = itemMap[prop];
			if(itemMap[prop] > max){
				max = itemMap[prop];
				mostPopularProdct = {
					name: prop,
					amt: max

				}
			};
		}
		return mostPopularProdct;
	};
    
     this.leastpopularproducts= function(itemMap){
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
			};
		}
		return leastPopularProdct;
     }
  };