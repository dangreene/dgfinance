import angular from 'angular';
import bankAccountServiceModule from './bankAccount.service.js';

export default angular.module('services.navigation', [bankAccountServiceModule.name])
  .factory('navigationService', navigationService)

function navigationService(bankAccountService) {
  return {
    getAccounts: getAccounts
  };

  function getAccounts() {
    return bankAccountService.getAccounts();
  }
}
