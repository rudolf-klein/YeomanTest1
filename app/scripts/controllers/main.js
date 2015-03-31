'use strict';

/**
 * @ngdoc function
 * @name yeomanTest1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTest1App
 */
angular.module('yeomanTest1App')
  .controller('MainCtrl', function ($scope, localStorageService) {

    var todosInstore = localStorageService.get('todos');

    $scope.todos = todosInstore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos)}, true
    )

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
