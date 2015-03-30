define(['angular', 'angular-route', './transactionImport.ctrl'], function (angular) {
    return angular.module('transactionImport', ['ngRoute', 'transactionImport.ctrl'])

        .config(function ($routeProvider) {

            $routeProvider
                .when('/transactionImport', {
                    templateUrl: 'js/app/modules/transactionImport/transactionImport.tpl.html',
                    controller: 'TransactionImportCtrl as transactionImportCtrl'
                });
        });
});
