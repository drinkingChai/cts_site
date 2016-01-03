var app = angular.module('CTSsite', ['ngRoute']);

app.controller('HomeController', function() {})

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		templateUrl: 'views/main.html'
	})
	.when('/services', {
		controller: 'ServicesController',
		templateUrl: 'views/services.html'
	})
	.when('/services/:servicename', {
		controller: 'ServicesDetailController',
		templateUrl: 'views/servicesdetail.html'
	})
	.when('/clients/:clientsname', {
		controller: 'ClientsController',
		templateUrl: 'views/clients.html'
	})
	.when('/about', {
		controller: 'AboutController',
		templateUrl: 'views/about.html'
	})
	.when('/contact', {
		controller: 'ContactController',
		templateUrl: 'views/contact.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});