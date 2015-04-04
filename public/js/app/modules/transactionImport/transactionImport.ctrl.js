define(['angular', 'components/fileImporters/csvImporters', 'lodash',
    'app/modules/bankAccount/bankAccount.service'], function (angular, csvImporters, _) {
    return angular.module('transactionImport.ctrl', ['bankAccount.service'])
        .controller('TransactionImportCtrl', ['$scope', 'bankAccounts', 'BankAccountService',
            function ($scope, bankAccounts, BankAccountService) {
            var self = this;

            self.readInput = function () {
                if (self.currentFile) {
                    var importer = csvImporters.getImporter(self.selectedFileType.name);
                    importer.parseFile(self.currentFile, function (results) {
                        self.currentFileContent = results;
                        self.selectedAccount = null;
                        $scope.$digest();
                    });
                }
            };

            self.saveToAccount = function(){
                BankAccountService.insertTransactions(self.selectedBankAccount._id,
                    self.getCurrentAccountTransactions());
            };

            self.getCurrentAccountTransactions = function(){
                var account = self.getCurrentAccount();
                return account && account.transactions || [];
            };

            self.hasTransactions = function(){
                return self.getCurrentAccountTransactions().length > 0;
            };

            self.getCurrentAccount = function() {
                if (self.selectedAccount){
                    return _.find(self.currentFileContent.accounts, {name: self.selectedAccount.name});
                }
            };

            self.hasAccounts = function () {
                return self.currentFileContent && self.currentFileContent.accounts
                    && self.currentFileContent.accounts.length > 0;
            };

            var initializeController = function () {
                console.log(bankAccounts);
                var fileTypes = [];

                csvImporters.getAvailableImporters().forEach(function (availableImporter) {
                    fileTypes.push({name: availableImporter});
                });

                self.fileTypes = fileTypes;
                self.currentFile = null;
                self.selectedFileType = null;
                self.currentFileContent = null;
                self.selectedAccount = null;
                self.bankAccounts = bankAccounts;
                self.selectedBankAccount = null;
            };

            initializeController();
        }]);
});
