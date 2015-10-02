import * as angular from 'angular';
import * as _ from 'lodash';
import {
  transactionImportServiceModule
}
from './transactionImport.service.js';
import 'ui-grid';

class ImportRecordsController {
  constructor(importService, bankAccounts, bankAccountService) {
    this._importService = importService;
    this._accounts = importService.accounts;
    this._bankAccounts = bankAccounts;
    this._bankAccountService = bankAccountService;
  }
  get accounts() {
    return this._accounts;
  }
  get bankAccounts() {
    return this._bankAccounts;
  }

  get selectedBankAccount() {
    return this._selectedBankAccount;
  }
  set selectedBankAccount(value) {
    this._selectedBankAccount = value;
  }

  get selectedAccount() {
    return this._selectedAccount;
  }
  set selectedAccount(value) {
    this._selectedAccount = value;
  }

  importTransactionsToAccount() {
    this._bankAccountService.insertTransactions(this._selectedBankAccount._id,
      this._selectedAccount.transactions);
  }
}

let controllerModule =
  angular.module('transactionImport.importRecordsController', [transactionImportServiceModule.name, 'ui.grid'])
  .controller('ImportRecordsController', ['transactionImportService', 'bankAccounts', 'BankAccountService', ImportRecordsController]);

export let importRecordsControllerModule = controllerModule;
