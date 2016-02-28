var application = angular.module('myApp');
// var knex = require('./db/knex');


application.controller('SubmitController', function($scope,$http,$location,$route){
	$scope.post = {};
	$scope.post.title = "";
	$scope.post.author = "";
	$scope.post.url = "";
	$scope.post.description = "";
	$scope.submitPost = function(){
		$http.post('/index', $scope.post)
		.then(function(){
			$route.reload()
		})
		$location.url('/')
	}
			
})

application.controller('MainController', function($scope,$http,$location,$route){
	$scope.postsObject = {};
	$scope.showCommentForm = false; //boolean to toggle comment form to add comment
	$scope.showComments = false; //boolean to toggle comment history on post
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
			$route.reload()
		})
		$route.reload()

	}
	$scope.addComment = function(){
		$scope.showCommentForm = !$scope.showCommentForm;
	}
})