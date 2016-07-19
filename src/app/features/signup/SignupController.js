var myList = [];
(function (angular) {
  'use strict';


var myApp = angular.module('signup',[]);
myApp.controller('SignupController', ['$scope', '$http', function ($scope, $http) {
  //var signup = this;
  this.userInfo = {};
  this.userInfo.username = '';
  this.userInfo.password = '';
  this.userInfo.email = '';
    this.submit = function () {
      myList.push(this.userInfo);
      sessionStorage.setItem("userdata", JSON.stringify(myList));
      console.log(angular.toJson(this.userInfo));
      $http.post('http://localhost:8080/app/api/users',angular.toJson(this.userInfo)).success(function(response)
      {
        console.log(response);
      });
      // var a = JSON.parse(sessionStorage.getItem("userdata"));
      // console.log(a);
      // for (var q in a){
      //   console.log(a[q]);
      // }
      // for (var x in myList){
      //   console.log(myList[x]);
      // }
    };


}]);
})(angular);
