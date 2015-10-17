import angular from 'angular';
import 'angular-route';
import routeConfig from './transactionImport.routes.js';

angular.module('transactionImport', ['ngRoute']).config(routeConfig);
