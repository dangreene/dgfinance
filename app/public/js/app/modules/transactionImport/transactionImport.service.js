import * as angular from 'angular';

class TransactionImportService {
  constructor($http) {
    this._$http = $http;
  }
  get accounts() {
    return this._accounts;
  }
  set accounts(accounts) {
    this._accounts = accounts;
  }
}

var serviceModule = angular.module('transactionImport.transactionImportService', [])
  .service('transactionImportService', ['$http', TransactionImportService]);

export var transactionImportServiceModule = serviceModule;
