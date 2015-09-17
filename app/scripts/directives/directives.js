'use strict';

var appDirectives = angular.module('appDirectives', []);

// validate password: numeric, uppercase, lowercase
appDirectives.directive('validatePasswordCharacters', function() {
  var REQUIRED_PATTERNS = [
    /\d+/,    //numeric values
    /[a-z]+/, //lowercase values
    /[A-Z]+/, //uppercase values
    // /\W+/,    //special characters
    /^\S+$/   //no whitespace allowed
  ];
  return {
    require : 'ngModel',
    link : function($scope, element, attrs, ngModel) {
      ngModel.$validators.passwordCharacters = function(value) {
        var status = true;
        angular.forEach(REQUIRED_PATTERNS, function(pattern) {
          status = status && pattern.test(value);
        });
        return status;
      };
    }
  };
});

// validate email address by api link
appDirectives.directive('emailAvailableValidator', ['$http','$q', function($http, $q) {
  return {
    require : 'ngModel',
    link : function($scope, element, attrs, ngModel) {
      ngModel.$asyncValidators.emailAvailable = function(email) {
        var deferred = $q.defer();
        return $http.post('/api/check-email', {'email':email}).then(function(response) {
          if(response.data.user == 'found'){
            deferred.reject();
          } else {
            deferred.resolve();
          }
          return deferred.promise;
        });
      };
    }
  }
}])
