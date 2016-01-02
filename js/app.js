var app = angular.module('CTSsite', ['ngRoute']);

app.controller('HomeController', function() {})

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		templateUrl: 'views/main.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});