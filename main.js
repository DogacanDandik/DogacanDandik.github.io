var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {

    $scope.myFunc = function(username) {

        $http.get("https://api.github.com/users/"+ username)
            .then(function(response) {
                $scope.Login = response.data["login"];
                $scope.UserID = response.data["id"];
                $scope.Location = response.data["location"];
                $scope.Email = response.data["email"];
                $scope.ProfilePhoto = response.data["avatar_url"];
                $scope.Company = response.data["company"];
                $scope.CreatedAt = response.data["created_at"];
            });
    };


});
