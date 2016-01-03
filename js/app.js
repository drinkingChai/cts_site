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
	.otherwise({
		redirectTo: '/'
	});
});