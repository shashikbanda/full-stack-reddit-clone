var application = angular.module('myApp');
// var knex = require('./db/knex');


application.controller('SubmitController', function($scope,$http,$location){
	$scope.post = {}; //initializing the post obj for data from submit form
	$scope.submitPost = function(){
		knex('post').insert({author:'test'}).then(){
			$location.path('/');
		}
			
	}
})

application.controller('MainController', function($scope){
	console.log("main controller reached")
})