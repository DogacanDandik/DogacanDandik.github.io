/**
 * Created by dogacandandik on 10/19/16.
 */
var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when('/home', {
        templateUrl: 'Views/home.html',
        controller: 'mainController'
    });
    $routeProvider.when('/about', {
        templateUrl: 'Views/about.html',
        controller: 'aboutController'
    });
    $routeProvider.when('/contacts', {
        templateUrl: 'Views/contacts.html',
        controller: 'contactsController'
    });


});

app.controller('mainController', function($scope) {

    // create a message to display in our view
    $scope.message = 'Dodaaaa!';
});
app.controller('aboutController', function($scope) {

    // create a message to display in our view
    $scope.message = 'This is the about page!';
});
app.controller('contactsController', function($scope) {

    // create a message to display in our view
    $scope.message = 'This is like a meryy making!';
});

