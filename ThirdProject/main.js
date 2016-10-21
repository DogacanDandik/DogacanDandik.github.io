/**
 * Created by dogacandandik on 10/21/16.
 */
var app = angular.module('mailApp', []);

app.controller('myController', function($scope, $http) {

      $scope.myFunc = function(username) {

          /*  $http.get("https://api.github.com/users/"+ username)
           .then(function(response) {
           $scope.Login = response.data["login"];
           $scope.UserID = response.data["id"];
           $scope.Location = response.data["location"];
           $scope.Email = response.data["email"];
           $scope.ProfilePhoto = response.data["avatar_url"];
           $scope.Company = response.data["company"];
           $scope.CreatedAt = response.data["created_at"];
           });
           */
          var email = "dogacan.dandik@hotmail.com";
         // apiKey

          $http.get('https://api.fullcontact.com/v2/person.json?email='+email,
              {params: {apiKey: 'b73984e6c124b0be'}})
              .then(function(response) {
                  $scope.FullContact = response.data;
                  /
              });

    };


});
