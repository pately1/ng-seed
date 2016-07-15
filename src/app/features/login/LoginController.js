(function (angular) {
  'use strict';

angular.module('signin',[])
.controller('LoginController',['$scope','$rootScope', '$window','$location', '$http', function ($scope, $rootScope, $window, $location, $http) {
  //var lgin = this;
  this.username = '';
  this.pwd = '';
  $http.get('http://localhost:8080/app/api/users').success(function (response) {
    $scope.data = response;
  });
  $scope.login = function () {
    // if (myList.length == 0){
    //   $window.alert('Error');
    // }
    // else {
    //   var a = JSON.parse(sessionStorage.getItem("userdata"));
    //   for (var x in a) {
    //     if (a[x].user2 == this.username && a[x].pwd2 == this.pwd) {
    //       $location.path('/home');
    //       $rootScope.auth = true;
    //     }
    //   }
    //   // if (){
    //   //   $window.alert ('Incorrect Credentials !');
    //   // }
    // }

console.log($scope.data);
    for (var x in $scope.data){
      if ($scope.data[x].username == this.username && $scope.data[x].password == this.pwd) {
        $location.path('/home');
        $rootScope.auth = true;
      }
    }
  }
}]);

})(angular);
