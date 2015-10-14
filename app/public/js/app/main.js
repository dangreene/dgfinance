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
import {
  navigationControllerModule
}
from './modules/navigation/navigation.ctrl.js';
import {
  notificationControllerModule
}
from './modules/notification/notification.ctrl.js';

angular.module('dgfinance', [
  homeModule.name, transactionImportModule.name, bankAccountModule.name,
  navigationControllerModule.name,
  notificationControllerModule.name
]);

angular.bootstrap(document, ['dgfinance']);
