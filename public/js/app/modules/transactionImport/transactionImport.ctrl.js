define(['angular', 'components/fileImporters/csvImporters', 'lodash'], function (angular, csvImporters, _) {
    return angular.module('transactionImport.ctrl', [])
        .controller('TransactionImportCtrl', ['$scope', function ($scope) {
            var self = this;

            self.readInput = function () {
                if (self.currentFile) {
                    var importer = csvImporters.getImporter(self.selectedFileType.name);
                    importer.parseFile(self.currentFile, function (results) {
                        self.currentFileContent = results;
                        console.log(self.currentFileContent);
                        $scope.$digest();
                    });
                }
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
                var fileTypes = [];

                csvImporters.getAvailableImporters().forEach(function (availableImporter) {
                    fileTypes.push({name: availableImporter});
                });

                self.fileTypes = fileTypes;
                self.currentFile = null;
                self.selectedFileType = null;
                self.currentFileContent = null;
                self.selectedAccount = null;
            };

            initializeController();
        }]);
});
