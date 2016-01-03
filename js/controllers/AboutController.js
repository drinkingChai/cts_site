app.controller("AboutController", ["$scope", "$http", function($scope, $http) {
	$http.get('data/about_content.json').success(function(data) {
		$scope.data = data;
		$scope.messages = [data.whoWeAre, data.ourExpertise, data.whatWeStandFor]
	})
}]);