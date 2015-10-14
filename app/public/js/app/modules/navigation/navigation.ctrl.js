import {
  navigationServiceModule
}
from './navigation.service.js';

class NavigationController {
  constructor($location, navigationService) {
    this._navigationService = navigationService;
    navigationService.getAccounts().then((accounts) => {
      this._accounts = accounts;
    });
    this._navCollapsed = true;
    this._accountsCollapsed = true;
    this._$location = $location;
  }
  get accounts() {
    return this._accounts;
  }
  get navCollapsed() {
    return this._navCollapsed;
  }
  menuButtonClick() {
    this._navCollapsed = !this._navCollapsed;
  }
  getNavClass() {
    return (this._navCollapsed) ? "collapse" : "";
  }
  getAccountsClass() {
    return (this._accountsCollapsed) ? "" : "open";
  }
  toggleAccountsMenu() {
    this._accountsCollapsed = !this._accountsCollapsed;
  }
  navigateTo(url) {
    this._$location.path(url);
    this._accountsCollapsed = true;
    this._navCollapsed = true;
  }
}

var controllerModule = angular.module('navigation.navigationController', [navigationServiceModule.name])
  .controller('NavigationController', ['$location', 'NavigationService', NavigationController]);

export let navigationControllerModule = controllerModule;
