import * as angular from 'angular';
import {
  notificationTypes
}
from './notificationTypes.js';

function notificationService($rootScope) {
  // TODO: clear notifications on route change
  let notifications = [];

  $rootScope.$on('$routeChangeSuccess', function(event, current) {
    clear();
  });

  function add(message, notificationType) {
    notifications.push({
      notificationType: notificationType,
      message: message
    });
  }

  function addError(message) {
    this.add(message, notificationTypes.error);
  }

  function addSuccess(message) {
    this.add(message, notificationTypes.success);
  }

  function clear() {
    notifications.length = 0;
  }

  function getAll() {
    return notifications;
  }

  return {
    add: add,
    addSuccess: addSuccess,
    addError: addError,
    clear: clear,
    getAll: getAll
  };
}

let serviceModule =
  angular.module('notification.notificationService', ['ngRoute'])
  .factory('NotificationService', ['$rootScope', notificationService]);

export let notificationServiceModule = serviceModule;
