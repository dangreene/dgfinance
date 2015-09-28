import * as angular from 'angular';
import {
  notificationServiceModule
}
from './notification.service.js';

function NotificationController() {
  function initialize() {

  }

  initialize();
}

let controllerModule =
  angular.module('notification.notificationController', [notificationServiceModule.name])
  .controller('NotificationController', [NotificationController]);

export let notificationControllerModule = controllerModule;
