app.controller('HomeController', ['$scope', 'mainhlcontent', function($scope, mainhlcontent) {
	mainhlcontent.success(function(data) {
		$scope.data = data;
		$scope.erate = $scope.data[0];
		$scope.network = $scope.data[1];
		$scope.msp = $scope.data[2];
	});
}]);