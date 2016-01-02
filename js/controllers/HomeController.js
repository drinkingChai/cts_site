app.controller('HomeController', ['$scope', 'featurePreviewContent', function($scope, featurePreviewContent) {
	featurePreviewContent.success(function(data) {
		$scope.data = data;
		$scope.erate = $scope.data[0];
		$scope.network = $scope.data[1];
		$scope.msp = $scope.data[2];
		$scope.backups = $scope.data[3];
	});
}]);