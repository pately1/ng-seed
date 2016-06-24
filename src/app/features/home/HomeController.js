angular.module('homepage', [])
  .controller('ModalInstanceCtrl', ['$scope', 'movie', function ($scope, movie) {
  $scope.movie = movie;
  }])
.controller('MainController', ['$scope','$timeout','$http','$uibModal', function ($scope,$timeout, $http, $uibModal) {
    $http.get('app/features/home/movielist.json').success(function (response) {
      $scope.list = response;
    })
  $scope.open = function (_movie) {

    var modalInstance = $uibModal.open({
      controller: "ModalInstanceCtrl",
      templateUrl: 'myModalContent.html',
      resolve: {
        movie: function()
        {
          return _movie;
        }
      }
    });

  };

}]);
