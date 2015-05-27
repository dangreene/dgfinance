define(['angular', 'lodash', 'app/modules/bankAccount/bankAccount.service'],
  function(angular, _) {
    return angular.module('bankAccount.ctrl', ['bankAccount.service'])
      .controller('BankAccountCtrl', ['$scope', 'bankAccounts',
        'BankAccountService',
        function($scope, bankAccounts, BankAccountService) {
          var self = this;

          self.accountChanged = function() {
            BankAccountService.getTransactions(self.selectedBankAccount._id)
              .then(function(response) {
                self.accountTransactions = response;
              });
          };
          var initializeController = function() {
            self.accountTransactions = null;
            self.selectedBankAccount = null;
            self.bankAccounts = bankAccounts;
          };

          initializeController();
        }
      ]);
  });
