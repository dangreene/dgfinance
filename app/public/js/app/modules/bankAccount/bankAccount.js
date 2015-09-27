import * as angular from 'angular';
import 'angular-route';
import {
  bankAccountControllerModule
}
from './bankAccount.ctrl.js';
import {
  createBankAccountControllerModule
}
from './bankAccount.create.ctrl.js';
import {
  bankAccountServiceModule
}
from './bankAccount.service.js';
import {
  viewBankAccountControllerModule
}
from './bankAccount.view.ctrl.js'
let mainModule = angular.module('bankAccount', ['ngRoute',
  bankAccountControllerModule.name,
  bankAccountServiceModule.name,
  createBankAccountControllerModule.name,
  viewBankAccountControllerModule.name
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
    })
    .when('/bank-account/create', {
      templateUrl: 'js/app/modules/bankAccount/bankAccount.create.tpl.html',
      controller: 'CreateBankAccountController as vm',
      resolve: {}
    })
    .when('/bank-account/:accountId', {
      templateUrl: 'js/app/modules/bankAccount/bankAccount.view.tpl.html',
      controller: 'ViewBankAccountController as vm',
      resolve: {
        bankAccount: ['$route', 'BankAccountService',
          function($route, AccountService) {
            return AccountService.getAccount($route.current.params.accountId);
          }
        ]
      }
    })
});

export let bankAccountModule = mainModule;
