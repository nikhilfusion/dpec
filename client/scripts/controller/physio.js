app.controller('physioController', ['$scope', 'userService', '$location', 'cookieService', 'commonData', '$state',
    function($scope, userService, $location, cookieService, commonData, $state) {
    	$scope.courses = commonData.courses;
    	$scope.userDtls = cookieService.getCookie();
    	console.log("$scope.userDtls", $scope.userDtls);

    	$scope.goCourse = function(courseId) {
    		$location.path('/physio/course');
    		//$state.go('physioCourse', {'courseId' : courseId})
    	}
 }])