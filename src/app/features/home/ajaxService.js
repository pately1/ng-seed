(function (angular) {
  angular
    .module('homepage')
    .factory('ajaxService',['$http', function ($http) {
     return $http.get('http://localhost:8080/app/api/movies');
    }]);

})(angular);
