import * as angular from 'angular';
import {homeModule} from './modules/home/home.js';
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

angular.module('dgfinance', ['directives.fileInput',
  homeModule.name, 'transactionImport', 'bankAccount', userProfileModule.name,
  navigationControllerModule.name
]);

angular.bootstrap(document, ['dgfinance']);
