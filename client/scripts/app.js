'use strict';
/**
 * @ngdoc overview
 * @name DPEC App
 * @description
 * # DPEC App
 *
 * Main module of the application.
 */
var app = angular.module('dpecApp',[
	'ui.router',
	'restangular',
	'ngAnimate'
]);
app.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', function($stateProvider, $urlRouterProvider, RestangularProvider){
	$urlRouterProvider.otherwise("/");
	$stateProvider
      .state('home', {
        	url: '/',
        	controller: 'landingController',
        	templateUrl: 'views/home.html'
    	})
    	.state('courses', {
    		url : '/courses',
    		controller : 'courseController',
    		templateUrl : 'views/courses.html'
    	})
    	.state('showCourse', {
    		url : '/couses/:courseId',
    		controller : 'showCourseController',
    		templateUrl : 'views/showCourse.html'
    	})
}]);

app.directive('slider', function ($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope:{
        images: '='
    },
    link: function (scope, elem, attrs) {
    
        scope.currentIndex=0;

        scope.next=function(){
            scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
        };
        
        scope.prev=function(){
            scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
        };
        
        scope.$watch('currentIndex',function(){
            scope.images.forEach(function(image){
                image.visible=false;
            });
            scope.images[scope.currentIndex].visible=true;
        });
        
        /* Start: For Automatic slideshow*/
        
        var timer;
        
        var sliderFunc=function(){
            timer=$timeout(function(){
                scope.next();
                timer=$timeout(sliderFunc,5000);
            },5000);
        };
        
        sliderFunc();
        
        scope.$on('$destroy',function(){
            $timeout.cancel(timer);
        });
        
        /* End : For Automatic slideshow*/
        
    },
    templateUrl:'templates/templateurl.html'
    }
})    