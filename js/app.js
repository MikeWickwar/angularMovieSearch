var app = angular.module('movieSearch', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainController',
        template: '<h1>You have reached the main controller</h1>'
      })
      .when('/goodbye', {
        templateUrl: './js/partials/goodbye.html',
        controller: 'GoodByeController'
      })
      .when('/hello', {
        templateUrl: './js/partials/hello.html',
        controller: 'HelloController'
      })
      .otherwise({
        template: '<div><h1>No Page Located Here</h1></div>'
      })
});
