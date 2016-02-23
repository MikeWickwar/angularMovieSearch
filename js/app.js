var app = angular.module('movieSearch', ['ngRoute']);

app.controller('MainController', ['$scope','$http', function ($scope, $http) {
  console.log('made it to main control');
  $http.get('http://www.omdbapi.com/?t=zoolander&y=&plot=short&r=json').then(function(data){
    console.log(data);
    $scope.movie = data.data;
    });
}])
