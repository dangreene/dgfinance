import CreateBankAccountController from './bankAccount.create.controller.js';
import ViewBankAccountController from './bankAccount.view.controller.js';

export default function($routeProvider) {
  $routeProvider
    .when('/bank-account/create', {
      templateUrl: 'js/app/bankAccount/bankAccount.create.html',
      controller: CreateBankAccountController,
      controllerAs: "vm",
      resolve: {}
    })
    .when('/bank-account/:accountId', {
      templateUrl: 'js/app/bankAccount/bankAccount.view.html',
      controller: ViewBankAccountController,
      controllerAs: "vm",
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
