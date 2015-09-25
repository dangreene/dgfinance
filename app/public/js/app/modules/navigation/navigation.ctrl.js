function NavigationController() {
  var self = this;

  self.menuButtonClick = function() {
    self.navCollapsed = !self.navCollapsed;
  };

  self.getNavClass = function() {
    return (self.navCollapsed) ? "collapse" : "";
  };
  var initializeController = function() {
    self.navCollapsed = true;
  };

  initializeController();
}

var controllerModule = angular.module('navigation.navigationController', [])
  .controller('NavigationController', [NavigationController]);

export var navigationControllerModule = controllerModule;
