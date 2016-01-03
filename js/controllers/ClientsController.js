app.controller("ClientsController", ["$scope", "clientsContent", "$routeParams", function($scope, clientsContent, $routeParams) {
	clientsContent.success(function(data) {
		$scope.all_clients = []
		for (property in data) {
			$scope.all_clients.push(data[property])
		}
		$scope.all_clients.sort(function(a, b) {
			if (a.title > b.title) {
				return 1;
			}
			if (a.title < b.title) {
				return -1;
			}
			return 0;
		});
		$scope.data = data[$routeParams.clientsname];
	})
}])