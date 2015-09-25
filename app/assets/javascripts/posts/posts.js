angular.module('forOM', [])
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
}]);