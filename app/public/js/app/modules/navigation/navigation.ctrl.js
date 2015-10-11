class NavigationController {
  constructor() {
    this._navCollapsed = true;
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
}

var controllerModule = angular.module('navigation.navigationController', [])
  .controller('NavigationController', [NavigationController]);

export let navigationControllerModule = controllerModule;
