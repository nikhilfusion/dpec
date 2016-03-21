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
    		templateUrl : 'views/user/courses.html'
    	})
    	.state('showCourse', {
    		url : '/couses/:courseId',
    		controller : 'showCourseController',
    		templateUrl : 'views/user/showCourse.html'
    	})
        .state('admin', {
    		url : '/admin/home',
    		controller : 'adminController',
    		templateUrl : 'views/admin/admin.html'
    	})
        .state('physio', {
    		url : 'physio/home',
    		controller : 'physioController',
    		templateUrl : 'views/physio/home.html'
    	})
}]); 