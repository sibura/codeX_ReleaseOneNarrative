var most_popular_products = require('./most_popular_products');
var least_popular_products = require('./least_popular_products');

//var saleList = least_popular_products.most_popular_products();
var least_popular_products = most_popular_products.least_popular_products();

//var sorList = most_popular_products.least_popular_products(least_popular_products);
var most_popular_products = least_popular_products.most_popular_products(most_popular_products);
	// body...
	console.log(least_popular_products);
	//console.log(most_popular_products);