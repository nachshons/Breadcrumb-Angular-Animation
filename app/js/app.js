"use strict";

var app = angular.module("app", ["ngRoute", "ngAnimate"]);

app.controller("c1", function($rootScope, $scope,$timeout) {
    $scope.value = $rootScope.data.value[$rootScope.data.value.length - 1];
	
	$scope.list = [];
	$scope.max = +$scope.value;
	
	$scope.add = function () {
		$scope.max += 1;
		$scope.list.push({ number: $scope.max });
	};

	setTimeout(function () {
		$scope.hey = true;
		$scope.$apply();
	}, 1000);
	
	for (var i = 1; i <= $scope.value; i++) {
		$scope.list.push({number: i});
	}
});

app.directive("breadcrumb", function() {
    return {
        restrict: "E",
        templateUrl: "app/breadcrumb.html"
    }
});

app.config(function($routeProvider) {
    $routeProvider.when('/:ids', {
        templateUrl: 'app/card.html',
        controller: "c1"
    });
    $routeProvider.otherwise({redirectTo: "/9"});
});

app.run(function ($rootScope, $location) {
    $rootScope.data ={};
    $rootScope.addToLocation = function(id) {
        return "#" + $location.path() + "-" +id;
    };

    $rootScope.linkToBreadcrumb = function(index, list) {
        var returnVal = "#/";
        for (var i=0; i<index; i++) {
            returnVal += list[i] + "-";
        }
        returnVal += list[index]
        return returnVal;
    };
	
	$rootScope.home = function () {
		$location.path("");
	};

    $rootScope.$on('$routeChangeStart', function(scope, next, current){
        if (next.params.ids) {
			$rootScope.data.value = next.params.ids.split("-");
		}
    });
});


