define(['angular', 'papaparse', 'components/fileImporters/csvImporters'], function (angular, Papa, csvImporters) {
    return angular.module('transactionImport.ctrl', [])
        .controller('TransactionImportCtrl', [function () {
            var self = this;

            self.readInput = function () {
                var importer = csvImporters.getImporter(self.selectedFileType.name);
                importer.parseFile(self.currentFile, function (results) {

                });
            };

            self.hasMultipleAccounts = function () {
                return self.currentFileContent && self.currentFileContent.accounts
                    && self.currentFileContent.accounts.length > 1;
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
            };

            initializeController();
        }]);
});
