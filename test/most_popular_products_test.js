var assert = require("assert");
var products = require("../most_popular_products");

describe("Find most popular products",function() {

	it('should return a list of products objects', function(){

		//var products = new Products();
		var list = products.most_popular_products('./Nelisa Sales History.csv');

		assert.deepEqual(list.length);
		assert.deepEqual("Imasi", list[2].itemName);
		
	});

	it('shoul return itemMap', function(){

		//var products = new Products('./test_file');

		var productList = [
		{itemName:'Milk', soldItem:142},
		{itemName:'Imasi', soldItem:125},
		{itemName:'Bread', soldItem:130},
		{itemName:'Chakalaka Can', soldItem:94},
		{itemName:'Gold Dish Vegetable Curry Can', soldItem:86},
		{itemName:'Fanta 500ml',soldItem: 94},
		{itemName:'Coke 500ml',soldItem: 159},
		{itemName:'Cream Soda 500ml',soldItem: 75},
		{itemName:'Iwisa Pap 5kg',soldItem: 47},
		{itemName:'Top Class Soy Mince',soldItem: 98},
		{itemName:'Shampoo 1 litre',soldItem: 26},
		{itemName:'Soap Bar',soldItem: 50},
		{itemName:'Bananas - loose',soldItem: 114},
		{itemName:'Apples - loose',soldItem: 114},
		{itemName:'Mixed Sweets 5s',soldItem: 172},
		{itemName:'Heart Chocolates',soldItem: 20},
		{itemName:'Valentine Cards',soldItem: 14 }
		];

		var productMap = most_popular_productss.groupByItemsSold(productList);
		assert.deepEqual(expectedMap, productMap);

	});
	
	// body...

});
