import * as angular from "angular";
import {
  bankAccountServiceModule
}
from './bankAccount.service.js';

class CreateBankAccountController {
  constructor($location, bankAccountService) {
    this._bankAccountService = bankAccountService;
    this._$location = $location;
    this._initialBalance = 0;
    this._accountName = "";
  }
  get initialBalance() {
    return this._initialBalance;
  }
  set initialBalance(value) {
    this._initialBalance = value;
  }
  get accountName() {
    return this._accountName;
  }
  set accountName(value) {
    this._accountName = value;
  }

  saveAccount() {
    this._bankAccountService.createAccount({
      initialBalance: this.initialBalance,
      description: this.accountName
    }).then((response) => {
      let accountId = response && response.data &&
        response.data.accountId || "";
      this._$location.path('/bank-account/' + accountId)
    });
  }
}

let controllerModule =
  angular.module('bankAccount.createBankAccountController', [bankAccountServiceModule.name])
  .controller('CreateBankAccountController', ['$location', 'BankAccountService',
    CreateBankAccountController
  ]);

export let createBankAccountControllerModule = controllerModule;
