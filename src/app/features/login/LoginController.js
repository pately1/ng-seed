(function (angular) {
  'use strict';

angular.module('signin',[])
.controller('LoginController',['$scope', 'getUser', '$rootScope', '$window','$location', '$http', function ($scope, getUser, $rootScope, $window, $location, $http) {
  //var lgin = this;
  this.username = '';
  this.pwd = '';

  this.login = function () {
    getUser.success(function (response) {
      $scope.data = response;
    });
    console.log($scope.data);
    for (var x in $scope.data){
      if ($scope.data[x].username == this.username && $scope.data[x].password == this.pwd) {
        $location.path('/home');
        $rootScope.auth = true;
      }
      else {

      }
    }
  };
}]);

})(angular);
