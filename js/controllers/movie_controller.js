app.controller('singleMovieController', ['$scope','$http', function ($scope, $http) {
  console.log('made it to single movie control');

  $scope.searchSingleMovies = function () {
    $scope.searchme = $scope.title;
    console.log($scope.searchme);

    $http.get('http://www.omdbapi.com/?i='+$scope.movieId+'&y=&plot=short&r=json').then(function(movieSearch){
      console.log(movieSearch);
      $scope.movies = []

    });
  }
}])
