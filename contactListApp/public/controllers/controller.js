
var myApp = angular.module("myApp", []);

myApp.controller("AppCtrl", ["$scope", "$http",
			     function($scope, $http) {
				 console.log("Herrow wrrld");

				 var refresh = function() {
				     $http.get("/contactList").success(function(response) {
					 console.log("Got Data!");
					 $scope.contactList = response;
				     });
				 };
				 refresh();

				 $scope.addContact = function() {
				     $http.post("/contactList", $scope.contact).success(function(response) {
					 console.log(response);
					 refresh();
				     });
				 };

			     }]);

