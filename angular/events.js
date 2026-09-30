(function () {
  "use strict";

  angular.module("jalaEvents", []).controller("EventsController", ["$scope", "$http", function ($scope, $http) {
    $scope.students = [];
    $scope.dataMessage = "Loading the local JSON fixture...";
    $scope.showNote = true;
    $scope.hideNote = false;
    $scope.allowAction = false;
    $scope.actionCount = 0;
    $scope.pointerMessage = "No pointer movement yet.";
    $scope.clickMessage = "No click yet.";

    $scope.loadFixture = function () {
      $scope.dataMessage = "Loading JSON fixture...";
      $http.get("events-students.json").then(function (response) {
        $scope.students = response.data;
        $scope.dataMessage = "Loaded " + response.data.length + " sample records from JSON.";
      }, function () {
        $scope.dataMessage = "Could not load the JSON fixture.";
      });
    };

    $scope.loadDatabase = function () {
      $scope.dataMessage = "Requesting MySQL-backed API...";
      $http.get("mysql/students.php").then(function (response) {
        if (!Array.isArray(response.data)) {
          $scope.dataMessage = "MySQL API returned an invalid response. Configure PHP and MySQL as described above.";
          return;
        }
        $scope.students = response.data;
        $scope.dataMessage = "Loaded " + response.data.length + " records from the MySQL API.";
      }, function (error) {
        $scope.dataMessage = "MySQL API unavailable (HTTP " + error.status + "). Configure PHP and MySQL as described above.";
      });
    };

    $scope.trackPointer = function (event) {
      $scope.pointerMessage = "$event " + event.type + " at " + Math.round(event.offsetX) + ", " + Math.round(event.offsetY);
    };

    $scope.recordClick = function (event) {
      $scope.clickMessage = "$event " + event.type + " on " + event.currentTarget.tagName.toLowerCase();
    };

    $scope.recordKey = function (event) {
      if (event.key === "Enter" || event.key === " ") $scope.recordClick(event);
    };

    $scope.loadFixture();
  }]);
})();