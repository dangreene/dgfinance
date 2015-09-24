function UserProfileController(userProfile) {
  var self = this;

  var initializeController = function() {
    self.userProfile = userProfile;
  };

  initializeController();
}

var controllerModule = angular.module('userProfile.userProfileController', [])
  .controller('UserProfileController', ['userProfile', UserProfileController]);

export var userProfileControllerModule = controllerModule;
