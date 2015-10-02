import * as angular from 'angular';
import {
  homeModule
}
from './modules/home/home.js';
import {
  transactionImportModule
}
from './modules/transactionImport/transactionImport.js';
import {
  bankAccountModule
}
from './modules/bankAccount/bankAccount.js';
import './modules/directives/fileInput.js';
import {
  userProfileModule
}
from './modules/userProfile/userProfile.js';
import {
  navigationControllerModule
}
from './modules/navigation/navigation.ctrl.js';
import {
  notificationControllerModule
}
from './modules/notification/notification.ctrl.js';

angular.module('dgfinance', ['directives.fileInput',
  homeModule.name, transactionImportModule.name, bankAccountModule.name,
  userProfileModule.name,
  navigationControllerModule.name,
  notificationControllerModule.name
]);

angular.bootstrap(document, ['dgfinance']);
