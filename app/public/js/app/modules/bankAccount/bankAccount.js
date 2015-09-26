import * as angular from 'angular';
import 'angular-route';
import {
  bankAccountControllerModule
}
from './bankAccount.ctrl.js';
import {
  bankAccountServiceModule
}
from './bankAccount.service.js';

var mainModule = angular.module('bankAccount', ['ngRoute',
  bankAccountControllerModule.name,
  bankAccountServiceModule.name
]).config(function($routeProvider) {
  $routeProvider
    .when('/bank-account', {
      templateUrl: 'js/app/modules/bankAccount/bankAccount.tpl.html',
      controller: 'BankAccountController as bankAccountCtrl',
      resolve: {
        bankAccounts: ['BankAccountService', function(AccountService) {
          return AccountService.getAccounts();
        }]
      }
    });
});

export var bankAccountModule = mainModule;
