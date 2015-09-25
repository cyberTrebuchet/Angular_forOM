angular.module('forOM', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('blinks', {
      url: '/home',
      templateUrl: '/blinks.html',
      controller: 'BlinksCtrl'
    })
    .state('winks', {
      url: '/posts/{id}',
      templateUrl: '/winks.html',
      controller: 'WinksCtrl'
    });

  $urlRouterProvider.otherwise('home');
}])
.factory('posts', [
function(){
var o = {
  posts: [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ]
};
return o;
}])
.controller('BlinksCtrl', [
'$scope',
'posts',
function($scope, posts){
  $scope.test = 'Hello world!';

  $scope.posts = posts.posts;

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
      ]
    });
    $scope.title = '';
    $scope.link = '';
  };
}])
.controller('WinksCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){
  $scope.post = posts.posts[$stateParams.id];
}]);