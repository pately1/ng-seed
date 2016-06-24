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
  $scope.filtText = 'movie';
  $scope.tab = 1;
  $scope.isSelected = function (checkTab) {
    return ($scope.tab == checkTab);
  }
  $scope.select = function (setTab) {
    $scope.tab = setTab;
    if ($scope.tab == 1){
      $scope.filtText = 'movie';
    }
    else {
      $scope.filtText = 'series';
    }
  }

}]);
