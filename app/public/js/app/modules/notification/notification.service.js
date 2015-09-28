import * as angular from 'angular';

function NotificationService() {
  function initialize() {

  }

  initialize();
}

let serviceModule =
  angular.module('notification.notificationService', [])
  .factory('NotificationService', [NotificationService]);

export let notificationServiceModule = serviceModule;
