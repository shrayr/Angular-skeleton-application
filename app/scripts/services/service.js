/**
 * Created by hrayr on 9/17/15.
 */

/*
 * Module: capthca
 */
angular.module('appApp')
  .factory('ContactMessagesFactory', ['$resource','generalConfig',  function ($resource, generalConfig) {
    var urlBase = generalConfig['apiUrl'];

  return $resource(urlBase + '/support', {}, {
    query: { method: 'GET', isArray:false },
    create: { method: 'POST' }
  });
}]);

