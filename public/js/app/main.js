define(['angular', 'components/fileImporters/csvImporters', 'components/fileImporters/chaseCsvImporter',
    './modules/financeMain/financeMain', './modules/transactionImport/transactionImport',
    './modules/directives/fileInput'], function (angular, csvImporters, chaseImporter) {

    csvImporters.registerImporter(chaseImporter);

    angular.module('dgfinance', ['directives.fileInput','financeMain', 'transactionImport']);

    angular.bootstrap(document, ['dgfinance']);
});