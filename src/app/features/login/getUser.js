(function (angular) {
  angular
    .module('signin')
    .factory('getUser',['$http', function ($http) {
      return $http.get('http://localhost:8080/app/api/users');

    }]);

})(angular);
