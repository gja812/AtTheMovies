
(function (app) {

  var ListController = function ($scope, $http) {
    
    $http({
      method: 'GET',
      url: '/api/movies'
    }).then(function (response) {
      $scope.movies = response.data;
      console.log(response.data);
      }, function (error) {
        console.log("Error listing movies");
      });
  };
  //ListController.$inject = ["$scope", "$http"];

  app.controller("ListController", ListController);

}(angular.module("atTheMovies")));



/*
I could also write this like so:

(function (app) {
  var app = angular.module("atTheMovies");
}());

*/