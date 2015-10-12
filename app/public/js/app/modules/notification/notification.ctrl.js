import * as angular from 'angular';
import {notificationTypes} from './notificationTypes.js';
import {
  notificationSectionDirectiveModule
}
from './../directives/notificationSection.js';
import {
  notificationServiceModule
}
from './notification.service.js';

class NotificationController {
  constructor(notificationService) {
    this._notificationService = notificationService;
  }
  get notifications() {
    return this._notificationService.getAll();
  }
}

let controllerModule =
  angular.module('notification.notificationController', [notificationSectionDirectiveModule.name,
    notificationServiceModule.name])
  .controller('NotificationController', ["NotificationService", NotificationController]);

export let notificationControllerModule = controllerModule;
