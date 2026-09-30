(function () {
  "use strict";

  var app = angular.module("jalaBasics", []);

  app.directive("lessonBadge", function () {
    return {
      restrict: "E",
      scope: { label: "@" },
      template: "<span class=\"badge\">{{ label }}</span>"
    };
  });

  app.controller("BasicsController", ["$scope", "$rootScope", function ($scope, $rootScope) {
    $scope.backgroundColor = "#cce9d8";
    $scope.scopeMessage = "This value belongs to BasicsController.";
    $rootScope.courseName = "JALA Front-End";
    $scope.rootCourseName = $rootScope.courseName;
  }]);
})();