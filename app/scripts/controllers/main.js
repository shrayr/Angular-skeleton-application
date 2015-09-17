'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MainCtrl', function ($scope) {

    $scope.setActiveMenu = function (menu) {
      console.log("menu")
      $(".menu").removeClass("active");
      $("#" + menu).addClass("active");
    };

  }).controller('ContactCtrl', function ($scope,ContactMessagesFactory,toastr) {
    $scope.createContactMessage = function () {

      ContactMessagesFactory.create($scope.formData);
      toastr.info("Thank you for your message!");

    };

  });
