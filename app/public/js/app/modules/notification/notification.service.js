import * as angular from 'angular';
export const notificationTypes = {
  success: "success",
  error: "error"
};

function notificationService() {
  // TODO: clear notifications on route change
  let notifications = [];

  function add(message, notificationType) {
    notifications.push({
      notificationType: notificationType,
      message: message
    });
  }

  function clear() {
    notifications.length = 0;
  }

  function getAll(){
    return notifications;
  }

  return {
    add: add,
    clear: clear,
    notificationTypes: notificationTypes,
    getAll: getAll
  }
}

let serviceModule =
  angular.module('notification.notificationService', [])
  .factory('NotificationService', [notificationService]);

export let notificationServiceModule = serviceModule;
