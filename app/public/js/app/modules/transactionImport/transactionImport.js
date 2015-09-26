import * as angular from 'angular';
import 'angular-route';
import {
  transactionImportControllerModule
}
from './transactionImport.ctrl.js';
import {
  bankAccountServiceModule
}
from './../bankAccount/bankAccount.service.js';

var mainModule = angular.module('transactionImport', ['ngRoute',
    transactionImportControllerModule.name, bankAccountServiceModule.name
  ])
  .config(function($routeProvider) {
    var url = 'js/app/modules/transactionImport/transactionImport.tpl.html';
    $routeProvider
      .when('/transaction-import', {
        templateUrl: url,
        controller: 'TransactionImportController as transactionImportCtrl',
        resolve: {
          bankAccounts: ['BankAccountService', function(AccountService) {
            return AccountService.getAccounts();
          }]
        }
      });
  });

export var transactionImportModule = mainModule;
