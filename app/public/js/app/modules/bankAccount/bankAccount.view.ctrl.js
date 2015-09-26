import * as angular from "angular";

function ViewBankAccountController(bankAccount) {
  var self = this;

  function initialize() {
    self.accountName = bankAccount.description;
  }

  initialize();
}

let controllerModule =
  angular.module('bankAccount.viewBankAccountController', [])
  .controller('ViewBankAccountController', ['bankAccount',
    ViewBankAccountController
  ]);

export let viewBankAccountControllerModule = controllerModule;
