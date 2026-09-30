(function () {
  "use strict";

  var app = angular.module("jalaValidation", ["ngRoute", "ngAnimate"]);

  app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("!");
    $routeProvider
      .when("/home", { templateUrl: "home.html" })
      .when("/about", { templateUrl: "about.html" })
      .otherwise({ redirectTo: "/home" });
  }]);

  app.directive("validHandle", function () {
    return {
      require: "ngModel",
      link: function (scope, element, attributes, modelController) {
        modelController.$validators.validHandle = function (modelValue, viewValue) {
          var value = modelValue || viewValue;
          return modelController.$isEmpty(value) || /^[a-z0-9_]+$/i.test(value);
        };
      }
    };
  });

  app.controller("ValidationController", ["$scope", function ($scope) {
    $scope.learner = { name: "", email: "", handle: "", track: "", style: "", accepted: false };
    $scope.showAnimation = true;
    $scope.submitMessage = "Complete the required fields to enable submission.";

    $scope.submitForm = function (form) {
      if (form.$valid) $scope.submitMessage = "Form valid for " + $scope.learner.name + " (" + $scope.learner.email + ").";
    };
  }]);
})();