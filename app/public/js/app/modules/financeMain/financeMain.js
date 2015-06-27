define(['angular', 'angular-route', './financeMain.ctrl.js'], function(angular) {
  return angular.module('financeMain', ['ngRoute', 'financeMain.ctrl'])
    .config(function($routeProvider) {

      $routeProvider.when('/', {
        templateUrl: 'js/app/modules/financeMain/financeMain.tpl.html',
        controller: 'FinanceMainCtrl as financeMainCtrl'
      });

      $routeProvider.otherwise({
        redirectTo: '/'
      });
    });
});
