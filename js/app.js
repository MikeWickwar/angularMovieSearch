var app = angular.module('movieSearch', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/movies/show', {
        templateUrl: './js/partials/showmovies.html',
        controller: 'MainController'
      })
      .when('/movies/:id', {
        templateUrl: './js/partials/singleshow.html',
        controller: 'singleMovieController'
      })
      .otherwise({
        template: '<div><h1>No Page Located Here</h1></div>'
      })
});
