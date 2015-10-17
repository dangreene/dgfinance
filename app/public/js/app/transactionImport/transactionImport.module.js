import angular from 'angular';
import 'angular-route';
import routeConfig from './transactionImport.routes.js';
import fileInputModule from '../directives/fileInput.directive.js';
import transactionImportServiceModule from '../services/transactionImport.service.js';
import bankAccountServiceModule from '../services/bankAccount.service.js';

export default angular.module('transactionImport', ['ngRoute', 'ui.grid',
    fileInputModule.name, transactionImportServiceModule.name,
    bankAccountServiceModule.name
  ])
  .config(routeConfig);
