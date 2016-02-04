import angular from 'angular';
import NavigationController from './navigation.controller.js';
import navigationServiceModule from '../services/navigation.service.js';

export default angular.module('navigation', [navigationServiceModule.name])
  .controller('NavigationController', NavigationController);
