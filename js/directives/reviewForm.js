app.directive('reviewForm', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/reviewForm.html',
		controller: function() {
			this.reviewer = {}
			this.test = function() {
				this.reviewer = {}
			}
		},
		controllerAs: 'reviewFormCtl'
	}
})