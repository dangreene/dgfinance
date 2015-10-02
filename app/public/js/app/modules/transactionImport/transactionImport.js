import * as angular from 'angular';
import 'angular-route';
import {
  importFileControllerModule
}
from './transactionImport.importFile.ctrl.js';
import {
  importRecordsControllerModule
}
from './transactionImport.importRecords.ctrl.js';
import {
  bankAccountServiceModule
}
from './../bankAccount/bankAccount.service.js';

var mainModule = angular.module('transactionImport', ['ngRoute',
    bankAccountServiceModule.name,
    importFileControllerModule.name, importRecordsControllerModule.name
  ])
  .config(function($routeProvider) {
    var url = 'js/app/modules/transactionImport/transactionImport.tpl.html';
    var importUrl = 'js/app/modules/transactionImport/transactionImport.importFile.tpl.html';
    var importRecordsUrl = 'js/app/modules/transactionImport/transactionImport.importRecords.tpl.html';
    $routeProvider
      .when('/transaction-import/import-file', {
        templateUrl: importUrl,
        controller: 'ImportFileController as vm'
      })
      .when('/transaction-import/import-records', {
        templateUrl: importRecordsUrl,
        controller: 'ImportRecordsController as vm',
        resolve: {
          bankAccounts: ['BankAccountService', function(AccountService) {
            return AccountService.getAccounts();
          }]
        }
      });
  });

export var transactionImportModule = mainModule;
