var application = angular.module('myApp', ['ngRoute'])

application.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'main.html',
		controller: 'MainController'
	})
	.when('/submit', {
		templateUrl:'submit.html',
		controller: 'SubmitController'
	})
})