app.controller('ServicesDetailController', ['$scope', 'servicesContent', '$routeParams', function($scope, servicesContent, $routeParams) {
	servicesContent.success(function(data) {
		$scope.all_services = []
		for (property in data) {
			$scope.all_services.push(data[property])
		}
		$scope.all_services.sort(function(a, b) {
			if (a.title > b.title) {
				return 1;
			}
			if (a.title < b.title) {
				return -1;
			}
			return 0;
		});
		$scope.data = data[$routeParams.servicename]
	})
}])