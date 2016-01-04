app.directive('evalForm', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/evalForm.html',
		controller: function() {
			this.reviewer = {}
			this.test = function() {
				this.reviewer = {}
			}
		},
		controllerAs: 'reviewFormCtl'
	}
})