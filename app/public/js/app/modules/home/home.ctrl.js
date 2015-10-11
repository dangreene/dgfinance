import * as angular from 'angular';

class HomeController {
  constructor() {

  }
}

var controllerModule = angular.module('financeMain.homeController', [])
  .controller('HomeController', [HomeController]);

export var homeControllerModule = controllerModule;
