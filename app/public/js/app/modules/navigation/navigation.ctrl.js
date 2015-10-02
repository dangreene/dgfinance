class NavigationController {
  constructor() {
    this.navCollapsed = true;
  }
  menuButtonClick() {
    this.navCollapsed = !this.navCollapsed;
  }
  getNavClass() {
    return (this.navCollapsed) ? "collapse" : "";
  }
}
var controllerModule = angular.module('navigation.navigationController', [])
  .controller('NavigationController', [NavigationController]);

export let navigationControllerModule = controllerModule;
