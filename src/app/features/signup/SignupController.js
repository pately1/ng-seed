var myList = [];
(function (angular) {
  'use strict';


var myApp = angular.module('signup',[]);
myApp.controller('SignupController', ['$scope', function ($scope) {
  //var signup = this;
  this.userInfo = {};
  this.userInfo.user2 = '';
  this.userInfo.pwd2 = '';
  this.userInfo.email2 = '';
    $scope.submit = function () {
      myList.push(this.userInfo);
      sessionStorage.setItem("userdata", JSON.stringify(myList));
      // var a = JSON.parse(sessionStorage.getItem("userdata"));
      // console.log(a);
      // for (var q in a){
      //   console.log(a[q]);
      // }
      // for (var x in myList){
      //   console.log(myList[x]);
      // }
    }
}]);
})(angular);
