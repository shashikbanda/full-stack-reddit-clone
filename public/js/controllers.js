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
	$scope.deletePost = function(post){
		$scope.remove = {};
		$scope.remove.title = post.title;
		$scope.remove.author = post.author;
		$scope.remove.url = post.imageUrl;
		$scope.remove.desc = post.description;

		$http.post('/index/delete',$scope.remove)
		.then(function(){
			console.log("sending object to delete route on api")
		})

	}
})