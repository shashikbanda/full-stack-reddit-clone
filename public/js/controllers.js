var application = angular.module('myApp');

application.controller('SubmitController', function($scope,$http,$location){
	$scope.post = {}; //initializing the post obj for data from submit form
	$scope.submitPost = function(){
		// $http.get('')
		$location.path('/');
	}
})

application.controller('MainController', function($scope){
	console.log("main controller reached")
})