define(['angular', 'angular-route', './transactionImport.ctrl.js',
  'app/modules/bankAccount/bankAccount.service.js'
], function(angular) {
  return angular.module('transactionImport', ['ngRoute',
      'transactionImport.ctrl', 'bankAccount.service'
    ])
    .config(function($routeProvider) {
      var url = 'js/app/modules/transactionImport/transactionImport.tpl.html';
      $routeProvider
        .when('/transactionImport', {
          templateUrl: url,
          controller: 'TransactionImportCtrl as transactionImportCtrl',
          resolve: {
            bankAccounts: ['BankAccountService', function(AccountService) {
              return AccountService.getAccounts();
            }]
          }
        });
    });
});
