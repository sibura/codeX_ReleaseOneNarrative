var fs = require('fs');

module.exports = function(){
	
	this.productNames = function(filePath){	

		var linesInfile = fs.readFileSync('./Nelisa Sales History.csv', 'utf8');

		var rows = linesInfile.split('\n');
		console.log(rows.length);

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

/*this.CategoryList = function(filePath){	
   var listOfCategory= [];
   
    rows.forEach(function(row){
        var columns = row.split(';');
        var CatItem = columns[2];
        var numberSold = columns[3];

    var salesObj = {
          CatName : columns[2],
          soldItems: Number(columns[3]),
          };
          listOfCategory.push(salesObj);
     });
        return listOfCategory;
 */
        this.groupItems = function(products) {
          var CatMap = {};

          products.forEach(function(products) {
            var CatItem = products.CatName;
            var numberSold = products.soldItems;

            if(CatMap[CatItem] === undefined){
          CatMap[CatItem] = 0;
    }
        CatMap[CatItem] = CatMap[CatItem] + Number(numberSold);

          });
          return CatMap;

       };

         this.mostPopularCtg = function(CatMap){
           var mostPopularCategory = {};
           var max = 0;
           for(var Cat in CatMap) {
             var value = CatMap[Cat];
             if(CatMap[Cat] > max) {
              max = CatMap[Cat];
              mostPopularCategory = {
               name : Cat,
               amt  : max
             }
           };
         }return mostPopularCategory;
       };
         //console.log(itemMap);
         

      this.leastPopularCtg = function(CatMap){
           var leastPopularCategory = {};
           var min = 0;
           for(var Cat in CatMap) {
             var value = CatMap[Cat];
             if(CatMap[Cat] + min) {
              min = CatMap[Cat];
              leastPopularCategory = {
               name : Cat,
               amt  : min
             }
           };
         };
         return leastPopularCategory;
       };
   };
 