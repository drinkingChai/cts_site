app.directive('servicePreview', function() {
	return {
		restrict: 'E',
		scope: {info: '='},
		templateUrl: 'js/directives/servicePreview.html'
	}
})