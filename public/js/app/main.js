define(['angular', 'components/fileImporters/csvImporters', 'components/fileImporters/chaseCsvImporter',
    'components/fileImporters/elanCsvImporter', 'components/fileImporters/fnfgCsvImporter',
    './modules/financeMain/financeMain', './modules/transactionImport/transactionImport',
    './modules/directives/fileInput'], function (angular, csvImporters, chaseImporter, elanImporter,
                                                 fnfgImporter) {

    csvImporters.registerImporter(chaseImporter);
    csvImporters.registerImporter(elanImporter);
    csvImporters.registerImporter(fnfgImporter);

    angular.module('dgfinance', ['directives.fileInput','financeMain', 'transactionImport']);

    angular.bootstrap(document, ['dgfinance']);
});