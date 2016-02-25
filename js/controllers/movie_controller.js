app.controller('singleMovieController', ['$scope','$http','$route', function ($scope, $http, $route) {
  console.log('made it to single movie control');

  $scope.searchSingleMovies = function () {
    $http.get('http://www.omdbapi.com/?i='+$route.current.params.id+'&y=&plot=full&r=json').then(function(movieSearch){
      $scope.movieinfo = movieSearch.data
      $scope.title = movieSearch.data.Title
      $scope.actors = movieSearch.data.Actors
      $scope.plot = movieSearch.data.Plot
      $scope.poster = movieSearch.data.poster
      delete $scope.movieinfo.Type
      delete $scope.movieinfo.Response
      delete $scope.movieinfo.Title
      delete $scope.movieinfo.Actors
      delete $scope.movieinfo.Plot
      delete $scope.movieinfo.Poster
      console.log($scope.movieinfo);
    });
  }
  $scope.searchTrigger = $scope.searchSingleMovies();
}])
