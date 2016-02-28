var application = angular.module('myApp', ['ngRoute','ui.bootstrap'])

application.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'../partials/main.html',
		controller: 'MainController'
	})
	.when('/submit', {
		templateUrl:'../partials/submit.html',
		controller: 'SubmitController'
	})
})