app.directive('featurePreview', function() {
	return {
		restrict: 'E',
		scope: {info: '='},
		templateUrl: 'js/directives/featurePreview.html'
	}
})