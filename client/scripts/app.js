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
	'ngAnimate',
    'ngCookies',
    'ui.bootstrap',
    'angularjs-dropdown-multiselect'
]);
app.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider','$locationProvider', function($stateProvider, $urlRouterProvider, RestangularProvider, $locationProvider){
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
    		url : '/courses/:courseId',
    		controller : 'showCourseController',
    		templateUrl : 'views/user/showCourse.html'
    	})
        .state('showVideo', {
            url : '/video/:courseId',
            controller : 'showCourseController',
            templateUrl : 'views/user/showVideo.html'
        })
        .state('admin', {
    		url : '/admin/home',
    		controller : 'adminController',
    		templateUrl : 'views/admin/admin.html'
    	})
        .state('physio', {
    		url : '/physio/home',
    		controller : 'physioController',
    		templateUrl : 'views/physio/home.html'
    	})
        .state('physioCourse', {
            url : '/physio/courses/:courseId',
            controller : 'physioController',
            templateUrl : 'views/physio/courses.html'
        })
        .state('physioCustomers', {
            url : '/physio/users',
            controller : 'physioCustomersController',
            templateUrl : 'views/physio/users.html'
        })
        .state('physioCustomerDtls', {
            url : '/physio/users/:userId',
            controller : 'physioCustomersController',
            templateUrl : 'views/physio/editUser.html'
        })
        //.state('profile', {
    	// 	url : '/profile',
    	// 	controller : 'profileController',
    	// 	templateUrl : 'views/profile.html'
    	// })
        .state('createUser', {
            url : '/createUser',
            controller : 'createUserController',
            templateUrl : 'views/physio/createUser.html'
        });
        // $locationProvider.html5Mode({
        //     enabled: true
        // });

      
}]); 