app.factory("contact", ["$http", function($http) {
	return $http.get('data/cts_contact.json')
	.success(function(data) {
		return data;
	});
}]);