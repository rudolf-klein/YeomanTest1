'use strict';

/**
 * @ngdoc function
 * @name yeomanTest1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTest1App
 */
angular.module('yeomanTest1App')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item1','Item2','Item3','Item4'];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
