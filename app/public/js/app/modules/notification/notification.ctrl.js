import * as angular from 'angular';
import {
  notificationTypes,
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
  getNotificationClass(notification) {
    switch (notification.notificationType) {
      case notificationTypes.success:
        return "bg-success";
      case notificationTypes.error:
        return "bg-error";
      default:
        return "";
    }
  }
}

let controllerModule =
  angular.module('notification.notificationController', [notificationServiceModule.name])
  .controller('NotificationController', ["NotificationService", NotificationController]);

export let notificationControllerModule = controllerModule;
