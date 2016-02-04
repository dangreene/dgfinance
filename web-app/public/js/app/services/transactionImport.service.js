import angular from 'angular';

export default angular.module('services.transactionImport', [])
  .factory('transactionImportService', transactionImportService);

function transactionImportService($http){
  let accounts = [];
  return {
    accounts : accounts
  };
}
