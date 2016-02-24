app.controller('singleMovieController', ['$scope','$http', function ($scope, $http) {
  console.log('made it to single movie control');

  $scope.searchSingleMovies = function (movie) {
    $scope.searchme = $scope.title;

    $http.get('http://www.omdbapi.com/?t='+$scope.searchme+'&y=&plot=short&r=json').then(function(movieSearch){
      console.log(movieSearch);
      $scope.movies = []
      $scope.actors = movieSearch.data.Actors
    });
  }
  $scope.movieinfo = $scope.searchSingleMovies();
}])
