"use strict";

var app = angular.module("app", ["ngRoute", "ngAnimate"]);

app.controller("c1", function($rootScope, $scope,$timeout) {
    $scope.value = $rootScope.data.value[$rootScope.data.value.length - 1];
	$timeout(function() {
		$scope.list = [{number: "1"}, {number: "2"}, {number: "3"}];
	}, 1);

	$scope.moo =[{n:1, m:2}, {n:3,m:4}];
});

app.directive("breadcrumb", function() {
    return {
        restrict: "E",
        templateUrl: "breadcrumb.html"
    }
});

app.config(function($routeProvider) {
    $routeProvider.when('/Z/:ids', {
        templateUrl: 'card.html',
        controller: "c1"
    });
    $routeProvider.otherwise({redirectTo: "/Z/1"});
});

app.run(function ($rootScope, $location) {
    $rootScope.data ={};
    $rootScope.addToLocation = function(id) {
        return "#" + $location.path() + "-" +id;
    };

    $rootScope.linkToBreadcrumb = function(index, list) {
        var returnVal = "#/Z/"
        for (var i=0; i<index; i++) {
            returnVal += list[i] + "-";
        }
        returnVal += list[index]
        return returnVal;
    };

    $rootScope.$on('$routeChangeStart', function(scope, next, current){
        $rootScope.data.value = next.params.ids.split("-");
    });
});


