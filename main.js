 var fs = require('fs');

var products = require('./most_popular_products')
var products = require('./least_popular_products')

var products = new Products();

var sortedList = products.productNames('Nelisa	Sales History.csv');

var group = products.groupItems(sortedList);

var mostPopular = products.mostpopularproducts(group);
var leastPopular = products.leastpopularproducts(group);


	console.log(leastPopular);
	console.log(mostPopular);