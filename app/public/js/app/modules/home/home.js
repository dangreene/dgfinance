import * as angular from 'angular';
import 'angular-route';
import {
  homeControllerModule
}
from './home.ctrl.js';

var intHomeModule = angular.module('home', ['ngRoute', homeControllerModule.name])
  .config(function($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'js/app/modules/home/home.tpl.html',
      controller: 'HomeController as homeCtrl'
    });

    $routeProvider.otherwise({
      redirectTo: '/'
    });
  });

export var homeModule = intHomeModule;
