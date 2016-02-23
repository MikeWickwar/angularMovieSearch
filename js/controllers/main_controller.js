app.controller('MainController', ['$scope','$http', function ($scope, $http) {
  console.log('made it to main control');

  $scope.searchMovies = function () {
    $scope.searchme = $scope.title;
    console.log($scope.searchme);
    
    $http.get('http://www.omdbapi.com/?t='+$scope.searchme+'&y=&plot=short&r=json').then(function(data){
      console.log(data);
      $scope.movie = data.data;
    });
  }

}])
