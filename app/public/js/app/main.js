define(['angular', 'components/fileImporters/csvImporters.js',
    'components/fileImporters/chaseCsvImporter.js',
    'components/fileImporters/elanCsvImporter.js',
    'components/fileImporters/fnfgCsvImporter.js',
    './modules/financeMain/financeMain.js',
    './modules/transactionImport/transactionImport.js',
    './modules/bankAccount/bankAccount.js', './modules/directives/fileInput.js'
  ],
  function(angular, csvImporters, chaseImporter, elanImporter, fnfgImporter) {

    csvImporters.registerImporter(chaseImporter);
    csvImporters.registerImporter(elanImporter);
    csvImporters.registerImporter(fnfgImporter);

    angular.module('dgfinance', ['directives.fileInput', 'financeMain',
      'transactionImport', 'bankAccount'
    ]);

    angular.bootstrap(document, ['dgfinance']);
  });
