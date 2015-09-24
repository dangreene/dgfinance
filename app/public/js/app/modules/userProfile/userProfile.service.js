import * as angular from 'angular';

function userProfileService($http) {
  var getUser = function(userId) {
    // return $http.get('/api/user/' + userId).then(function(response) {
    //   return response && response.data;
    // });
    return {
      firstName: 'first',
      lastName: 'last',
      userId: 'test'
    };
  };

  return {
    getUser: getUser
  };
}

var serviceModule = angular.module('userProfile.userProfileService', [])
  .factory('UserProfileService', ['$http', userProfileService]);

export var userProfileServiceModule = serviceModule;
