app.factory("servicesContent", ["$http", function($http) {
	return $http.get('data/services_content.json')
	.success(function(data) {
		return data;
	});
}])