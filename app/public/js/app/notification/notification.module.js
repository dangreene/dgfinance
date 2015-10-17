import angular from 'angular';
import notificationServiceModule from '../services/notification.service.js';
import NotificationController from './notification.controller.js';

export default angular.module('notification', [notificationServiceModule.name])
  .controller('NotificationController', NotificationController);
