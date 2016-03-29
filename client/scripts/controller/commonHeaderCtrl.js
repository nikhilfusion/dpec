app.controller('commonHeaderCtrl', ['$scope', 'cookieService', '$location', '$state', function($scope, cookieService, $location, $state) {
	$scope.logout = function() {
		cookieService.clearUserCookie();
		$location.path("/");
	};
	$scope.cookieData = cookieService.getCookie();

	$scope.goHome = function() {
		if($scope.cookieData && $scope.cookieData.role === 'user') {
			$state.go('courses');
		} else if($scope.cookieData && $scope.cookieData.role === 'physio') {
			$state.go('physio');
		}
	}
}]);