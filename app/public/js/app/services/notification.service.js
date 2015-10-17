import {
  notificationTypes
}
from '../notification/notificationTypes.js';

import angular from 'angular';

export default angular.module('services.notification', [])
  .factory('notificationService', notificationService);

function notificationService($rootScope) {

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
