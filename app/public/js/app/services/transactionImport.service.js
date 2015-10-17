import angular from 'angular';

export default angular.module('services.transactionImport', [])
  .service('transactionImportService', TransactionImportService)

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
