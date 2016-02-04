import ImportFileController from './transactionImport.importFile.controller.js';
import ImportRecordsController from './transactionImport.importRecords.controller.js';

export default function($routeProvider) {
  var importUrl = 'js/app/transactionImport/transactionImport.importFile.html';
  var importRecordsUrl = 'js/app/transactionImport/transactionImport.importRecords.html';
  $routeProvider
    .when('/transaction-import/import-file', {
      templateUrl: importUrl,
      controller: ImportFileController,
      controllerAs: 'vm'
    })
    .when('/transaction-import/import-records', {
      templateUrl: importRecordsUrl,
      controller: ImportRecordsController,
      controllerAs: 'vm',
      resolve: {
        bankAccounts: ['bankAccountService', function(bankAccountService) {
          return bankAccountService.getAccounts();
        }]
      }
    });
}
