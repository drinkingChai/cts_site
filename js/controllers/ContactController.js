app.controller('ContactController', ["$scope", "contact", function($scope, contact) {
	contact.success(function(data) {
		$scope.data = data;
	})
}])