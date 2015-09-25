angular.module('forOM', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
      controller: 'PostsCtrl'
    });

  $urlRouterProvider.otherwise('home');
}])
.factory('posts', [
function(){
var o = {
  posts: [
    {id: 1, title: 'post 1', upvotes: 5},
    {id: 2, title: 'post 2', upvotes: 2},
    {id: 3, title: 'post 3', upvotes: 15},
    {id: 4, title: 'post 4', upvotes: 9},
    {id: 5, title: 'post 5', upvotes: 4}
  ]
};
return o;
}])
.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  $scope.test = 'Hello world!';

  $scope.posts = posts.posts;

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

  $scope.wink = function(){
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
.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){
  $scope.post = posts.posts[$stateParams.id];
}]);