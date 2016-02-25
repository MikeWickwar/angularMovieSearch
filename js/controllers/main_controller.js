app.controller('MainController', ['$scope','$http', function ($scope, $http) {
  console.log('made it to main control');

  $scope.searchMovies = function () {
    console.log($scope.title);
    $http.get('http://www.omdbapi.com/?s='+$scope.title+'&plot=short').then(function(movieSearch){
      console.log(movieSearch);
      $scope.movies = []
      movieSearch.data.Search.forEach(function (movie) {
        $scope.movies.push(movie)
        })
      });
    }
  }])
