import * as angular from 'angular';
import './modules/financeMain/financeMain.js';
import './modules/transactionImport/transactionImport.js';
import './modules/bankAccount/bankAccount.js';
import './modules/directives/fileInput.js';
import {
  userProfileModule
}
from './modules/userProfile/userProfile.js';
import {
  navigationControllerModule
}
from './modules/navigation/navigation.ctrl.js';
import 'ui-bootstrap';

angular.module('dgfinance', ['ui.bootstrap', 'directives.fileInput',
  'financeMain', 'transactionImport', 'bankAccount', userProfileModule.name,
  navigationControllerModule.name
]);

angular.bootstrap(document, ['dgfinance']);
