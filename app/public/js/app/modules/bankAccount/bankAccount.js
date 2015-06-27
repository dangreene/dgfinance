define(['angular', 'angular-route', './bankAccount.ctrl.js',
    'app/modules/bankAccount/bankAccount.service.js'
  ],
  function(angular) {
    return angular.module('bankAccount', ['ngRoute', 'bankAccount.ctrl',
      'bankAccount.service'
    ])

    .config(function($routeProvider) {

      $routeProvider
        .when('/bankAccount', {
          templateUrl: 'js/app/modules/bankAccount/bankAccount.tpl.html',
          controller: 'BankAccountCtrl as bankAccountCtrl',
          resolve: {
            bankAccounts: ['BankAccountService', function(AccountService) {
              return AccountService.getAccounts();
            }]
          }
        });
    });
  });