app.controller('landingController', ['$scope', 'userService', function($scope, userService) {
	$scope.submit = function(loginDtls) {
        var userDtls = userService.user;
        angular.forEach(userDtls, function(val, key) {
            if(val.user === loginDtls.userName) {
                if(val.password = loginDtls.password) {
                    switch(val.role) {
                        case 'user'   :  $location.path('/');
                                         break;
                        case 'admin'  :  $location.path('/admin');
                                         break;
                        case 'physio' :  $location.path('/physio');
                                         break;                 
                    }
                }
            }
        }) 
    }
}]);