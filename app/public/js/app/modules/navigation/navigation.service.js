import * as angular from "angular";
import {
  bankAccountServiceModule
}
from './../bankAccount/bankAccount.service.js';

function navigationService(bankAccountService) {
  function getAccounts() {
    return bankAccountService.getAccounts();
  }
  return {
    getAccounts: getAccounts
  }
}
let serviceModule =
  angular.module('navigation.navigationService', [bankAccountServiceModule.name])
  .factory('NavigationService', ["BankAccountService", navigationService]);

export let navigationServiceModule = serviceModule;
