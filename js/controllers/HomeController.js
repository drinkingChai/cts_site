app.controller('HomeController', ['$scope', 'featurePreviewContent', function($scope, featurePreviewContent) {
	featurePreviewContent.success(function(data) {
		$scope.data = data;
		$scope.erate = $scope.data.erate;
		$scope.network = $scope.data.network;
		$scope.msp = $scope.data.msp;
		$scope.backups = $scope.data.backups;
	});
}]);