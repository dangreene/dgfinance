define(['angular'], function (angular) {
    return angular.module('bankAccount.service', [])
        .factory('BankAccountService', ['$http', function ($http) {
            var getAccounts = function(){
                return $http.get('/api/accounts').then(function(response){
                    return response && response.data;
                });
            };

            var insertTransactions = function(accountId, transactions, successCallback){
                return $http.post('/api/accounts/'+ accountId + "/transactions", transactions);
            };

            return {
                getAccounts : getAccounts,
                insertTransactions : insertTransactions
            }
        }]);
});
