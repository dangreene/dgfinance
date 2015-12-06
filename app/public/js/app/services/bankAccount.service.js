import angular from 'angular';

export default angular.module('services.bankAccount', [])
  .factory('bankAccountService', bankAccountService);

function bankAccountService($http, $rootScope) {
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
    return $http.post('/api/accounts', account).then(function(response){
      $rootScope.$broadcast('bankAccountsUpdated');
      return response;
    });
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
