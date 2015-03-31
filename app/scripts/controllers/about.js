'use strict';

/**
 * @ngdoc function
 * @name yeomanTest1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanTest1App
 */
angular.module('yeomanTest1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
