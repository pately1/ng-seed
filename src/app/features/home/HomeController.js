(function (angular) {
  'use strict';


angular.module('homepage', [])
  .controller('ModalInstanceCtrl', ['$scope', 'movie','$http','putComm', function ($scope, movie, $http, putComm) {
    this.movie = movie;
    this.comm = '';
    var comments = [];
    comments.push(movie.comments);
    this.click = function (movie) {
     comments.push(this.comm);
      console.log(movie);
      movie.comments = comments.toString();
      console.log(movie);
      putComm.upd(movie.id, movie);
    }
    this.rate = movie.ratings;
    console.log(movie.ratings);
    this.max = 5;
    var rates = movie.ratings;
    this.rating = function (mv) {
      rates = ((this.rate + mv.ratings)/2);
      mv.ratings = rates;
      putComm.upd(mv.id, mv);
    };
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
