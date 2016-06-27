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
  $scope.sortTab = '';
  $scope.tab = 1;
  $scope.ordr = '';
  $scope.isSelected = function (checkTab) {
    return ($scope.tab == checkTab);
  }
  $scope.select = function (setTab) {
    console.log(setTab);
    if (setTab == 1){
      $scope.ordr = 'Action';
    }
    else if (setTab == 2){
      console.log('IN');
      $scope.ordr = 'Adventure';
    }
    else if (setTab == 3){
      $scope.ordr = 'Sci-Fi';
    }
    else if (setTab == 4){
      $scope.ordr = 'Thriller';
    }
    else if (setTab == 5){
      $scope.ordr = 'Crime';
    }
    else if (setTab == 6){
      $scope.ordr = 'Drama';
    }
    else if (setTab == 7){
      $scope.ordr = 'Fantasy';
    }
    else if (setTab == 8){
      $scope.ordr = 'Comedy';
    }
    else if (setTab == 9){
      $scope.ordr = 'History';
    }
    else if (setTab == 10){
      $scope.ordr = '';
    }
    // $scope.tab = setTab;
    // if ($scope.tab == 1){
    //   $scope.filtText = 'movie';
    // }
    // else {
    //   $scope.filtText = 'series';
    // }
  }
$scope.selectSort = function (tab) {
  if (tab == 1){
    $scope.sortTab = '-Year';
  }
  else if (tab == 2){
    console.log('IN');
    $scope.sortTab = '-imdbRatings';
  }
  else if (tab == 3){
    $scope.sortTab = '-imdbVotes';
  }
  else if (tab == 4){
    $scope.sortTab = '';
  }
}
}]);
