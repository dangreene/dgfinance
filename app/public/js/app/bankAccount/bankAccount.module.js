import * as angular from 'angular';
import 'angular-route';
import 'ui-grid';
import {
  servicesModule
}
from '../services/services.bootstrap.js';

angular.module('bankAccount', ["ngRoute", "ui.grid", servicesModule.name]);
