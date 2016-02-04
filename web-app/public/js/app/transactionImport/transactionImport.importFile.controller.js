import * as csvImporters from '../../components/fileImporters/csvImporters.js';
import '../../components/fileImporters/chaseCsvImporter.js';
import '../../components/fileImporters/elanCsvImporter.js';
import '../../components/fileImporters/fnfgCsvImporter.js';

export default class {
  constructor($scope, $location, transactionImportService) {
    this._supportedFileTypes = csvImporters.getAvailableImporters();
    this._$scope = $scope;
    this._importService = transactionImportService;
    this._$location = $location;
  }

  get supportedFileTypes() {
    return this._supportedFileTypes;
  }
  get fileAccounts() {
    return this._fileAccounts;
  }
  get selectedFileType() {
    return this._selectedFileType;
  }
  set selectedFileType(value) {
    this._selectedFileType = value;
  }
  get currentFile() {
    return this._currentFile;
  }
  set currentFile(value) {
    this._currentFile = value;
  }

  readInput() {
    if (this._selectedFileType && this._currentFile) {
      let importer = csvImporters.getImporter(this._selectedFileType);
      importer.parseFile(this.currentFile, (results) => {
        this._fileAccounts = results.accounts;
        this._$scope.$digest();
      });
    }
  }

  navigate() {
    this._importService.accounts = this.fileAccounts;
    this._$location.path("/transaction-import/import-records");
  }
}
