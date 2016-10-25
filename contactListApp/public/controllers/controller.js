var myApp = angular.module("myApp", []);
myApp.controller("AppCtrl", ["$scope", "$http",
			     function($scope, $http) {
				 console.log("Herrow wrrld");
				 person1 = {
				     name:"Rick",
				     email:"rick@roll.com",
				     number:"111-111-1111"
				 };
				 person2 = {
				     name:"Roy",
				     email:"roy@orbi.com",
				     number:"222-222-2222"
				 };
				 person3 = {
				     name:"Rhianna",
				     email:"rhianna@ho.com",
				     number:"333-333-3333"
				 };

				 var contactList = [person1, person2, person3];
				 $scope.contactList = contactList;
			     }]);

