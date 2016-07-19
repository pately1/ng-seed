(function (angular) {
  angular
    .module('homepage')
    .factory('filterData', function () {
      return {
        filtData : function (num) {
          if (num == 1){
            return 'Action';
          }
          else if (num == 2){
            console.log('IN');
            return 'Adventure';
          }
          else if (num == 3){
            return 'Sci-Fi';
          }
          else if (num == 4){
            return 'Thriller';
          }
          else if (num == 5){
            return 'Crime';
          }
          else if (num == 6){
            return 'Drama';
          }
          else if (num == 7){
            return 'Fantasy';
          }
          else if (num == 8){
            return 'Comedy';
          }
          else if (num == 9){
            return 'History';
          }
          else if (num == 10){
            return '';
          }
        }
      }
    })
    .factory('sortData', function () {
      return {
        srtData : function (num) {
          if (num == 1){
            return '-Year';
          }
          else if (num == 2){
            console.log('IN');
            return '-imdbRating';
          }
          else if (num == 3){
            return '-imdbVotes';
          }
          else if (num == 4){
            return '';
          }
        }
      }
    })
    .factory('putComm',['$http', function ($http) {
      return {
        upd : function (id, movie) {
         $http.put('http://localhost:8080/app/api/movies/' +id, movie);
        }
      };
    }]);

})(angular);
