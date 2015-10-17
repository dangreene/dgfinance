import * as _ from 'lodash';

export default class ImportRecordsController {
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
    this._notificationService.clear();
    this._bankAccountService.insertTransactions(this._selectedBankAccount._id,
      this._selectedAccount.transactions).then(() => {
      this._notificationService.addSuccess("Imported successfully");
    }, () => {
      this._notificationService.addError("An error has occured.");
    });
  }
}
