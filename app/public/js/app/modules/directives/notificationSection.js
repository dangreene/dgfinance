import * as angular from 'angular';
import {notificationTypes} from './../notification/notificationTypes.js';

var directiveModule = angular.module("directives.notificationSection", [])
  .directive('notificationSection', [function() {
    return {
      templateUrl: 'js/app/modules/directives/notificationSection.tpl.html',
      restrict: 'A',
      scope: {
        notifications: '='
      },
      link: function($scope, $element, $attrs) {
        $scope.getNotificationClass = function(notification) {
          switch (notification.notificationType) {
            case notificationTypes.success:
              return "bg-success";
            case notificationTypes.warning:
              return "bg-warning";
            case notificationTypes.error:
              return "bg-error";
            default:
              return "";
          }
        };
      }
    };
  }]);

export let notificationSectionDirectiveModule = directiveModule;
