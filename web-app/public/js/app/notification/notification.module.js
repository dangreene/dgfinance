import angular from 'angular';
import notificationServiceModule from '../services/notification.service.js';
import NotificationController from './notification.controller.js';
import notificationSectionDirectiveModule from '../directives/notificationSection.directive.js';

export default angular.module('notification', [notificationServiceModule.name,
    notificationSectionDirectiveModule.name
  ])
  .controller('NotificationController', NotificationController);
