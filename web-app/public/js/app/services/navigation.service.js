import angular from 'angular';
import bankAccountServiceModule from './bankAccount.service.js';

export default angular.module('services.navigation', [bankAccountServiceModule.name])
  .factory('navigationService', navigationService);

function navigationService($rootScope, bankAccountService) {
  let bankAccounts = [];
  loadAccounts();
  registerEvents();

  return {
    accounts: bankAccounts
  };

  function registerEvents() {
    $rootScope.$on('bankAccountsUpdated', function(event, current) {
      loadAccounts();
    });
  }

  function loadAccounts(){
    bankAccountService.getAccounts().then(function(accounts){
      bankAccounts.length = 0;
      accounts.forEach((account) => {
        bankAccounts.push(account);
      });
    });
  }

}
