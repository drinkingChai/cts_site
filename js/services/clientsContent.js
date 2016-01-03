app.factory("clientsContent", ["$http", function($http) {
	return $http.get('data/clients_content.json')
	.success(function(data) {
		return data;
	})
}])