define(['angular', 'components/fileImporters/csvImporters', 'components/fileImporters/chaseCsvImporter',
    'components/fileImporters/elanCsvImporter','./modules/financeMain/financeMain',
    './modules/transactionImport/transactionImport',
    './modules/directives/fileInput'], function (angular, csvImporters, chaseImporter, elanImporter) {

    csvImporters.registerImporter(chaseImporter);
    csvImporters.registerImporter(elanImporter);

    angular.module('dgfinance', ['directives.fileInput','financeMain', 'transactionImport']);

    angular.bootstrap(document, ['dgfinance']);
});