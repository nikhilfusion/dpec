app.controller('courseController', ['$scope', '$location', function($scope, $location) {
    $scope.courses = [
        {image: '../assets/images/course/1.jpg', description: 'Image 00'},
        {image: '../assets/images/course/2.jpg', description: 'Image 01'},
        {image: '../assets/images/course/3.jpg', description: 'Image 02'},
        {image: '../assets/images/course/4.jpg', description: 'Image 03'},
        {image: '../assets/images/course/5.jpg', description: 'Image 04'},
        {image: '../assets/images/course/6.jpg', description: 'Image 05'}
    ];    
}]);