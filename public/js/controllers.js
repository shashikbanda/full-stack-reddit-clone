var application = angular.module('myApp');
// var knex = require('./db/knex');


application.controller('SubmitController', function($scope,$http,$location){
	$scope.post = {};
	$scope.post.title = "";
	$scope.post.author = "";
	$scope.post.url = "";
	$scope.post.description = "";
	$scope.submitPost = function(){
		$http.post('/index', $scope.post)
		.then(function(){
			console.log("added")
		})
	}
			
})

application.controller('MainController', function($scope){
	console.log("main controller reached")
})