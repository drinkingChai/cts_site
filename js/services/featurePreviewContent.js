app.factory("featurePreviewContent", ["$http", function($http) {
	return $http.get('data/feature_preview_content.json')
	.success(function(data) {
		return data;
	});
}]);