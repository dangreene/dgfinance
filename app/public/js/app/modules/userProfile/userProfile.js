import * as angular from 'angular';
import 'angular-route';
import {
  userProfileServiceModule
}
from './userProfile.service.js';
import {
  userProfileControllerModule
}
from './userProfile.ctrl.js';

// todo: incorporate route params to pass into service
var profileModule =
  angular.module('userProfile', ['ngRoute', userProfileServiceModule.name,
    userProfileControllerModule.name
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/user-profile', {
        templateUrl: 'js/app/modules/userProfile/userProfile.tpl.html',
        controller: 'UserProfileController as userProfileCtrl',
        resolve: {
          userProfile: ['UserProfileService', function(userProfileService) {
            return userProfileService.getUser();
          }]
        }
      });
  });

export var userProfileModule = profileModule;
