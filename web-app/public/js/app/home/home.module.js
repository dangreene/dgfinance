import angular from 'angular';
import 'angular-route';
import routeConfig from './home.routes.js';

export default angular.module('home', ['ngRoute'])
  .config(routeConfig);
