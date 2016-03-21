app.controller('landingController', ['$scope', 'userService', '$location', 'cookieService',
 function($scope, userService, $location, cookieService) {
	$scope.submit = function(loginDtls) {
        var userDtls = userService.user;
        angular.forEach(userDtls, function(val, key) {
            if(val.user === loginDtls.userName) {
                if(val.password = loginDtls.password) {
                    cookieService.setCookie(val);
                    console.log(cookieService.getCookie)
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
    }
}]);