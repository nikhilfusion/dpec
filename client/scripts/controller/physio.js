app.controller('physioController', ['$scope', 'userService', '$location', 'cookieService', 'commonData', '$state',
    function($scope, userService, $location, cookieService, commonData, $state) {
    	$scope.courses = commonData.courses;
    	$scope.userDtls = cookieService.getCookie();

    	$scope.goCourse = function(courseId) {
    		$location.path('/physio/course');
    		//$state.go('physioCourse', {'courseId' : courseId})
    	}
 }])