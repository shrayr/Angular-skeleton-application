'use strict';

(function() {
    var as = angular.module('appConfig', []);
  var host = location.host;
    var configData = {
        'generalConfig': {
            'appName': 'App name here',
            'appVersion': '0.1',
            'apiUrl': 'http://'+host+'/api'
        }
    };

    angular.forEach(configData,function(key,value) {
        as.constant(value,key);
    });

}());
