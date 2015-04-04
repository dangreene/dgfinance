define(['angular'], function (angular) {
    return angular.module('bankAccount.service', [])
        .factory('BankAccountService', [function () {
            var callService = function(){
                console.log("yes");
            };

            return {
                callService : callService
            }
        }]);
});
