import * as angular from 'angular';
import './modules/financeMain/financeMain.js';
import './modules/transactionImport/transactionImport.js';
import './modules/bankAccount/bankAccount.js';
import './modules/directives/fileInput.js';
import {userProfileModule} from './modules/userProfile/userProfile.js';

angular.module('dgfinance', ['directives.fileInput', 'financeMain',
  'transactionImport', 'bankAccount', userProfileModule.name
]);

angular.bootstrap(document, ['dgfinance']);
