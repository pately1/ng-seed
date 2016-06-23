var myApp = angular.module('signup',[]);
var myList = [];
myApp.controller('SignupController', ['$scope', function ($scope) {
  var signup = this;
  this.userInfo = {};
  this.userInfo.user2 = '';
  this.userInfo.pwd2 = '';
  this.userInfo.email2 = '';
    $scope.submit = function () {
      myList.push(this.userInfo);
      for (var x in myList){
        console.log(myList[x]);
      }
    }
}]);
