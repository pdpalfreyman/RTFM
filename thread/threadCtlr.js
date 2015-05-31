var app = angular.module('rtfmApp')

app.controller('threadCtrl', function($scope, threadRef, commentsRef, $firebaseArray, $firebaseObject){
	var thread = $firebaseObject(threadRef);

	thread.$bindTo($scope, 'thread');

	$scope.comments = $firebaseArray(commentsRef);

	$scope.createComment = function(username, title){
		$scope.comments.$add({
			username: username,
			title: title
		});
	};
});