(function () {
  "use strict";

  var app = angular.module("jalaFilters", []);

  app.filter("wordCase", function () {
    return function (value) {
      return String(value || "").replace(/\b\w/g, function (letter) {
        return letter.toUpperCase();
      });
    };
  });

  app.factory("lessonApi", ["$http", function ($http) {
    var endpoint = "https://jsonplaceholder.typicode.com/posts";
    return {
      getPost: function () {
        return $http.get(endpoint + "/1");
      },
      createPost: function (post) {
        return $http.post(endpoint, post);
      }
    };
  }]);

  app.controller("FiltersController", ["$scope", "$location", "$timeout", "lessonApi", function ($scope, $location, $timeout, lessonApi) {
    var uppercaseHelper = angular.uppercase || function (value) { return String(value).toUpperCase(); };
    var lowercaseHelper = angular.lowercase || function (value) { return String(value).toLowerCase(); };

    $scope.sampleText = "Angular filters at work";
    $scope.sampleDate = new Date(2026, 8, 30);
    $scope.sampleNumber = 123456.789;
    $scope.currentUrl = $location.absUrl();
    $scope.timerMessage = "Waiting for the timer.";
    $scope.responseSummary = "No request yet.";
    $scope.legacyCaseMessage = "Uppercase: " + uppercaseHelper("legacy") + " / Lowercase: " + lowercaseHelper("LEGACY");

    $timeout(function () {
      $scope.timerMessage = "$timeout ran after one second.";
    }, 1000);

    $scope.loadPost = function () {
      $scope.responseSummary = "Loading GET...";
      lessonApi.getPost().then(function (response) {
        $scope.responseSummary = JSON.stringify({
          config: { method: response.config.method, url: response.config.url },
          data: response.data,
          status: response.status
        }, null, 2);
      }, function (error) {
        $scope.responseSummary = "GET failed: " + error.status + ". Check the network connection.";
      });
    };

    $scope.createPost = function () {
      var post = { title: "AngularJS practice", body: "Sample POST from the assignment page.", userId: 1 };
      $scope.responseSummary = "Sending POST...";
      lessonApi.createPost(post).then(function (response) {
        $scope.responseSummary = JSON.stringify({
          config: { method: response.config.method, url: response.config.url },
          data: response.data,
          status: response.status
        }, null, 2);
      }, function (error) {
        $scope.responseSummary = "POST failed: " + error.status + ". Check the network connection.";
      });
    };
  }]);
})();