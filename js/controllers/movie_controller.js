app.controller('singleMovieController', ['$scope','$http','$route', function ($scope, $http, $route) {
  console.log('made it to single movie control');

  $scope.searchSingleMovies = function () {
    $http.get('http://www.omdbapi.com/?i='+$route.current.params.id+'&y=&plot=full&r=json').then(function(movieSearch){
      $scope.movieinfo = movieSearch.data
      $scope.title = movieSearch.data.Title
      console.log($scope.movieinfo);
    });
  }
  $scope.searchTrigger = $scope.searchSingleMovies();
}])
