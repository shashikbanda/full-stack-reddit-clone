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
		})
		$location.url('/')
	}
			
})

application.controller('MainController', function($scope,$http){
	$scope.postsObject = {};
	$http.get('/index').then(function(data){
		$scope.postsObject = data;
	})
})