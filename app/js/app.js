'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/instructions', {templateUrl: 'partials/instructions.html', controller: 'MyCtrl1'});
    $routeProvider.when('/register', {templateUrl: 'partials/register.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/instructions'});
  }]);
