app.directive('menuItemDetail', function() {
	return {
		restrict: 'E',
		scope: {info: '='},
		templateUrl: 'js/directives/menuItemDetail.html'
	}
})