import * as angular from 'angular';

function BankAccountService($http) {
  var getAccounts = function() {
    return $http.get('/api/accounts').then(function(response) {
      return response && response.data;
    });
  };

  var getAccount = function(accountId) {
    return $http.get('/api/accounts/' + accountId)
    .then(function(response) {
      return response && response.data;
    });
  };

  var createAccount = function(account) {
    return $http.post('/api/accounts', account);
  };

  var insertTransactions = function(accountId, transactions,
    successCallback) {
    return $http
      .post('/api/accounts/' + accountId + '/transactions', transactions);
  };

  var getTransactions = function(accountId) {
    return $http.get('/api/accounts/' + accountId + '/transactions')
      .then(function(response) {
        return response && response.data;
      });
  };

  return {
    getAccounts: getAccounts,
    getAccount: getAccount,
    createAccount: createAccount,
    getTransactions: getTransactions,
    insertTransactions: insertTransactions
  };
}

var serviceModule = angular.module('bankAccount.service', [])
  .factory('BankAccountService', ['$http', BankAccountService]);

export var bankAccountServiceModule = serviceModule;
