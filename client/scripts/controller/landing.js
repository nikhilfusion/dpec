app.controller('landingController', ['$scope', 'userService', '$location', 'cookieService',
 function($scope, userService, $location, cookieService) {
	$scope.submit = function(loginDtls) {
        var userDtls = userService.user;
        var loginflg = false;
        angular.forEach(userDtls, function(val, key) {
            if(val.user === loginDtls.userName) {
                if(val.password === loginDtls.password) {
                    cookieService.setCookie(val);
                    loginflg = true;
                    switch(val.role) {
                        case 'user'   :  $location.path('/courses');
                                         break;
                        case 'admin'  :  $location.path('/admin/home');
                                         break;
                        case 'physio' :  $location.path('physio/home');
                                         break;                 
                    }
                }
            }
        })
        if(!loginflg) {
            $scope.loginFail = true;
        } 
    }
}]);