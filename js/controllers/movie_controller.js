app.controller('singleMovieController', ['$scope','$http','$route', function ($scope, $http, $route) {
  console.log('made it to single movie control');
  console.log($route);

  $scope.searchSingleMovies = function () {
    $http.get('http://www.omdbapi.com/?i='+$route.current.params.id+'&y=&plot=short&r=json').then(function(movieSearch){
      var results = movieSearch.data
      console.log(results);
      $scope.title = results.Title
      $scope.actors = results.Actors
      $scope.poster = results.Poster
      $scope.year = results.Year

    });
  }
  $scope.movieinfo = $scope.searchSingleMovies();
}])
