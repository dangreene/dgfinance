define(['angular', 'lodash', 'app/modules/bankAccount/bankAccount.service'], function (angular, _) {
    return angular.module('bankAccount.ctrl', ['bankAccount.service'])
        .controller('BankAccountCtrl', ['$scope', 'bankAccounts', 'BankAccountService',
            function ($scope, bankAccounts, BankAccountService) {
                var self = this;

                var initializeController = function () {
                    self.bankAccounts = bankAccounts;
                };

                initializeController();
            }]);
});
