import angular from 'angular';
import homeModule from './home/home.module.js';
import navigationModule from './navigation/navigation.module.js';
import notificationModule from './notification/notification.module.js';
import bankAccountModule from './bankAccount/bankAccount.module.js';
import transactionImportModule from './transactionImport/transactionImport.module.js';

angular.module('app', [homeModule.name, navigationModule.name,
  notificationModule.name, bankAccountModule.name, transactionImportModule.name
]);
angular.bootstrap(document, ['app']);
