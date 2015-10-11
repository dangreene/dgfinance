import * as angular from 'angular';
import * as _ from 'lodash';
import {
  transactionImportServiceModule
}
from './transactionImport.service.js';
import {
  notificationServiceModule,
  notificationTypes
}
from './../notification/notification.service.js';
import 'ui-grid';

class ImportRecordsController {
  constructor(importService, bankAccounts, bankAccountService, notificationService) {
    this._importService = importService;
    this._accounts = importService.accounts;
    this._bankAccounts = bankAccounts;
    this._bankAccountService = bankAccountService;
    this._notificationService = notificationService;
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
      this._selectedAccount.transactions).then(()=>{
        // TODO: move in directive?
        this._notificationService.add("Imported successfully", notificationTypes.success);
      }, () => {
        this._notificationService.add("An error has occured.", notificationTypes.error);
      });
  }
}

let controllerModule =
  angular.module('transactionImport.importRecordsController', [transactionImportServiceModule.name, notificationServiceModule.name, 'ui.grid'])
  .controller('ImportRecordsController', ['transactionImportService', 'bankAccounts', 'BankAccountService', "NotificationService", ImportRecordsController]);

export let importRecordsControllerModule = controllerModule;
