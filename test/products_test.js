var assert = require("assert");

var Products = require("../most_popular_products");

describe("Find most popular products",function() {

	it('should return a list of products objects', function(){

		var products = new Products();
		var list = products.productNames('./Nelisa Sales History.csv');
          //console.log(list);
		assert.equal(449, list.length);
		assert.equal("Imasi", list[2].itemName);
		
	});

	it('should return itemMap', function(){

		var products = new Products('./Nelisa Sales History.csv');

		var listOfProduct = [
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
		{itemName:'Rose (plastic)',soldItem: 14},
		{itemName:'Valentine Cards',soldItem: 14}
		];

		var expectedMap = {'Milk':142,'Imasi':125,'Bread':130,'Chakalaka Can':94,'Gold Dish Vegetable Curry Can':86,'Fanta 500ml':94,'Coke 500ml':159,'Cream Soda 500ml':75,'Iwisa Pap 5kg':47,'Top Class Soy Mince':98,'Shampoo 1 litre':26,'Soap Bar':50,'Bananas - loose': 114,'Apples - loose':114,'Mixed Sweets 5s':172,'Heart Chocolates':20,'Rose (plastic)': 14,'Valentine Cards':14};
		var productMap = products.groupItems(listOfProduct);
           //console.log(listOfProduct);
		assert.deepEqual(expectedMap, productMap);

	});

it('should return the most popular products', function(){

	var products = new Products();
    var list = {
		'Milk' :142,
		'Imasi':125,
		'Bread':130,
		'Chakalaka Can':94,
		'Gold Dish Vegetable Curry Can':86,
		'Fanta 500ml': 94,
		'Coke 500ml': 159,
		'Cream Soda 500ml': 75,
		'Iwisa Pap 5kg': 47,
		'Top Class Soy Mince': 98,
		'Shampoo 1 litre': 26,
		'Soap Bar': 50,
		'Bananas - loose':114,
		'Apples - loose': 114,
		'Mixed Sweets 5s': 172,
		'Heart Chocolates': 20,
		'Rose (plastic)': 14,
		'Valentine Cards': 14
		};
    
	
	var result = {name:'Mixed Sweets 5s', amt:172};
	var productsResults = products.mostpopularproducts(list);
	   //console.log(productsResults);
	 assert.deepEqual(result, productsResults);  	 
  });

});

  it('should return the least popular products', function(){
  	
  	var products = new Products();
    var list= {
		'Milk' :142,
		'Imasi':125,
		'Bread':130,
		'Chakalaka Can':94,
		'Gold Dish Vegetable Curry Can':86,
		'Fanta 500ml': 94,
		'Coke 500ml': 159,
		'Cream Soda 500ml': 75,
		'Iwisa Pap 5kg': 47,
		'Top Class Soy Mince': 98,
		'Shampoo 1 litre': 26,
		'Soap Bar': 50,
		'Bananas - loose':114,
		'Apples - loose': 114,
		'Mixed Sweets 5s': 172,
		'Heart Chocolates': 20,
		'Rose (plastic)': 14,
		'Valentine Cards': 14
		};
    
	var result = {name: 'Rose (plastic)', amt: 14};
	var productsResults = products.leastpopularproducts(list);
	  //console.log(productsResults);
    assert.deepEqual(result, productsResults);
	 
    });