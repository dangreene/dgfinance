define(['angular', 'angular-route', './transactionImport.ctrl', 'app/modules/bankAccount/bankAccount.service'], function (angular) {
    return angular.module('transactionImport', ['ngRoute', 'transactionImport.ctrl', 'bankAccount.service'])

        .config(function ($routeProvider) {

            $routeProvider
                .when('/transactionImport', {
                    templateUrl: 'js/app/modules/transactionImport/transactionImport.tpl.html',
                    controller: 'TransactionImportCtrl as transactionImportCtrl',
                    resolve: {
                        bankAccounts: ['BankAccountService', function(AccountService){
                            return AccountService.getAccounts();
                        }]
                    }
                });
        });
});
