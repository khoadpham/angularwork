/**
 * Created by kpham on 8/18/16.
 */
var fruitsApp = angular.module('fruitsApp', []);

fruitsApp.controller ('fruitsController', function ($scope, $http){
    //$scope.fruits = [];
    $http.get('scripts/fruits.json').then(function(result){
        $scope.fruits = result.data;
    });
});