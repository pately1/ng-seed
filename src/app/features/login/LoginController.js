angular.module('signin',[])
.controller('LoginController',['$scope','$rootScope', '$window','$location', function ($scope, $rootScope, $window, $location) {
  var lgin = this;
  this.username = '';
  this.pwd = '';
  $scope.login = function () {
    if (myList.length == 0){
      $window.alert('Error');
    }
    if (myList.length != 0){
      for (var x in myList){
        if (myList[x].user2 == this.username && myList[x].pwd2 == this.pwd){
          $location.path('/home');
          $rootScope.auth = true;
        }
      }

    }
    else {
      $window.alert ('Incorrect Credentials !');
    }
  }
}]);
