/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="flop/flop.controller.ts"/>
module flop {
  'use strict';

  angular.module('flop', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngMaterial'])
    .controller('FlopCtrl', FlopCtrl)

  .config(function ($routeProvider: ng.route.IRouteProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'app/flop/flop.html',
        controller: 'FlopCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
}
