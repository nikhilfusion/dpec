app.controller('commonHeaderCtrl', ['$scope', 'cookieService', '$location', function($scope, cookieService, $location) {
	$scope.logout = function() {
		cookieService.clearUserCookie();
		$location.path("/");
	};
	$scope.cookieData = cookieService.getCookie();
}]);