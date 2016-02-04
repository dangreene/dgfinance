import angular from 'angular';
import {
  notificationTypes
}
from './../notification/notificationTypes.js';

export default angular.module("directives.notificationSection", [])
  .directive('notificationSection', function() {
    return {
      templateUrl: 'js/app/directives/notificationSection.html',
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
  });
