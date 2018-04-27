
(function (app) {
  var DetailsController = function ($scope, $http, $routeParams) {
    var id = $routeParams.id;

    $http.get('api/movies/' + id).then(successCallback, errorCallback);
    

  function successCallback(response) {
    $scope.movie = response.data
  }
  function errorCallback(error) {
    console.log("Error getting movie " + id);
  }

  };
  app.controller("DetailsController", DetailsController);


}(angular.module("atTheMovies")));