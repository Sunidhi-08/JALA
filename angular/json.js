(function () {
  "use strict";

  angular.module("jalaJson", []).controller("JsonController", ["$scope", "$http", function ($scope, $http) {
    $scope.students = [];
    $scope.loading = true;
    $scope.searchText = "";
    $scope.sortField = "name";

    $http.get("students.json").then(function (response) {
      $scope.students = response.data;
      $scope.loading = false;
    }, function () {
      $scope.loading = false;
      $scope.students = [];
    });
  }]);
})();