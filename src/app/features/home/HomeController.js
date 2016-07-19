(function (angular) {
  'use strict';


angular.module('homepage', [])
  .controller('ModalInstanceCtrl', ['$scope', 'movie','$http','putComm', function ($scope, movie, $http, putComm) {
    this.movie = movie;
    this.comm = '';
    var comments = [];
    comments.push(movie.comments);
    this.click = function (movie) {
     comments.push($scope.comm);
      movie.comments = comments.toString();
      console.log(movie);
      putComm.upd(movie.id, movie);
    }
  }])
  .controller('MainController', ['$scope','$http','$uibModal','filterData','sortData','ajaxService', function ($scope, $http, $uibModal, filterData, sortData, ajaxService) {
   ajaxService.success(function (response) {
     $scope.list = response;
   });
   this.open = function (inst) {

    var modalInstance = $uibModal.open({
      controller: "ModalInstanceCtrl",
      controllerAs: "mi",
      templateUrl: 'myModalContent.html',
      resolve: {
        movie: function()
        {
          return inst;
        }
      }
    });

  };

  // For Movies
  this.sortTab1 = '';
  this.ordr1 = '';
  this.filtText1 = '';
  this.filtText2 = '';

  this.genreSort = function (setTab) {
    console.log(setTab);
    this.ordr1 = filterData.filtData(setTab);
  };
this.sortMovie = function (tab) {
  this.sortTab1 = sortData.srtData(tab);
};
 }]);
})(angular);
