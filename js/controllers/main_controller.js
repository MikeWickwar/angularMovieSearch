app.controller('MainController', ['$scope','$http', function ($scope, $http) {
  console.log('made it to main control');

  $scope.searchMovies = function () {
    $scope.searchme = $scope.title;
    console.log($scope.searchme);

    $http.get('http://www.omdbapi.com/?s='+$scope.searchme+'&y=&plot=short&r=json').then(function(movieSearch){
      console.log(movieSearch);
      $scope.movies = []
      movieSearch.data.Search.forEach(function (movie) {
        $scope.movies.push(movie)

      })
      console.log($scope.movies);
        // $http.get('http://www.omdbapi.com/?i='+$scope.movieId+'&y=&plot=short&r=json').then(function(idSearch){
        //   console.log(idSearch);
        //   $scope.movieId = idSearch.data
        // });
    });
  }

}])
