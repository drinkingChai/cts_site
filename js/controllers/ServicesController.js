app.controller('ServicesController', ['$scope', 'servicesContent', function($scope, servicesContent) {
	servicesContent.success(function(data) {
		$scope.data = data;
	})
}]);