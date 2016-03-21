app.controller('showCourseController', ['$scope', function($scope) {
	console.log("showCourseController");
    $scope.images = [
        {image: '../assets/images/1.jpg', description: 'Image 00'},
        {image: '../assets/images/2.jpg', description: 'Image 01'},
        {image: '../assets/images/3.jpg', description: 'Image 02'},
        {image: '../assets/images/4.jpg', description: 'Image 03'},
        {image: '../assets/images/5.jpg', description: 'Image 04'},
        {image: '../assets/images/6.jpg', description: 'Image 05'},
        {image: '../assets/images/7.jpg', description: 'Image 06'}
    ];   
    
    $scope.index = 0;
    $scope.nextFlg = true;
    $scope.prevFlg = false;
    $scope.next = function() {
        console.log("$scope.index", $scope.index);
        if($scope.index === $scope.images.length - 1) {
                $scope.nextFlg = false;
        } else {
            $scope.prevFlg = true;
            $scope.index++;
            if($scope.index === $scope.images.length - 1) {
                $scope.nextFlg = false;
            }
        }
    };
    $scope.prev = function() {
        if($scope.index === 0) {
            $scope.prevFlg = false;
        } else {
            $scope.index--;
            if($scope.index === 0) {
                $scope.prevFlg = false;
                $scope.nextFlg = true;
            }
        }
    }
}]);