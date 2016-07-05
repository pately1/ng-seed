(function (angular) {
  'use strict';


angular.module('homepage', [])
  .controller('ModalInstanceCtrl', ['$scope', 'movie', function ($scope, movie) {
    $scope.movie = movie;
  }])
.controller('MainController', ['$scope','$http','$uibModal', function ($scope, $http, $uibModal) {
    $http.get('app/features/home/movielist.json').success(function (response) {
      $scope.list = response;
    });
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

  // For Movies
  this.filtText1 = '';
  this.sortTab1 = '';
  this.ordr1 = '';

  // For TV shows
  // $scope.filtText2 = '';
  // $scope.sortTab2 = '';
  // $scope.ordr2 = '';

  // For Movies
 // this.searchData = '';
  // this.search = function () {
  //   this.filtText1 = this.searchData;
  // };
  $scope.filtText1 = '';
  $scope.filtText2 = '';

  this.genreSort = function (setTab) {
    console.log(setTab);
    if (setTab == 1){
      this.ordr1 = 'Action';
    }
    else if (setTab == 2){
      console.log('IN');
      this.ordr1 = 'Adventure';
    }
    else if (setTab == 3){
      this.ordr1 = 'Sci-Fi';
    }
    else if (setTab == 4){
      this.ordr1 = 'Thriller';
    }
    else if (setTab == 5){
      this.ordr1 = 'Crime';
    }
    else if (setTab == 6){
      this.ordr1 = 'Drama';
    }
    else if (setTab == 7){
      this.ordr1 = 'Fantasy';
    }
    else if (setTab == 8){
      this.ordr1 = 'Comedy';
    }
    else if (setTab == 9){
      this.ordr1 = 'History';
    }
    else if (setTab == 10){
      this.ordr1 = '';
    }
    // $scope.tab = setTab;
    // if ($scope.tab == 1){
    //   $scope.filtText = 'movie';
    // }
    // else {
    //   $scope.filtText = 'series';
    // }
  };
this.sortMovie = function (tab) {
  if (tab == 1){
    this.sortTab1 = '-Year';
  }
  else if (tab == 2){
    console.log('IN');
    this.sortTab1 = '-imdbRating';
  }
  else if (tab == 3){
    this.sortTab1 = '-imdbVotes';
  }
  else if (tab == 4){
    this.sortTab1 = '';
  }
};
  // For TV Shows

//   $scope.genreSortTv = function (setTab) {
//     console.log(setTab);
//     if (setTab == 1){
//       $scope.ordr2 = 'Action';
//     }
//     else if (setTab == 2){
//       console.log('IN');
//       $scope.ordr2 = 'Adventure';
//     }
//     else if (setTab == 3){
//       $scope.ordr2 = 'Sci-Fi';
//     }
//     else if (setTab == 4){
//       $scope.ordr2 = 'Thriller';
//     }
//     else if (setTab == 5){
//       $scope.ordr2 = 'Crime';
//     }
//     else if (setTab == 6){
//       $scope.ordr2 = 'Drama';
//     }
//     else if (setTab == 7){
//       $scope.ordr2 = 'Fantasy';
//     }
//     else if (setTab == 8){
//       $scope.ordr2 = 'Comedy';
//     }
//     else if (setTab == 9){
//       $scope.ordr2 = 'History';
//     }
//     else if (setTab == 10){
//       $scope.ordr2 = '';
//     }
//   };
//
//   $scope.sortTv = function (tab) {
//     if (tab == 1){
//       $scope.sortTab2 = '-Year';
//     }
//     else if (tab == 2){
//       console.log('IN');
//       $scope.sortTab2 = '-imdbRating';
//     }
//     else if (tab == 3){
//       $scope.sortTab2 = '-imdbVotes';
//     }
//     else if (tab == 4){
//       $scope.sortTab2 = '';
//     }
//   };
//   $scope.searchDataTv = '';
//   $scope.searchTv = function () {
//     $scope.filtText2 = $scope.searchDataTv;
//   }
 }]);
})(angular);
