/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.controller.ts" />

module flop {
  'use strict';

  angular.module('flop', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngMaterial'])
    .controller('MainCtrl', MainCtrl)
    .controller('NavbarCtrl', NavbarCtrl)
    .controller('FlopCtrl', FlopCtrl)

  .config(function ($routeProvider: ng.route.IRouteProvider) {
    $routeProvider
      .when('/none', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
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
