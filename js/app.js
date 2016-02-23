var app = angular.module('movieSearch', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/movies/show', {
        templateUrl: './js/partials/showmovies.html',
        controller: 'MainController'
      })
      .otherwise({
        template: '<div><h1>No Page Located Here</h1></div>'
      })
});
