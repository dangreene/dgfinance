import * as angular from 'angular';

function HomeController() {
  var initializeController = function() {

  };

  initializeController();
}

var controllerModule = angular.module('financeMain.homeController', [])
  .controller('HomeController', [HomeController]);
  
export var homeControllerModule = controllerModule;
