app.directive('sideMenu', function() {
	return {
		restrict: 'E',
		scope: {
			menuitems: '=',
			directory: '='
		},
		templateUrl: 'js/directives/sideMenu.html'
	}
})