import * as angular from "angular";
import 'ui-grid';

class ViewBankAccountController {

  constructor(bankAccount, transactions) {
    this._accountName = bankAccount.description;
    this._transactions = transactions;
  }
  get accountName() {
    return this._accountName;
  }
  get transactions() {
    return this._transactions;
  }

}

let controllerModule =
  angular.module('bankAccount.viewBankAccountController', ['ui.grid'])
  .controller('ViewBankAccountController', ['bankAccount', 'transactions',
    ViewBankAccountController
  ]);

export let viewBankAccountControllerModule = controllerModule;
