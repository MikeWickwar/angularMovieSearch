app.controller('singleMovieController', ['$scope','$http', function ($scope, $http) {
  console.log('made it to single movie control');

  $scope.searchSingleMovies = function (movie) {
    $http.get('http://www.omdbapi.com/?t='+$scope.movieid+'&y=&plot=short&r=json').then(function(movieSearch){
      $scope.actors = movieSearch.data.Actors
    });
  }
  $scope.movieinfo = $scope.searchSingleMovies();
}])
