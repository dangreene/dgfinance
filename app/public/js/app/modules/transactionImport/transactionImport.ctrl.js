import * as angular from 'angular';
import * as csvImporters from 'components/fileImporters/csvImporters.js';
import * as _ from 'lodash';
import {
  bankAccountServiceModule
}
from './../bankAccount/bankAccount.service.js';
import 'components/fileImporters/chaseCsvImporter.js';
import 'components/fileImporters/elanCsvImporter.js';
import 'components/fileImporters/fnfgCsvImporter.js';
import 'ui-grid';

function TransactionImportController($scope, bankAccounts, BankAccountService) {
  var self = this;

  self.readInput = function() {
    if (self.currentFile) {
      let importer = csvImporters.getImporter(self.selectedFileType.name);
      importer.parseFile(self.currentFile, function(results) {
        console.log(results);
        self.currentFileContent = results;
        self.selectedAccount = null;
        $scope.$digest();
      });
    }
  };

  self.saveToAccount = function() {
    BankAccountService.insertTransactions(self.selectedBankAccount._id,
      self.getCurrentAccountTransactions());
  };

  self.getCurrentAccountTransactions = function() {
    let account = self.getCurrentAccount();
    return account && account.transactions || [];
  };

  // TODO:  http://ui-grid.info/docs/#/tutorial/213_auto_resizing
  // self.getGridData = function() {
  //   return {
  //     data: self.getCurrentAccountTransactions()
  //   };
  // };

  self.hasTransactions = function() {
    return self.getCurrentAccountTransactions().length > 0;
  };

  self.getCurrentAccount = function() {
    if (self.selectedAccount) {
      return _.find(self.currentFileContent.accounts, {
        name: self.selectedAccount.name
      });
    }
  };

  self.hasAccounts = function() {
    return self.currentFileContent &&
      self.currentFileContent.accounts &&
      self.currentFileContent.accounts.length > 0;
  };

  let initializeController = function() {
    let fileTypes = [];

    csvImporters.getAvailableImporters()
      .forEach(function(availableImporter) {
        fileTypes.push({
          name: availableImporter
        });
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
}

let controllerModule =
  angular.module('transactionImport.transactionImportController', ['ui.grid',
    bankAccountServiceModule.name
  ])
  .controller('TransactionImportController', ['$scope', 'bankAccounts',
    'BankAccountService', TransactionImportController
  ]);

export let transactionImportControllerModule = controllerModule;
