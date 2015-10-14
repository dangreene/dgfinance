import * as angular from 'angular';
import 'angular-route';

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
  bankAccountServiceModule.name,
  createBankAccountControllerModule.name,
  viewBankAccountControllerModule.name
]).config(function($routeProvider) {
  $routeProvider
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
          function($route, accountService) {
            return accountService.getAccount($route.current.params.accountId);
          }
        ],
        transactions: ['$route', 'BankAccountService',
          function($route, accountService) {
            return accountService.getTransactions($route.current.params.accountId);
          }
        ]
      }
    })
});

export let bankAccountModule = mainModule;
