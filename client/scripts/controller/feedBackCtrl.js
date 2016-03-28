app.controller('feedBackCtrl', ['$scope', '$location', '$rootScope', '$uibModalInstance', function($scope, $location, $rootScope, $uibModalInstance) {
	$scope.response = function(ans) {
        $rootScope.$emit('feedback', ans);
        $uibModalInstance.close();
    }
}]);