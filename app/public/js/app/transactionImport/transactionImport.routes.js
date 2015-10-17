import importFileController from './transactionImport.importFile.controller.js';
import importRecordsController from './transactionImport.importRecords.controller.js';

export default function($routeProvider) {
  var url = 'js/app/modules/transactionImport/transactionImport.tpl.html';
  var importUrl = 'js/app/modules/transactionImport/transactionImport.importFile.tpl.html';
  var importRecordsUrl = 'js/app/modules/transactionImport/transactionImport.importRecords.tpl.html';
  $routeProvider
    .when('/transaction-import/import-file', {
      templateUrl: importUrl,
      controller: importFileController,
      controllerAs: 'vm'
    })
    .when('/transaction-import/import-records', {
      templateUrl: importRecordsUrl,
      controller: importRecordsController,
      controllerAs: 'vm',
      resolve: {
        bankAccounts: ['BankAccountService', function(AccountService) {
          return AccountService.getAccounts();
        }]
      }
    });
}
