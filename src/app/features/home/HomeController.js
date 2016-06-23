angular.module('homepage', [])
.controller('MainController', ['$scope','$http', function ($scope, $http) {
    $http.get('app/features/home/movielist.json').success(function (response) {
      $scope.list = response;
    })
}]);
