app.controller('courseController', ['$scope', '$location', 'commonData', function($scope, $location, commonData) {
    $scope.courses = commonData.courses;
}]);