import angular from 'angular';
import 'angular-route';
import 'ui-grid';
import routeConfig from './bankAccount.routes.js';
import bankAccountServiceModule from '../services/bankAccount.service.js';

export default angular.module('bankAccount', ["ngRoute", "ui.grid",
    bankAccountServiceModule.name
  ])
  .config(routeConfig);
