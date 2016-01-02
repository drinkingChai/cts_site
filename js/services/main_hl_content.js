app.factory("mainhlcontent", ["$http", function($http) {
	return $http.get('data/main_hl_content.json')
	.success(function(data) {
		return data;
	});
}]);