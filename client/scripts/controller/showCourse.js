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
}]);