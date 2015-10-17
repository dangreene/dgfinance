export default function($routeProvider) {
  $routeProvider
    .when('/bank-account/create', {
      templateUrl: 'js/app/bankAccount/bankAccount.create.html',
      controller: 'CreateBankAccountController as vm',
      resolve: {}
    })
    .when('/bank-account/:accountId', {
      templateUrl: 'js/app/bankAccount/bankAccount.view.html',
      controller: 'ViewBankAccountController as vm',
      resolve: {
        bankAccount: ['$route', 'bankAccountService',
          function($route, accountService) {
            return accountService.getAccount($route.current.params.accountId);
          }
        ],
        transactions: ['$route', 'bankAccountService',
          function($route, accountService) {
            return accountService.getTransactions($route.current.params.accountId);
          }
        ]
      }
    });
}
