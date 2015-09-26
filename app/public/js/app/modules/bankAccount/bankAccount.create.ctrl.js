import * as angular from "angular";
import {bankAccountServiceModule} from './bankAccount.service.js';

function CreateBankAccountController($location, bankAccountService) {
  var self = this;

  self.saveAccount = function() {
    bankAccountService.createAccount({
      initialBalance: self.initialBalance,
      description: self.accountName
    }).then(function(response){
      $location.path('/bank-account/' + response.accountId)
    });
  };

  function initialize() {
    self.initialBalance = 0;
    self.accountName = "";
  }

  initialize();
}

let controllerModule =
  angular.module('bankAccount.createBankAccountController', [bankAccountServiceModule.name])
  .controller('CreateBankAccountController', ['$location', 'BankAccountService',
    CreateBankAccountController
  ]);

export let createBankAccountControllerModule = controllerModule;