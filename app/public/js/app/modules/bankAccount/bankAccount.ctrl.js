import {
  bankAccountServiceModule
}
from './bankAccount.service.js';
import * as _ from 'lodash';
import * as angular from 'angular';

function BankAccountController($location, bankAccounts, BankAccountService) {
  var self = this;

  self.navToCreate = function() {
    $location.path("/bank-account/create");
  };

  self.accountChanged = function() {
    BankAccountService.getTransactions(self.selectedBankAccount._id)
      .then(function(response) {
        self.accountTransactions = response;
      });
  };
  var initializeController = function() {
    self.accountTransactions = null;
    self.selectedBankAccount = null;
    self.bankAccounts = bankAccounts;
  };

  initializeController();
}
var controllerModule = angular.module('bankAccount.bankAccountController', [bankAccountServiceModule.name])
  .controller('BankAccountController', ['$location', 'bankAccounts',
    'BankAccountService', BankAccountController
  ]);

export var bankAccountControllerModule = controllerModule;
