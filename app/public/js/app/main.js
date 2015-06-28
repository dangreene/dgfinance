define(['angular',
    './modules/financeMain/financeMain.js',
    './modules/transactionImport/transactionImport.js',
    './modules/bankAccount/bankAccount.js', './modules/directives/fileInput.js'
  ],
  function(angular) {
    angular.module('dgfinance', ['directives.fileInput', 'financeMain',
      'transactionImport', 'bankAccount'
    ]);

    angular.bootstrap(document, ['dgfinance']);
  });
