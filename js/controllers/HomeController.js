app.controller('HomeController', ['$scope', 'servicesContent', function($scope, servicesContent) {
	servicesContent.success(function(data) {
		$scope.data = data;
		$scope.erate = $scope.data.erate;
		$scope.network = $scope.data.network;
		$scope.mip = $scope.data.mip;
	});
}]);